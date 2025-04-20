"use client"
import { Products } from '@/types'
import { useRouter } from 'next/navigation';
import React from 'react'
import { BiLeftArrow } from 'react-icons/bi';

interface CheckOutContentProps{
    products:Products[] | undefined; 
}

const CheckOutContent:React.FC<CheckOutContentProps> = ({
    products
}) => {
    const router = useRouter();
    return (
        <div className='bg-white/90 p-5 max-h-[800px] h-fit w-[1200px] rounded-xl shadow-md shadow-gray-400 scrollbar-none'>
            <div onClick={()=>router.push("/cart")} className='cursor-pointer flex items-center w-fit gap-5 hover:text-neutral-500 duration-200 transition-all'>
                <BiLeftArrow/>
                <h6>Go back to cart</h6>
            </div>
            {products?.length==0 ? (
                <>There is no product in your cart. Add product to cart then proceed</>
            ):(
                <div></div>
            )}
        </div>
    )
}

export default CheckOutContent