"use client"
import { coverprops } from '@/types'
import React from 'react'
// import NavBar from '../ui/NavBar'
import NavBar2 from '../ui/NavBar_2'


const Provider = ({children}:coverprops) => {
  return (
    <main >
      {/* //TODO removing the navbar for test purposes */}
      <NavBar2/>
      {/* //TODO removing the [65%, px-4, bg-primarycolor] for test purposes */}
      <div className=' mx-auto h-full w-full text-black'>
        {children}
      </div>
    </main>
  )
}

export default Provider
