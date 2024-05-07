import fs from "fs";
import path from "path";

import csv from "csv-parser";
import iconv from "iconv-lite";
import { Prisma } from "@prisma/client";

import prisma from "../../prisma/db/db";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let totalErrors = 0;

async function processFile(file: string) {
  const results: Prisma.PropertyUncheckedCreateInput[] = [];
  const state = file.split("_").at(-1)?.split(".")[0];

  const expectedColumnCount: number = 11;

  return new Promise((resolve, reject) => {
    const start = performance.now();
    const stream = fs.createReadStream(file, { autoClose: true });
    const decodeStream = iconv.decodeStream("iso-8859-1");
    stream.pipe(decodeStream);

    let errors: number = 0;
    let rowCount: number = 0;

    decodeStream
      .pipe(csv({ separator: ";" }))
      .on("data", async (row) => {
        rowCount++;
        if (rowCount <= 4) return;
        if (Object.values(row).length !== expectedColumnCount) {
          //   console.error(`${state}: skipping row with incorrect format.`);
          totalErrors++;
          errors++;
          return;
        }

        results.push({
          origin_id: row["_0"].trim(),
          origin: "Caixa Econômica Federal",
          state: row["_1"].trim(),
          city: row["_2"].trim(),
          district: row["_3"].trim(),
          address: row["_4"].trim(),
          price: row["_5"].replaceAll(".", "").replace(",", "."),
          evaluation_price: row["_6"].replaceAll(".", "").replace(",", "."),
          discount: row["_7"],
          description: row["_8"].trim(),
          type: row["_8"].split(",")[0].trim(),
          modality: row["_9"].trim(),
          url: row["_10"].trim(),
          active: true,
        });
      })
      .on("end", async () => {
        const elapsed = Math.round(performance.now() - start);
        const errorPct = ((100 * errors) / rowCount).toFixed(2);

        console.log(
          [
            `${state}: finished in ${elapsed}ms.`,
            `\tEntries: ${rowCount}`,
            `\tErrors: ${errors} - ${errorPct}%`,
          ].join("\n")
        );
        await prisma.property.createMany({
          data: results,
          skipDuplicates: true,
        });

        return resolve;
      })
      .on("error", reject);
  });
}

fs.readdir("./downloads", async (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  await prisma.property.updateMany({
    where: {
      origin: "Caixa Econômica Federal",
    },
    data: {
      active: false,
    },
  });

  const promises = files.map((file) => {
    const filePath = path.join("./downloads", file);
    return processFile(filePath);
  });

  await Promise.all(promises);
});
