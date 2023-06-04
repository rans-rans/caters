import Link from 'next/link'
import Dropd from './Dropd'


const Navbar = () => {
  return (
    <div className='fixed inset-0 mb-10 z-30 h-14 bg-black text-white'>
            
            <ul className='flex gap-8 text-2xl items-center p-2'>
              <li className='capitalize text-lg'>
                <Link href="/">
                  breaking
                </Link>
              </li>
              <li className='capitalize text-lg '>
                <Link href="/search">
                  search
                </Link>
              </li>
              <li>
                <Dropd />
              </li>

            </ul>
            
    </div>
  )
}

export default Navbar