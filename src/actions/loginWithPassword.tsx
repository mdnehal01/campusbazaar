import { supabase } from "@/lib/supabase";

const loginWithPassword = async (email:string, password:string) => {
    try {
        const { data:dataUser, error } = await supabase
            .auth
            .signInWithPassword({
                email: email,
                password: password,
            })
        
        if(dataUser) {
            console.log(dataUser);
            window.location.href="/"
        }
        
    } catch (error) {
        console.error(error);
    }
}

export default loginWithPassword;