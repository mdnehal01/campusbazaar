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

  return (
    <div className='bg-pink-50 rounded-r-xl p-5 w-full h-full'>
      {products.length == 0 ? (
        <>
          <GlobeDemo/>
        </>
      ):(
        <>
          <span className='text-sm'>Your Total:</span> <span className='text-md font-semibold'>₹{formattedPrice}</span>
        </>
      )}
    </div>
  )
}

export default BuyItems
