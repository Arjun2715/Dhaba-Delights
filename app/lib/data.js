"use server"

import { promises as fs } from 'fs';

export async function requireContent() {
    const res = await fs.readFile(process.cwd() + '/app/data.json', 'utf8')

    return JSON.parse(res)
}

export async function getProducts() {
    const {
        products,
        
    } = await requireContent();
//    console.log(products);
    return products
}
 