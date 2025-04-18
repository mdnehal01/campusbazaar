"use client";
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import ProductsBox from './Products';
import { getAllProducts } from '@/actions/getAllProducts';
import { useUser } from '@/hooks/useUser';
import { getAllProductsExceptUser } from '@/actions/getAllProdExceptUser';
import SearchBox from '@/components/SearchBox';

const ProductContent = () => {
    return (
        <div className='w-full h-auto py-10 px-28'>
            <SearchBox/>
        </div>
    )
}

export default ProductContent