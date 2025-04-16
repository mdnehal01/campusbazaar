"use client"
import TruckLoader from '@/components/loader';
import { PrelinkImage } from '@/data';
import { useUser } from '@/hooks/useUser'
import { useSessionContext } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import uniqid from 'uniqid';

const Profile = () => {
    const { user, isLoading, userDetails } = useUser();
    const router = useRouter();

    const [firstName, setFirstName] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [college, setCollege] = useState("");
    const [department, setDepartment] = useState("");
    const [gradYear, setGradYear] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userId, setUserId] = useState<String>();

    const [imgPreview, setImgPreview] = useState<string>("/cart/boo-faceless.jpeg");

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/login');
        }

        if (userDetails) {
            const nameParts = userDetails.name?.split(" ") || [""];
            setFirstName(nameParts[0]);
            setFullName(userDetails.name || "");
            setPhone(userDetails.phone_number?.toString() || "");
            setEmail(userDetails.email || "");
            setCollege(userDetails.college || "");
            setDepartment(userDetails.department || "");
            setGradYear(userDetails.year || "");
            setUserId(userDetails.user_id || "");
            setImgPreview(`${PrelinkImage}${userDetails.profile_pic_url}` || "")
        }
    }, [isLoading, user, router, userDetails]);

    const {supabaseClient} = useSessionContext();

// update user data to supabase

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile) {
        toast.error("No file uploaded");
        return;
    }

    const uniqueID = uniqid();
    const { data: imgData, error: imgError } = await supabaseClient.storage
        .from("user-profile-pic")
        .upload(`${userId}/${selectedFile.name}-${uniqueID}`, selectedFile, {
            cacheControl: "3600",
            upsert: false,
        });

    if (imgError) {
        toast.error(imgError.message);
        return;
    }

    const updatedData = {
        name: fullName,
        email: email,
        phone_number: phone,
        college: college,
        department: department,
        year: gradYear,
        profile_pic_url: imgData?.fullPath,  // use `.path` for public URL use
    };

    const { data, error } = await supabaseClient
        .from('users')
        .update(updatedData)
        .eq('user_id', userId)
        .select();

    if (error) {
        toast.error(error.message);
    } else {
        toast.success("User profile updated!");
        router.refresh();
    }
};


const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const handlePicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file); // set selected file
            const imageUrl = URL.createObjectURL(file);
            setImgPreview(imageUrl);
        }
    };

    return (
        <div className='h-auto bg-white flex mt-4 '>
            {isLoading ? (
                <div className='h-full w-full flex justify-center items-center absolute left-0 top-0 bg-pink-800'>
                    <TruckLoader/>
                </div>
            ): (
                <>
                
               
            <div className="profile1 h-full w-[20%] fixed">
                <h1 className='pl-10 text-4xl font-sans font-bold pb-10'>Hello, {firstName}</h1>
                <div className="profile1-items text-xl font-sans flex flex-col ">
                    {["Update Profile", "Your orders", "Keep Shopping For", "Your Rewards", "Need More Help ?"].map((label, i) => (
                        <div key={i} className='h-[60px] pt-3 pl-10 hover:bg-pink-100'>
                            <a href={`#option${i + 1}`}>{label}</a>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>

            <div id="option1" className="profile2 ml-[20%] bg-gray-300 h-full w-[80%] px-20">
                {/* section 1 */}
                <div className="updateProfile">
                    <h1 className=' py-5 text-3xl font-sans text-white font-bold'>Update Profile</h1>
                    <hr />

                    <form className='' onSubmit={handleSubmit}>
                        <div className="update flex pt-4">
                            <div className="update1 flex flex-col gap-y-4 w-[50%] pl-[200px]">
                                <div className="userProfilePic bg-red-300 h-40 w-40 border-4 border-yellow-50 rounded-full bg-cover mx-20">
                                    <img className='rounded-full' style={{ height: '153px', width: '153px', objectFit: 'cover' }} src={imgPreview} alt={imgPreview} />
                                </div>

                                <input type="text" placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} className='h-10 w-80 rounded-sm px-3' required />
                                <input type="number" placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} className='h-10 w-80 rounded-sm px-3' />
                                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='h-10 w-80 rounded-sm px-3' />
                            </div>

                            <div className="update2 flex flex-col gap-y-4 w-[50%] pl-[30px]">
                                <div className='userProfilePic h-40 w- flex flex-col gap-y-4 items-start justify-center'>
                                    <div className='h-10 w-40 relative cursor-pointer bg-pink-600 rounded-sm font-sans border-gray-500 text-white py-2 px-6 hover:bg-pink-400'>
                                        Update Photo
                                        <input className='opacity-0 absolute left-0 h-full w-full' type="file" accept='image/webp, image/jpeg, image/png, image/jpg' name='profile-pic' onChange={handlePicChange} />
                                    </div>
                                    <button className='h-10 w-40 bg-pink-600 rounded-sm font-sans border-gray-500 text-white py-2 px-6 hover:bg-pink-400'>Delete Photo</button>
                                </div>

                                <input type="text" placeholder="College" value={college} onChange={(e) => setCollege(e.target.value)} className='h-10 w-80 rounded-sm px-3' />
                                <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} className='h-10 w-80 rounded-sm px-3' />
                                <input type="text" placeholder="Year Of Graduation" value={gradYear} onChange={(e) => setGradYear(e.target.value)} className='h-10 w-80 rounded-sm px-3' />
                            </div>
                        </div>

                        <button className='mt-10 mb-4 ml-[200px] h-10 w-40 bg-green-600 rounded-sm font-sans border-gray-500 text-white py-2 px-6 hover:bg-green-400'>Save Changes</button>

                    </form>

                    <h5 className='pl-52 text-blue-500'>Change Password?</h5>


                    {/* Other Sections */}
                    {["Your Orders", "Keep Shopping For", "Your Rewards", "Need More Help ?"].map((section, i) => (
                        <div key={i} id={`option${i + 2}`} className="mt-10 py-5">
                            <h1 className='text-3xl font-sans text-white font-bold'>{section}</h1>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
            </>
            )}
        </div>
    )
}

export default Profile;
