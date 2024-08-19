'use client'
import React from 'react'
import { Card, CardContent } from './card'
import Link from 'next/link'
import Image from 'next/image'

const ServiceCard = ({image,itemName,serviceurl,serviceClass}:servicecard) => {
  return (
    <div>
        <Link href={serviceurl}>
            <Card>
                <CardContent>
                    <Image 
                    src={image} 
                    alt={itemName}
                    height={1000} 
                    width={1000} />
                    <div>

                    </div>
                </CardContent>
            </Card>
        </Link>
    </div>
  )
}

export default ServiceCard
