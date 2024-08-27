import React from 'react'
import Logo from '@/public/assets/icons/logo.svg'
import Image from 'next/image'
import HorizonLinks from './HorizonLinks'
import MobileNav from './MobileNav'
import AvaTar from './AvaIcon'


const NavBar = () => {
  return (
    <div className='w-full md:max-w-[65%] mx-auto flex  justify-between px-4 py-2 border-b bg-primarycolor'>
      {/* 
      four stuffs will show on the web page .
       -> the logo 
       -> the links to pages 
       -> menu button 
       -> avatar
      
      */}


      <div className='overflow-hidden '>
        <Image 
            src={Logo}
            width={40}
            height={40}
            alt="logo icon"
            className=""
        />
      </div>
      <div>
        <HorizonLinks />

      </div>
      <div className='flex items-center flex-row-reverse gap-1 '>
        <MobileNav/>
        <AvaTar 
        imageStyles={" "}
        imageUrl=''
        label=''
        />

      </div>
    </div>
  )
}

export default NavBar
