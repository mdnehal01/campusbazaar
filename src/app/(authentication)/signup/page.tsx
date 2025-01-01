import React from 'react'
import SignUpForm from '@/components/SignUpForm';

function Signup() {

    return (
    <div className="main h-screen flex">
        <div className="relative left h-full w-[70%] bg-blue-50 bg-center bg-contain" style={{backgroundImage:`url(/images/boo-signup.png)` , opacity:0.1}}></div>
        <div className="right h-full w-[30%] bg-blue-900"></div>
        <div className="box flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[60%] w-[50%] bg-transparent border-white border-8 rounded-3xl ">
            <div className="box-left h-full w-[40%] bg-transparent bg-center bg-cover rounded-l-3xl" style={{backgroundImage:`url('/images/boo-signup.png')`}}></div>
            <div className="box-right h-full w-[61%] bg-white">
                <div className="main-content mx-[20%] my-[5%] h-[80%]">
                    <h1 className="text-2xl text-center font-semibold text-slate-700">Sign Up for Sustainability</h1>
                    <h2 className="text-center text-slate-500 text-sm">By Buying & Selling old goods, you give them <br/> a new life, And reduce wastage</h2>
                    <br/>
                    <SignUpForm/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup