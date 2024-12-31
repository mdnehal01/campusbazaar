import loginWithPassword from '@/actions/loginWithPassword';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import InputType1 from './customs/inputType1';
import Profile from '@/app/profile/page';
import { Carrot } from 'lucide-react';

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleChangePass = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const router = useRouter();

    const login = async () => {
        loginWithPassword(email, password, router);
    } 


  return (
    <div>

        <h2 className='text-slate-500 text-[14px]'> Email </h2>
        <input 
            className="bg-slate-50  text-slate-500 w-full border-2 rounded-xl border-blue-200"
            type="email" name="email" value={email} onChange={handleChangeEmail} />
        <br />
        
        <h2 className='text-slate-500 text-[14px]'>Password </h2>
        <input 
            className="bg-slate-50  text-slate-500 w-full border-2 rounded-xl border-blue-200"
            type="password" name="password" value={password} onChange={handleChangePass} />
        <br />

        <br/>
        <button 
            onClick={login}
            className="bg-blue-500 h-8 w-40 text-white border-2 rounded-3xl border-slate-300">
            Login
        </button>

        <br />
        <br />
        <h2 className="text-slate-500 text-[14px]"> Don't have an account?   <Link href="/signup" className="text-blue-500">Signup</Link>  </h2>
        
        

    </div>
  )
}

export default LoginForm