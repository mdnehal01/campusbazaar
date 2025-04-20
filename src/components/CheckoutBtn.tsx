"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const CheckoutBtn = () => {
    const router = useRouter();
    return (
        <button onClick={()=>router.push("/checkout")} className='w-full hover:bg-neutral-700 duration-200 transition-all border-2 border-black rounded-md bg-black h-9 text-white'>
            Proceed to checkout
        </button>
    )
}

export default CheckoutBtn;