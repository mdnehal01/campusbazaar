import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || "", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "");

const getAllUserDetails = async () => {
    const { data, error } = await supabase
        .from('users')
        .select('*')

        if (error) {
            throw new Error(error.message);
        }
        console.log(data);
        return data;
}

export default getAllUserDetails;