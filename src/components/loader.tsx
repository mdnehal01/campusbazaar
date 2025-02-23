import React from "react";
import "@/components/css/loader.css"; // Ensure you import the CSS file

const TruckLoader: React.FC = () => {
  return (
    <div className="loader">
      <div className="truckWrapper">
        {/* Truck Body */}
        <div className="truckBody">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="130"
            height="60"
            fill="currentColor"
          >
            <rect x="4" y="8" width="16" height="8" rx="2" ry="2" fill="#4A90E2" />
            <rect x="1" y="10" width="3" height="5" rx="1" ry="1" fill="gray" />
            <rect x="20" y="10" width="3" height="5" rx="1" ry="1" fill="gray" />
          </svg>
        </div>
        cxcas

        {/* Truck Tires */}
        <div className="truckTires">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
            <circle cx="12" cy="12" r="10" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>

        {/* Road */}
        <div className="road"></div>

        {/* Lamp Post */}
        <svg className="lampPost" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <rect x="10" y="0" width="4" height="90" fill="gray" />
          <circle cx="12" cy="5" r="4" fill="yellow" />
        </svg>
      </div>
    </div>
  );
};

export default TruckLoader;
