"use client";
import { useUser } from '@/hooks/useUser';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react'

const CartContent = () => {
    const router=useRouter();
    const pathname = usePathname(); // Get the current route path
    const {user, userDetails, isLoading}=useUser();
  return (
    <div className='flex p-28  rounded-t-3xl'>
          <div className='h-[200px] w-[350px] bg-yellow-200 p-5'>
            {/* add cart image */}
            
          </div>

          <div className='p-5  w-full'>
            {user ? <>
          <h1>It looks like your cart is empty</h1>
          <button className='bg-pink-900 border-2 rounded-xl text-white font-sans font-semibold py-2 px-3 hover:scale-105 transition-all duration-200 hover:border-pink-900 hover:bg-white hover:text-pink-900' onClick={()=>{
                router.push("/products");
              }}>Start Shopping</button>
              </>
           : 
            <>
              <h1>It looks like you&apos;re not logged in</h1>
              <button 
                className='
                bg-pink-900 border-2 
                rounded-xl text-white font-sans font-semibold 
                py-2 px-3 hover:scale-105 transition-all 
                duration-200 hover:border-pink-900 hover:bg-white hover:text-pink-900' 
                onClick={()=>{
                router.push(`/login?redirectTo=${pathname}`); // Pass the current path
                }}
                >
             Login 
             </button>  
            </>
          
          }
          </div>
          
    </div>
  )
}

export default CartContent