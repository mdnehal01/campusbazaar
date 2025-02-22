"use server"
import { Storage } from "@google-cloud/storage";

const projectId = 'campus-bazaar-449007';

export const UploadProduct = async (form: FormData) => {
    try {
        const category = form.get('category');
        const size = form.get('size');
        const brand = form.get('brand');
        const file = form.get('file') as File;

        // DONE: user will be called the username who is logged in or userID who is uploading 
        const userId = form.get('userId');

        const finalFileName = `uid-${userId}/${category}/${file.name}`

        const imagePath = `https://storage.googleapis.com/campus-bazaar/${finalFileName}`
    
        const buffer = await file.arrayBuffer();
        const storage = new Storage(); 
        
        await storage.bucket(process.env.BUCKET_NAME!).file(finalFileName).save(Buffer.from(buffer)); 
    
        console.log(`The category is ${category} and size is ${size} also brand is ${brand} and file is ${file} and path is ${imagePath}`)
    } catch (error) {
        console.log(error)
    }
}