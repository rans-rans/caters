import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function NavLink({className,name,reff}) {
  return (
    <Link className={cn('',className)} href={reff}>
        <li>{name}</li>
    </Link>
  )
}
