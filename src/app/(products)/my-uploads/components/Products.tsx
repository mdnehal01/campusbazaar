import React from 'react'
import { Products } from '@/types'
import ProductCard from '@/components/ProductCard'

interface ProductsProps{
    products:Products[]
}

const ProductsBox:React.FC<ProductsProps> = ({
    products
}) => {
  return (
    <div className='flex xl:gap-x-6 md:gap-x-4 gap-x-4'>
        {products.length==0 && (
          <h1>You currently have no items listed for sale. <a className='text-blue-500 underline' href="/add-product">Click here to sell your items.</a></h1>
        )}
        {products.map((item) => (
                <ProductCard
                    key={item.product_id}
                    product={item}
                />
            ))}
    </div>
  )
}

export default ProductsBox