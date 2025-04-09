import { Products } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import toast from "react-hot-toast";

const useLoadImage = (product:Products) => {
    const supabaseClient = useSupabaseClient();

    if(!product) {
        return null;
    }

    const { data: imageData } = supabaseClient
        .storage
        .from('product-image')
        .getPublicUrl(product.image_urls.primary[0]);


    return imageData.publicUrl;
}

export default useLoadImage;