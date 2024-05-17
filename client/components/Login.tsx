import React, { useState, useEffect } from 'react'

const Login = () => {
  const clientId =
    '644389040073-l6qnq55mkqtf91d4212bc0vrms780scg.apps.googleusercontent.com'
  const scope =
    'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.events.readonly'
  const redirecturi = 'http://localhost:5174/login/callback'
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${clientId}&scope=${scope}&redirect_uri=${redirecturi}`

  useEffect(() => {
    window.location.href = authUrl
  }, [])

  return <div></div>
}

export default Login
