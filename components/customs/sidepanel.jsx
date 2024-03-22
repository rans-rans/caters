"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import NavLink from './link'

export default function SidePanel({className}) {
  
  return (
    <div className={cn('flex flex-col md:items-center gap-8 ',className)}>
      <div className='flex flex-col item-center gap-4 '>
      <Input className=""/>
      <Button 
      type="submit" 
      className="">
        search
      </Button>
      </div>
      <ul className=' flex flex-col gap-4 '>
        <NavLink
        reff="/friends"
        name="friends"
        />
        <NavLink
        reff="/requests"
        name="friend requests"
        />
      </ul>
    </div>
  )
}
