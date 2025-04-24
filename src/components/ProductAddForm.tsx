"use client"
import React, { useEffect, useState } from 'react'
import ButtonType1 from './customs/buttontype1'
import Categories from './Categories'
import InputType1 from './customs/inputType1'
import "./css/ProductAddForm.css"
import { UploadProduct } from '@/actions/uploadProduct'
import { useUser } from '@/hooks/useUser'
import { BiRupee, BiSolidCameraPlus } from 'react-icons/bi'
import { usePathname, useRouter } from 'next/navigation'
import "./css/loader.css"
import AIButton from './AIButton'
import toast from 'react-hot-toast'
import AILoader from './AILoader'
import AILoader2 from './AILoader2'
import TruckLoader from './loader'

let selectedCategory = "Choose a category"
let disp = "hidden";

export const sendSelected = (selected: string) => {
    selectedCategory = selected.split("-").pop()?.toString() ?? "Choose a category";

    const sizeRequiredCategories = [
        "Jeans", "Blouses", "Shirt", "Jackets", "Jeans & Pants", "Suits & Blazers",
        "Sweaters", "Sweats & Hoodies", "TShirts & Shirts", "Shorts", "Coats & Jackets",
        "Athletic wear", "Footwear", "Innerwear & Sleepwear"
    ];

    disp = sizeRequiredCategories.includes(selectedCategory) ? "flex" : "hidden";
}

