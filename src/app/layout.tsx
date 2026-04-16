import type { Metadata } from 'next'
import './globals.css'
import dynamic from 'next/dynamic'
import Parallax from '@/components/Parallax'

const Providers = dynamic(() => import('./providers').then(m => m.Providers), { ssr: false })

export const metadata: Metadata = {
  title: 'BITFAUNA — 2-Bit On-Chain Pareidolia',
  description: '1111 on-chain, generative, 4-color pixel art compositions.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>
          <Parallax />
          {children}
        </Providers>
      </body>
    </html>
  )
}
