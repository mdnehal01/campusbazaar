import React from 'react'
import { Products } from '@/types'
import ProductCard from '@/components/ProductCard'
import ProductCard2 from '@/components/ProductCard2'

interface ProductsProps{
    products:Products[]
}

const ProductsBox:React.FC<ProductsProps> = ({
    products
}) => {
  return (
    <div className='flex xl:gap-x-6 md:gap-x-4 gap-x-4'>
        {products.map((item) => (
                <ProductCard2
                    key={item.product_id}
                    product={item}
                />
            ))}
    </div>
  )
}

export default ProductsBox