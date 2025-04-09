// "use client"
// import React, { useEffect, useState } from 'react'
// import ButtonType1 from './customs/buttontype1'
// import Categories from './Categories'
// import InputType1 from './customs/inputType1'
// import "./css/ProductAddForm.css"
// import { UploadProduct } from '@/actions/uploadProduct'
// import { useUser } from '@/hooks/useUser'
// import { BiRupee, BiSolidCameraPlus } from 'react-icons/bi'
// import { usePathname, useRouter } from 'next/navigation'
// import "./css/loader.css"

// let selectedCategory = "Choose a category"
// let disp = "hidden";

// export const sendSelected = (selected: string) => {
//     // @ts-expect-error let it be
//     selectedCategory = selected.split("-").pop()?.toString();
  
//     const sizeRequiredCategories = [
//       "Jeans",
//       "Blouses",
//       "Shirt",
//       "Jackets",
//       "Jeans & Pants",
//       "Suits & Blazers",
//       "Sweaters",
//       "Sweats & Hoodies",
//       "TShirts & Shirts",
//       "Shorts",
//       "Coats & Jackets",
//       "Athletic wear",
//       "Footwear",
//       "Innerwear & Sleepwear"
//     ];
  
//     if (sizeRequiredCategories.includes(selectedCategory)) {
//       disp = "flex";
//     } else {
//       disp = "hidden";
//     }
//   }

// const ProductAddForm = () => {
// // chooseSize = <div><InputType1 onChange={handleSizeChange} needIcon={false} placeholder='Enter size' value={size}/><br /></div
//     const [brandValue, setBrandValue] = useState("");
//     const [title, setTitle] = useState("");
//     const [size, setSize] = useState("");
//     const [description, setDescription] = useState("");
//     const [price, setPrice] = useState("");
//     // const [condition, setCondition] = useState("");
//     const [defect, setDefect] = useState("");

//     const [loader, setLoader] = useState(false);
//     const [nextSlide, setNextSlide] = useState("flex");
//     const [nextDisp, setNextDisp] = useState("hidden");

//     const pathname = usePathname();

//     const {user, isLoading, userDetails} = useUser();

//     const router = useRouter();
    
//     useEffect(()=>{
//         if(!user && !isLoading && !userDetails){
//             router.push(`/login?redirectTo=${pathname}`)
//         }
//     },[user, isLoading, userDetails, router, pathname]);
//     // const [category, setCategory] = useState("");

//     const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setBrandValue(event.target.value);
//     }
//     const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setSize(event.target.value);
//     }
//     const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setTitle(event.target.value);
//     }
//     const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//         setDescription(event.target.value);
//     }
//     // const handleConditionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     //     setCondition(event.target.value);
//     // }
//     const handleDefectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setDefect(event.target.value);
//     }

//     const handlePriceChangge = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPrice(event.target.value);
//     }


//     const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);
    
//     const toggleDialog = () => setCategoryDialogOpen((prev) => !prev);

//     const [imagePreview, setImagePreview] = useState<string | null>();

//     const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const file = event.target.files?.[0]; // Get the selected file
//         if (file) {
//             const imageUrl = URL.createObjectURL(file); // Create a temporary URL
//             setImagePreview(imageUrl); // Set the state to update the background image
//         }
//     };

//     const adding = () => {
//         setLoader(true)
//     }

//     const callNextSlide = () => {
//         setNextSlide("hidden");
//         setNextDisp("flex");
//     }

//     const callPrevSlide = () => {
//         setNextSlide("flex");
//         setNextDisp("hidden");
//     }

//     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault(); // Prevent default form submission
    
//         const formData = new FormData(event.currentTarget); // Get form data
//         await UploadProduct(formData, router); // Call UploadProduct with form data and router
//       };

//     return (
//         // TODO: Allow COD or not checkbox
//         <form onSubmit={handleSubmit}>

//             {isLoading && (
//                 <div className='absolute z-10 gap-y-10 h-full w-full top-0 left-0 bg-pink-800 flex flex-col items-center justify-center'>
//                     <h1 className='text-white font-bold text-5xl'>Loading...</h1>
//                     <div className="loader"></div>
//                 </div>   
//             )}
//             {/* <CategoryBtn/> */}

//             {/* PHASE 1 start */}
//                 <div className={`flex-col gap-y-2 ${nextSlide}`}>
//                 <InputType1 onChange={handleTitleChange} name='title' value={title} needIcon={false} placeholder='Name of the product' title='Name of the product'  className='w-[400px] h-10 mb-2 focus:border-pink-300'/>
    
//                 {/* IMAGE UPLOAD BOX */}
//                 <h1 className='font-medium'>Add product image <span className='text-red-500 font-bold text-xs'>Upload a minimum of 3 images for a detailed product showcase</span></h1>
//                 <div
//                     style={{
//                         backgroundImage: imagePreview ? `url(${imagePreview})` : 'none',
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                     }}
//                     className='relative border-2 grid place-items-center border-pink-700 h-20 w-20 rounded-sm mb-2 cursor-pointer bg-slate-100 hover:bg-slate-200 transition-all duration-300'
//                 >
    
