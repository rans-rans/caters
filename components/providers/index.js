"use client"
import React from 'react'
import NavBar from '../ui/navbar'

export default function Providers({children}) {
  return (
    <div className="">
        <main className=" w-full md:max-w-[80%] mx-auto py-5 p-4 md:p-0 bg-p-white">
            <NavBar/> 
            <div className="py-16">
            {children}
            </div>
        </main>
    </div>
  )
}
