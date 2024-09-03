'use client'
import ContainerContas from '@/components/containerContas'
import LogoutButton from '@/UI/button'

function Home() {
  return (
    <main>
      <div>
        <LogoutButton />
        <ContainerContas />
      </div>
    </main>
  )
}

export default Home
