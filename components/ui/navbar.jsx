"use client"
import React from 'react'
import NavLink from './link'
import { Home,BadgeInfo,CalendarDays, ChevronRight } from 'lucide-react'
import { usePathname } from 'next/navigation'


export default function NavBar() {
 const pathname = usePathname(); 
 
return (
    <div className="flex items-center justify-between " >
       <p>caters</p>
       <div className='flex items-center justify-center gap-6'>
        <NavLink  
        className={pathname === '/' ? 'text-lg opacity-100 text-p-red' : 'text-p-black'}  
        hreff={'/'} 
        linkname={'home'}
        linkicon={<Home/>}
        path={pathname}
        />
        
        <NavLink  
        className={'text-lg'}  
        hreff={'/'} 
        linkname={'about'}
        linkicon={<BadgeInfo/>}
        />
        
        <NavLink  
        className={'text-lg'}  
        hreff={'/'} 
        linkname={'booking'}
        linkicon={<CalendarDays/>}
        />

        <NavLink  
        className={'flex-row-reverse text-lg'}  
        hreff={'/'} 
        linkname={'more'}
        linkicon={<ChevronRight/>}
        />

       </div>
    </div>
  )
}
