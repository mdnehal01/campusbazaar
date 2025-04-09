"use client"
import React from 'react';
import styled from 'styled-components';
import { Products } from '@/types';
import Image from 'next/image';
import AddToCartBtn from '@/app/(products)/products/components/AddToCartBtn';
import addToCartFn from '@/actions/addToCartFn';
import { useUser } from '@/hooks/useUser';
import { useRouter } from 'next/navigation';

interface ProductCard2Props{
  product:Products
}

const ProductCard2:React.FC<ProductCard2Props>= (
  {product}
) => {
  const { user } = useUser();
  const discount = 100-((product.current_price / product.price) * 100);
  const router = useRouter()
  return (
    <StyledWrapper className='relative'>
      <div className="card bg-slate-200 hover:bg-slate-100 border border-pink-800" onClick={()=>router.push(`/product/${product.product_id}`)}>
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
      <div
        onClick={(e) => e.stopPropagation()}
        className="card-btn absolute w-[80%] z-50 -bottom-5 left-1/2 -translate-x-1/2">
          <AddToCartBtn productId={product.product_id}/>
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

export default ProductCard2;
