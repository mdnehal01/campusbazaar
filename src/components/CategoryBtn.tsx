'use client';
import React, { useState } from 'react';
import ButtonType1 from './customs/buttontype1';
import Categories from './Categories';

let selectedCategory = "Choose a category"
export const sendSelected = (selected:string) =>{
    // @ts-expect-error let it be
    selectedCategory = selected.split("-").pop()?.toString();
}

const CategoryBtn = () => {
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
      <Categories open={categoryDialogOpen} onClose={() => setCategoryDialogOpen(false)} />
    </div>
  );
};

export default CategoryBtn;
