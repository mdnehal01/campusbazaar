"use client";
import getCartProducts from '@/actions/getCartProducts';
import { useUser } from '@/hooks/useUser';
import { Products } from '@/types';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react'
import { ExpandableCard } from './ExpandableCard';
import { SaveForLaterProd } from './SaveForLaterProd';

interface SaveForLaterContentProps{
  products:Products[];
}

const SaveForLaterContent:React.FC<SaveForLaterContentProps> = ({
  products
}) => {
    const router=useRouter();
    const pathname = usePathname(); // Get the current route path
    const {user, userDetails, isLoading}=useUser();


  return (
    <div className='flex h-fit rounded-t-3xl overflow-y-auto'>

          <div className='w-full py-5'>

            {/* FIRST CHECK IF USER IS LOGGED IN OR NOT If logged in  */}
            {user ? <>
              {/* THen check if logged in then any item is there in cart or not if no then show empty cart else show products */}
              {products.length == 0 ?     
              <div className="loggedIn h-fit flex items-center scrollbar-none">
                There is no product saved for later
              </div>
              :
              <div className='overflow-y-auto scrollbar-none'>
                <SaveForLaterProd products={products}/>
              </div>
              }
              
            </>


           : 
            <>  
            </>
          }
          
          </div>
          
    </div>
  )
}

export default SaveForLaterContent