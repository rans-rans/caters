"use client"
import { cn } from '@/lib/utils'
import { filternavprops } from '@/types'
import Link from 'next/link'
import React from 'react'

const FilterNav = ({items,className}:filternavprops) => {
  return (
    <div className={cn('',className)}>
      {
        items.map(item=> {
            return(
            <Link key={item.id} 
            className='' href="">
            <span>{item.label}</span>
            </Link>
            )
        })
      }
    </div>
  )
}

export default FilterNav
