"use client"
import images from '@/constants/images'
import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarImage } from './avatar'
import icons from '@/constants/icons'
import { avatarprops } from '@/types'

const AvaTar = ({imageUrl,label,imageStyles}:avatarprops) => {
  return (
    <Avatar className='w-10 h-10 overflow-hidden bg-secondarycolor-100'>
      <AvatarImage  
      src={icons.freshfv}
      alt={"avatar icon"}
      
       />
    </Avatar>
  )
}

export default AvaTar
