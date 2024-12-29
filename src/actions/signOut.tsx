import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

export default async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
        toast.success("Signed out")
    } else {
        toast.error(error.message);
        console.error("Error signing out:", error);
    }
}