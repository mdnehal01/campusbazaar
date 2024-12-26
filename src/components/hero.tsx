"use client"

import React from "react";
import InputType1 from "./customs/inputType1";
import { FaSearch } from "react-icons/fa";

import { useState } from "react";

const Hero = () => {

  const [search, setSearch] = useState("What are you looking for?");

  const handleSearch = () => {
    setSearch("Searched");
  }

  return (
    <div className="md:h-[500px] flex flex-col h-96 w-full lg:px-20 px-5 relative">
      <div className="tagline flex items-center justify-between pt-36  flex-col h-[400px]">
        <h1 className="md:text-6xl text-4xl font-serif">Campus Bazaar</h1>
        <h2 className="text-xl -mt-16 text-neutral-600 text-center">Explore work from the most talented <br /> and accomplished designers ready to take on your next project</h2>
        {/* <h2 className="text-5xl">Buy, Sell, Reuse</h2> */}
        <div className="flex md:justify-start justify-center md:absolute top-0 lg:-right-64 md:-right-44 md:rotate-90 rotate-0 origin-top-left md:flex-col flex-row">
          <h1 className="font-extrabold lg:text-7xl md:text-5xl text-xl flex flex-col top-0 right-0 origin-top-left bg-gradient-to-r from-[#99daff] to-[#99b9ff] text-transparent bg-clip-text">BUY</h1>
          <h1 className="font-extrabold lg:text-7xl md:text-5xl text-xl flex flex-col top-0 right-0 origin-top-left bg-gradient-to-r from-[#99f0ff] to-[#9a84ff] text-transparent bg-clip-text">RESELL</h1>
          <h1 className="font-extrabold lg:text-7xl md:text-5xl text-xl flex flex-col top-0 right-0 origin-top-left bg-gradient-to-r from-[#99ffe0] to-[#d199ff] text-transparent bg-clip-text">REUSE</h1>
        </div>

        <InputType1 iconbg="bg-blue-500" needIcon={true} icon={<FaSearch className="text-white"/>} placeholder={search} onclick={handleSearch} className="relative bg-white rounded-full border-neutral-400 focus:border-blue-200 outline-none w-[500px] focus:bg-neutral-100 focus:w-[700px] transition-all duration-300"/>
      </div>
    </div>
  );
}

export default Hero;







// <div className="search h-28 p-8">
//         <InputType1 className="md:w-[400px] w-[200px]" placeholder="Search for categories"/>
//       </div>
//       <div className="h-[500px] w-full flex gap-x-5">

//         <div className="h-full flex justify-end items-center">

//           <div className="relative w-52 h-72 rounded-[2.5rem] bg-gradient-to-r from-blue-100 to-purple-50 transform -rotate-45">
//             <div className="flex items-center justify-end flex-col rounded-[2.5rem] hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover bg-[url('https://img.freepik.com/free-vector/flat-design-mountain-landscape_23-2149172160.jpg?t=st=1735210344~exp=1735213944~hmac=65dbb09b6742a5af21ec04925f2c831b195f2d50f0ef9d3cfb3758945d13cadd&w=1380')] top-0 h-72 w-52 left-0 rotate-45 absolute shadow-xl">
//               <div className="bg-gradient-to-r from-neutral-700 to-neutral-500 rounded-full h-10 w-10 absolute top-7 right-7 flex items-center justify-center">
//                 <CgArrowTopRight className="text-white"/>
//               </div>
//               <div className="flex flex-col p-8">
//                 <h1 className="text-white text-lg">New Collection</h1>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="h-full flex justify-end items-center">

//           <div className="relative w-52 h-72 rounded-[2.5rem] bg-gradient-to-r from-blue-100 to-purple-50 transform -rotate-45">
//             <div className="flex items-center justify-end flex-col rounded-[2.5rem] hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover bg-[url('https://img.freepik.com/free-vector/flat-design-mountain-landscape_23-2149172160.jpg?t=st=1735210344~exp=1735213944~hmac=65dbb09b6742a5af21ec04925f2c831b195f2d50f0ef9d3cfb3758945d13cadd&w=1380')] top-0 h-72 w-52 left-0 rotate-45 absolute shadow-xl">
//               <div className="bg-gradient-to-r from-neutral-700 to-neutral-500 rounded-full h-10 w-10 absolute top-7 right-7 flex items-center justify-center">
//                 <CgArrowTopRight className="text-white"/>
//               </div>
//               <div className="flex flex-col p-8">
//                 <h1 className="text-white text-lg">New Collection</h1>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="h-full flex justify-end items-center">

//           <div className="relative w-52 h-72 rounded-[2.5rem] bg-gradient-to-r from-blue-100 to-purple-50 transform -rotate-45">
//             <div className="flex items-center justify-end flex-col rounded-[2.5rem] hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover bg-[url('https://img.freepik.com/free-vector/flat-design-mountain-landscape_23-2149172160.jpg?t=st=1735210344~exp=1735213944~hmac=65dbb09b6742a5af21ec04925f2c831b195f2d50f0ef9d3cfb3758945d13cadd&w=1380')] top-0 h-72 w-52 left-0 rotate-45 absolute shadow-xl">
//               <div className="bg-gradient-to-r from-neutral-700 to-neutral-500 rounded-full h-10 w-10 absolute top-7 right-7 flex items-center justify-center">
//                 <CgArrowTopRight className="text-white"/>
//               </div>
//               <div className="flex flex-col p-8">
//                 <h1 className="text-white text-lg">New Collection</h1>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="h-full flex justify-end items-center">

