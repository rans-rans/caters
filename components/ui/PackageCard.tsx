import { cn } from '@/lib/utils'
import { packagecardprops } from '@/types'
import React from 'react'
import { Card, CardContent } from './card'
import Image from 'next/image'


const PackageCard = ({imageUrl,label,message,title,className,imageClass,cardClass,messageClass,titleClass,cardContClass,...props}:packagecardprops) => {
  return (
    <div {...props} className={cn('',className)}>
      <Card className={cn('w-[300px] h-auto p-0 object-contain ',cardClass)}>
        <CardContent className={cn('relative flex flex-col',CardContent)}>
          <div className='h-50  overflow-hidden'>
            <Image
            src={imageUrl}
            width={500}
            height={500}
            className={cn('',imageClass)}
            alt={label}
            />
          </div>  
          <div className='flex flex-col max-w-[200px] '>
            <h2 className={cn('',titleClass)}>{title}</h2>
            <p className={cn(' text-sm text-wrap',messageClass)}>{message}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default PackageCard


