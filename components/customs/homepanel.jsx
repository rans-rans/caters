"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import NavLink from './link'

export default function HomePanel({className}) {
  return (
    <div className={cn('',className)}>
        <ul className='flex flex-col items-center justify-between  gap-4'>
            <NavLink
            className="cursor-pointer  text-sm uppercase  tracking-wider  whitespace-normal  text-blue-500"
            name="home"
            reff="/"
            />
            <NavLink
            className="cursor-pointer  text-sm uppercase  tracking-wider  whitespace-normal  text-blue-500"
            name="dashboard"
            reff="/dashboard"
            />
            <NavLink
            className="cursor-pointer  text-sm uppercase  tracking-wider  whitespace-normal  text-blue-500"
            name="settings"
            reff="/settings"
            />
        </ul>
    </div>
  )
}
