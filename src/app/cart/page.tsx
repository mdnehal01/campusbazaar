import CartContent from '@/components/CartContent'
import React from 'react'

const Page = () => {
  return (
    <div className='h-[calc(100vh-100px)] w-full bg-pink-100 grid place-items-center'>
        <div className='bg-white/90 h-[500px] w-[1000px] rounded-xl shadow-md shadow-gray-400 '>
              
          
          <CartContent/>
        </div>
    </div>
  )
}

export default Page