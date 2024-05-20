import { Inter } from 'next/font/google'
import './globals.css'
import Aside from '@/components/aside-sect/aside'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nvntry',
  description: 'Monitor and manage inventory levels in real-timed',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex'>
          <Aside/>
          {children}
        </div>
      </body>
    </html>
  )
}