//           <div className="relative w-52 h-72 rounded-[2.5rem] bg-gradient-to-r from-blue-100 to-purple-50 transform -rotate-45">
//             <div className="flex items-center justify-end flex-col rounded-[2.5rem] hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover bg-[url('https://img.freepik.com/free-vector/flat-design-mountain-landscape_23-2149172160.jpg?t=st=1735210344~exp=1735213944~hmac=65dbb09b6742a5af21ec04925f2c831b195f2d50f0ef9d3cfb3758945d13cadd&w=1380')] top-0 h-72 w-52 left-0 rotate-45 absolute shadow-xl">
//               <div className="bg-gradient-to-r from-neutral-700 to-neutral-500 rounded-full h-10 w-10 absolute top-7 right-7 flex items-center justify-center">
//                 <CgArrowTopRight className="text-white"/>
//               </div>
//               <div className="flex flex-col p-8">
//                 <h1 className="text-white text-lg">New Collection</h1>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="h-full flex justify-end items-center">

//           <div className="relative w-52 h-72 rounded-[2.5rem] bg-gradient-to-r from-blue-100 to-purple-50 transform -rotate-45">
//             <div className="flex items-center justify-end flex-col rounded-[2.5rem] hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover bg-[url('https://img.freepik.com/free-vector/flat-design-mountain-landscape_23-2149172160.jpg?t=st=1735210344~exp=1735213944~hmac=65dbb09b6742a5af21ec04925f2c831b195f2d50f0ef9d3cfb3758945d13cadd&w=1380')] top-0 h-72 w-52 left-0 rotate-45 absolute shadow-xl">
//               <div className="bg-gradient-to-r from-neutral-700 to-neutral-500 rounded-full h-10 w-10 absolute top-7 right-7 flex items-center justify-center">
//                 <CgArrowTopRight className="text-white"/>
//               </div>
//               <div className="flex flex-col p-8">
//                 <h1 className="text-white text-lg">New Collection</h1>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="h-full flex justify-end items-center">

//           <div className="relative w-52 h-72 rounded-[2.5rem] bg-gradient-to-r from-blue-100 to-purple-50 transform -rotate-45">
//             <div className="flex items-center justify-end flex-col rounded-[2.5rem] hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover bg-[url('https://img.freepik.com/free-vector/flat-design-mountain-landscape_23-2149172160.jpg?t=st=1735210344~exp=1735213944~hmac=65dbb09b6742a5af21ec04925f2c831b195f2d50f0ef9d3cfb3758945d13cadd&w=1380')] top-0 h-72 w-52 left-0 rotate-45 absolute shadow-xl">
//               <div className="bg-gradient-to-r from-neutral-700 to-neutral-500 rounded-full h-10 w-10 absolute top-7 right-7 flex items-center justify-center">
//                 <CgArrowTopRight className="text-white"/>
//               </div>
//               <div className="flex flex-col p-8">
//                 <h1 className="text-white text-lg">New Collection</h1>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="h-full flex justify-end items-center">

//           <div className="relative w-52 h-72 rounded-[2.5rem] bg-gradient-to-r from-blue-100 to-purple-50 transform -rotate-45">
//             <div className="flex items-center justify-end flex-col rounded-[2.5rem] hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover bg-[url('https://img.freepik.com/free-vector/flat-design-mountain-landscape_23-2149172160.jpg?t=st=1735210344~exp=1735213944~hmac=65dbb09b6742a5af21ec04925f2c831b195f2d50f0ef9d3cfb3758945d13cadd&w=1380')] top-0 h-72 w-52 left-0 rotate-45 absolute shadow-xl">
//               <div className="bg-gradient-to-r from-neutral-700 to-neutral-500 rounded-full h-10 w-10 absolute top-7 right-7 flex items-center justify-center">
//                 <CgArrowTopRight className="text-white"/>
//               </div>
//               <div className="flex flex-col p-8">
//                 <h1 className="text-white text-lg">New Collection</h1>
//               </div>
//             </div>
//           </div>
//         </div>


//       </div>
      
//       <div className="h-[1000px] w-full flex">
//         <div className="h-full w-2/5"></div>
//         <div className="h-full w-3/5 px-10 py-10 pt-20">
//           <div className="w-full h-full border border-gray-300 hover:border-transparent delay-300 transition-all duration-300 rounded-[2.5rem] relative">
//             <div className="absolute hover:top-0 hover:right-0 transition-all duration-300 -top-14 -right-14 p-[2.5rem] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-100 to-sky-100 h-full w-full rounded-[2.5rem]">
//               <div className="h-8 w-36 rounded-[2.5rem] px-3 bg-white flex justify-center items-center">
//                 <p className="text-xs bg-gradient-to-r from-purple-400 via-sky-300 to-indigo-400 inline-block text-transparent bg-clip-text">Collection on sale</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>