import { cn } from '@/lib/utils'
import { headerprops } from '@/types'
import React from 'react'


const Header = ({message,className}:headerprops) => {
  return (
    <h2 className={cn('',className)}>
      {message}

    </h2>
  )
}

export default Header
