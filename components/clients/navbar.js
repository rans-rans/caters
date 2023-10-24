"use client"
import React from 'react';
import { Navbar,NavbarBrand,NavbarContent,
NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import Avatar from './avatar';
import ToggleThemes from './toggletheme';
import { MoreVertical } from 'lucide-react';
import SignInButton from './sign_in_button';
import { useSession } from 'next-auth/react';



export default function NavBar() {
    const session = useSession();

  return (
    <Navbar className='w-full bg-slate-900'>
        <NavbarBrand className='text-xl flex gap-1 item-center  tracking-wider'>
            <p className='p-2'>Newsspree</p>
             <ToggleThemes className="p-2 hidden lg:block"/>
        </NavbarBrand>
        <NavbarContent className='hidden md:flex' justify='center'>
            <NavbarItem className='navlinks' >
                <Link href="">
                    home
                </Link>
            </NavbarItem>
            <NavbarItem  className='navlinks'>
                <Link href="">
                    languages
                </Link>
            </NavbarItem>
            <NavbarItem  className='navlinks'>
                <Link  href="">
                    charts
                </Link>
            </NavbarItem>
            <NavbarItem  className='navlinks'>
                <Link href="">
                    more
                </Link>
            </NavbarItem>
        </NavbarContent>
      
    { session ?     
    <NavbarContent justify="end" className='gap-1 flex item-center'>
          <NavbarItem>
                <Avatar/>
            </NavbarItem>
            <NavbarItem justify="end">
                <MoreVertical/>
            </NavbarItem>
            <SignInButton/> 
        </NavbarContent>
    : <NavbarContent justify='end'>
            <NavbarItem>
                <SignInButton/>
            </NavbarItem>
        </NavbarContent>}    
</Navbar>
  )
}
