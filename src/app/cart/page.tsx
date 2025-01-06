import CartContent from '@/components/CartContent'
import React from 'react'

const Page = () => {
  return (
    <div className='h-[calc(100vh-100px)] w-full bg-pink-800 grid place-items-center'>
        <div className='bg-white/90 h-[500px] w-[1000px] rounded-3xl shadow-md shadow-black '>
        {/* <h1 className=''>Your Cart Looks Empty? </h1>
        <button className='bg-pink-900 border-2 rounded-xl text-white font-sans font-semibold py-2 px-3 hover:scale-105 transition-all duration-200 hover:border-pink-900 hover:bg-white hover:text-pink-900'>Start Shopping</button>
        <button className='bg-pink-900 border-2 rounded-xl text-white font-sans font-semibold py-2 px-3 hover:scale-105 transition-all duration-200 hover:border-pink-900 hover:bg-white hover:text-pink-900'>Login</button> */}
        <CartContent/>
        </div>
    </div>
  )
}

export default Page