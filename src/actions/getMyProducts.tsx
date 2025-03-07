"use client"
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

export const getMyProducts = async () => {
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData?.user) {
        toast.error("User not found!");
        return;
    }

    const userId = userData.user.id;

    // toast.success(userId!);
    const { data, error } = await supabase
        .from('products')
        .select("*")
        .eq("seller", userId);


    if(data){
        console.log(data)
        return data;
    }
    if(error){
        toast.error(error.message);
        console.error(error)
    }
}