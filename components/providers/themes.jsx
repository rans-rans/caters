"use client"
import React from 'react'
import { ThemeProvider  } from 'next-themes'
export default function AppThemeProvider({children,...props}) {
  return (
    <ThemeProvider {...props}>
        {children}
    </ThemeProvider>
  )
}
