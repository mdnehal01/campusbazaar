"use client"
import React from 'react'

const SignUpForm = () => {

    // TODO:Insha: go to login/page.tsx and jaise jaise use state wala waha hua hai mtlb ki form me data change karo to state bhi change hogi waise karo
    // Chahe to hum kar le lekin tum apne se karogi to tumhe bhi cheeze aayegi 
    
    const handleSignup = () => {
        // TODO: Handle Signup
    }

    return (
        <form onSubmit={() => handleSignup}>
            <label className="text-slate-500 text-[14px]">Full Name</label>   <br/>
            <input name="name" required className="bg-slate-100 text-slate-500 w-full border-2 rounded-3xl border-slate-300"/>  <br/>
            <label className="text-slate-500 text-[14px]">Email</label>   <br/>
            <input name="name" required className="bg-slate-100  text-slate-500 w-full border-2 rounded-3xl border-slate-300"/>  <br/>
            <label className="text-slate-500 text-[14px]">Password</label>   <br/>
            <input name="name" required className="bg-slate-100  text-slate-500 w-full border-2 rounded-3xl border-slate-300"/>  <br/>
            <label className="text-slate-500 text-[14px]">Confirm Password</label>   <br/>
            <input name="name" required className="bg-slate-100  text-slate-500 w-full border-2 rounded-3xl border-slate-300"/>  <br/>
                        
            <br/>
            <input type="submit" name="name" required className="bg-blue-500 h-8 w-40 text-white border-2 rounded-3xl border-slate-300"/>  <br/>
        </form>
  )
}

export default SignUpForm