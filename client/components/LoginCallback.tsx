import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginCallback = () => {
  const navigate = useNavigate()
  const [accessToken, setAccessToken] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash)
    const accessToken = params.get('access_token')
    setAccessToken(accessToken)
    sessionStorage.setItem('access_token', accessToken)
    navigate('/dashboard', { replace: true })
  }, [])

  return <div>Redirecting to dashboard...</div>
}

export default LoginCallback
