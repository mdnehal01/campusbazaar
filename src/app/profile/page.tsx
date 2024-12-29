"use client"
import { useUser } from '@/hooks/useUser'
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Profile = () => {

    const { user, isLoading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if(!isLoading && !user) {
            router.replace('/')
        }
    }, [isLoading, user, router]);
    

    return (
        <div>
            {user?.id}
            {user?.email}
            {String(user)}
        </div>
    )
}

export default Profile