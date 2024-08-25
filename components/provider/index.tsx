"use client"
import { coverprops } from '@/types'
import React from 'react'
import NavBar from '../ui/NavBar'


const Provider = ({children}:coverprops) => {
  return (
    <main>
      <NavBar/>
      <div>
        {children}
      </div>
    </main>
  )
}

export default Provider
