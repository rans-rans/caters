"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import AvaTar from './avatar'
import SignInBtn from './signin'

export default function NavigationIcons({className}) {
  return (
    <div className={cn('',className)}>
        {false ?  <AvaTar name="Marcus"/> : <SignInBtn name="log in"/> }
    </div>
  )
}
