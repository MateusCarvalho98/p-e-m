'use client'
import ContainerContas from '@/components/containerContas'
import LogoutButton from '@/UI/logoutButton'
import { Auth0Context, useAuth0 } from '@auth0/auth0-react'
import LoadingScreen from '@/UI/loadingScreen'
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'

function Home() {
  const router = useRouter()

  const { isAuthenticated, isLoading } = useAuth0()

  const { user, logout } = useContext(Auth0Context)

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push('/login')
    }

    if (isAuthenticated) {
      console.log(user)
    }
  }, [isAuthenticated, isLoading, router, user])
  return (
    <main>
      <div>
        {!isLoading && isAuthenticated ? (
          <>
            <ContainerContas />
          </>
        ) : (
          <LoadingScreen />
        )}
      </div>
    </main>
  )
}

export default Home
