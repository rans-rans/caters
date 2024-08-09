"use client"
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu'
import { Menu } from 'lucide-react'

export default function Dropdown() {
  return (
    <div className="">
        <DropdownMenu>
                <DropdownMenuTrigger asChild >
                    <Menu/>
                </DropdownMenuTrigger>
            <DropdownMenuContent align="center"  className=".0">
                    <DropdownMenuItem>
                        home
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        about
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        booking
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        more
                    </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}
5