"use client";
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import ProductsBox from './Products';
import { getAllProducts } from '@/actions/getAllProducts';
import { useUser } from '@/hooks/useUser';
import { getAllProductsExceptUser } from '@/actions/getAllProdExceptUser';

const ProductContent = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const {user} = useUser();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                if (user === null) {
                    const data = await getAllProducts();
                    if (data) setProducts(data);
                } else {
                    const data = await getAllProductsExceptUser();
                    if (data) setProducts(data);
                }
            } catch (error) {
                toast.error("Failed to fetch products: " + error);
            } finally {
                setLoading(false);
            }
        };
    
        // only run if user is either null or a defined object
        if (user !== undefined) {
            fetchProducts();
        }
    }, [user]);
    

    return (
        <div className='w-full h-auto py-10 px-28'>
            <h1 className='text-pink-800 text-xl mb-5'>
                Buy items
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