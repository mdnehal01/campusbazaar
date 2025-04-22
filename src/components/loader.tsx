import React from "react";
import "@/components/css/loader.css"; // Ensure you import the CSS file



const TruckLoader: React.FC = () => {
  return (
    <div className="h-[calc(100vh-80px)] bg-pink-700 grid place-items-center">
      <div className="loader"></div>
    </div>
  );
};

export default TruckLoader;
