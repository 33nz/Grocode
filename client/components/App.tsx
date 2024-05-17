import CompletedChallenge from './CompletedChallenge'
import NewChallenge from './NewChallenge'
import OngoingChallenge from './OngoingChallenge'
import PageHeader from './PageHeader'

function App() {
  return (
    <div>
      <PageHeader />
      <NewChallenge />
      <OngoingChallenge />
      <CompletedChallenge />
    </div>
  )
}

export default App
