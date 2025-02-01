"use client"
import React, { useState } from 'react'
// import CategoryBtn from './CategoryBtn'
// import BrandInputBox from './BrandInputBox'
import ButtonType1 from './customs/buttontype1'
import Categories from './Categories'
import InputType1 from './customs/inputType1'
import "./css/ProductAddForm.css"
import { UploadProduct } from '@/actions/uploadProduct'

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

            {/* TODO: Already specified brands */}
            {/* <BrandBtn/> */}

            {/* <BrandInputBox/> */}
            <InputType1 onChange={handleBrandChange} name='brand' value={brandValue} needIcon={false} placeholder='Specify Brand Name' title='Specify brand'  className='w-64 h-10 focus:border-blue-300'/>

            {/* <Image src={"/logo/brands/cart.png"} alt='cart' width={200} height={300}/> */}


            {/* <label className="file-upload-label" htmlFor="file">
                <div className="file-upload-design">
                    <svg height="1em" viewBox="0 0 640 512">
                        <path
                            d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                        ></path>
                    </svg>
                    <p>Drag and Drop</p>
                    <p>or</p>
                    <span className="browse-button">Browse file</span>
                </div>
                <input type="file" id="file" name="file" />
            </label> */}

            <input type="file" name='file'/>


            <ButtonType1 className='bg-pink-900 rounded-md w-40 text-white absolute bottom-3 right-3' type='submit'>Add</ButtonType1>
      </form>
    )
}

export default ProductAddForm