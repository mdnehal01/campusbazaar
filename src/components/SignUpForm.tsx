"use client"
import signupWithPassword from '@/actions/signupWithPassword';
import React, { useState } from 'react'
import Link from 'next/link';
import toast from 'react-hot-toast';

// interface SignUpFormProps {
//     message?:string;
// }

// TODO: Make use of this card
import PasswordValidationCard from './PasswordValidationCard';

const SignUpForm= () => {

    // TODO:Insha: go to login/page.tsx and jaise jaise use state wala waha hua hai mtlb ki form me data change karo to state bhi change hogi waise karo
    // Chahe to hum kar le lekin tum apne se karogi to tumhe bhi cheeze aayegi 
    const [message, setMessage] = useState("");

    const [name, setName]= useState("");
    const handleChangeName=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value);
    };

    const [email, setEmail]=useState("");
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    
    const [phone, setPhone] = useState(""); 

    const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
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

    const [college, setCollege] = useState("");
    const handleChangeCollege = (event:React.ChangeEvent<HTMLInputElement>) => {
        setCollege(event.target.value);
    }



    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        // event.preventDefault(); // Prevent form reload (GPT told)
        // DONE: Handle Signup
        event.preventDefault();
        if(password!==confirmpass)   toast.error("Confirm Password does NOT match Password!!!");
        else{
            setMessage(await signupWithPassword(email, password, name, depart, college, year, phone));
            // alert(`Welcome ${password}! ${email}`);
        } 
    }
    
    return (
        // <form onSubmit={handleSignup} method='post'>
        <form method='post' onSubmit={handleSignup}>
            <label className="text-slate-500 text-[14px]">Full Name</label>   <br/>
            <input name="name" value={name} onChange={handleChangeName} required type="text" className="bg-slate-100 text-slate-500 w-full border-2 rounded-lg border-slate-300"/>  <br/>
            
            <label className="text-slate-500 text-[14px]">College Name</label>  
            <input name="college" value={college} onChange={handleChangeCollege}  className="bg-slate-100  text-slate-500 w-full border-2 rounded-lg border-slate-300"/>  <br/>
            
            <div className='flex gap-x-[6%]'>
                <div className='w-[47%]'>
                    <label className="text-slate-500 text-[14px]">Department</label>  
                    <input name="depart" value={depart} onChange={handleChangeDepart}  className="bg-slate-100  text-slate-500 w-full border-2 rounded-lg border-slate-300"/>  <br/>
                </div>
                <div className='w-[47%]'>
                    <label className="text-slate-500 text-[14px]">Year of Graduation</label>  
                    <input name="year" value={year} onChange={handleChangeYear}  type="number" className="bg-slate-100  text-slate-500 w-full border-2 rounded-lg border-slate-300"/>  <br/>
                </div>
            </div>

            <label className="text-slate-500 text-[14px]">Phone No.</label>  
            <input name="phone" min={0} step={1} type='text' value={phone} onChange={handleChangePhone}  className="bg-slate-100  text-slate-500 w-full border-2 rounded-lg border-slate-300"/>  <br/>
            
            <label className="text-slate-500 text-[14px]">Email</label>   <br/>
            <input name="email" value={email} onChange={handleChangeEmail} required type="email" className="bg-slate-100  text-slate-500 w-full border-2 rounded-lg border-slate-300"/>  <br/>

            <div className='flex gap-[6%]'>
                <div className='w-[47%]'>
                    <label className="text-slate-500 text-[14px]">Password</label>   <br/>
                    <input name="password" value={password} onChange={handleChangePassword} required type="password" className="bg-slate-100  text-slate-500 w-full border-2 rounded-lg border-slate-300"/>  <br/>
                </div>
                <div className='w-[47%]'>
                    <label className="text-slate-500 text-[14px]">Confirm Password</label>   <br/>
                    <input name="confirmpass" value={confirmpass} onChange={handleChangeConfirmpass} required type="password" className="bg-slate-100  text-slate-500 w-full border-2 rounded-lg border-slate-300"/>  <br/>
                </div>
            </div>

            <br/>
            <input type="submit" name="submit" required className="cursor-pointer w-full bg-blue-400 hover:bg-blue-500 h-8 text-white border-2 rounded-lg border-slate-300"/>  <br/>
            
            <h2 className="text-slate-500 text-[14px] pt-3"> Already a User?   <Link href="/login" className="text-blue-500">Login</Link>  </h2>

            {message && 
            <div className='text-red-500'>
                {message}    
            </div>
            }
            {/* {message} */}
        </form>
  )
}

export default SignUpForm