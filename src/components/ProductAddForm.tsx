"use client"
import React, { useState } from 'react'
import CategoryBtn from './CategoryBtn'
import BrandInputBox from './BrandInputBox'

const ProductAddForm = () => {
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");

    return (
        <form action="" onSubmit={()=>alert()}>
            <CategoryBtn/>
            <br />
            {/* TODO: Already specified brands */}
            {/* <BrandBtn/> */}

            <BrandInputBox/>
            {/* <Image src={"/logo/brands/cart.png"} alt='cart' width={200} height={300}/> */}

        <button type='submit'>OK</button>
      </form>
    )
}

export default ProductAddForm