const ProductAddForm = () => {
    const [brandValue, setBrandValue] = useState("");
    const [title, setTitle] = useState("");
    const [size, setSize] = useState("");
    const [description, setDescription] = useState("You can write or generate description");
    const [price, setPrice] = useState("");
    const [defect, setDefect] = useState("");
    const [loader, setLoader] = useState(false);
    const [nextSlide, setNextSlide] = useState("flex");
    const [nextDisp, setNextDisp] = useState("hidden");

    const [descriptionLoading, setDescriptionLoading] = useState(false);

    const pathname = usePathname();
    const { user, isLoading, userDetails } = useUser();
    const router = useRouter();
    const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);
    const toggleDialog = () => setCategoryDialogOpen((prev) => !prev);

    // MULTIPLE IMAGE PREVIEW
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [imageFiles, setImageFiles] = useState<FileList | null>(null);

    useEffect(() => {
        if (!user && !isLoading && !userDetails) {
            router.push(`/login?redirectTo=${pathname}`);
        }
    }, [user, isLoading, userDetails, router, pathname]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            setImageFiles(files);
            const urls = Array.from(files).map(file => URL.createObjectURL(file));
            setImagePreviews(urls);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoader(true);

        const formData = new FormData(event.currentTarget);

        // Append multiple images to formData
        if (imageFiles) {
            Array.from(imageFiles).forEach((file) => {
                formData.append("files", file);
            });
        }

        await UploadProduct(formData, router);
    };

    const fileToBase64 = (file: File): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
        });

    const generateAutoDescription = async (title:string) => {
        if(!title || !imageFiles){
            toast.error("Title or image missing")
            return
        }
        setDescriptionLoading(true)
        if (!imageFiles) return;

        const base64Images = await Promise.all(Array.from(imageFiles).map(fileToBase64));
        try {
            const response = await fetch('/api/generative-description', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, imageFiles: base64Images }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to generate description.');
            }

            const data = await response.json();
            setDescription(data.description);
            setDescriptionLoading(false);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {isLoading && (
                <TruckLoader/>
            )}

            {/* PHASE 1 */}
            <div className={`flex-col gap-y-2 ${nextSlide}`}>
                <InputType1 onChange={(e) => setTitle(e.target.value)} name='title' value={title} needIcon={false} placeholder='Name of the product' title='Name of the product' className='w-[400px] h-10 mb-2 focus:border-pink-300' />

                <h1 className='font-medium'>
                    Add product images <span className='text-red-500 font-bold text-xs'>Upload a minimum of 3 images</span>
                </h1>
                <div className='flex flex-wrap gap-2 mb-2'>
                    {imagePreviews.map((img, idx) => (
                        <div key={idx} className='h-20 w-20 rounded-sm bg-cover bg-center border border-pink-700' style={{ backgroundImage: `url(${img})` }} />
                    ))}
                    <div className='relative border-2 grid place-items-center border-pink-700 h-20 w-20 rounded-sm cursor-pointer bg-slate-100 hover:bg-slate-200'>
                        <BiSolidCameraPlus size={30} className='text-gray-400' />
                        <input
                            onChange={handleImageChange}
                            className='absolute cursor-pointer w-full h-full opacity-0'
                            accept="image/*"
                            type="file"
                            name='file'
                            multiple
                        />
                    </div>
                </div>

                <ButtonType1
                    onClick={toggleDialog}
                    className="w-[400px] rounded-md bg-white font-normal flex justify-start"
                >
                    {selectedCategory}
                </ButtonType1>
                <Categories open={categoryDialogOpen} onClose={() => setCategoryDialogOpen(false)} />
                <InputType1 needIcon={false} name='category' value={selectedCategory} onChange={() => { }} className='hidden' />

                <InputType1 name='size' className={`${disp} w-[400px] h-10 focus:border-pink-300`} onChange={(e) => setSize(e.target.value)} needIcon={false} placeholder='Enter size' value={size} />
                <input className='hidden' type="text" name='userId' value={user?.id ?? ""} onChange={() => { }} />
                
                <div className='flex items-center gap-x-8'>
                    {!descriptionLoading ? (
                        <textarea onChange={(e) => setDescription(e.target.value)} name='description' value={description} placeholder='Add Description' className='w-[400px] mb-2 focus:outline-pink-300 rounded-md p-2 h-fit outline-none'></textarea>
                    ):(
                        <div className='w-[400px] bg-white flex items-center justify-center mb-2 border focus:outline-pink-300 rounded-md p-2 h-fit outline-1 outline-green-500'>
                            <AILoader/>
                        </div>
                    )}
                    <a onClick={()=>generateAutoDescription(title)}>
                        <AIButton/>
                    </a>
                </div>
                
                
                <InputType1 onChange={(e) => setBrandValue(e.target.value)} name='brand' value={brandValue} needIcon={false} placeholder='Specify Brand Name' title='Specify brand' className='w-[400px] h-10 focus:border-pink-300' />

                <a className='bg-pink-900 relative grid place-items-center font-bold h-10 cursor-pointer rounded-md w-40 text-white' onClick={() => { setNextSlide("hidden"); setNextDisp("flex"); }}>Next</a>
            </div>

            {/* PHASE 2 */}
            <div className={`flex-col gap-y-2 ${nextDisp}`}>
                <InputType1 onChange={(e) => setDefect(e.target.value)} name='defect' value={defect} needIcon={false} placeholder='Specify any defect' className='w-[400px] h-10 mb-2 focus:border-pink-300' />

                <div className="border border-black w-fit rounded-md px-2 gap-x-2 rating items-center flex-row-reverse">
                    <h1>Rate the condition of the product</h1>
                    <div>
                        {[5, 4, 3, 2, 1].map((num) => (
                            <React.Fragment key={num}>
                                <input value={num} name="condition" id={`star${num}`} type="radio" />
                                <label htmlFor={`star${num}`}></label>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {loader && (
                    <div className='absolute z-10 gap-y-10 h-full w-full top-0 left-0 bg-pink-800 flex flex-col items-center justify-center'>
                        <h1 className='text-white font-bold text-5xl'>Adding...</h1>
                        <div className="loader"></div>
                    </div>
                )}

                <InputType1 onChange={(e) => setPrice(e.target.value)} name='price' iconbg='bg-transparent' type='number' value={price} needIcon={true} icon={<BiRupee className='-mt-2' />} placeholder='Add pricing' className='w-[400px] h-10 mb-2 focus:border-pink-300' />

                <div className='flex justify-between relative -bottom-3'>
                    <a className='bg-pink-900 relative grid place-items-center font-bold h-10 cursor-pointer rounded-md w-40 text-white' onClick={() => { setNextSlide("flex"); setNextDisp("hidden"); }}>Back</a>
                    <ButtonType1 className='bg-pink-600 rounded-md w-40 text-white' type='submit'>Post</ButtonType1>
                </div>
            </div>
        </form>
    );
};

export default ProductAddForm;