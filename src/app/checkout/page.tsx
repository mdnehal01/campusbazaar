import { getAllProducts } from '@/actions/getAllProducts'
import React from 'react'
import CheckOutContent from './components/CheckOutContent';
import getCartProducts from '@/actions/getCartProducts';

const page = async () => { // ✅ make it async
    const products = await getCartProducts();
    return (
        <div className='h-[calc(100vh-80px)] bg-pink-50 w-full grid place-items-center'>
            <CheckOutContent products={products}/>
        </div>
    )
}

export default page;
