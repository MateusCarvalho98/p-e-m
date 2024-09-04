'use client'
import { Auth0Provider } from '@auth0/auth0-react'
import { auth0Config } from '../../auth0-config'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'P-E-M',
//   description: 'Personal Exchange Manager',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{ redirect_uri: auth0Config.redirectUri }}
    >
      <html lang="pt-br">
        <body>{children}</body>
      </html>
    </Auth0Provider>
  )
}
