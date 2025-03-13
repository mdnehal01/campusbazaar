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
        <div className='h-screen bg-white flex mt-4'>
            <div className="profile1 h-full w-[20%]">
                <h1 className='pl-10 text-4xl font-sans font-bold pb-10'>Hello, User</h1>
                <div className="profile1-items text-xl font-sans flex flex-col ">
                    <div className=' h-[60px] pt-3 pl-10 hover:bg-pink-100'>Update Profile </div>
                    <hr></hr>
                    <div className=' h-[60px] pt-3 pl-10 hover:bg-pink-100'>Your orders</div>
                    <hr></hr>
                    <div className=' h-[60px] pt-3 pl-10 hover:bg-pink-100'>Keep Shopping For</div>
                    <hr></hr>
                    <div className=' h-[60px] pt-3 pl-10 hover:bg-pink-100'>Your Rewards </div>
                    <hr></hr>
                    <div className=' h-[60px] pt-3 pl-10 hover:bg-pink-100'>Need More Help?</div>
                </div>
            </div>

            <div className="profile2 bg-gray-300 h-full w-[80%] ">
                <div className="updateProfile">
                    <h1 className='p-10 text-3xl font-sans text-white font-bold' >Update Profile</h1>

                    <div className="update flex">

                        <div className="update1 w-[50%]  flex justify-center items-center">
                            <div className="userProfilePic bg-red-300 h-40 w-40 rounded-full bg-cover" style={{backgroundImage:`url(cart/boo-faceless.jpeg)`}}></div>
                            
                        </div>

                        <div className="update2 w-[50%]">
                            <div className='userProfilePic h-40   flex gap-x-24 justify-start items-center'>
                                <button className='h-10 bg-blue-600 rounded-sm font-sans border-gray-500 text-white py-2 px-6 hover:bg-blue-400'>Change Photo</button>
                                <button className='h-10 bg-blue-600 rounded-sm font-sans border-gray-500 text-white py-2 px-6 hover:bg-blue-400'>Delete Photo</button>
                            </div>
                            
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile