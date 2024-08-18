"use client"
import * as React from "react"
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi  
} from "@/components/ui/carousel"
import Image from "next/image"
import { Images } from "lucide-react"


export default function ImageSlider({images}:imagesliderprops) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }
    
    
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
    
  }, [api,images.length])

  return (
    <div className="flex-center flex-col w-[90%] mx-auto">
      <Carousel plugins={[
        Autoplay({
          delay: 2000
        })
      ]} setApi={setApi} className="w-full max-w-xs">
        <CarouselContent className="w-full">
          {images.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="min-w-full p-0 m-0">
                <CardContent className="flex aspect-square items-center justify-center p-0 rounded-lg overflow-hidden">
                  <Image
                    src={`/${item}`}
                    alt={`slide ${index}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  )
}
