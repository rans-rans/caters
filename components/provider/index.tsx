"use client"
import { coverprops } from '@/types'
import React from 'react'
import NavBar from '../ui/NavBar'


const Provider = ({children}:coverprops) => {
  return (
    <main >
      <NavBar/>
      <div className=' mx-auto h-full bg-primarycolor  w-full md:w-[65%]  text-white'>
        {children}
      </div>
    </main>
  )
}

export default Provider
