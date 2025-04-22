"use client";

import React, { useEffect, useState } from 'react';
import ProductInfo from '@/components/ProductInfo';
import { useSearchParams } from 'next/navigation';
import getProductById from '@/actions/getProductById';
import AlgoliaSearch from '@/components/AlgoliaSearch';
import TruckLoader from '@/components/loader';

const Page = () => {
  const params = useSearchParams();
  const query = params.get('product');

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      if (query) {
        setLoading(true);
        const data = await getProductById(query);
        setProduct(data);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [query]);

  if (!query) {
    return (
      <div className="w-full h-[calc(100vh-80px)] overflow-auto">
        <AlgoliaSearch />
      </div>
    );
  }

  return (
    <div className="w-full h-[calc(100vh-80px)] overflow-auto">
      {loading ? (
        <TruckLoader />
      ) : product ? (
        <ProductInfo product={product} />
      ) : (
        // TODO: Apply a goood graphics to this 
        <div className="text-center mt-10 text-gray-600">No product found.</div>
      )}
    </div>
  );
};

export default Page;
