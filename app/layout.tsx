import { Footer, Header } from '@/components'
import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Car showcase',
}

let a = 10
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
