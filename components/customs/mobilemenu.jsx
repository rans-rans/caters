"use client"
import React from 'react'
import {Menu} from 'lucide-react'
import { cn } from '@/lib/utils'


export default function MobileMenu({className,setShowBar}) {
  return (
    <Menu 
    className={cn('',className)}
    onClick={()=> setShowBar(prev=>!prev)}
    />
    )
}
