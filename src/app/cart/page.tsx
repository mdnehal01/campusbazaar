import getCartProducts from '@/actions/getCartProducts'
import CartContent from '@/components/CartContent'
import { ExpandableCard } from '@/components/ExpandableCard'
import React from 'react'

const Page = async () => {
  const cartProducts = await getCartProducts();
  return (
    <div className='h-[calc(100vh-100px)] w-full bg-pink-100 grid place-items-center'>
        <div className='bg-white/90 h-[500px] w-[800px] rounded-xl shadow-md shadow-gray-400 '>
          <CartContent products={cartProducts}/>
        </div>
    </div>
  )
}

export default Page