import React from 'react'
import { CgArrowTopRight } from 'react-icons/cg'
import "./components.css"

const CategorySec = () => {
    return (
        <div className="md:w-[90%] w-[95%] ml-[50%] -translate-x-[50%] overflow-x-auto h-44 flex scrollbar-hide">
            <div className="flex gap-x-10 max-md:justify-start justify-start w-full whitespace-nowrap">

                {/* TODO: Make this as component */}
                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-50 -rotate-45">
                            <div 
                            // CHANGE
                                style={{ 
                                    backgroundImage: `url('/category/1.png')` 
                                }}
                                className="flex items-center justify-end flex-col rounded-full hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover top-0 h-16 w-16 md:h-24 md:w-24 left-0 rotate-45 absolute shadow-xl">   
                            </div>
                        </div>
                        <h2 className="text-sm text-slate-500 font-sans font-semibold"> Women </h2>
                    </div>

                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-50 -rotate-45">
                            <div 
                            // CHANGE
                                style={{ 
                                    backgroundImage: `url('/category/2.png')` 
                                }}
                                className="flex items-center justify-end flex-col rounded-full hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover top-0 h-16 w-16 md:h-24 md:w-24 left-0 rotate-45 absolute shadow-xl">   
                            </div>
                        </div>
                        <h2 className="text-sm text-slate-500 font-sans font-semibold"> Men </h2>
                    </div>

                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-50 -rotate-45">
                            <div 
                            // CHANGE
                                style={{ 
                                    backgroundImage: `url('/category/3.png')` 
                                }}
                                className="flex items-center justify-end flex-col rounded-full hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover top-0 h-16 w-16 md:h-24 md:w-24 left-0 rotate-45 absolute shadow-xl">   
                            </div>
                        </div>
                        <h2 className="text-sm text-slate-500 font-sans font-semibold"> Kids </h2>
                    </div>

                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-50 -rotate-45">
                            <div 
                            // CHANGE
                                style={{ 
                                    backgroundImage: `url('/category/4.png')` 
                                }}
                                className="flex items-center justify-end flex-col rounded-full hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover top-0 h-16 w-16 md:h-24 md:w-24 left-0 rotate-45 absolute shadow-xl">   
                            </div>
                        </div>
                        <h2 className="text-sm text-slate-500 font-sans font-semibold"> Accessories </h2>
                    </div>

                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-50 -rotate-45">
                            <div 
                            // CHANGE
                                style={{ 
                                    backgroundImage: `url('/category/5.png')` 
                                }}
                                className="flex items-center justify-end flex-col rounded-full hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover top-0 h-16 w-16 md:h-24 md:w-24 left-0 rotate-45 absolute shadow-xl">   
                            </div>
                        </div>
                        <h2 className="text-sm text-slate-500 font-sans font-semibold"> Makeup </h2>
                    </div>
                    
                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-50 -rotate-45">
                            <div 
                            // CHANGE
                                style={{ 
                                    backgroundImage: `url('/category/6.png')` 
                                }}
                                className="flex items-center justify-end flex-col rounded-full hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover top-0 h-16 w-16 md:h-24 md:w-24 left-0 rotate-45 absolute shadow-xl">   
                            </div>
                        </div>
                        <h2 className="text-sm text-slate-500 font-sans font-semibold"> Books </h2>
                    </div>

                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-50 -rotate-45">
                            <div 
                            // CHANGE
                                style={{ 
                                    backgroundImage: `url('/category/7.png')` 
                                }}
                                className="flex items-center justify-end flex-col rounded-full hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover top-0 h-16 w-16 md:h-24 md:w-24 left-0 rotate-45 absolute shadow-xl">   
                            </div>
                        </div>
                        <h2 className="text-sm text-slate-500 font-sans font-semibold"> Furniture </h2>
                    </div>

                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-50 -rotate-45">
                            <div 
                            // CHANGE
                                style={{ 
                                    backgroundImage: `url('/category/8.png')` 
                                }}
                                className="flex items-center justify-end flex-col rounded-full hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover top-0 h-16 w-16 md:h-24 md:w-24 left-0 rotate-45 absolute shadow-xl">   
                            </div>
                        </div>
                        <h2 className="text-sm text-slate-500 font-sans font-semibold"> Kitchen Appliances </h2>
                    </div>

                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-50 transform -rotate-45">
                            <div className="flex items-center justify-end flex-col rounded-full hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover bg-[url('https://imgs.search.brave.com/OdQ1lvj9IvN99PQUF8l2hbD-joUSpDtLjpQ1OlHMIe8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/ZWxlbWVudF9vdXIv/MjAyNDA2MTEvNjhj/NGIzZDA3MGE1OTQw/N2E2ODMxNDAyMGVk/MTliNTkucG5n')] top-0 h-16 w-16 md:h-24 md:w-24 left-0 rotate-45 absolute shadow-xl">
                                
                            </div>
                        </div>
                        <h2 className="text-sm text-slate-500 font-sans font-semibold"> Stove </h2>
                    </div>

                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-50 -rotate-45">
                            <div className="flex items-center justify-end flex-col rounded-full hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover bg-[url('https://imgs.search.brave.com/i5pZVjxnMMzrsyL6YS5WaoS9f-aHFPHrNkKo30ZamZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvU2Ft/c3VuZy1HYWxheHkt/UE5HLUZpbGUucG5n')] top-0 h-16 w-16 md:h-24 md:w-24 left-0 rotate-45 absolute shadow-xl">
                                
                            </div>
                        </div>
                        <h2 className="text-sm text-slate-500 font-sans font-semibold"> Mobile Phones </h2>
                    </div>

                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-50 transform -rotate-45">
                            <div className="flex items-center justify-end flex-col rounded-full hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-[url('https://imgs.search.brave.com/pxRgtyJ_CYsjnxYZMjM-iu8KXNz580AJg-waVTaEGiw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEvRWxl/Y3RyaWMtSXJvbi1Q/TkctUGhvdG9zLnBu/Zw')] bg-contain top-0 h-16 w-16 md:h-24 md:w-24 left-0 rotate-45 absolute shadow-xl">
                                
                            </div>
                        </div>
                        <h2 className="text-sm text-slate-500 font-sans font-semibold"> Electronics </h2>
                    </div>

                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-50 transform -rotate-45">
                            <div className="flex items-center justify-end flex-col rounded-full hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover bg-[url('/category/tools-hardware.jpeg')] top-0 h-16 w-16 md:h-24 md:w-24 left-0 rotate-45 absolute shadow-xl">
                                
                            </div>
                        </div>
                        <h2 className="text-sm text-slate-500 font-sans font-semibold"> Tools & Hardware </h2>
                    </div>

                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-50 -rotate-45">
                            <div className="flex items-center justify-end flex-col rounded-full hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover bg-[url('/category/health-wellness.jpeg')] top-0 h-16 w-16 md:h-24 md:w-24 left-0 rotate-45 absolute shadow-xl">
                                
                            </div>
                        </div>
                        <h2 className="text-sm text-slate-500 font-sans font-semibold"> Health & Wellness </h2>
                    </div>

                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-50 transform -rotate-45">
                            <div className="flex items-center justify-end flex-col rounded-full hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-[url('/category/hobbies-collectibles.jpeg')] bg-contain top-0 h-16 w-16 md:h-24 md:w-24 left-0 rotate-45 absolute shadow-xl">
                                
                            </div>
                        </div>
                        <h2 className="text-sm text-slate-500 font-sans font-semibold"> Hobbies & Collectibles </h2>
                    </div>

                    <div className="h-full flex justify-center items-center flex-col">
                        <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-50 transform -rotate-45">
                            <div className="flex items-center justify-end flex-col rounded-full hover:scale-105 cursor-pointer transition-all duration-300 bg-center bg-cover bg-[url('/category/travel-outdoors.jpeg')] top-0 h-16 w-16 md:h-24 md:w-24 left-0 rotate-45 absolute shadow-xl">
                                
                            </div>
                        </div>
                        <h2 className="text-sm text-slate-500 font-sans font-semibold"> Travel & Outdoors </h2>
                    </div>


                    
              
            </div>
        </div>
    )
}

export default CategorySec;
