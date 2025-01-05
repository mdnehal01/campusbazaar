// import Sidebar from '@/components/sidebar';
import BrandBtn from '@/components/BrandBtn';
import CategoryBtn from '@/components/CategoryBtn';
import React from 'react'

const page = () => {
    return (
        <div className='relative w-full h-[calc(100vh-80px)] bg-transparent flex justify-center py-20'>
          {/* <Sidebar/> */}
          <div className='max-w-[1200px] w-[1000px] lg:p-10 md:p-8 p-3 bg-gray-200/50 shadow-md h-[500px] rounded-3xl'>
            <CategoryBtn/>
            <br />
            <BrandBtn/>
          </div>
        </div>
  )
}

export default page;