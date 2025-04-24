import React from "react";
import "@/components/css/loader.css"; // Ensure you import the CSS file



const TruckLoader: React.FC = () => {
  return (
    <div className="z-50 absolute top-0 left-0 h-[calc(100vh-80px)] w-screen bg-gradient-to-tr from-emerald-500 to-emerald-800 grid place-items-center">
      <div className="loader"></div>
    </div>
  );
};

export default TruckLoader;
