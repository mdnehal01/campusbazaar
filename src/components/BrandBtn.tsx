'use client';
import React, { useState } from 'react';
import ButtonType1 from './customs/buttontype1';
import Categories from './Categories';

let selectedBrand = "Choose a brand"
export const sendSelected = (selected:string) =>{
    // @ts-expect-error let it be
    selectedBrand = selected.split("-").pop()?.toString();
}

const BrandBtn = () => {
  const [brandDialogOpen, setBrandDialogOpen] = useState(false);

  const toggleDialog = () => setBrandDialogOpen((prev) => !prev);

  return (
    <div>
      <ButtonType1
        onClick={toggleDialog}
        className="w-64 rounded-md bg-white font-normal flex justify-start"
      >
        {selectedBrand}
      </ButtonType1>
      <Categories open={brandDialogOpen} onClose={() => setBrandDialogOpen(false)} />
    </div>
  );
};

export default BrandBtn;