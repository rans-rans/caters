import NextUiProvider from '@/components/providers/nextuiprovider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'N e w s p r e e | l a n g l o v e',
  description: 'Analysis on most popular and better programming languages.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUiProvider>
          {children}
        </NextUiProvider>
        </body>
    </html>
  )
}
