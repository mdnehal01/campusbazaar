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

export const getProductsExceptUserLowToHigh = async () => {
    const { data: { 
        session 
    } } = await supabase.auth.getSession();
    const { data, error } = await supabase
        .from('products')
        .select("*")
        .eq("listed",true)
        .neq('seller', session?.user.id)
        .order('price', { ascending: true })

    if(error){
        toast.error(error.message);
    }
    const sortedData = data?.sort((a, b) => Number(a.price) - Number(b.price));
    console.log(sortedData);
    return sortedData;
}

export const getProductsExceptUserHightoLow = async () => {
    const { data: { 
        session 
    } } = await supabase.auth.getSession();
    const { data, error } = await supabase
        .from('products')
        .select("*")
        .eq("listed",true)
        .neq('seller', session?.user.id)
        .order('price', { ascending: false })

    if(error){
        toast.error(error.message);
    }
    const sortedData = data?.sort((a, b) => Number(b.price) - Number(a.price));
    console.log(sortedData);
    return sortedData;
}