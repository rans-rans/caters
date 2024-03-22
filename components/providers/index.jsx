"use client"
import React from 'react'
import AppThemeProvider from './themes'
import NavBar from '../customs/navbar'
import SideBar from '../customs/sidebar'
import MobileMenu from '../customs/mobilemenu'

export default function AppProvider({children}) {
  return (
    <>
    <AppThemeProvider 
    attribute="class"
    defaultTheme="dark"
    disableTransitionOnChange
    enableSystem
    > 
     <SideBar className="">
      {children}
     </SideBar>
   
    </AppThemeProvider>
    </>
  )
}
