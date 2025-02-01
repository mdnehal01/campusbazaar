// Products Image is uploaded to Google Cloud 

"use server"

import { Storage } from '@google-cloud/storage';

export const UploadProductImage = async (form: FormData) => {
    try {
        const file = form.get('file') as File;
        if (!file) throw new Error("No file provided");
        if(file.size < 1) throw new Error("File is Empty");

        const buffer = await file.arrayBuffer();
        const storage = new Storage(); 

        await storage.bucket("campus-bazaar").file(file.name).save(Buffer.from(buffer)); 

        return true
    } catch (error) {
        console.error(error)
        return false
    }
}