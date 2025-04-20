"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Products } from "@/types";
import { BiCartAdd, BiListMinus, BiTrash } from "react-icons/bi";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useSessionContext } from "@supabase/auth-helpers-react";
import toast from "react-hot-toast";
import { useCartStore } from "@/hooks/useCartStore";

interface SaveForLaterProdProps{
  products:Products[];
}

export const SaveForLaterProd:React.FC<SaveForLaterProdProps> = ({
  products
})=>{
  const [active, setActive] = useState<(typeof products)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  const { user } = useUser();
  const router = useRouter();

  const { supabaseClient } = useSessionContext();

  const { cartLength, setCartLength } = useCartStore();


  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const moveToCart = async (productId:string) => {
    // First Item will delete from Save for later table and then added to the cart table in database
    const {data, error} = await supabaseClient
      .from('saved_for_later_products')
      .delete()
      .eq('user_id', user?.id)
      .eq('product_id', productId)
      .maybeSingle()

      if(error){
        toast.error(error.message)
      }else{
        const {data:moveCartData, error:moveCartErr} = await supabaseClient
          .from('cart_products')
          .insert({'product_id':productId, 'user_id':user?.id})
          .single()

        if(moveCartErr){
          toast.error(moveCartErr.message+"MoveCartErr")
        }else{
          toast.success("Moved to cart!")
          setCartLength(cartLength+1)
          router.refresh();
        }
      }

  }

  return (
    <div className="">
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.product_id}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.product_id}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.product_id}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={`https://zksekqhntfepyfdfyyxn.supabase.co/storage/v1/object/public/${active.image_urls.primary[0]}`}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.product_id}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-lg"

                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.product_id}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      <span className="line-clamp-6">
                      {active.description}
                      </span>
                      
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.product_id}-${id}`}
                    href={`product/${active.product_id}`}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-pink-500 text-white"
                  >
                    View product
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
          
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full mx-auto gap-4">
        {products.map((product, index) => (
          <div key={`card-${product.product_id}-${id}`} className="flex justify-around items-center hover:bg-neutral-100">
          <motion.div
            layoutId={`card-${product.product_id}-${id}`}
            key={`card-${product.product_id}-${id}`}
            onClick={() => setActive(product)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="w-[30px] flex justify-start">
              {index+1}
            </div>
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div className="relative h-10 w-10" layoutId={`image-${product.product_id}-${id}`}>
                <Image
                  fill
                  src={`https://zksekqhntfepyfdfyyxn.supabase.co/storage/v1/object/public/${product.image_urls.primary[0]}`}
                  alt={product.title}
                  className="rounded-lg object-cover object-top"
                />
              </motion.div>
              {/* TODO: Make it responsive */}
              <div className="w-[450px]">
                <motion.h3
                  layoutId={`title-${product.product_id}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {product.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${product.product_id}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  <span className="line-clamp-1">
                    {product.description}
                  </span>
                  
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${product.product_id}-${id}`}
              className="px-2 py-2 text-sm rounded-full font-bold bg-gray-100 w-[120px] hover:bg-pink-500 hover:text-white text-black mt-4 md:mt-0"
            >
                {product.current_price == product.price ? (
                    <p className="text-md font-bold">₹{Number(product.current_price).toLocaleString("en-IN")}</p>
                ) : (
                    <div className="flex relative gap-x-2 items-center">
                        <p className="text-md font-bold text-black">₹{Number(product.current_price).toLocaleString("en-IN")}</p>
                        <p className="text-xs absolute right-0 top-0 font-medium text-neutral-600 line-through">₹{Number(product.price).toLocaleString("en-IN")}</p>
                    </div>
                )}
              {/* const discount = +(100 - ((product.current_price / product.price) * 100)).toFixed(2); */}
            </motion.button>

            {/* DELETE ANY PRODUCT FROM CART */}

          </motion.div>

            <div className="relative group">
              <BiCartAdd
                size={20} 
                className="text-black hover:text-blue-500 cursor-pointer"
                onClick={()=>moveToCart(product.product_id)}
              />
              <span className="absolute -top-6 left-0 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                Move to cart
              </span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
