import React from 'react'
import { useEffect, useState } from 'react'
const ChallengesHomepage = () => {
  const [challenges, setChallenges] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/challenges')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setChallenges(data)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      {challenges.map((challenge) => (
        <div className="container is-max-desktop" key={challenge}>
          <div className="columns">
            <div className="column is-one-third-desktop is-half-tablet is-full-mobile">
              <h1 className="is-size-4 has-text-white has-text-weight-semibold">
                {challenge.challenge}
              </h1>
            </div>
            <div className="column has-text-right">
              <p className="is-size-6 has-text-white">Due on</p>
              <p className="is-size-6 has-text-primary">{challenge.dueDate}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <progress className="progress is-primary" value="30" max="100">
                30%
              </progress>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ChallengesHomepage
