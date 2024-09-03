'use client'
import React, { createContext } from 'react'
import LogoutButton from '@/UI/button'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'

const Login = () => {
  const { loginWithRedirect } = useAuth0()

  useEffect(() => {
    loginWithRedirect()
  }, [loginWithRedirect])

  // return (
  //   <>
  //     <LogoutButton />
  //   </>
  // )
}

export default Login
