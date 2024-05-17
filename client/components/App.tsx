import CompletedChallenge from './CompletedChallenge'
import NewChallenge from './NewChallenge'
import OngoingChallenge from './OngoingChallenge'
import PageHeader from './PageHeader'

function App() {
  return (
    <div>
      <PageHeader />
      <NewChallenge />
      <div className="container is-max-desktop mb-6">
        <h2 className="is-size-2 has-text-weight-semibold has-text-white">
          On-going challenges
        </h2>
        <OngoingChallenge />
        <hr className="mb-5" />
        <h2 className="is-size-2 has-text-weight-semibold has-text-white">
          Completed Challenges
        </h2>
        <CompletedChallenge />
      </div>
    </div>
  )
}
export default App
