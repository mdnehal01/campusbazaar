"use client"
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Profile = () => {


    ////////////////////////////////////////////////////////////////////////////////////////////
    //////////// KNOW: This piece of code varifies that if there is no user logged in /////////
    // The page will automatically redirected to "login" page automatically //////////////////
    /////////////////////////////////////////////////////////////////////////////////////////

    const { user, isLoading } = useUser();
    const router = useRouter();
    
    useEffect(() => {
        if(!isLoading && !user) {
            router.replace('/login')
        }
    }, [isLoading, user, router]);
    //////////////////////////////////////////////////////////////////////////////////
    

    return (
        <div>
        </div>
    )
}

export default Profile