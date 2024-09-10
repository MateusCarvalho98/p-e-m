'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import { Auth0Context } from '@auth0/auth0-react'
import Image from 'next/image'
import '@/UI/styles/header.css'

const Header = () => {
  const { user, logout } = useContext(Auth0Context)
  return (
    <header className="header">
      <nav className="nav">
        <ul className="ul">
          <li className="li">
            <Link className="link" href="/">
              Home
            </Link>
          </li>
        </ul>
        <ul className="ul">
          {user ? (
            <>
              <li className="li">
                <Image
                  src={user.picture || '/images/default-avatar.png'}
                  alt={`${user.given_name}'s profile`}
                  className="profileImage"
                  width={1000}
                  height={1000}
                />
              </li>
              <li className="li">Olá, {user.given_name}</li>
              <li className="li">
                <button className="button" onClick={() => logout()}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="li">
              <Link className="link" href="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
