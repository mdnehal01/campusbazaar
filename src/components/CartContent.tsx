"use client";
import { useUser } from '@/hooks/useUser';
import { useRouter } from 'next/navigation';
import React from 'react'

const CartContent = () => {
    const router=useRouter();

    const {user, userDetails, isLoading}=useUser();
  return (
    <div>
        <h1 className=''>Your Cart Looks Empty? </h1>
        
        {user ? <button className='bg-pink-900 border-2 rounded-xl text-white font-sans font-semibold py-2 px-3 hover:scale-105 transition-all duration-200 hover:border-pink-900 hover:bg-white hover:text-pink-900' onClick={()=>{
            router.push("/products");
        }}>Start Shopping</button>
           : <button className='bg-pink-900 border-2 rounded-xl text-white font-sans font-semibold py-2 px-3 hover:scale-105 transition-all duration-200 hover:border-pink-900 hover:bg-white hover:text-pink-900' onClick={()=>{
            router.push( "/login" );
           }}>
             Login 
             </button> 
        }
    </div>
  )
}

export default CartContent