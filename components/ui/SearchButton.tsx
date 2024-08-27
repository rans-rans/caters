import React from 'react'
import { Input } from './input'
import { Button } from './button'
import Image from 'next/image'
import icons from '@/constants/icons'

const SearchButton = () => {
  return (
    <div className='flex relative bg-transparent border-secondarycolor-100  border rounded-md bg-white flex-row-reverse text-black'>
      <Input
      placeholder='search for meals ' 
      className='p-2 rounded-md font-normal px-2 border-none :ring-white'/>
      <Button className='bg-white  border-none rounded-md py-2' type="submit">
        <Image
          src={icons.search}
          alt="searchicon"
          width={20}
          height={20}
          className='bg-white'
        />
      </Button>
    </div>
  )
}

export default SearchButton
