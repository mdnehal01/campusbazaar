import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

export const getAllProducts = async () => {

    // toast.success(userId!);
    const { data, error } = await supabase
        .from('products')
        .select("*")
        .eq("listed",true)


    if(data){
        console.log(data)
        return data;
    }
    if(error){
        toast.error(error.message);
    }
}


export const getProductsHightoLow = async () => {
    const { data, error } = await supabase
        .from('products')
        .select("*")
        .eq("listed",true)
        .order('price', { ascending: false })

    if(error){
        toast.error(error.message);
    }
    const sortedData = data?.sort((a, b) => Number(b.price) - Number(a.price));
    console.log(sortedData);
    return sortedData;
}

export const getProductsLowToHigh = async () => {
    const { data, error } = await supabase
        .from('products')
        .select("*")
        .eq("listed",true)
        .order('price', { ascending: true })

    if(error){
        toast.error(error.message);
    }
    const sortedData = data?.sort((a, b) => Number(a.price) - Number(b.price));
    console.log(sortedData);
    return sortedData;
}