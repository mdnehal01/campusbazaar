import React from 'react'
import { BiAlarm, BiBell, BiMoney, BiMoon, BiSun } from 'react-icons/bi';
import { BsMoon, BsSun } from 'react-icons/bs';
import { CgShoppingCart } from 'react-icons/cg';
import { FaFire, FaThemeco } from 'react-icons/fa6';
import { GiHotSpices, GiLoveHowl, GiLoveInjection, GiLoveLetter, GiLovers, GiLoveSong } from 'react-icons/gi';
import { SiWish } from 'react-icons/si';

function Nav() {
  return (
    <div className='h-20 px-10 pt-5 bg-transparent w-full font-semibold text-slate-600'>
        <div className="nav-items rounded-md h-full w-full flex items-center justify-between">
          <div className="nav-logo w-50 bg-purple-100 px-10 py-2 rounded-3xl">Campus Bazaar</div>        

          {/* For PC */}
          {/* TODO: For mobile */}

          <div className="nav-menu  w-50 bg-purple-100 px-10 py-2 rounded-3xl lg:flex gap-12 hidden">
            <div className="wishlist flex gap-2"> <GiLoveSong size={20}/> Wishlist</div>
            <div className="sell flex gap-2"> <BiMoney size={20}/> Sell</div>
            <div className="trending flex gap-2"> <FaFire size={20}/> Trending</div>
            <div className="notifications flex gap-2"> <BiBell size={20}/> Notifications</div>
          </div>
          <div className="nav-theme-cart flex gap-5">
            {/* TODO:  toggle  based on theme light or dark*/}
            <div className="nav-theme w-50 bg-purple-100 px-5 py-2 rounded-3xl flex gap-5"> <BiSun className='cursor-pointer' size={25}/>  <BiMoon className='cursor-pointer' size={25} /> </div>
            <div className="nav-cart w-50 bg-purple-100 px-5 py-2 rounded-3xl flex gap-2"> <CgShoppingCart className='cursor-pointer' size={25} />  Cart</div>
          </div>
          
        </div>
    </div>
  )
}

export default Nav;