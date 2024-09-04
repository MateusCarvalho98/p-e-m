'use client'
import ContainerContas from '@/components/containerContas'
import LogoutButton from '@/UI/logoutButton'
import { useAuth0 } from '@auth0/auth0-react'
import LoadingScreen from '@/UI/loadingScreen'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

function Home() {
  const router = useRouter()

  const { isAuthenticated, isLoading } = useAuth0()
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push('/login')
    }
  }, [isAuthenticated, isLoading, router])
  return (
    <main>
      <div>
        {!isLoading ? (
          <>
            <LogoutButton />
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
