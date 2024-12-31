import { supabase } from "@/lib/supabase";


// TODO: add name, college name etc. in arguments
const signupWithPassword = async (email:string, password:string) => {
    console.log(email);
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