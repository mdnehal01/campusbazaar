"use client"
import React from 'react'
import "./css/ProductCard.css"
import Image from 'next/image'
import { Products } from '@/types'
// import useLoadImage from '@/hooks/useLoadImage'
// import toast from 'react-hot-toast'
import AddToCartBtn from '@/app/(products)/products/components/AddToCartBtn'
import addToCartFn from '@/actions/addToCartFn'

interface ProductCardProps{
  product:Products
}

const ProductCard:React.FC<ProductCardProps>= (
  {product}
) => {

  // const imageUrls = useLoadImage(product);

    return (

<div className="card bg-pink-50 border border-pink-800">
  {/* TODO:IMAGE CONTAINER will be a slideshow afterwards when we open the product here only primary  */}
  <div className="h-[50%] image_container border ">
    <Image src={`https://zksekqhntfepyfdfyyxn.supabase.co/storage/v1/object/public/${product.image_urls.primary}`} alt={product.title} width={200} height={100}/>
  </div>
  

  <div className='h-[50%] px-5 product_details bg-yellow-100'>

  <div className="title">
    <span className="text-xl">{product.title}</span>
  </div>
  
  <div>
    <span className='text-sm'>Sold By:</span>
  </div>

  {!product.size ? (
    <div className="size">
    </div>
  ) : (
      <div className="size">
      <span>Size</span>
      <ul className="list-size">
        <li className="item-list"><button className="item-list-button bg-pink-800">{product.size}</button></li>
      </ul>
    </div>
  )}

  <div className="action flex flex-col" >
    <div>
      <span className='font-medium text-black text-md'>Price: ₹{product.price} </span>
    </div>

    {/* INSHA Design add to cart with functionality */}
    <div>
      {/* @ts-ignore */}
      <AddToCartBtn onclick={()=>addToCartFn(product.product_id)}/>
    </div>
    

  </div>

  </div>
</div>

    )
}

export default ProductCard