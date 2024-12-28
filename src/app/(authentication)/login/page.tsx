import ButtonType1 from '@/components/customs/buttontype1'
import InputType1 from '@/components/customs/inputType1'
import React from 'react'
import { FiEye } from 'react-icons/fi'

const page = () => {
  return (
    <div className='h-screen'>
      <h1 className='text-3xl'>Login Page</h1>
      <div>
        <form method='post' className='relative'>
          email
          <InputType1 name='email' required className=' w-96 rounded-full bg-gray-100 border-2 focus:border-blue-300 border-blue-100' needIcon={false}/>
          <br />
          password
          <InputType1 name='password' required className='w-96 rounded-full bg-gray-100 border-2 focus:border-blue-300 border-blue-100' needIcon={true} icon={<FiEye color='text-white'/>} iconbg="bg-blue-500"/>

          <ButtonType1 className='w-96 bg-blue-400'>Sign In</ButtonType1>
        </form>
      </div>
    </div>
  )
}

export default page