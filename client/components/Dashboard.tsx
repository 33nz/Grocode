import { useState, useEffect } from 'react'
import NewChallenge from './NewChallenge'

const Dashboard = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const accessToken = sessionStorage.getItem('access_token')
    if (accessToken) {
      fetch(
        'https://www.googleapis.com/calendar/v3/calendars/primary/events/eventId',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setEvents(data.items))
    }
  }, [])

  return (
    <div>
      <h2>Events</h2>
      <NewChallenge />
      <ul>{events}</ul>
    </div>
  )
}

export default Dashboard
