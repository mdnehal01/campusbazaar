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
    <div className='grid 2xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 gap-y-5 grid-cols-3'>
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