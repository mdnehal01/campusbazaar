import { Products } from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const getCartProducts = async (): Promise<Products[]> => {
    const supabase = createServerComponentClient({
        cookies:cookies
    });

    const {
        data: {
            session
        }
    } = await supabase.auth.getSession();

    const { data, error } = await supabase
        .from('cart_products')
        .select('*, products(*)')
        .eq('user_id', session?.user?.id)
        .order('created_at', { ascending:false });

        if (error) {
            console.log(error);
            return [];
        }

        if(!data){
            return [];
        }

        //@ts-ignore
        return data.map((item) => ({
            ...item.products
        }))
};

export default getCartProducts;