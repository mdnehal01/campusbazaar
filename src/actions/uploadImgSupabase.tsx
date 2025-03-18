"use client"
import { supabase } from "@/lib/supabase"
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const uploadImgSupabase = async (file:File) => {
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData?.user) {
        toast.error("User not authenticated");
        return;
    }

    const userId = userData.user.id;
    const filePath = `${userId}/${file.name}`;

    const {data, error} = await supabase.storage
        .from("product-image")
        .upload(filePath, file)

    if(data){
        toast.success("Uploaded")
        redirect("/my-uploads")
    }else{
        toast.error(error.message)
    }
}

export default uploadImgSupabase;