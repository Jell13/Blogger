import { assets } from '@app/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='py-6 px-5 md:px-16 lg:px-32'>
      <div className='flex py-4'>
        <Image src={assets.logo} alt='Logo' width={200} height={100}/>
        <div>
            
        </div>
      </div>
    </div>
  )
}

export default Header
