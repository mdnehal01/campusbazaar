import React from 'react'
import SignUpForm from '@/components/SignUpForm';

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
                    <SignUpForm/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup