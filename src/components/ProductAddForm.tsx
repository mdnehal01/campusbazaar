"use client"
import React, { useState } from 'react'
// import CategoryBtn from './CategoryBtn'
// import BrandInputBox from './BrandInputBox'
import ButtonType1 from './customs/buttontype1'
import Categories from './Categories'
import InputType1 from './customs/inputType1'

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

    const handleSubmit = () => {
        alert(selectedCategory)
        alert(brandValue)
        alert(size)
    }
    return (
        <form className='flex flex-col gap-y-2' method='post' action="" onSubmit={handleSubmit}>
            {/* <CategoryBtn/> */}
            <div>
                <ButtonType1
                    onClick={toggleDialog}
                    className="w-64 rounded-md bg-white font-normal flex justify-start"
                >
                    {selectedCategory}
                </ButtonType1>

                <Categories open={categoryDialogOpen} onClose={() => setCategoryDialogOpen(false)} />
            </div>

            <InputType1 className={`${disp} w-64 h-10 focus:border-blue-300`} onChange={handleSizeChange} needIcon={false} placeholder='Enter size' value={size}/>

            {/* TODO: Already specified brands */}
            {/* <BrandBtn/> */}

            {/* <BrandInputBox/> */}
            <InputType1 onChange={handleBrandChange} name='brand' value={brandValue} needIcon={false} placeholder='Specify Brand Name' title='Specify brand'  className='w-64 h-10 focus:border-blue-300'/>

            {/* <Image src={"/logo/brands/cart.png"} alt='cart' width={200} height={300}/> */}

            <ButtonType1 className='bg-pink-900 rounded-md w-40 text-white absolute bottom-3 right-3' type='submit'>Add</ButtonType1>
      </form>
    )
}

export default ProductAddForm