//                     {/* <BiSolidCameraPlus size={30} className='text-gray-400' /> */}
//                     {!imagePreview && <BiSolidCameraPlus size={30} className='text-gray-400' />}
//                     <input
//                         onChange={handleImageChange} 
//                         className='absolute cursor-pointer w-full h-full opacity-0' 
//                         accept="image/*" 
//                         type="file" 
//                         name='file'
//                     />
                
//                 </div>
    
//                 {/* Category  */}
//                 <div>
//                     <ButtonType1
//                         onClick={toggleDialog}
//                         className="w-[400px] rounded-md bg-white font-normal flex justify-start"
//                     >
//                         {selectedCategory}
//                     </ButtonType1>
    
//                     <Categories open={categoryDialogOpen} onClose={() => setCategoryDialogOpen(false)} />
//                     <InputType1 needIcon={false} name='category' value={selectedCategory} onChange={() => {return}} className='hidden'/>
//                 </div>
    
//                 <InputType1 name='size' className={`${disp} w-[400px] h-10 focus:border-pink-300`} onChange={handleSizeChange} needIcon={false} placeholder='Enter size' value={size}/>
//                 <input className='hidden' type="text" name='userId' value={user?.id ?? ""} onChange={()=>{}}/>
    
//                 {/* TODO: Already specified brands */}
//                 {/* <BrandBtn/> */}
    
//                 {/* <BrandInputBox/> */}
    
//                 {/* TODO: Add product condition star rating box also any defects box*/}
                
//                 {/* BRAND */}
//                 <textarea onChange={handleDescriptionChange} name='description' value={description} placeholder='Add Description' className='w-[400px] h-10 mb-2 focus:outline-pink-300 rounded-md p-2 h-20 outline-none'></textarea>
//                 <InputType1 onChange={handleBrandChange} name='brand' value={brandValue} needIcon={false} placeholder='Specify Brand Name' title='Specify brand'  className='w-[400px] h-10 focus:border-pink-300'/>

    
    
//                 {/* <InputType1 onChange={handleDefectChange} name='defect' value={defect} needIcon={false} placeholder='Specify any defect' className='w-[400px] h-10 mb-2 focus:border-pink-300'/> */}
//                 <a className='bg-pink-900 relative grid place-items-center font-bold h-10 cursor-pointer -bottom-3 rounded-md w-40 text-white' onClick={callNextSlide}>Next</a>
//                 </div>
        
//             {/* PHASE 1 end */}

//                 <div className={`flex-col gap-y-2 ${nextDisp}`}>
//                     <InputType1 onChange={handleDefectChange} name='defect' value={defect} needIcon={false} placeholder='Specify any defect' className='w-[400px] h-10 mb-2 focus:border-pink-300'/>
//                                     {/* RANGE ADD IN CONDITION 5star */}
                
//                     <div className="border border-black w-fit rounded-md px-2 gap-x-2 rating items-center flex-row-reverse">
//                         <h1>Rate the condition of the product</h1>
//                         <div>
//                             <input value="5" name="condition" id="star5" type="radio"/>
//                             <label htmlFor="star5"></label>
//                             <input value="4" name="condition" id="star4" type="radio"/>
//                             <label htmlFor="star4"></label>
//                             <input value="3" name="condition" id="star3" type="radio"/>
//                             <label htmlFor="star3"></label>
//                             <input value="2" name="condition" id="star2" type="radio"/>
//                             <label htmlFor="star2"></label>
//                             <input value="1" name="condition" id="star1" type="radio"/>
//                             <label htmlFor="star1"></label>
//                         </div>
//                     </div>

//                     {loader && (
//                     <div className='absolute z-10 gap-y-10 h-full w-full top-0 left-0 bg-pink-800 flex flex-col items-center justify-center'>
//                         <h1 className='text-white font-bold text-5xl'>Adding...</h1>
//                         <div className="loader"></div>
//                     </div>
//                 )}

//                     <InputType1 onChange={handlePriceChangge} name='price' iconbg='bg-transparent' type='number' value={price} needIcon={true} icon={<BiRupee className='-mt-2'/>} placeholder='Add pricing' className='w-[400px] h-10 mb-2 focus:border-pink-300'/>

//                     <div className='flex justify-between relative -bottom-3'>
//                         <a className='bg-pink-900 relative grid place-items-center font-bold h-10 cursor-pointer -bottom-3 rounded-md w-40 text-white' onClick={callPrevSlide}>Back</a>
//                         <ButtonType1 className='bg-pink-600 rounded-md w-40 text-white' type='submit' onClick={adding}>Post</ButtonType1>
//                     </div>
//                 </div>
//       </form>
//     )
// }

// export default ProductAddForm




// // TODO: Add price

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
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [defect, setDefect] = useState("");
    const [loader, setLoader] = useState(false);
    const [nextSlide, setNextSlide] = useState("flex");
    const [nextDisp, setNextDisp] = useState("hidden");
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

    return (
        <form onSubmit={handleSubmit}>
            {isLoading && (
                <div className='absolute z-10 gap-y-10 h-full w-full top-0 left-0 bg-pink-800 flex flex-col items-center justify-center'>
                    <h1 className='text-white font-bold text-5xl'>Loading...</h1>
                    <div className="loader"></div>
                </div>
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

                <textarea onChange={(e) => setDescription(e.target.value)} name='description' value={description} placeholder='Add Description' className='w-[400px] mb-2 focus:outline-pink-300 rounded-md p-2 h-20 outline-none'></textarea>
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
