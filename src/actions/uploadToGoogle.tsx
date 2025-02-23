"use server"
import { Storage } from "@google-cloud/storage";
import { redirect } from "next/navigation";

export const uploadToGoogle = async (file:File, filename:string) => {
    const buffer = await file.arrayBuffer();
    const storage = new Storage();
    await storage.bucket(process.env.BUCKET_NAME!).file(filename).save(Buffer.from(buffer));
    redirect("/my-uploads")
}