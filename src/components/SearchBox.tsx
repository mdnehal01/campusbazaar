"use client"
import { getAllProductsExceptUser, getProductsExceptUserHightoLow, getProductsExceptUserLowToHigh } from '@/actions/getAllProdExceptUser';
import { getAllProducts, getProductsHightoLow, getProductsLowToHigh } from '@/actions/getAllProducts';
import ProductsBox from '@/app/(products)/products/components/Products';
import { useUser } from '@/hooks/useUser';
import React, { useEffect, useState, useRef } from 'react'
import toast from 'react-hot-toast';
import TruckLoader from './loader';

const SearchBox = () => {
    const [sortDialogOpen, setSortDialogOpen] = useState(false);
    const [sortBy, setSortBy] = useState("Sort By");
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const {user} = useUser();

    const sortRef = useRef<HTMLDivElement>(null); // 👈 create a ref

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

    // Close on outside click
useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
            setSortDialogOpen(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, []);

    const priceHiToLo = async() => {
        setSortBy("Sort By: Price(high to low)")
        setLoading(true);
        try {
            if (user === null) {
                const data = await getProductsHightoLow()
                if (data) setProducts(data);
            } else {
                const data = await getProductsExceptUserHightoLow();
                if (data) setProducts(data);
            }
        } catch (error) {
            toast.error("Failed to fetch products: " + error);
        } finally {
            setLoading(false);
        }
    }

    const priceLoToHi = async() => {
        setSortBy("Sort By: Price(low to high)")
        setLoading(true);
        try {
            if (user === null) {
                const data = await getProductsLowToHigh()
                if (data) setProducts(data);
            } else {
                const data = await getProductsExceptUserLowToHigh();
                if (data) setProducts(data);
            }
        } catch (error) {
            toast.error("Failed to fetch products: " + error);
        } finally {
            setLoading(false);
        }
    }

    const defaultSort = async() => {
        setSortBy("Sort By: Default")
        setLoading(true);
        try {
            if (user === null) {
                const data = await getAllProducts()
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
    }

    return (
        <div className='h-11 w-full'>
            {/* <button onClick={()=>setSortDialogOpen(prev => !prev)} className='relative border-pink-700 rounded hover:rounded-none duration-200 transition hover:bg-slate-50 border-2 px-3 py-1 hover:border-black'>
                {sortBy}
                {sortDialogOpen && (
                    <div className='flex flex-col items-start border-2 bg-white absolute left-0 top-10 p-2 z-50 min-w-[200px]'>
                        <a onClick={() => defaultSort()} className='h-9 w-full px-5 flex items-center hover:bg-slate-200'>Default</a>
                        <a onClick={() => priceHiToLo()} className='h-9 w-full px-5 flex items-center hover:bg-slate-200'>Price(high to low)</a>
                        <a onClick={() => priceLoToHi()} className='h-9 w-full px-5 flex items-center hover:bg-slate-200'>Price(low to high)</a>
                    </div>
                )}
            </button> */}

            <div ref={sortRef} className="inline-block relative">
                <button onClick={() => setSortDialogOpen(prev => !prev)} className="relative border-pink-700 rounded hover:rounded-none duration-200 transition hover:bg-slate-50 border-2 px-3 py-1 hover:border-black">
                    {sortBy}
                </button>
                {sortDialogOpen && (
                    <div className='flex flex-col items-start border-2 bg-white absolute left-0 top-10 p-2 z-50 min-w-[200px]'>
                        <a onClick={defaultSort} className='h-9 cursor-pointer w-full px-5 flex items-center hover:bg-slate-200'>Default</a>
                        <a onClick={priceHiToLo} className='h-9 cursor-pointer w-full px-5 flex items-center hover:bg-slate-200'>Price(high to low)</a>
                        <a onClick={priceLoToHi} className='h-9 cursor-pointer w-full px-5 flex items-center hover:bg-slate-200'>Price(low to high)</a>
                    </div>
                )}
            </div>
            
            <div>
                <h1 className='text-pink-800 text-xl mb-5'>
                    Buy items
                </h1>
                {loading ? (
                    // TODO: use LOADER animation here or skeleton
                    <div className='h-[calc(100vh-80px)] w-screen absolute top-0 left-0 grid place-items-center bg-pink-700 backdrop-blur-md'>
                        <TruckLoader/>
                    </div>
                ) : (
                    <ProductsBox products={products}/>
                )}
            </div>
        </div>
    )
}

export default SearchBox;