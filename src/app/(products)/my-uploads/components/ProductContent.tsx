"use client";

import { getMyProducts } from '@/actions/getMyProducts';
import ProductCard from '@/components/ProductCard'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import ProductsBox from './Products';

const ProductContent = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getMyProducts();
                if (data) {
                    setProducts(data);
                }
            } catch (error) {
                toast.error(`Failed to fetch products message ${error}`);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='w-full h-auto py-10 px-28'>
            <h1 className='text-pink-800 text-xl mb-5'>
                My Products
            </h1>
            {loading ? (
                // TODO: use LOADER animation here or skeleton
                <>Loading...</>
            ) : (
                <ProductsBox products={products}/>
            )}
        </div>
    )
}

export default ProductContent