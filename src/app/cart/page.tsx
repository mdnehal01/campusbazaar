import getCartProducts from '@/actions/getCartProducts'
import getSaveForLaterProd from '@/actions/getSaveLaterProd'
import BuyItems from '@/components/BuyItems'
import CartContent from '@/components/CartContent'
import SaveForLaterContent from '@/components/SaveForLaterContent'
import React from 'react'

const Page = async () => {
  const cartProducts = await getCartProducts();
  const laterProducts = await getSaveForLaterProd()
  return (
    <div className='min-h-[calc(100vh-100px)] h-fit py-20 gap-10 w-full bg-pink-100/45 grid place-items-center scrollbar-none'>
        <div className='bg-white/90 p-10 max-h-[800px] h-fit w-[1200px] rounded-xl shadow-md shadow-gray-400 scrollbar-none'>
        <h1 className='font-bold text-2xl'>Shopping Cart</h1>
          <div className='flex'>
          <div className='w-[800px] h-full scrollbar-none'>
            <CartContent products={cartProducts}/>
          </div>
          <div className='border-l-2 w-full scrollbar-none pl-5'>
            <BuyItems products={cartProducts}/>
          </div>
          </div>
        </div>

        <div className='bg-white/90 p-10 max-h-[800px] h-fit w-[1200px] rounded-xl shadow-md shadow-gray-400 scrollbar-none'>
          <h1 className='font-bold text-2xl'>Your Items</h1>
          <div className='w-[800px] h-full scrollbar-none py-5'>
            <span className='font-medium'>Saved for later</span>
            <SaveForLaterContent products={laterProducts}/>
          </div>
        </div>
    </div>
  )
}

export default Page