"use client"
import { getAllProductsExceptUser } from '@/actions/getAllProdExceptUser';
import { getAllProducts } from '@/actions/getAllProducts';
import ProductsBox from '@/app/(products)/products/components/Products';
import { useUser } from '@/hooks/useUser';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const SearchBox = () => {
    const [sortDialogOpen, setSortDialogOpen] = useState(false);
    const [sortBy, setSortBy] = useState("Sort By");
    const priceHiToLo = () => {
        setSortBy("Sort By: Price(high to low)")
    }
    const priceLoToHi = () => {
        setSortBy("Sort By: Price(low to high)")
    }
    
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
        <div className='h-11 w-full'>
            <button onClick={()=>setSortDialogOpen(prev => !prev)} className='relative border-pink-700 rounded hover:rounded-none duration-200 transition hover:bg-slate-50 border-2 px-3 py-1 hover:border-black'>
                {sortBy}
                {sortDialogOpen && (
                    <div className='flex flex-col border-2 bg-white absolute left-0 top-10 z-50 w-56'>
                        <a onClick={() => priceHiToLo()} className='h-9 flex items-center hover:bg-slate-200 justify-center'>Price(high to low)</a>
                        <a onClick={() => priceLoToHi()} className='h-9 flex items-center justify-center hover:bg-slate-200'>Price(low to high)</a>
                    </div>
                )}
            </button>


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

export default SearchBox