"use client"
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

export const getAllProducts = async () => {
   
    // toast.success(userId!);
    const { data, error } = await supabase
        .from('products')
        .select("*")


    if(data){
        console.log(data)
        return data;
    }
    if(error){
        toast.error(error.message);
    }
}