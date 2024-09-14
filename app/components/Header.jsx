import { assets } from '@app/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Image src={assets.logo} alt='Logo' width={180} className='w-[130px] sm:w-[150px]'/>
        <button className='flex items-center gap-2 border border-solid border-black font-medium py-1 px-3 sm:py-3 sm:px-6 shadow-[-7px_7px_0px_#000000]'>Get started <Image src={assets.arrow} width={10}/></button>
      </div>
      <div className='text-center my-8'>
        <h1 className='font-medium text-3xl sm:text-5xl'>Latest Blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
        <form action="" className='flex justify-between max-w-[500px] mt-10 scale-75 sm:scale-100 mx-auto border border-solid border-black shadow-[-7px_7px_0px_#000000]'>
          <input className='outline-none pl-4' type="email" placeholder='Enter your email'/>
          <button className='border-1 py-4 px-4 border-black sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Header
