'use client'
import { Auth0Provider } from '@auth0/auth0-react'
import { auth0Config } from '../../auth0-config'

export default function Auth0LayoutProvider({
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
      {children}
    </Auth0Provider>
  )
}
