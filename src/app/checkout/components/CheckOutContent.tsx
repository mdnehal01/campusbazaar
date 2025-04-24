"use client"
import Radio from '@/components/RadioBtn';
import { PrelinkImage } from '@/data';
import { Products } from '@/types'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react'
import { BiLeftArrow } from 'react-icons/bi';
import { FaLock } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

interface CheckOutContentProps{
    products:Products[] | undefined; 
}

const CheckOutContent:React.FC<CheckOutContentProps> = ({
    products
}) => {
    const router = useRouter();
    // TODO Open the card toggle 
    const [lineClamp, setLineClamp] = useState('');
        // ✅ Calculate total price using useMemo
    const totalPrice = Number(useMemo(() => {
        if (!products) return 0;
            return products.reduce((acc, curr) => acc + Number(curr.current_price), 0);
    }, [products])).toLocaleString('EN-IN');

    return (
        <div className='bg-white/90 p-5 max-h-[800px] flex h-fit w-[1200px] rounded-xl shadow-md shadow-gray-400 scrollbar-none'>
            <div className='flex flex-col w-[600px]'>
            <div onClick={()=>router.push("/cart")} className='cursor-pointer flex items-center w-fit gap-5 hover:text-neutral-500 duration-200 transition-all'>
                <BiLeftArrow/>
                <h6>Go back to cart</h6>
            </div>
            {products?.length==0 ? (
                <>There is no product in your cart. Add product to cart then proceed</>
            ):(
                <div className='flex mt-10 flex-col min-h-16 h-fit w-full'>
                    {products?.map((product, index) => 
                        <div className='border-b p-2 gap-x-4 h-fit flex border-neutral-200 hover:rounded duration-200 transition-all hover:bg-neutral-100 cursor-pointer' key={index}>
                            {index+1}
                            <div className='bg-green-300 flex-shrink-0 relative h-16 w-16'>
                                <Image fill src={`${PrelinkImage}${product.image_urls.primary[0]}`} alt={product.title}/>
                            </div>
                            <div className='flex-shrink-0 w-28'>
                                <h1 className='font-bold truncate' title={product.title}>{product.title}</h1>
                                <h2 className='text-sm'>₹{Number(product.current_price).toLocaleString('EN-IN')}</h2>
                                <p className='text-xs text-neutral-400'>{product.brand}</p>
                            </div>
                            <div>
                                <p className={twMerge(`line-clamp-2`,lineClamp)} title={product.description}>{product.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            )}
            </div>

            <div className='w-1/2 h-auto bg-neutral-100 ml-2 gap-y-3 p-5 flex flex-col items-center'>
                <p>Total amount</p>
                <h1 className='font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-tr from-emerald-400 to-emerald-900'>₹{totalPrice}.00</h1>
                <p className='text-xs flex items-center gap-x-2'><FaLock className='text-emerald-500'/> Secure payment</p>
                <div className='h-[1px] w-full bg-neutral-300'></div>
                <div>
                    <p>Payment mode</p>

                    {/* TODO: Check for all products if any product doesnot allow cod then doesnot allow cod */}
                    <Radio isCod={true}/>
                </div>
            </div>
        </div>
    )
}

export default CheckOutContent