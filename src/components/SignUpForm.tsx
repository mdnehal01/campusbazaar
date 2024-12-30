"use client"
import signupWithPassword from '@/actions/signupWithPassword';
import React, { useState } from 'react'

const SignUpForm = () => {

    // TODO:Insha: go to login/page.tsx and jaise jaise use state wala waha hua hai mtlb ki form me data change karo to state bhi change hogi waise karo
    // Chahe to hum kar le lekin tum apne se karogi to tumhe bhi cheeze aayegi 
    
    const [name, setName]= useState("");
    const handleChangeName=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value);
    };

    const [email, setEmail]=useState("");
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const [password, setPassword]=useState("");
    const handleChangePassword=(event: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(event.target.value);
    };

    const [confirmpass, setConfirmpass]=useState("");
    const handleChangeConfirmpass=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setConfirmpass(event.target.value);
    };

    const [depart, setDepart]=useState("");
    const handleChangeDepart=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setDepart(event.target.value);
    };

    const [year, setYear]=useState("");
    const handleChangeYear=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setYear(event.target.value);
    };

    const handleSignup = () => {
        // event.preventDefault(); // Prevent form reload (GPT told)
        // TODO: Handle Signup
        if(password!==confirmpass)   alert("Confirm Password does NOT match Password!!!");
        else{
            signupWithPassword(email, password);
            alert(`Welcome ${password}! ${email}`);
        } 
    }
    
    return (
        <form onSubmit={handleSignup} method='post'>
            <label className="text-slate-500 text-[14px]">Full Name</label>   <br/>
            <input name="name" value={name} onChange={handleChangeName} required type="text" className="bg-slate-100 text-slate-500 w-full border-2 rounded-3xl border-slate-300"/>  <br/>
            
            <label className="text-slate-500 text-[14px]">Email</label>   <br/>
            <input name="email" value={email} onChange={handleChangeEmail} required type="email" className="bg-slate-100  text-slate-500 w-full border-2 rounded-3xl border-slate-300"/>  <br/>
            
            <label className="text-slate-500 text-[14px]">Password</label>   <br/>
            <input name="password" value={password} onChange={handleChangePassword} required type="password" className="bg-slate-100  text-slate-500 w-full border-2 rounded-3xl border-slate-300"/>  <br/>
            
            <label className="text-slate-500 text-[14px]">Confirm Password</label>   <br/>
            <input name="confirmpass" value={confirmpass} onChange={handleChangeConfirmpass} required type="password" className="bg-slate-100  text-slate-500 w-full border-2 rounded-3xl border-slate-300"/>  <br/>
            
            <label className="text-slate-500 text-[14px]">Department</label>  
            <input name="depart" value={depart} onChange={handleChangeDepart}  className="bg-slate-100  text-slate-500 w-full border-2 rounded-3xl border-slate-300"/>  <br/>
            
            <label className="text-slate-500 text-[14px]">Year of Graduation</label>  
            <input name="year" value={year} onChange={handleChangeYear}  type="number" className="bg-slate-100  text-slate-500 w-full border-2 rounded-3xl border-slate-300"/>  <br/>
                 
            <br/>
            <input type="submit" name="submit" required className="bg-blue-500 h-8 w-40 text-white border-2 rounded-3xl border-slate-300"/>  <br/>
        </form>
  )
}

export default SignUpForm