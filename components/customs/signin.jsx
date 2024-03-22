"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '../ui/button'

export default function SignInBtn({name,className}) {
  return (
    <Button  variant={'ghost'} className={cn('',className)}>
        {name}
    </Button>
    )
}
