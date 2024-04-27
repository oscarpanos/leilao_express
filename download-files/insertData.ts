import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import iconv from 'iconv-lite';
import prisma from '../prisma/db/db';
import { Prisma } from '@prisma/client'

const results: { origin_id: any; origin: string; state: any; city: any; district: any; address: any; price: any; evaluation_price: any; discont: any; description: any; modality: any; }[] = []
async function processFile(file: string) {
    return new Promise((resolve, reject) => {
        const stream = fs.createReadStream(file);
        const decodeStream = iconv.decodeStream('iso-8859-1');
        stream.pipe(decodeStream);

        let headerCount = 0;
        decodeStream
            .pipe(csv({ separator: ';' }))
            .on('data', async (row) => {
                headerCount++;
                if (headerCount > 2 && row["_0"] && row["_1"] && row["_2"] && row["_3"] && row["_4"] && row["_5"] && row["_6"] && row["_7"] && row["_8"] && row["_9"]) {
                    let property = {
                        origin_id: row["_0"].trim(),
                        origin: "Caixa Econômica Federal",
                        state: row["_1"],
                        city: row["_2"],
                        district: row["_3"],
                        address: row["_4"],
                        price: row["_5"],
                        evaluation_price: row["_6"],
                        discont: row["_7"],
                        description: row["_8"],
                        modality: row["_9"],
                    }
                    results.push(property);
                }
            })
            .on('end', async () => {
                await prisma.property.createMany({
                    data: results
                })
            })
            .on('error', reject);
    });
}

fs.readdir('./downloads', async (err, files) => {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    }

    const promises = files.map((file) => {
        const filePath = path.join('./downloads', file);
        return processFile(filePath);
    });

    await Promise.all(promises);
});
