function OngoingChallenge() {
  return (
    <div>
      <h1 className="is-size-4">Challenge input goes here</h1>
      <p className="is-size-5 has-text-light">Due on</p>
      <p className="is-size-6">24 May 2024</p>
      <progress className="progress is-primary" value="30" max="100">
        30%
      </progress>
    </div>
  )
}

export default OngoingChallenge
