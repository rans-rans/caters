"use client"
import Image from 'next/image'
import React from 'react'
import icons from './constants/icons'

interface listprops {
    message: string,
}

const ListWithIcon = ({message}:listprops) => {
  return (
    <li className='flex items-center gap-4 font-medium text-sm  text-justify md:text-balance leading-relaxed  max-w-md'>
      <Image 
      src={icons.filterlines}
      alt={message}
      width={30}
      height={30}
      className='text-white'
      />
      <p className='capitalize font-Bold'>{message}</p>
    </li>
  )
}

export default ListWithIcon
