"use client"
import { supabase } from "@/lib/supabase";
import { uploadToGoogle } from "./uploadToGoogle";
import { Products } from "@/types";
import toast from "react-hot-toast";
import uploadImgSupabase from "./uploadImgSupabase";
import uniqid from "uniqid";
import { redirect } from "next/navigation";


export const UploadProduct = async (form: FormData) => {
    try {

        const user = await supabase.auth.getSession()

        console.log(user);

        const category = form.get('category');
        const size = form.get('size');
        const brand = form.get('brand');
        const condition = form.get('condition');
        const title = form.get('title');
        const price = form.get('price');
        const description = form.get('description');
        const defect = form.get('defect');
        const file = form.get('file') as File;

        // TODO: Add for file 2 and file 3 any numbers of files

        // const file2 = form.get('file2') as File | null;

        console.log(form)
        // DONE: user will be called the username who is logged in or userID who is uploading 
        const userId = form.get('userId');
        const uniqueID = uniqid();
        const finalFileName = `uid-${userId}/${category}/primary-${file.name}`

        const imagePathPrimary = encodeURI(`https://storage.googleapis.com/campus-bazaar/${finalFileName}`)
        const imagePathSecLeft = encodeURI(`https://storage.googleapis.com/campus-bazaar/left-${finalFileName}`)
        const imagePathSecRight = encodeURI(`https://storage.googleapis.com/campus-bazaar/right-${finalFileName}`)
        const imagePathSecBack = encodeURI(`https://storage.googleapis.com/campus-bazaar/back-${finalFileName}`)

        toast.success("added"+price);

        // FIRST UPLOAD FILE TO SUPABASE
        const {data:imgData, error:imgError} = await supabase.storage
        .from("product-image")
        .upload(`${userId}/${file.name}-${uniqueID}`, file, {
            cacheControl: '3600',
            upsert: false
        });


        if(!imgError){
            const {data, error} = await supabase
            .from('products')
            .insert({
                'title':title, 
                'brand':brand, 
                'price':price, 
                'description':description, 
                'condition': condition, 
                'image_urls':{primary: imgData?.fullPath, secondaryLeft:"NOT RIGHT NOW", secondaryRight:imagePathSecRight, secondaryBack:imagePathSecBack}, 
                'size':size,
                'defect': defect, 
                'category':category,
                'seller':userId
            }).single();

        if(error){
            console.error("error inserting "+error.message);
        }else{
            toast.success("Uploaded")
            redirect("/my-uploads")
        }
        }else{
            toast.error(imgError.message);
        }

    } catch (error) {
        console.log(error)
    }
}