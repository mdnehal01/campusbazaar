"use client";

import React, { useState } from 'react'
import InputType1 from './customs/inputType1';

const BrandInputBox = () => {
    const [brandValue, setBrandValue] = useState("");
    const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBrandValue(event.target.value);
    }
    return (
        <InputType1 onChange={handleBrandChange} name='brand' value={brandValue} needIcon={false} placeholder='Specify Brand Name' title='Specify brand'  className='w-64 h-10 focus:border-blue-300'/>
    )
}

export default BrandInputBox