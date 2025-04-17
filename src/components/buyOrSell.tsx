"use client"
import React from 'react'
import ButtonType1 from './customs/buttontype1'
// import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const BuyOrSell = () => {
    const router = useRouter();
  return (
    <div className='flex flex-col px-10 md:px-72 gap-x-5 py-10 justify-center items-center gap-y-10'>
        <h1 className='text-neutral-800 text-2xl'></h1>
        <div className='gap-x-10 flex max-md:flex-col'>
            <ButtonType1 onClick={() => router.push("/products")} className='h-[50px] text-2xl w-[200px] bg-green-500 text-white'>Buy</ButtonType1>
            <ButtonType1 onClick={() => router.push("/add-product")} className='h-[50px] text-2xl w-[200px] border-2 bg-transparent border-green-500 text-green-500'>Sell</ButtonType1>
        </div>
    </div>
  )
}
