"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import {usePathname} from 'next/navigation';
import SidePanel from './sidepanel';
import UserPanel from './userPanel';
import HomePanel from './homepanel';
import {Menu,SidebarClose} from 'lucide-react'
import MobileMenu from './mobilemenu';

export default function SideBar({className,children}) {
    const [showbar, setShowBar] = React.useState(true)
    const pathname = usePathname();
    
    console.log(pathname)
    return (
    <section  className='relative ease-in-out duration-500 flex gap-8'>
      { showbar && <div className="fixed, w-[240px] md:w-[300px] bg-gray-400 p-4 h-screen flex flex-col  gap-8 z-10">
        <div className="flex items-center justify-between">
        <p>Newsspree</p>
        <SidebarClose
        onClick={() => setShowBar(prev => !prev)}
         className='cursor-pointer'/>
        </div>
        <div>
        {pathname.startsWith("/chat/") ? <UserPanel/> : pathname === "/friends" || "/requests" ? <SidePanel/>: <HomePanel/>}
        </div>
        </div>}
        <div className='relative '>
           {showbar || <MobileMenu 
            className="m-2 cursor-pointer"
            setShowBar={setShowBar} 
            />}
            <>
            {children}
            </>
            </div>
    </section>
    )
  
  
}