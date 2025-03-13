"use client";
import { useUser } from '@/hooks/useUser';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react'

const CartContent = () => {
    const router=useRouter();
    const pathname = usePathname(); // Get the current route path
    const {user, userDetails, isLoading}=useUser();
  return (
    <div className='flex rounded-t-3xl'>

          <div className='w-full'>

            {user ? <>

              <div className="loggedIn flex items-center justify-center pt-20">

                <div className='h-[300px] w-[300px] bg-yellow-200 bg-center bg-contain' 
                    style={{backgroundImage:`url(/cart/campus-bazaar-cart-empty.jpeg)`}}
                    >
                </div>

                <div className= " h-[300px] w-[500px] pt-20 flex flex-col  gap-y-6">
                  <h1 className='text-3xl font-bold font-sans'>Oh no! Your cart is empty</h1>
                  <button className='w-[200px] bg-green-600 border-2 rounded-md text-white font-sans font-semibold py-1 px-3 hover:scale-105 transition-all duration-200 hover:border-pink-600 hover:bg-white hover:text-pink-900' onClick={()=>{
                    router.push("/products");
                  }}>Start Shopping</button>
                  <h1 className='text-xl text-pink-700 font-sans'>Your cart is on a diet. Feed it with some cool finds!</h1>
                </div>
              
              </div>
              
            </>


           : 
            <>

              <div className='loggedOut flex items-center justify-center pt-20'>
                <div className='h-[300px] w-[300px] bg-pink-50 bg-center bg-contain' 
                    style={{backgroundImage:`url(/cart/boo-bears.png)`}}
                    >
                </div>

                <div className='h-[300px] w-[500px] pt-20 flex flex-col  gap-y-6 pl-8'>
                  <h1 className='text-3xl font-bold font-sans'>Looks like you&apos;re not logged in</h1>
                  <button className='w-[200px] bg-green-600 border-2 rounded-xl text-white font-sans font-semibold py-1 px-2 
                    hover:scale-105 transition-all duration-200 hover:border-pink-900 hover:bg-white hover:text-pink-900' 
                    onClick={()=>{
                    router.push(`/login?redirectTo=${pathname}`); // Pass the current path
                    }}>
                  
                    Login 
                  </button>

                  <h1 className='text-xl text-pink-700 font-sans'>No login, no loot. It’s the rule of the bazaar</h1>
                </div>

              </div>
  
            </>
          }
          
          </div>
          
    </div>
  )
}

export default CartContent