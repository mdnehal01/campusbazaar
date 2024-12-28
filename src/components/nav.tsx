"use client"

import React from 'react'
import { BiMenu, BiMoon, BiSun } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';
import { NavigationMenuDemo } from './navMenu';
import Link from 'next/link';
import { useUser } from '@/hooks/useUser';

function Nav() {
  const { user } = useUser();
  return (
    <div className="h-20 md:px-10 px-4 w-full bg-white/50 font-semibold text-slate-600">
        <div className="nav-items rounded-md h-full w-full flex items-center justify-between">

          {/* Logo for PC : NEHAL */}
          <div className="nav-logo w-50 bg-[#EBF0FE] md:flex hidden px-10 py-2 rounded-3xl"><Link href='/' >Campus Bazaar</Link></div>     

          {/* Logo For Phone : NEHAL */}
          <div className="nav-logo bg-[#EBF0FE] flex md:hidden rounded-full p-2">CB</div>

          {/* For PC */}

          <div className="nav-menu  w-50 bg-[#EBF0FE] rounded-3xl lg:flex gap-12 hidden">
            {/* <div className="wishlist cursor-pointer flex gap-2">Wishlist</div>
            <div className="sell cursor-pointer flex gap-2">Sell</div>
            <div className="trending cursor-pointer flex gap-2">Trending</div>
            <div className="notifications cursor-pointer flex gap-2">Notifications</div> */}

            {/* ADD: Nehal */}
            <NavigationMenuDemo/>
          </div>


          {/* Theme toggle for PC */}
          <div className="nav-theme-cart md:flex gap-5 flex">
            {/* TODO:  toggle  based on theme light or dark*/}
            <div className="nav-theme w-50 bg-[#EBF0FE] px-5 py-2 rounded-3xl gap-5 md:flex hidden"> <BiSun className='cursor-pointer' size={23}/>  <BiMoon className='cursor-pointer' size={25} /> </div>
            <div className="nav-cart md:w-50 bg-[#EBF0FE] md:px-5 md:py-2 px-2 py-2 rounded-3xl flex gap-2"> <CgShoppingCart className='cursor-pointer' size={23} />  <span className='lg:flex hidden'>Cart</span></div>

                      {/* TODO: For mobile Theme toggle will also be in this dropdown */}
          <div className='nav-menu p-2 bg-[#EBF0FE] rounded-3xl flex gap-12 lg:hidden'>
            <BiMenu className='text-black' size={25}/>
          </div>
          </div>

          
        </div>
    </div>
  )
}

export default Nav;