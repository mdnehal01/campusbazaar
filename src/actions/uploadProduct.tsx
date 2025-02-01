"use server"
import { Storage } from "@google-cloud/storage";
import toast from "react-hot-toast";


const projectId = 'campus-bazaar-449007';

export const UploadProduct = async (form: FormData) => {
    try {
        const category = form.get('category');
        const size = form.get('size');
        const brand = form.get('brand');
        const file = form.get('file') as File;
        const user = "inshaxkhan";
        ``
    
        const buffer = await file.arrayBuffer();
        const storage = new Storage(); 
        
        await storage.bucket("campus-bazaar").file(file.name).save(Buffer.from(buffer)); 
    
        toast.success(`The category is ${category} and size is ${size} also brand is ${brand} and file is ${file}`)
    } catch (error) {
        console.log(error)
    }
}