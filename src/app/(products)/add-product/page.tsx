// import Sidebar from '@/components/sidebar';

import ProductAddForm from '@/components/ProductAddForm';
// import Image from 'next/image';
import { CgCheck, CgClose } from 'react-icons/cg';

const page = () => {
    return (
        <div className='relative w-full h-[calc(100vh-80px)] bg-transparent flex justify-center py-20'>
          {/* <Sidebar/> */}
          <div className='max-w-[1200px] w-[1000px] lg:p-10 md:p-8 p-3 bg-gray-200/50 shadow-md h-[500px] rounded-3xl'>
            <h1 className='text-neutral-600 font-semibold text-3xl selection:text-pink-800 selection:bg-pink-200 print:text-green-400'>Sell your old products and earn</h1>
            <div className='flex py-5 items-center w-ful justify-start gap-x-14'>
              <div className='flex items-center'><CgCheck color='green' size={30}/> <h1>Easy Sell</h1></div>
              <div className='flex items-center'><CgCheck color='green' size={30}/> <h1>Get it nearby</h1></div>
              <div className='flex items-center'><CgClose color='red' size={20}/> <h1>No hidden charges</h1></div>
            </div>
            <br />

            <ProductAddForm/>

          </div>
        </div>
  )
}

export default page;