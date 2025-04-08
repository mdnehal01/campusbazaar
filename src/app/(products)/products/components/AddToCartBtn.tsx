"use client"
import { useUser } from '@/hooks/useUser';
import { useSessionContext } from '@supabase/auth-helpers-react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { useCartStore } from '@/hooks/useCartStore'; // ✅ import store

export interface AddToCartBtnProps {
    productId: string;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ productId }) => {
  const router = useRouter();
  const { supabaseClient } = useSessionContext();
  const { user } = useUser();
  const pathname = usePathname();

  const [isAdded, setIsAdded] = useState(false);
  const { setCartLength, cartLength } = useCartStore(); // ✅ get store values

  useEffect(() => {
    if (!user?.id) return;

    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from('cart_products')
        .select('*', { count: 'exact', head: false })
        .eq('user_id', user.id)
        .eq('product_id', productId)
        .maybeSingle();

      if (!error && data) {
        setIsAdded(true);
      }
    };

    fetchData();
  }, [productId, supabaseClient, user?.id]);

  const updateCartCount = async () => {
    const { count, error } = await supabaseClient
      .from('cart_products')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user?.id);

    if (!error && typeof count === 'number') {
      setCartLength(count); // ✅ update global cart count
    }
  };

  const handleAddCart = async () => {
    if (!user) {
      router.push(`/login?redirectTo=${pathname}`);
      return;
    }

    if (isAdded) {
      const { error } = await supabaseClient
        .from('cart_products')
        .delete()
        .eq('user_id', user.id)
        .eq('product_id', productId);

      if (error) {
        toast.error(error.message);
      } else {
        setIsAdded(false);
        toast.success('Removed from cart!');
        updateCartCount(); // ✅ refresh cart count
      }
    } else {
      const { data, error: fetchError } = await supabaseClient
        .from('cart_products')
        .select('*')
        .eq('user_id', user.id)
        .eq('product_id', productId)
        .maybeSingle();

      if (fetchError) {
        toast.error(fetchError.message);
        return;
      }

      if (!data) {
        const { error } = await supabaseClient
          .from('cart_products')
          .insert({
            product_id: productId,
            user_id: user.id,
          });

        if (error) {
          toast.error(error.message);
        } else {
          setIsAdded(true);
          toast.success('Added to cart!');
          updateCartCount(); // ✅ refresh cart count
        }
      } else {
        setIsAdded(true);
      }
    }

    router.refresh();
  };

  return (
    <StyledWrapper>
      {isAdded ? (
        <button onClick={handleAddCart} type="button" className="button rounded hover:bg-white border border-green-600 bg-white flex items-center justify-center">
          <span className="button__text text-green-600">Added</span>
        </button>
      ) : (
        <button onClick={handleAddCart} type="button" className="button rounded hover:bg-pink-700 border border-pink-800 bg-pink-800">
          <span className="button__text translate-x-[30px]">Add Item</span>
          <span className="button__icon rounded bg-pink-800">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="svg">
              <line x1={12} y1={5} x2={12} y2={19} />
              <line x1={5} y1={12} x2={19} y2={12} />
            </svg>
          </span>
        </button>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    position: relative;
    width: 150px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .button, .button__icon, .button__text {
    transition: all 0.3s;
  }

  .button .button__text {
    font-weight: 600;
  }

  .button .button__icon {
    position: absolute;
    transform: translateX(109px);
    height: 100%;
    width: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button .svg {
    width: 30px;
    stroke: #fff;
  }

  .button:hover .button__icon {
    width: 148px;
    transform: translateX(0);
  }

  .button:active .button__icon {
    background-color: #2e8644;
  }

  .button:active {
    border: 1px solid #2e8644;
  }
`;

export default AddToCartBtn;
