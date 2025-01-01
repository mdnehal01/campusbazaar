import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";


// TODO: add name, college name etc. in arguments
const signupWithPassword = async (email:string, password:string, name:string, depart:string, college:string, year:string, phone:string) => {

    let message = "";

    const {data:userMail} = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single()

        if(userMail!=null){
            message = "User already exists"
            toast.error(message)
            return message
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
                message = String(error.message)
                toast.error(message)
                return message;
                // toast.error(error.code?.toString())
            }else{
                // Inserting user details in the user table
                const userId = data.user?.id;

                const { data: updateData, error: updateError } = await supabase
                .from('users')
                .insert({
                  user_id: userId,
                  name: name,
                  email: email,
                  phone_number: phone,
                  college: college,
                  department:depart,
                  year:year,
                  recent_searches: []
                });
              
              if (updateError) {
                message = String(updateError.message)
                toast.error(message)
                return message
              }else{
                message = `Verification link sent to email: ${data.user?.email}`
                toast.success(message);
                return message
              }
                    
            }
        }
}

export default signupWithPassword