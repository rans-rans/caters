'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import dynamic from "next/dynamic";
import { resolve } from "path";



const Dropd = () => {
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger  className="text-xl">
                Categories
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>News</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>

                <DropdownMenuItem >
                    <span className="capitalize tracking-widest text-lg">business</span>
                </DropdownMenuItem>
                <DropdownMenuItem >
                <span className="capitalize tracking-widest text-lg">entertainment</span>
                </DropdownMenuItem>
                <DropdownMenuItem >
                <span className="capitalize tracking-widest text-lg">general</span>
                </DropdownMenuItem>
                <DropdownMenuItem >
                <span className="capitalize tracking-widest text-lg">
                    health
                </span>
                </DropdownMenuItem>
                <DropdownMenuItem >
                <span className="capitalize tracking-widest text-lg">
                    science
                </span>
                </DropdownMenuItem>
                <DropdownMenuItem >
                <span className="capitalize tracking-widest text-lg">
                    sports
                </span>
                </DropdownMenuItem>
                <DropdownMenuItem >
                <span className="capitalize tracking-widest text-lg">
                    Technology
                </span>
                </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default Dropd
