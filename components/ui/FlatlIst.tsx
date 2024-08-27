"use client"
import React from 'react'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel'
import { Card, CardContent } from './card'
import Image from 'next/image'
import images from '@/constants/images'
import { flatlist } from '@/types'
import { cn } from '@/lib/utils'


const FlatlIst = ({type,items,className}:flatlist) => {
  
  const [api,setApi] = React.useState<CarouselApi>();
  const [current,setCurrent] = React.useState(0);
  const [count,setCount] = React.useState(0);

  React.useEffect(() => {
    if(!api) {
        return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () =>{
        setCurrent(api.selectedScrollSnap() + 1)
    })
  },[api])


    if(type === "horizon") {
    return (
        <div className={cn('mx-auto max-w-sm md:max-w-3xl',className)}>

                <Carousel               
                setApi={setApi}
                opts={{
                    align:'center',
                    
                }} className='w-full max-w-sm md:max-w-3xl'>
                    <CarouselContent className='' >
                {items.map(item => {
                return (<CarouselItem className=' md:basis-1/4 lg:basic-1/5' key={item.id}>
                        <Card className='p-0'>
                            <CardContent className='flex aspect-square items-center justify-center p-0 '>
                                <Image 
                                src={images.jollofview}
                                alt="horizon card images"
                                width={300}
                                height={300}
                                className='rounded-md object-cover w-full'
                                />
                            </CardContent>
                        </Card>
                        </CarouselItem>
                )})}
                    </CarouselContent>
                        <CarouselPrevious className='bg-secondarycolor-100 hidden md:flex '/>
                        <CarouselNext className='bg-secondarycolor-100 hidden md:flex '/>
                    </Carousel>
        </div>
    )
 }  
  return (
    <div className=''>
      
    </div>
  )
}


export default FlatlIst
