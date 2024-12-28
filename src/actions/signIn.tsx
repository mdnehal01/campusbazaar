"use server"

import { createClient } from "@/lib/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signIn = async (formData: FormData) => {
    const supabase = createClient();

    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    const { data, error } = supabase()
}