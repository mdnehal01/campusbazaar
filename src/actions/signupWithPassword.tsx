import { supabase } from "@/lib/supabase";

const signupWithPassword = async (email:string, password:string) => {
    try {
        const { data, error } = await supabase
            .auth
            .signUp({
                email: email,
                password: password,
                options: {
                    // TODO: After deployment redirect to login 
                    emailRedirectTo: 'http://localhost:3000/login'
                }
            })
        
        if(data) {
            console.log(data); 
            window.location.href="/login"
            // TODO:Insha: Insert email userid college etc
        }
        
    } catch (error) {
         
    }
}

export default signupWithPassword