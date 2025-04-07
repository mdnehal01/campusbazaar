import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

// TODO: Insha: Add and extra parameter so that path is

const loginWithPassword = async (email: string, password: string, router: any, redirectTo: string) => {
  try {
    // Check if the email exists
    const { data: userExists, error: emailCheckError } = await supabase
      .from("users") // Replace "users" with the actual table name storing user information
      .select("email")
      .eq("email", email);

    if (emailCheckError) {
      console.error("Error checking email:", emailCheckError.message);
      toast.error("An error occurred while verifying the email.");
      return;
    }

    if (!userExists || userExists.length === 0) {
      toast.error("Email does not exist.");
      return;
    }

    // Attempt login if the email exists
    const { data: dataUser, error: loginError } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (loginError) {
      if (loginError.message === "Invalid login credentials") {
        toast.error("Either email or password is wrong");
      } else {
        toast.error("Login failed: " + loginError.message);
      }
      return;
    }

    // If login is successful
    toast.success("Logged in successfully!");
    router.push(redirectTo || "/"); // Redirect to the desired path or default to home
  } catch (error) {
    console.error("Unexpected error:", error);
    toast.error("An unexpected error occurred.");
  }
};

export default loginWithPassword;
