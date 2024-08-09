"use client"
import React from 'react'
import NavLink from './link'
import { Home,BadgeInfo,CalendarDays, ChevronRight, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Dropdown from './dropdown'


export default function NavBar() {
 const pathname = usePathname(); 
 
return (
    <div className="flex items-center justify-between " >
       <p className="uppercase text-lg tracking-wider font-bold italic ">caters</p>
       <div className='hidden md:flex items-center justify-center gap-6'>
        <NavLink  
        className={pathname == '/' ? 'underline underline-offset-4 ' : ""}  
        hreff={'/'} 
        linkname={'home'}
        linkicon={<Home/>}
        
        />
        
        <NavLink  
        className={pathname == '/about' ? 'underline underline-offset-4  ' : ""}  
        hreff={'about'} 
        linkname={'about'}
        linkicon={<BadgeInfo/>}
        />
        
        <NavLink  
        className={pathname == '/booking' ? 'underline underline-offset-4 ' : ""}  
        hreff={'/booking'} 
        linkname={'booking'}
        linkicon={<CalendarDays/>}
        />

        <NavLink  
        className={pathname == '/more' ? 'underline underline-offset-4 text-p-red flex-row-reverse' : 'flex-row-reverse text-p-black'}  
        hreff={'/more'} 
        linkname={'more'}
        linkicon={<ChevronRight/>}
        />

       </div >
       <div className="md:hidden">
        <Dropdown/>
       </div>
    </div>
  )
}
