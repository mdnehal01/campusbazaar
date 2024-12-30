'use client'

import loginWithPassword from "@/actions/loginWithPassword";
import { BananaIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Login() {

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
            Email
            <input type="email" name="email" value={email} onChange={handleChangeEmail} />
            <br />
            Password
            <input type="password" name="password" value={password} onChange={handleChangePass} />
            <br />
            <button onClick={login}>Login</button>

            Don't have an account? <Link href="/signup" className="text-blue-500">Signup</Link>
        </div>
    )
}



