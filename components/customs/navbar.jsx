import React from 'react'
import NavLink from './link'
import NavigationIcons from './navigationicons'

export default function NavBar() {
  return (
    <div className='flex items-center justify-between px-4 py-2'>
        {/* logo */}
        <header>newspree</header>
        {/* links */}
        <ul className='flex items-center justify-between  gap-4'>
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
        <NavigationIcons 
        className=""/>
        </div>
  )
}
