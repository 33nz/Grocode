import React, { useState } from 'react'
import Challenge from '../../models/challenge'

//post a challenge by writing it to the JSON file of challenges
function postChallenge(c: Challenge) {
  fetch('http://localhost:8000/challenges', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(c),
  })
}

const NewChallenge = () => {
  //useState for challenge description and dueDate
  const [challenge, setChallenge] = useState('')
  const [dueDate, setDueDate] = useState('')

  //onsubmit to submit form as new challenge object, WIP
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const newChallenge: Challenge = { challenge, dueDate, completed: 'no' }
      postChallenge(newChallenge)
      console.log(newChallenge)
    } catch (err: any) {
      console.error(err)
    }
  }

  //challenge and duedate as input fields
  return (
    <div>
      <h2>In this challenge...</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          required
          value={challenge}
          onChange={(e) => setChallenge(e.target.value)}
        />
        <select value={dueDate} onChange={(e) => setDueDate(e.target.value)}>
          <option>Pick a due date</option>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
        </select>
      </form>
    </div>
  )
}

export default NewChallenge
