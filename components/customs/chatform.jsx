"use client"
import React from 'react'
import TextAreaAutoresize from 'react-textarea-autosize'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'


export default function ChatForm({className}) {
  return (
    <div className={cn('',className)}>
        <TextAreaAutoresize 
        
        className='p-2 w-full outline-none' />
        <Button className="">
            send
        </Button>    
        </div>
  )
}
