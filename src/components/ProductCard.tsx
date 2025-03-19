"use client"
import React from 'react'
import "./css/ProductCard.css"
import Image from 'next/image'
import { Products } from '@/types'
import useLoadImage from '@/hooks/useLoadImage'
import toast from 'react-hot-toast'

interface ProductCardProps{
  product:Products
}

const ProductCard:React.FC<ProductCardProps>= (
  {product}
) => {

  const imageUrls = useLoadImage(product);

    return (

<div className="card bg-pink-50 border border-pink-800">
  {/* TODO:IMAGE CONTAINER will be a slideshow afterwards when we open the product here only primary  */}
  <div className="image_container border ">
    <Image src={`https://zksekqhntfepyfdfyyxn.supabase.co/storage/v1/object/public/${product.image_urls.primary}`} alt={product.image_urls.primary} width={200} height={100}/>
  </div>

  <div className="title">
    <span>{product.title}</span>
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

  <div className="action">
    <div>
      <span className='font-medium text-black text-md'>{product.price}</span>
    </div>
    <button className="cart-button">
      <svg
        className="cart-icon"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
      <span>Add to cart</span>
    </button>
  </div>
</div>

    )
}

export default ProductCard