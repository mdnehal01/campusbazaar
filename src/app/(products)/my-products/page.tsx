import React from 'react'
import ProductContent from './components/ProductContent'

const page = () => {
  return (
    <div className='relative w-full h-[calc(100vh-80px)] bg-transparent flex justify-center py-20'>
      <ProductContent/>
    </div>
  )
}

export default page