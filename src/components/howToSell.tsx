import Image from 'next/image'
import React from 'react'

const HowToSell = () => {
  return (
    <div className='px-20 py-10 '>
      <h1 className='text-5xl text-pink-900 font-semibold text-center font-sans'>  </h1>
      <div className='flex h-[70vh] justify-evenly items-center'>
        <div> <Image src="/sectionA/1.png" alt="img 1" height={400} width={400}/> </div>
        <div> <Image src="/sectionA/2.png" alt="img 1" height={400} width={400}/> </div>
        <div> <Image src="/sectionA/3.png" alt="img 1" height={400} width={400}/> </div>
      </div>
    </div>
  )
}

export default HowToSell