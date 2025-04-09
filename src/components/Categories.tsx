import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import category from "@/data/category";
import { useState } from "react";
import { sendSelected } from "./ProductAddForm"; 

interface CategoriesProps {
  open: boolean;
  onClose: () => void;
}

const Categories: React.FC<CategoriesProps> = ({ open, onClose }) => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("");

  if (!open) return null;

  const sendData = (uniqueKey: string) => {
    setSelectedCategory(uniqueKey);
  };

  const handleOthersValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="mt-[50px]  overflow-y-auto w-[calc(100%-100px)] h-[calc(100%-150px)] p-10 backdrop-blur-lg rounded-3xl absolute top-1/2 left-1/2 z-50 -translate-y-1/2 shadow-md -translate-x-1/2 bg-slate-100">
      <Accordion type="single" collapsible className="w-full">
        {Object.keys(category).map((mainCategoryKey) => {
          // @ts-expect-error type any
          const mainCategory = category[mainCategoryKey];
          return (
            <AccordionItem className="pb-9 pt-2" key={mainCategoryKey} value={mainCategoryKey}>
              <AccordionTrigger className="text-lg">
                {mainCategory.titleMain}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-14">
                {Object.keys(mainCategory).map((subCategoryKey) => {
                  if (subCategoryKey === "titleMain") return null; // Skip titleMain
                  const subCategory = mainCategory[subCategoryKey];
                  return (
                    <div key={subCategoryKey} className="flex flex-col gap-y-5">
                      <h1 className="text-md font-bold">{subCategory.titleSub}</h1>
                      <div className="w-full grid grid-cols-8 gap-4">
                        {Object.keys(subCategory).map((itemKey) => {
                          if (itemKey === "titleSub") return null; // Skip titleSub
                          const item = subCategory[itemKey];
                          const uniqueKey = `${mainCategoryKey}-${subCategoryKey}-${itemKey}`; // Create a unique key
    
                          return (
                            <div
                              key={itemKey}
                              onClick={() => sendData(uniqueKey)} // Use uniqueKey as the identifier
                              className={`cursor-pointer gap-y-4 hover:border-pink-400 hover:bg-pink-100 p-3 w-[120px] h-[150px] rounded-md border ${
                                selectedCategory === uniqueKey
                                  ? "bg-pink-100 border-pink-500"
                                  : "border-neutral-200"
                              } flex flex-col items-center`}
                            >
                              <Image
                                src={item.imgLink}
                                alt={item.titleSubSub}
                                width={80}
                                height={80}
                              />
                              <p>{item.titleSubSub}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </AccordionContent>
          
              
            </AccordionItem>
            
          );
        })}
      </Accordion>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem className="pb-9 pt-2" value="OtherValue" key="Others">
          <AccordionTrigger className="text-lg">
            Others?
          </AccordionTrigger>
          <AccordionContent>
            Please mention the category. <br />
            <input className="h-10 w-56 p-2 border" type="text" onChange={handleOthersValue} placeholder=""/>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      

      <div className="fixed bottom-10 right-12 flex gap-x-5">
        <button
          className="w-24 rounded-md bg-pink-400 text-white py-2"
          onClick={() => {
            onClose();
            sendSelected(selectedCategory);
          }}
        >
          Ok
        </button>

        <button
          className="w-24 rounded-md bg-gray-400 text-white py-2"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Categories;
