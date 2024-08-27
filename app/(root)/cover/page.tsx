import { Button } from '@/components/ui/button'
import icons from '@/constants/icons'
import images from '@/constants/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '@/components/ui/button'
import ListWithIcon from '@/listwithIcon'


const Cover = () => {
  return (
    <section   className='pt-10'>
      {/* hero section */}
      <article id="#hero" className='text-white md:grid md:grid-cols-2 gap-16 items-center  md:px-8 pt-5'>
        <div className='flex-1 items-center justify-center gap-4  space-y-6'>
         
          <h3 className='font-extrabold text-2xl md:text-3xl max-w-lg text-center '>
            Book for meals for your ceremonies {' '}
            and outings
          </h3>
          <p className=' font-medium text-sm  text-justify md:text-balance leading-relaxed  max-w-md'>
            Get meals for your funerals, engaments,
            weddings, festivals, birthdays, events.
            We offer various services made just for you.
            At Caters, you get value for your money spent.
            <span> a craft of new taste </span> 
          </p>
          {/* call to action */}
          <div className='flex gap-4 mt-5'>
            <Link href="/booking"  className={`block w-full text-lg. bg-secondarycolor hover:bg-secondarycolor-200 capitalize font-semibold rounded-sm ${buttonVariants()}`}>
              book now
            </Link>
            <Link href="/about" className={`flex gap-2 text-secondary-200 bg-white hover:bg-white capitalize w-full  ${buttonVariants({variant:"outline"})}`}>

              <span className='text-secondarycolor-100 text-md'>
                about us
              </span>
              <span>
                <Image 
                src={icons.arrowright}
                alt='arrow left icon'
                width={20}
                height={20}
                className=''
                />
              </span>
            </Link>
          </div>
        </div>
         <div className='object-contain flex items-center justify-center w-full overflow-hidden pt-12 rounded-md '>
          <Image 
          src={images.jollofgoat}
          alt="hero image"
          width={200}
          height={200}
          className='object-cover border-4 border-secondarycolor shadow-lg shadow-secondarycolor-100 rounded-md w-full h-auto md:w-[300px]'
          />
         </div>
      </article>

      {/* services section of the cover page */}
      <article id="#services" className='text-white pt-20  space-y-5'>
        <h3 className='tracking-wide text-sm leading-normal font-semibold md:text-center'>Services</h3>
        <h4 className='text-xl font-bold md:text-center'>Simplify your event organization </h4>
        <div className='md:flex items-start justify-center gap-8'>
          <div className=''>
              <Image 
                src={images.jollofgoat}
                alt="cover service image"
                  width={200}
                  height={200}
                className='w-full rounded-lg'
              />
          </div>
          <div className='text-lg font-normal pt-8 md:pt-0'>
            <p className='font-medium text-sm  text-justify md:text-balance leading-relaxed  max-w-md'>
              For your daily celebarations,outings, festives and parties.
              payments are only made after we reach out to you for further 
              disscussions.If you meet all our requirements , we will serve you
              on that special day . Please Note we do not take online payment for now.We only take the responsibility of cooking for you . we do not do the serving but if you need waiters for your ocassions we may be compromise base on our agreement. the folling are some few outlined services:
            </p>
            <ul className='pt-8 space-y-4'>
              <ListWithIcon
                message="wedding ceremony"
                
              />

              <ListWithIcon
                message="engagements"
                
              />
              <ListWithIcon
                message="outings or dating"
                
              />
              <ListWithIcon
                message="funerals"
                
              />
              <ListWithIcon
                message="birthday parties"   
              />
            </ul>
          </div>
        </div>
            <Link className='flex items-center gap-4 pt-8 md:justify-center' href="/services">
              <p className='capitalize text-md tracking-wider text-secondarycolor-100'>
                learn more
              </p>
              <div className='bg-secondarycolor-100 rounded-full'>
                <Image 
                src={icons.arrowright}
                alt="learn more icon"
                width={30}
                height={30}
                className=''
                />
              </div>
            </Link>
      </article>
    </section>
  )
}

export default Cover
