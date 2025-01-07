"use client"
import React, { useState } from 'react'
import CategoryBtn from './CategoryBtn'
import BrandInputBox from './BrandInputBox'
'use client';
import React, { useEffect, useState } from 'react';
import ButtonType1 from './customs/buttontype1';
import Categories from './Categories';
import { useUser } from '@/hooks/useUser';
import { useRouter } from 'next/navigation';

let selectedCategory = "Choose a category"
let chooseSize = <></>;

export const sendSelected = (selected:string) =>{
    // @ts-expect-error let it be
    selectedCategory = selected.split("-").pop()?.toString();
    if(selectedCategory == "Jeans" || 
      selectedCategory == "Blouses" || 
      selectedCategory == "Shirt" || 
      selectedCategory == "Jackets" ||
      selectedCategory == "Jeans & Pants"
    ){
      chooseSize = <div><br /><h1>Select a size</h1></div>
    }else{
      chooseSize = <></>
    }
}

const CategoryBtn = () => {

      const { user, isLoading } = useUser();
      const router = useRouter();
      

      useEffect(() => {
          if(!isLoading && !user) {
              router.replace('/login')
          }
      }, [isLoading, user, router]);

  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);

  const toggleDialog = () => setCategoryDialogOpen((prev) => !prev);

  return (
    <div>
      <ButtonType1
        onClick={toggleD'use client';
import React, { useEffect, useState } from 'react';
import ButtonType1 from './customs/buttontype1';
import Categories from './Categories';
import { useUser } from '@/hooks/useUser';
import { useRouter } from 'next/navigation';

let selectedCategory = "Choose a category"
let chooseSize = <></>;

export const sendSelected = (selected:string) =>{
    // @ts-expect-error let it be
    selectedCategory = selected.split("-").pop()?.toString();
    if(selectedCategory == "Jeans" || 
      selectedCategory == "Blouses" || 
      selectedCategory == "Shirt" || 
      selectedCategory == "Jackets" ||
      selectedCategory == "Jeans & Pants"
    ){
      chooseSize = <div><br /><h1>Select a size</h1></div>
    }else{
      chooseSize = <></>
    }
}

const CategoryBtn = () => {

      const { user, isLoading } = useUser();
      const router = useRouter();
      

      useEffect(() => {
          if(!isLoading && !user) {
              router.replace('/login')
          }
      }, [isLoading, user, router]);

  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);

  const toggleDialog = () => setCategoryDialogOpen((prev) => !prev);

  return (
    <div>
      <ButtonType1
        onClick={toggleDialog}
        className="w-64 rounded-md bg-white font-normal flex justify-start"
      >
        {selectedCategory}
      </ButtonType1>

      {chooseSize}

      <Categories open={categoryDialogOpen} onClose={() => setCategoryDialogOpen(false)} />
    </div>
  );
};

export default CategoryBtn;
ialog}
        className="w-64 rounded-md bg-white font-normal flex justify-start"
      >
        {selectedCategory}
      </ButtonType1>

      {chooseSize}

      <Categories open={categoryDialogOpen} onClose={() => setCategoryDialogOpen(false)} />
    </div>
  );
};

export default CategoryBtn;

const ProductAddForm = () => {
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");

    return (
        <div>
            <CategoryBtn/>
            <br />
            {/* TODO: Already specified brands */}
            {/* <BrandBtn/> */}

            <BrandInputBox/>
            {/* <Image src={"/logo/brands/cart.png"} alt='cart' width={200} height={300}/> */}

        <button type='submit'>OK</button>
      </div>
    )
}

export default ProductAddForm