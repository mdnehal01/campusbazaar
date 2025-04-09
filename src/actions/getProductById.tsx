import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

const getProductById = async (productId: string) => {
    if(!productId) return;
    const{data, error} = await supabase
        .from('products')
        .select('*')
        .eq('product_id',productId)
        .maybeSingle()

    if(error){
        console.log(error.message)
        return;
    }else{
        return data;
    }
}
export default getProductById;