import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";


// TODO: add name, college name etc. in arguments
const signupWithPassword = async (email:string, password:string, name:string, depart:string, college:string, year:string) => {

    const {data:userMail} = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single()

        if(userMail!=null){
            return toast.error("User already exists")
        }else{
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
            
            if(error){
                toast.error(String(error.message));
            }else{
                toast.success(`Email sent for verification ${data.user?.email}`)
            }
        }

        // toast.error(String(userError?.message))
    

        // if(data.user?.email == email) {
        //     console.log(data.user?.email); 
        //     window.location.href="/login"
        //     // TODO:Insha: Insert email userid college etc
        // }
}

export default signupWithPassword