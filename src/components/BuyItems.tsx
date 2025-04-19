"use client"
import { Products } from '@/types'
import React, { useEffect, useState } from 'react'
import { GlobeDemo } from './Globe'

interface BuyItemsProps {
  products: Products[]
}

const BuyItems: React.FC<BuyItemsProps> = ({ products }) => {
  const [totalPrice, setTotalPrice] = useState<number>(0)

  useEffect(() => {
    const total = products.reduce((acc, item) => acc + Number(item.current_price), 0)
    setTotalPrice(total)
  }, [products])

  const formattedPrice = new Intl.NumberFormat('en-IN').format(totalPrice)

  // TODO: Carbon percentage from cart products
  const [carbon, setCarbon] = useState("20");

  return (
    <div className='bg-pink-50 rounded-r-xl p-5 w-full h-full'>
      {products.length == 0 ? (
        <>
          <GlobeDemo/>
        </>
      ):(
        <div className='flex flex-col gap-5'>
          <span>Woohoo you&apos;re going to save <span className='text-green-600'>{carbon}</span> tons of Carbon waste</span>
          <span><span className='text-sm'>Your cart total:</span> <span className='text-md font-semibold'>₹{formattedPrice}</span></span>
        </div>
      )}
    </div>
  )
}

export default BuyItems
