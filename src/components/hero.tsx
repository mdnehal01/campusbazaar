"use client"

import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/backgrount-beams";


const Hero = () => {
  return (
    <BackgroundBeamsWithCollision className="md:h-screen flex flex-col h-96 w-full px-10">
      <div className="h-1/2 w-full flex">
        <div className="h-full w-1/3 flex items-center">
          <h1 className="font-bold xl:text-9xl lg:text-7xl text-2xl">Campus</h1>
        </div>
        <div className="h-full w-1/3 flex justify-center items-center">
          
        </div>
        <div className="h-full w-1/3 flex justify-end items-center">
          <h1 className="font-thin xl:text-9xl lg:text-7xl text-2xl">Bazaar</h1>
        </div>
      </div>
      <div className="h-1/2 w-full">
        <div className="h-1/2 w-full"></div>
        <div className="h-1/2 w-full"></div>
      </div>

    </BackgroundBeamsWithCollision>
  );
}

export default Hero;