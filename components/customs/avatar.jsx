"use client"
import React from 'react'
import { Avatar } from '../ui/avatar'
import { cn } from '@/lib/utils'
import { AvatarImage } from '@radix-ui/react-avatar'

export default function AvaTar({name,imageurl,className}) {
  return (
    <Avatar className={cn('',className)}>
      <AvatarImage 
      src={imageurl} 
      alt={`${imageurl}`}
      />
    </Avatar>
  )
}
