import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import iconv from 'iconv-lite';
import prisma from '../prisma/db/db';
import { Property as PrismaProperty } from '@prisma/client';

interface Property extends Omit<PrismaProperty, 'id'> {
    id?: PrismaProperty['id'];
}

let errorCount: number = 0

async function processFile(file: string) {
    let results: Property[] = [];
    let dateNow: Date = new Date();

    const expectedColumnCount: number = 11;
    let headerCount: number = 0;

    return new Promise((resolve, reject) => {
        const stream = fs.createReadStream(file);
        const decodeStream = iconv.decodeStream('iso-8859-1');
        stream.pipe(decodeStream);

        let stateErrorCount: number = 0;

        decodeStream
            .pipe(csv({ separator: ';' }))
            .on('data', async (row) => {
                const rowArray = Object.values(row);
                headerCount++;

                if (headerCount > 4 && rowArray.length === expectedColumnCount) {
                    let property: Property = {
                        origin_id: row["_0"].trim(),
                        origin: "Caixa Econômica Federal",
                        state: row["_1"],
                        city: row["_2"],
                        district: row["_3"],
                        address: row["_4"],
                        price: row["_5"].replaceAll(".", '').replace(",", "."),
                        evaluation_price: row["_6"].replaceAll(".", '').replace(",", "."),
                        discont: row["_7"],
                        description: row["_8"],
                        modality: row["_9"],
                        url: row["_10"]
                    }
                    results.push(property);
                } else {
                    errorCount++;
                    stateErrorCount++;
                    console.error(`Skipping row with incorrect format.`);
                }
            })
            .on('end', async () => {
                let execTime: number = new Date().getTime() - dateNow.getTime();

                console.log(`Finished processing ${file.slice(24, 26)} with ${stateErrorCount} erros in ${execTime}ms.`)
                console.error(`So far ${errorCount} lines were not inserted due to invalid CSV delimiter.`);

                await prisma.property.createMany({
                    data: results
                });

                return resolve;
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
