import React from 'react'
import Logo from '@/public/assets/icons/logo.svg'
import Image from 'next/image'
import HorizonLinks from './HorizonLinks'
import MobileNav from './MobileNav'
import AvaTar from './AvaIcon'


const NavBar = () => {
  return (
    <div className='flex items-start justify-between px-4 py-2 border-b bg-primarycolor'>
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
            alt="logo icon"
            className="m-auto"
        />
      </div>

      <HorizonLinks />
      <div className='flex items-center flex-row-reverse'>
        <MobileNav/>
        <AvaTar 
        imageStyles={""}
        imageUrl=''
        label=''
        />

      </div>
    </div>
  )
}

export default NavBar
