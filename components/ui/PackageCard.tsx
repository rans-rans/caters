import { cn } from '@/lib/utils'
import { packagecardprops } from '@/types'
import React from 'react'
import { Card, CardContent } from './card'
import Image from 'next/image'
import images from '@/constants/images'

const PackageCard = ({imageUrl,label,message,title,className,imageClass,cardClass,messageClass,titleClass,cardContClass}:packagecardprops) => {
  return (
    <div className={cn('',className)}>
      <Card className={cn('',cardClass)}>
        <CardContent className={cn('',CardContent)}>
          <div>
            <Image
            src={images.jollofgoat}
            width={100}
            height={100}
            className={cn('',imageClass)}
            alt={label}
            />
          </div>
          <div>
            <h2 className={cn('',titleClass)}>{title}</h2>
            <p className={cn('',messageClass)}>{message}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default PackageCard
