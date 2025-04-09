"use client";
import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { NavigationMenuDemo } from "./navMenu";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { DropDownOptions } from "./dropOptions";
import { useRouter } from "next/navigation";
import getCartProducts from "@/actions/getCartProducts";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { useCartStore } from "@/hooks/useCartStore";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cartLength, setCartLength } = useCartStore();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const { user } = useUser();

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!user) return;
  
      const { data, error } = await supabase
        .from("cart_products")
        .select("*")
        .eq("user_id", user.id);
  
      if (data) {
        setCartLength(data.length); // ✅ update global store
      }
    };
  
    fetchCartItems();
  }, [user]);

  // ✅ Session check + auth state listener
  useEffect(() => {
    const checkUserSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };

    checkUserSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => {
      listener?.subscription?.unsubscribe?.(); // Fix for unsubscribe
    };
  }, []);

  return (
    <div className="fixed z-[100] top-0 left-0 h-20 md:px-10 px-4 w-full bg-white font-semibold text-slate-600">
      <div className="nav-items rounded-md h-full w-full flex items-center justify-between">
        {/* Logo for PC : NEHAL */}
        <Link
          href="/"
          className="nav-logo w-50 bg-pink-100 md:flex hidden px-10 py-2 rounded-xl"
        >
          Campus Bazaar
        </Link>

        {/* Logo For Phone : NEHAL */}
        <div className="nav-logo bg-pink-100 flex md:hidden rounded-full p-2">
          CB
        </div>

        {/* For PC */}
        <div className="nav-menu w-50 bg-pink-100 rounded-xl lg:flex gap-12 hidden">
          <NavigationMenuDemo />
        </div>

        {/* Theme toggle for PC */}
        <div className="nav-theme-cart md:flex gap-5 flex">
          {!isLoggedIn ? (
            <Link href="/login" className="bg-pink-main nav-cart md:w-50 md:px-5 md:py-2 px-2 py-2 rounded-xl flex gap-2 cursor-pointer">
              Login
            </Link>
          ) : (
            <>
              <div
                onClick={() => {
                  router.push("/cart");
                }}
                className="cursor-pointer nav-cart md:w-50 bg-pink-100 md:px-5 md:py-2 px-2 py-2 rounded-xl flex gap-2 relative"
              >
                <CgShoppingCart size={23} />
                
                {/* ✅ Cart count badge */}
                {cartLength > 0 && (
                  <span className="absolute top-[-6px] right-[-6px] bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartLength}
                  </span>
                )}
              </div>

              <DropDownOptions />
            </>
          )}

          <div className="nav-menu p-2 bg-pink-100 rounded-xl flex gap-12 lg:hidden">
            <BiMenu className="text-black" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
