"use client"

import React from "react";
import InputType1 from "./customs/inputType1";
import { FaSearch } from "react-icons/fa";

import { useState } from "react";
import Image from "next/image";
import { processRecords } from "@/lib/algoliaClient";
import AlgoliaSearch from "./AlgoliaSearch";

const Hero = () => {

  const [search, setSearch] = useState("What are you looking for?");

  const handleSearch = () => {
    setSearch("Searched");
  }

  processRecords()

  return (
    <div className="md:h-fit flex flex-col h-96 w-full pb-10 lg:px-20 px-5 relative">
      <div className="tagline mt-10 flex items-center justify-between flex-col h-[450px]">
        {/* <h1 className="md:text-6xl text-4xl font-serif">Campus Bazaar</h1> */}
        <Image loading="lazy" src="/logo/cb-logo-remove.png" className="mt-20 md:scale-100 scale-75" height={100} width={300} alt="logo"/>

        <h2 className="font-sans mb-80 font-semibold text-l"> Where Students Trade Smart – Buy, Sell, Save... <br/> Smart Swaps, Big Savings – Welcome to Campus Bazaar! </h2>
        {/* <h2 className="text-5xl">Buy, Sell, Reuse</h2> */}
        <div className="flex md:justify-start justify-center md:absolute top-0 lg:-right-64 md:-right-44 md:rotate-90 rotate-0 origin-top-left md:flex-col flex-row">
          <h1 className="font-extrabold lg:text-7xl md:text-5xl text-xl flex flex-col top-0 right-0 origin-top-left bg-gradient-to-r from-[#99daff] dark:from-[red] to-[#99b9ff] text-transparent bg-clip-text">BUY &nbsp;</h1>
          <h1 className="font-extrabold lg:text-7xl md:text-5xl text-xl flex flex-col top-0 right-0 origin-top-left bg-gradient-to-r from-[#99f0ff] to-[#9a84ff] text-transparent bg-clip-text">SELL &nbsp;</h1>
          <h1 className="font-extrabold lg:text-7xl md:text-5xl text-xl flex flex-col top-0 right-0 origin-top-left bg-gradient-to-r from-[#99ffe0] to-[#d199ff] text-transparent bg-clip-text">REUSE &nbsp;</h1>
        </div>
        <div className="absolute bottom-10 z-10 left-1/2 -translate-x-1/2">
          <AlgoliaSearch/>
        </div>
        {/* <InputType1 iconbg="bg-pink-500" needIcon={true} icon={<FaSearch className="text-white"/>} placeholder={search} onclick={handleSearch} className="relative bg-white rounded-full border-neutral-400 focus:border-pink-200 outline-none md:w-[500px] w-[300px] focus:bg-neutral-100 md:focus:w-[700px] focus:w-[350px] transition-all duration-300"/> */}
      </div>
    </div>
  );
}

export default Hero;