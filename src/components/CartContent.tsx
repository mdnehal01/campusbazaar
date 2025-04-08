"use client";
import getCartProducts from '@/actions/getCartProducts';
import { useUser } from '@/hooks/useUser';
import { Products } from '@/types';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react'
import { ExpandableCard } from './ExpandableCard';

interface CartContentProps{
  products:Products[];
}

const CartContent:React.FC<CartContentProps> = ({
  products
}) => {
    const router=useRouter();
    const pathname = usePathname(); // Get the current route path
    const {user, userDetails, isLoading}=useUser();


  return (
    <div className='flex h-[500px] rounded-t-3xl overflow-y-auto'>

          <div className='w-full py-5'>

            {/* FIRST CHECK IF USER IS LOGGED IN OR NOT If logged in  */}
            {user ? <>
              {/* THen check if logged in then any item is there in cart or not if no then show empty cart else show products */}
              {products.length == 0 ?     
              <div className="loggedIn h-[500px] flex items-center justify-center">

                <div className='h-[200px] w-[200px] bg-yellow-200 bg-center bg-contain' 
                    style={{backgroundImage:`url(/cart/campus-bazaar-cart-empty.jpeg)`}}
                    >
                </div>            
                <div className= " h-[200px] w-[400px] pt-5 flex flex-col  gap-y-6 pl-4">
                  <h1 className='text-2xl font-bold font-sans'>Oh no! Your cart is empty</h1>
                  <button className='w-[200px] bg-green-600 border-2 rounded-md text-white font-sans font-semibold py-1 px-3 hover:scale-105 transition-all duration-200 hover:border-pink-600 hover:bg-white hover:text-pink-900' onClick={()=>{
                    router.push("/products");
                  }}>Start Shopping</button>
                  <h1 className='text-md text-pink-700 font-sans'>Your cart is on a diet. Feed it with some cool finds!</h1>
                </div>
              
              </div>
              :
              <div className='overflow-y-auto'>
                <ExpandableCard products={products}/>
              </div>
              }
              
            </>


           : 
            <>

              <div className='loggedOut h-[500px] flex items-center justify-center'>
                <div className='h-[200px] w-[200px] bg-pink-50 bg-center bg-contain' 
                    style={{backgroundImage:`url(/cart/boo-bears.png)`}}
                    >
                </div>

                <div className='h-[200px] w-[400px] pt-5 flex flex-col  gap-y-6 pl-4'>
                  <h1 className='text-2xl font-bold font-sans'>Looks like you&apos;re not logged in</h1>
                  <button className='w-[200px] bg-green-600 border-2 rounded-xl text-white font-sans font-semibold py-1 px-2 
                    hover:scale-105 transition-all duration-200 hover:border-pink-900 hover:bg-white hover:text-pink-900' 
                    onClick={()=>{
                    router.push(`/login?redirectTo=${pathname}`); // Pass the current path
                    }}>
                  
                    Login 
                  </button>

                  <h1 className='text-md text-pink-700 font-sans'>No login, no loot. It’s the rule of the bazaar</h1>
                </div>

              </div>
  
            </>
          }
          
          </div>
          
    </div>
  )
}

export default CartContent