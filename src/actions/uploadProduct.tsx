"use client"
import { supabase } from "@/lib/supabase";
import { uploadToGoogle } from "./uploadToGoogle";
import { Products } from "@/types";


export const UploadProduct = async (form: FormData) => {
    try {

        const user = await supabase.auth.getSession()

        console.log(user);

        const category = form.get('category');
        const size = form.get('size');
        const brand = form.get('brand');
        const condition = form.get('condition');
        const file = form.get('file') as File;
        const title = form.get('title');
        const price = form.get('price');
        const description = form.get('description');
        const defect = form.get('defect');

        console.log(form)
        // DONE: user will be called the username who is logged in or userID who is uploading 
        const userId = form.get('userId');

        const finalFileName = `uid-${userId}/${category}/primary-${file.name}`

        const imagePathPrimary = encodeURI(`https://storage.googleapis.com/campus-bazaar/${finalFileName}`)
        const imagePathSecLeft = encodeURI(`https://storage.googleapis.com/campus-bazaar/left-${finalFileName}`)
        const imagePathSecRight = encodeURI(`https://storage.googleapis.com/campus-bazaar/right-${finalFileName}`)
        const imagePathSecBack = encodeURI(`https://storage.googleapis.com/campus-bazaar/back-${finalFileName}`)

        const {data, error} = await supabase
            .from('products')
            .insert({
                'title':title, 
                'brand':brand, 
                'price':price, 
                'description':description, 
                'condition': condition, 
                'image_urls':{primary: imagePathPrimary, secondaryLeft:imagePathSecLeft, secondaryRight:imagePathSecRight, secondaryBack:imagePathSecBack}, 
                'size':size,
                'defect': defect, 
                'category':category,
                'seller':userId
            }).single();

        if(error){
            console.error("error inserting "+error.message);
        }else{
            uploadToGoogle(file, finalFileName);
        }

    } catch (error) {
        console.log(error)
    }
}