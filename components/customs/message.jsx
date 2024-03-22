import { cn } from '@/lib/utils'
import React from 'react'
import AvaTar from './avatar'

export default function Message({id,name,className,message,timestamp}) {
  return (
    <div id={id} className={cn('flex gap-2 p-2 m-2',className)}>
      <AvaTar className="bg-red-500"/>
      <div className='flex '>
      <p>{message}</p>
      <p>{timestamp}</p>
      </div>


    </div>
  )
}
