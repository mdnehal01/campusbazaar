"use client"
import React, { useEffect } from 'react'
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/navigation';

const AddProduct = () => {

    const { user, isLoading, userDetails } = useUser();
        const router = useRouter();
        
        useEffect(() => {
            if(!isLoading && !user && !userDetails) {
                router.replace('/login')
            }
        }, [isLoading, user, router, userDetails]);
        //////////////////////////////////////////////////////////////////////////////////

    return (
        <div>Add Products</div>
    )
}

export default AddProduct