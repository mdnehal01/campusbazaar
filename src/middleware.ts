// createMiddlewareClient is used to access the page only if user is authenticated or logged in 
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req:NextRequest){
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({
        req,
        res
    });

    const {
        data: {
            session
        }
    } = await supabase.auth.getSession();
    return res;
} 