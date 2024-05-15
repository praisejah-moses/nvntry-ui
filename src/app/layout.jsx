'use client'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import './globals.css'
import './style.css'

import Loader from '@/components/Loader/loader.jsx'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Nvntry',
//   description: 'Monitor and manage inventory levels in real-timed',
// }

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <html lang='en'>
      <body className={inter.className}>{loading ? <Loader /> : children}</body>
    </html>
  )
}
