import React from 'react'
import { BiMoon, BiSun } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';
import { NavigationMenuDemo } from './navMenu';

function Nav() {
  return (
    <div className='h-20 px-10 pt-5 bg-transparent w-full font-semibold text-slate-600'>
        <div className="nav-items rounded-md h-full w-full flex items-center justify-between">
          <div className="nav-logo w-50 bg-purple-100 px-10 py-2 rounded-3xl">Campus Bazaar</div>        

          {/* For PC */}
          {/* TODO: For mobile */}

          <div className="nav-menu  w-50 bg-purple-100 rounded-3xl lg:flex gap-12 hidden">
            {/* <div className="wishlist cursor-pointer flex gap-2">Wishlist</div>
            <div className="sell cursor-pointer flex gap-2">Sell</div>
            <div className="trending cursor-pointer flex gap-2">Trending</div>
            <div className="notifications cursor-pointer flex gap-2">Notifications</div> */}

            {/* ADD: Nehal */}
            <NavigationMenuDemo/>
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