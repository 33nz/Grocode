import { useState } from 'react'

const NewChallenge = () => {
  const [challenge, setChallenge] = useState('')
  const [dueDate, setDueDate] = useState('')
  return (
    <div>
      <h2>In this challenge...</h2>
      <form>
        <input
          type="text"
          required
          value={challenge}
          onChange={(e) => setChallenge(e.target.value)}
        />
        <select value={dueDate} onChange={(e) => setDueDate(e.target.value)}>
          <option>Pick a due date</option>
          <option>Tomorrow</option>
        </select>
      </form>
    </div>
  )
}

export default NewChallenge
