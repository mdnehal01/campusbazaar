
  import Image from "next/image";
  import brand from "@/data/brand";
  import { useState } from "react";
  import { sendSelected } from "./BrandBtn";
  
  interface BrandsProps {
    open: boolean;
    onClose: () => void;
  }
  
  const Brands: React.FC<BrandsProps> = ({ open, onClose }) => {
    // State to track the selected brand
    const [selectedBrand, setSelectedBrand] = useState("");
  
    if (!open) return null;
  
    const sendData = (uniqueKey: string) => {
      setSelectedBrand(uniqueKey);
    };
  
    return (
      <div className="overflow-y-auto w-[calc(100%-100px)] h-[calc(100%-100px)] p-10 backdrop-blur-lg rounded-3xl absolute top-1/2 left-1/2 -translate-y-1/2 shadow-md -translate-x-1/2 bg-slate-50">

        <Image src={"/logo/brands/Forever21.webp"} alt="" height={100} width={200}/>  
      
        <div className="fixed bottom-10 right-12 flex gap-x-5">
          <button
            className="w-24 rounded-md bg-pink-400 text-white py-2"
            onClick={() => {
              onClose();
              sendSelected(selectedBrand);
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
  
  export default Brands;
  