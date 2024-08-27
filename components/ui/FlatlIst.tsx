"use client"
import React from 'react'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel'
import { Card, CardContent } from './card'
import Image from 'next/image'
import images from '@/constants/images'

interface flatlistitemlist {
    id: number,
    label: string,
    description:string 
}

interface flatlist{
    type?: string,
    items: flatlistitemlist[]
}


const FlatlIst = ({type,items}:flatlist) => {
  const [api,setApi] = React.useState<CarouselApi>()
  const [current,setCurrent] = React.useState()
 
    if(type === "horizon") {
    return (
            <Carousel opts={{
                align:'center',
                loop:true
            }} className='w-full max-w-sm'>
                <CarouselContent>
            {items.map(item => {
            return (<CarouselItem className="md:basis-1/2 lg:basis-1/3 m-4" key={item.id}>
                    <Card className=''>
                        <CardContent className='p-0'>
                            <Image 
                            src={images.jollofview}
                            alt="horizon card images"
                            width={500}
                            height={500}
                            className=''
                            />
                        </CardContent>
                    </Card>
                    </CarouselItem>
            )})}
                </CarouselContent>
                </Carousel>
    )
 }  
  return (
    <div className=''>
      
    </div>
  )
}


export default FlatlIst
