"use client"
import { cn } from '@/lib/utils'
import React from 'react'


const SectionTitle = ({secClass,secName}:sectiontitle) => {
  return (
    <h2 className={cn('text-2xl font-extrabold text-center underline underline-offset-8 underline',secClass)}>
      {secName}
    </h2>
  )
}

export default SectionTitle
