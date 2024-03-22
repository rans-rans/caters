"use client"
import React from 'react'
import { Button } from '../components/ui/button'

export default function Error({error,reset}) {
  return (
    <section className="w-full flex flex-col h-screen absolute inset-0 ">
        <div className='h-[50vh] w-full bg-teal-500 p-8 flex flex-col items-center justify-center'>
            <p>{error.name}</p>
            <p>{JSON.stringify(error)}</p>
        </div>
        <Button className="block bg-blue-600 text-lg m-2 uppercase whitespace-normal hover:-translate-y-0.5 hover:duration-200 hover:ease-out tracking-widest font-bold hover:bg-blue-600" 
        onClick={() =>reset()}
        >
            reset
        </Button>
        </section>
    )
}
