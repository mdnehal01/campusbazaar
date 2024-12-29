"use client";
import React, { useEffect, useState } from "react";
import { BiMenu, BiMoon, BiSun } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { NavigationMenuDemo } from "./navMenu";
import signOut from "@/actions/signOut";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { DropDownOptions } from "./dropOptions";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      // @ts-ignore
      listener?.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setIsLoggedIn(false); // Reset state after signing out
  };

  return (
    <div className="h-20 md:px-10 px-4 w-full bg-white/50 font-semibold text-slate-600">
      <div className="nav-items rounded-md h-full w-full flex items-center justify-between">
        {/* Logo for PC : NEHAL */}
        <Link
          href="/"
          className="nav-logo w-50 bg-[#EBF0FE] md:flex hidden px-10 py-2 rounded-3xl"
        >
          Campus Bazaar
        </Link>

        {/* Logo For Phone : NEHAL */}
        <div className="nav-logo bg-[#EBF0FE] flex md:hidden rounded-full p-2">
          CB
        </div>

        {/* For PC */}
        <div className="nav-menu w-50 bg-[#EBF0FE] rounded-3xl lg:flex gap-12 hidden">
          <NavigationMenuDemo />
        </div>

        {/* Theme toggle for PC */}
        <div className="nav-theme-cart md:flex gap-5 flex">
          {/* Conditionally Render Login or SignOut */}
          {!isLoggedIn ? (
            <Link
              href="/login"
              className="bg-blue-main nav-cart md:w-50 md:px-5 md:py-2 px-2 py-2 rounded-3xl flex gap-2 cursor-pointer"
            >
              Login
            </Link>
          ) : (
            <>
              <div className="nav-cart md:w-50 bg-[#EBF0FE] md:px-5 md:py-2 px-2 py-2 rounded-3xl flex gap-2">
                <CgShoppingCart className="cursor-pointer" size={23} />{" "}
                <span className="lg:flex hidden">Cart</span>
              </div>
              {/* <div
                onClick={handleSignOut}
                className="cursor-pointer bg-blue-main nav-cart md:w-50 md:px-5 md:py-2 px-2 py-2 rounded-3xl flex gap-2"
              >
                Sign Out
              </div> */}
              <DropDownOptions/>
            </>
          )}

          {/* Mobile Menu */}
          <div className="nav-menu p-2 bg-[#EBF0FE] rounded-3xl flex gap-12 lg:hidden">
            <BiMenu className="text-black" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
