import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
import Header from '@/UI/header'
import Auth0LayoutProvider from '@/providers/auth0LayoutProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'P-E-M',
  description: 'Personal Exchange Manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Auth0LayoutProvider>
      <html lang="pt-br">
        <body>
          <Header /> {children}
        </body>
      </html>
    </Auth0LayoutProvider>
  )
}
