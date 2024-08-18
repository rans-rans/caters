"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

interface pageprops {
    item : featuredItem[]
}
export function FeatureItems({item}:pageprops) {
  return (
    <Carousel className="w-full max-w-lg mx-auto pt-14">
      <CarouselContent className="-ml-1">
        {item.map((item, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="">
              <Card>
                <CardContent className="relative flex aspect-square items-center justify-center ">
                <div className="">
                    <div className="hidden hover:block absolute bg-black/80 rounded-sm w-full h-full">
                        <div className="p-8 text-white text-lg leading-tight ">
                            <div>
                            {item.itemName}
                            </div>
                            <div>
                             $ 50 
                            </div>

                        </div>
                
                    </div>
                    <Image 
                        src={`/${item.image}`}
                        alt={item.itemName}
                        width={50}
                        height={50}
                        className="rounded-sm object-cover "
                    />
                </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
