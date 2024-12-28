import { supabase } from "@/lib/supabase";

export default async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
        window.location.reload(); // Refresh the page after signing out
    } else {
        console.error("Error signing out:", error);
    }
}