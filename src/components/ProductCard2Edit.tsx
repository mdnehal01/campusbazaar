"use client"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Products } from '@/types';
import Image from 'next/image';
import AddToCartBtn from '@/app/(products)/products/components/AddToCartBtn';
import addToCartFn from '@/actions/addToCartFn';
import { useUser } from '@/hooks/useUser';
import { useRouter } from 'next/navigation';
import EditButton from './EditButton';
import { BiEdit, BiTrash, BiUnlink } from 'react-icons/bi';
import { IoMdListBox } from 'react-icons/io';
import { useSessionContext } from '@supabase/auth-helpers-react';
import toast from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

interface ProductCard2Props{
  product:Products
}

const ProductCard2Edit:React.FC<ProductCard2Props>= (
  {product}
) => {
  const { user } = useUser();
  const discount = 100-((product.current_price / product.price) * 100);
  const router = useRouter()

  const [listed, setListed] = useState<Boolean>();
  const [bg, setBg] = useState("bg-green-300");

  useEffect(()=>{
    if(product.listed == true){
      setListed(true)
      setBg("bg-green-200")
    }else{
      setListed(false)
      setBg("bg-red-200")
    }
  }, [product.listed])

  const {supabaseClient} = useSessionContext();

  const productUnlist = async (product_id: string)=>{
    const { data, error } = await supabaseClient
      .from('products')
      .update({ listed: false })
      .eq('product_id', product_id)
      .select()
    if(error){
      toast.error(error.message)
    }else{
      setListed(false);
      setBg("bg-red-200");
      toast.success("Unlisted for buyers")
    }
  }
  
  const productList = async (product_id: string)=>{
    const { data, error } = await supabaseClient
    .from('products')
    .update({ listed: true })
    .eq('product_id', product_id)
    .select()
  if(error){
    toast.error(error.message)
  }else{
    setListed(true);
    setBg("bg-green-200")
    toast.success("Listed for sale")
  }
  }

  return (
    <StyledWrapper className='relative'>
      <div className={twMerge(`card bg-white border border-pink-800`,bg)}>
        <div className="wrapper">
          <div className="card-image w-full h-36 relative">
            {/* <Image */}
            <Image className='object-cover' src={`https://zksekqhntfepyfdfyyxn.supabase.co/storage/v1/object/public/${product.image_urls.primary[0]}`} fill alt={product.title} />
          </div>
          <div className="content">
            <p className="title">{product.title}</p>

            {product.current_price == product.price ? (
              <>
                <p className="title price">₹{product.current_price}</p>
              </>
            ):(
              <>
                <p className="title price">₹{product.current_price}</p>
                <p className="title price old-price">₹{product.price}</p>
              </>
            ) 
          }
            <p />
          </div>
        </div>
        {discount == 0 ? (<></>):(
          <p className="tag bg-pink-400">-{discount}%</p>
        )}
        <div className='w-full absolute bottom-2 left-0 flex items-center justify-around'>
          <div onClick={()=>router.push(`/product/${product.product_id}/edit`)} className='flex items-center text-emerald-700 hover:scale-110 duration-200 transition'>
            Edit &nbsp;<BiEdit/>
          </div>
          
          {listed ? (
            <div onClick={()=>productUnlist(product.product_id)} className='flex cursor-pointer items-center text-red-500 hover:scale-110 duration-200 transition'>
              Unlist &nbsp;<BiUnlink/>
            </div>
          ):(
            <div onClick={()=>productList(product.product_id)} className='flex cursor-pointer items-center text-red-500 hover:scale-110 duration-200 transition'>
              List &nbsp;<IoMdListBox/>
            </div>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    height: 254px;
    padding: 15px;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s;
    // position: relative;
  }
  .wrapper {
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  .card-image {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5em;
    font-weight: 900;
    transition: all 0.3s;
  }
  .content {
    height: fit-content;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  .title {
    font-size: 0.72em;
    text-transform: uppercase;
    font-weight: 500;
    color: #4d4d4d;
  }
  .price {
    font-size: 1em;
    font-weight: 700;
  }
  .old-price {
    font-size: 0.7em;
    text-decoration: line-through;
    color: #adadad;
  }
  .card-btn {
    height: 40px;
    border: none;
    border-radius: 40px;
    color: white;
    transition: all 0.3s;
    cursor: pointer;
    font-weight: 500;
  }
  .card:hover .card-image {
    height: 120px;
  }
  .card:hover .card-btn {
    bottom: 10px;
  }

  .tag {
    position: absolute;
    left: 5px;
    top: 5px;
    padding:3px 5px;
    border-radius: 15px;
    font-size: 0.75em;
    font-weight: 500;
  }`;

export default ProductCard2Edit;
