function CompletedChallenge() {
  return (
    <div className="container is-max-desktop">
      <div className="columns">
        <div className="column is-one-third-desktop is-half-tablet is-full-mobile">
          <h1 className="is-size-3 has-text-white has-text-weight-semibold">
            Challenge input goes here
          </h1>
        </div>
        <div className="column has-text-right">
          <p className="is-size-6 has-text-white">Completed on</p>
          <p className="is-size-6 has-text-primary">24 May 2024</p>
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
  )
}

export default CompletedChallenge
