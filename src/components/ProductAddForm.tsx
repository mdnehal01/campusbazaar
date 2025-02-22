"use client"
import React, { useState } from 'react'
// import CategoryBtn from './CategoryBtn'
// import BrandInputBox from './BrandInputBox'
import ButtonType1 from './customs/buttontype1'
import Categories from './Categories'
import InputType1 from './customs/inputType1'
import "./css/ProductAddForm.css"
import { UploadProduct } from '@/actions/uploadProduct'
import { useUser } from '@/hooks/useUser'
import { FaCamera } from 'react-icons/fa'
import { BiSolidCameraPlus } from 'react-icons/bi'

let selectedCategory = "Choose a category"
let disp = "hidden";

export const sendSelected = (selected:string) =>{
    // @ts-expect-error let it be
    selectedCategory = selected.split("-").pop()?.toString();
    if(selectedCategory == "Jeans" || 
      selectedCategory == "Blouses" || 
      selectedCategory == "Shirt" || 
      selectedCategory == "Jackets" ||
      selectedCategory == "Jeans & Pants"
    ){
        disp = "flex"
    }else{
        disp = "hidden"
    }
}

const ProductAddForm = () => {
// chooseSize = <div><InputType1 onChange={handleSizeChange} needIcon={false} placeholder='Enter size' value={size}/><br /></div
    const [brandValue, setBrandValue] = useState("");
    const [size, setSize] = useState("");

    const {user} = useUser();
    // const [category, setCategory] = useState("");

    const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBrandValue(event.target.value);
    }
    const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSize(event.target.value);
    }
    
    const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);
    
    const toggleDialog = () => setCategoryDialogOpen((prev) => !prev);

    // const handleSubmit = () => {
   
    // }
    return (
        <form className='flex flex-col gap-y-2' action={UploadProduct}>
            {/* <CategoryBtn/> */}
            <div>
                <ButtonType1
                    onClick={toggleDialog}
                    className="w-64 rounded-md bg-white font-normal flex justify-start"
                >
                    {selectedCategory}
                </ButtonType1>

                <Categories open={categoryDialogOpen} onClose={() => setCategoryDialogOpen(false)} />
                <InputType1 needIcon={false} name='category' value={selectedCategory} onChange={() => {return}} className='hidden'/>
            </div>

            <InputType1 name='size' className={`${disp} w-64 h-10 focus:border-blue-300`} onChange={handleSizeChange} needIcon={false} placeholder='Enter size' value={size}/>
            <input className='hidden' type="text" name='userId' value={user?.id ?? ""} onChange={()=>{}}/>

            {/* TODO: Already specified brands */}
            {/* <BrandBtn/> */}

            {/* <BrandInputBox/> */}
            
            <InputType1 onChange={handleBrandChange} name='brand' value={brandValue} needIcon={false} placeholder='Specify Brand Name' title='Specify brand'  className='w-64 h-10 focus:border-blue-300'/>

            <div className='relative border-2 grid place-items-center border-pink-700 h-20 w-20 rounded-sm mt-2 cursor-pointer bg-slate-100 hover:bg-slate-200 transition-all duration-300'>
                <BiSolidCameraPlus size={30} className='text-gray-400' />
                <input className='absolute cursor-pointer w-full h-full opacity-0' type="file" name='file'/>
            </div>


            <ButtonType1 className='bg-pink-900 rounded-md w-40 text-white absolute bottom-3 right-3' type='submit'>Add</ButtonType1>
      </form>
    )
}

export default ProductAddForm