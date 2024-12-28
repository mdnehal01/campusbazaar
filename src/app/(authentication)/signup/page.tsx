import React from 'react'
import { supabase } from '@/lib/supabase';

function Signup() {
  return (
    <div className="main h-screen flex">
        <div className="left h-full w-[70%] bg-blue-50"></div>
        <div className="right h-full w-[30%] bg-blue-900"></div>
        <div className="box flex absolute top-[200px] left-[400px] h-[60%] w-[50%] bg-transparent border-white border-8 rounded-3xl ">
            <div className="box-left h-full w-[40%] bg-transparent"></div>
            <div className="box-right h-full w-[61%] bg-white">
                <div className="main-content mx-[20%] my-[10%] h-[80%]">
                    <h1 className="text-2xl text-center font-semibold text-slate-700">Sign Up for Sustainability</h1>
                    <h2 className="text-center text-slate-500 text-sm">By Buying & Selling old goods, you give them <br/> a new life, And reduce wastage</h2>
                    <br/>
                    <form>
                        <label className="text-slate-500 text-[14px]">Full Name</label>   <br/>
                        <input name="name" required className="bg-slate-100 text-slate-500 w-full border-2 rounded-3xl border-slate-300"/>  <br/>
                        <label className="text-slate-500 text-[14px]">Email</label>   <br/>
                        <input name="name" required className="bg-slate-100  text-slate-500 w-full border-2 rounded-3xl border-slate-300"/>  <br/>
                        <label className="text-slate-500 text-[14px]">Password</label>   <br/>
                        <input name="name" required className="bg-slate-100  text-slate-500 w-full border-2 rounded-3xl border-slate-300"/>  <br/>
                        <label className="text-slate-500 text-[14px]">Confirm Password</label>   <br/>
                        <input name="name" required className="bg-slate-100  text-slate-500 w-full border-2 rounded-3xl border-slate-300"/>  <br/>
                        
                        <br/>
                        <input type="submit" name="name" required className="bg-blue-500 h-8 w-40 text-white w-full border-2 rounded-3xl border-slate-300"/>  <br/>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup