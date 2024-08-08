"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export default function NavLink({linkname, hreff, className,linkicon,path}) {
  return (
    <Link className={cn('flex items-end gap-1 justify-evenly',className)} href={hreff}  >
        <div className="">
        {linkicon}
        </div>
        <p className={"text-sm uppercase tracking-wide" + path == linkname  ? 'text-p-red' : 'text-p-black' }>
        {linkname}
        </p>
    </Link>
  )
}
