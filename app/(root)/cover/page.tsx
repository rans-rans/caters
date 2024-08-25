import images from '@/constants/images'
import Image from 'next/image'
import React from 'react'

const Cover = () => {
  return (
    <section>
      {/* hero section */}
      <article>
        <div className=''>

        </div>
         <div className=''>
          <Image 
          src={images.jollofview}
          alt="hero image"
          width={500}
          height={500}
          />

         </div>
      </article>
    </section>
  )
}

export default Cover
