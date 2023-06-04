import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/local/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NewSpree',
  description: 'A news channel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className='bg-gray-300 '>
          <Navbar/>
          <div className='mt-20'>
          {children}
          </div>
        </body>
      
      
    </html>
  )
}
