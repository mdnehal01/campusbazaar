"use client";
import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { NavigationMenuDemo } from "./navMenu";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { DropDownOptions } from "./dropOptions";
import { useRouter } from "next/navigation";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router=useRouter();

  useEffect(() => {
    const checkUserSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session); // Set based on initial session check
    };

    // Check initial session
    checkUserSession();

    // Listen for auth state changes
     // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => {
      // @ts-expect-error abc
      listener?.unsubscribe();
    };
  }, []);

  return (
    <div className="fixed z-[100] top-0 left-0 h-20 md:px-10 px-4 w-full bg-white font-semibold text-slate-600">
      <div className="nav-items rounded-md h-full w-full flex items-center justify-between">
        {/* Logo for PC : NEHAL */}
        <Link
          href="/"
          className="nav-logo w-50 bg-[#EBF0FE] md:flex hidden px-10 py-2 rounded-xl"
        >
          Campus Bazaar
        </Link>

        {/* Logo For Phone : NEHAL */}
        <div className="nav-logo bg-[#EBF0FE] flex md:hidden rounded-full p-2">
          CB
        </div>

        {/* For PC */}
        <div className="nav-menu w-50 bg-[#EBF0FE] rounded-xl lg:flex gap-12 hidden">
          <NavigationMenuDemo />
        </div>

        {/* Theme toggle for PC */}
        <div className="nav-theme-cart md:flex gap-5 flex">
          {/* Conditionally Render Login or SignOut */}
          {!isLoggedIn ? (
            <Link
              href="/login"
              className="bg-blue-main nav-cart md:w-50 md:px-5 md:py-2 px-2 py-2 rounded-xl flex gap-2 cursor-pointer"
            >
              Login
            </Link>
          ) : (
            <>
              <div 
                onClick={()=>{
                  router.push("/cart");
                }} 
                className="cursor-pointer nav-cart md:w-50 bg-[#EBF0FE] md:px-5 md:py-2 px-2 py-2 rounded-xl flex gap-2">

                <CgShoppingCart size={23} />{" "}
                {/* <span className="lg:flex hidden" >Cart</span> */}
              </div>

              {/* <div
                onClick={handleSignOut}
                className="cursor-pointer bg-blue-main nav-cart md:w-50 md:px-5 md:py-2 px-2 py-2 rounded-xl flex gap-2"
              >
                Sign Out
              </div> */}
              
              <DropDownOptions/>
            </>
          )}

          {/* Mobile Menu */}
          <div className="nav-menu p-2 bg-[#EBF0FE] rounded-xl flex gap-12 lg:hidden">
            <BiMenu className="text-black" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
