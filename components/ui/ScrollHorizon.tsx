"use client"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import helpers from "@/constants/helpers"
import PackageCard from "./PackageCard"
import images from "@/constants/images"


export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border bg-white text-black">
      <div className="flex w-max space-x-4 p-4">
        {helpers.packcard.map(item =>{
            return (
                <PackageCard
                key={item.id} 
                imageUrl={images.jollofgoat}
                label={item.label}
                message={item.message}
                title={item.title}
                className="flex flex-col items-center"
                cardClass="border p-0"
                cardContClass="flex flex-cols gap-10 bg-mygray"
                titleClass=""
                imageClass="w-full object-cover"
                messageClass="text-justify"    
                />
            )
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
