"use client"
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

export const getAllProductsExceptUser = async () => {
    const { data: { 
        session 
    } } = await supabase.auth.getSession();

    // toast.success(userId!);
    const { data, error } = await supabase
        .from('products')
        .select("*")
        .eq('listed', true)
        .neq('seller', session?.user.id);


    if(data){
        console.log(data)
        return data;
    }
    if(error){
        toast.error(error.message);
    }
}