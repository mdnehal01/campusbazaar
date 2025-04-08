"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Products } from "@/types";
import { IoMdRemove } from "react-icons/io";
import { BiTrash } from "react-icons/bi";
import { useUser } from "@/hooks/useUser";
import { usePathname, useRouter } from "next/navigation";
import { SupabaseClient, useSessionContext } from "@supabase/auth-helpers-react";
import toast from "react-hot-toast";
import { useCartStore } from "@/hooks/useCartStore";

interface ExpandableCardProps{
  products:Products[];
}

export const ExpandableCard:React.FC<ExpandableCardProps> = ({
  products
})=>{
  const [active, setActive] = useState<(typeof products)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();

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

  const handleRemoveCart = async (productId:string) => {
    if (!user) {
      router.push(`/login?redirectTo=${pathname}`)
    }
    const { error } = await supabaseClient
            .from('cart_products')
            .delete()
            .eq('user_id', user?.id)
            .eq('product_id', productId);

        if (error) {
            toast.error(error.message);
        } else {
          setCartLength(Math.max(cartLength - 1, 0));
            toast.success('Removed from cart!');
        }
    router.refresh();
};

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
                  src={`https://zksekqhntfepyfdfyyxn.supabase.co/storage/v1/object/public/${active.image_urls.primary}`}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.product_id}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.product_id}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
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
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full px-5 mx-auto gap-4">
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
                  src={`https://zksekqhntfepyfdfyyxn.supabase.co/storage/v1/object/public/${product.image_urls.primary}`}
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
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 w-[150px] hover:bg-pink-500 hover:text-white text-black mt-4 md:mt-0"
            >
              ₹{product.current_price}
            </motion.button>

            {/* DELETE ANY PRODUCT FROM CART */}

          </motion.div>
          <BiTrash className="text-black hover:text-red-500 cursor-pointer" onClick={()=>handleRemoveCart(product.product_id)}/>
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
