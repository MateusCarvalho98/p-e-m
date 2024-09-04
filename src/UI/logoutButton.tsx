import { useAuth0 } from '@auth0/auth0-react'
import './styles/logoutButton.css'
import LoadingScreen from './loadingScreen'
import { useState } from 'react'

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0()
  const [loading, setLoading] = useState(false)

  const handleLogout = () => {
    setLoading(true)
    logout({ logoutParams: { returnTo: 'http://localhost:3000/login' } })
  }

  return (
    <div className="button">
      {isAuthenticated && !loading && (
        <button onClick={handleLogout}>Logout</button>
      )}
      {loading && <LoadingScreen />}
    </div>
  )
}

export default LogoutButton
