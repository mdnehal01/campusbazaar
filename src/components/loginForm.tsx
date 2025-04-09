"use client"
import loginWithPassword from '@/actions/loginWithPassword';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirectTo"); // Get redirectTo from query

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleChangePass = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const router = useRouter();

    const login = async () => {
        // @ts-expect-error
        loginWithPassword(email, password, router, redirectTo);
    } 


  return (
    <div>

        <h2 className='text-slate-500 text-[14px]'> Email </h2>
        <input 
            className="bg-slate-50  text-slate-500 w-full border-2 rounded-lg border-pink-200"
            type="email" name="email" value={email} onChange={handleChangeEmail} />
        <br />
        
        <h2 className='text-slate-500 text-[14px]'>Password </h2>
        <input 
            className="bg-slate-50  text-slate-500 w-full border-2 rounded-lg border-pink-200"
            type="password" name="password" value={password} onChange={handleChangePass} />
        <br />

        <br/>
        <button 
            onClick={login}
            className="bg-pink-500 h-8 w-40 text-white border-2 rounded-lg border-slate-300">
            Login
        </button>

        <br />
        <br />
        <h2 className="text-slate-500 text-[14px]"> Don&apos;t have an account?   <Link href="/signup" className="text-pink-500">Signup</Link>  </h2>
        
        

    </div>
  )
}

export default LoginForm