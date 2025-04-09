"use client"
import { useUser } from '@/hooks/useUser'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

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
    
    // for handling profile img change
    const [imgPreview, setImgPreview]=useState<string | null>("/cart/boo-faceless.jpeg");
    const handlePicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Get the selected file
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Create a temporary URL
            setImgPreview(imageUrl); // Set the state to update the background image
        }
    };

    return (
        <div className='h-auto bg-white flex mt-4 '>
            <div className="profile1 h-full w-[20%] fixed">
                <h1 className='pl-10 text-4xl font-sans font-bold pb-10'>  Hello, User </h1>
                <div className="profile1-items text-xl font-sans flex flex-col ">
                    <div className=' h-[60px] pt-3 pl-10 hover:bg-pink-100'> <a href="#option1"> Update Profile </a> </div>
                    <hr></hr>
                    <div className=' h-[60px] pt-3 pl-10 hover:bg-pink-100'> <a href="#option2"> Your orders </a> </div>
                    <hr></hr>
                    <div className=' h-[60px] pt-3 pl-10 hover:bg-pink-100'> <a href="#option3"> Keep Shopping For </a></div>
                    <hr></hr>
                    <div className=' h-[60px] pt-3 pl-10 hover:bg-pink-100'> <a href="#option4"> Your Rewards </a></div>
                    <hr></hr>
                    <div className=' h-[60px] pt-3 pl-10 hover:bg-pink-100'> <a href="#option5"> Need More Help ? </a></div>
                </div>
            </div>

            <div id="option1" className="profile2 ml-[20%] bg-gray-300 h-full w-[80%] px-20">
                {/* section 1 */}
                <div className="updateProfile">
                    <h1 className=' py-5 text-3xl font-sans text-white font-bold' >Update Profile</h1>
                    <hr></hr>

                    <form className=''>
                    <div className="update flex pt-4">
        
                        <div className=" update1 flex flex-col gap-y-4  w-[50%] pl-[200px] ">
                            <div className="userProfilePic  bg-red-300 h-40 w-40 border-4 border-yellow-50 rounded-full bg-cover mx-20">
                                {/* @ts-expect-error */}
                                <img className='rounded-full' style={{ height: '153px', width: '153px', objectFit: 'cover' }} src={imgPreview} alt="profile-pic of user"/>
                            </div>

                            <input type="text" placeholder='Full Name' className='h-10 w-80 rounded-sm px-3' required/>
                            <input type="number" placeholder='Phone Number' className='h-10 w-80 rounded-sm px-3' />
                            <input type="email" placeholder="Email" className='h-10 w-80 rounded-sm px-3'/>

                            <input type="password" placeholder='New Password' className='mt-4 h-10 w-80 rounded-sm px-3' />
                        </div>

                        <div className=" update2 flex flex-col gap-y-4 w-[50%] pl-[30px] ">
                            <div className='userProfilePic  h-40 w- flex flex-col gap-y-4 items-start justify-center'>
                                <div className='h-10 w-40 relative cursor-pointer bg-pink-600 rounded-sm font-sans border-gray-500 text-white py-2 px-6 hover:bg-pink-400'>
                                    Update Photo
                                    <input className='opacity-0 absolute left-0 h-full w-full' type="file" accept='image/webp, image/jpeg, image/png, image/jpg' placeholder="Update Photo" onChange={handlePicChange}/>
                                </div>
                                
                                <button className='h-10 w-40 bg-pink-600 rounded-sm font-sans border-gray-500 text-white py-2 px-6 hover:bg-pink-400'>Delete Photo</button>
                            </div>

                            <input type="text" placeholder="College" className='h-10 w-80 rounded-sm px-3'/>
                            <input type="text" placeholder="Department" className='h-10 w-80 rounded-sm px-3'/>
                            <input type="text" placeholder="Year Of Graduation" className='h-10 w-80 rounded-sm px-3'/>

                            <input type="password" placeholder='Confirm New Password' className='mt-4 h-10 w-80 rounded-sm px-3' />

                        </div>                        
                    </div>

                    <button className='mt-10 mb-4 ml-[200px] h-10 w-40 bg-green-600 rounded-sm font-sans border-gray-500 text-white py-2 px-6 hover:bg-green-400'>Save Changes</button>
                    
                    </form>

                    
                    {/* section 2 */}
                    <div id="option2" className="yourOrders">
                        <h1 className='mt-10 py-5 text-3xl font-sans text-white font-bold' >Your Orders</h1>
                        <hr></hr>
                    </div>



                    {/* section 3 */}
                    <div id="option3" className="keepShoppingFor">
                        <h1 className='mt-10 py-5 text-3xl font-sans text-white font-bold' >Keep Shopping For</h1>
                        <hr></hr>
                    </div>



                    {/* section 4 */}
                    <div id="option4" className="yourRewards">
                        <h1 className='mt-10 py-5 text-3xl font-sans text-white font-bold' >Your Rewards</h1>
                        <hr></hr>
                    </div>


                    {/* section 5*/}
                    <div id="option5" className="needMoreHelp">
                        <h1 className='mt-10 py-5 text-3xl font-sans text-white font-bold' >Need More Help ?</h1>
                        <hr></hr>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Profile