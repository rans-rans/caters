import React from 'react'

interface headprops {
    message: string
}

const Header = ({message}:headprops) => {
  return (
    <h2 className='font-extrabold text-xl pt-10 text-wrap max-w-[250px] leading-2 tracking-wide'>
      {message}
    </h2>
  )
}

export default Header
