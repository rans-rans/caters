import ImageWithText from '@/components/ui/ImageWithText'
import { ScrollAreaHorizontalDemo } from '@/components/ui/ScrollHorizon'
import images from '@/constants/images'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='min-h-screen'>
      {/* hero , business goal , stats, services , our promise, testimonials, contact */}

      <article className=' '>
        <ImageWithText
         title='our story'
         imageUrl={images.jollofview}
         ctaName='find out more'
         message='Making great food accessible & affordable. How did we do it ?'
         cta={true}
         className='md:flex'
         textClass='flex flex-col justify-evenly p-8 gap-8 '
         titleClass='font-regular text-sm uppercase'
         messageClass='font-medium text-4xl '
         ctaClass=''
         imgContainerClass=''
         imgClass=''
        />

      </article>
      <article className='pt-10 bg-white text-black'>
        
        <ImageWithText 
         imageUrl={images.bluecake}
         title={"We are Caters"}
         message={"We are a leading tech company dedicated to revolutionizing food business in Ghana and beyond.Our innovative web platform connects you with the best chefs in town."}
         cta={false}
         className=' md:w-[70%]  overflow-hidden mt-4 flex-row-reverse md:flex items-center justify-start gap-8 mx-auto p-4'
         imgClass='w-full max-w-[200px] rounded-full object-cover h-54 w-54 overflow-hidden'
         messageClass='font-regular text-sm text-justify pt-5 leading-normal tracking-wide'
         textClass='md:max-w-xs md:mr-0 '
         imgContainerClass='rounded-full object-contain'
         titleClass='font-bold text-xl '
        />  
      </article>
      <article className=' p-8 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 md:gap-2'>
        <ImageWithText 
        cta={false}
        imageUrl={images.bluecake}
        imgClass='w-48 h-48 rounded-md object-cover overflow-hidden '
        message='Available Nationwide'
        className='flex  gap-4 items-center justify-center flex-col-reverse '
        imgContainerClass='w-30 h-30 overflow-hidden object-cotain'
        messageClass=''

        />
        <ImageWithText 
        cta={false}
        imageUrl={images.bluecake}
        imgClass='w-48 h-48 rounded-md object-cover overflow-hidden '
        message='200,000 customers served'
        className='flex  gap-2 items-center justify-center flex-col-reverse  '
        imgContainerClass='w-30 h-30 overflow-hidden object-cotain'
        messageClass='p-0'
        textClass='max-w-[200px] text-center'

        />   
        <ImageWithText 
        cta={false}
        imageUrl={images.bluecake}
        imgClass='w-48 h-48 rounded-md object-cover overflow-hidden '
        message='20 employees'
        className='flex  gap-2 items-center justify-center flex-col-reverse '
        imgContainerClass='w-30 h-30 overflow-hidden object-cotain'
        messageClass=''

        />
      </article>
      <article>
        <ScrollAreaHorizontalDemo/>
      </article>
    </section>
  )
}

export default About
