/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
<<<<<<< HEAD
import PageHeader from './components/PageHeader'
import NewChallenge from './components/NewChallenge'
import OngoingChallenge from './components/OngoingChallenge'
import CompletedChallenge from './components/CompletedChallenge'
import About from './components/About'
import Contact from './components/Contact'
import ChallengeIdeas from './components/ChallengeIdeas'
import SuccessStories from './components/SuccessStories'
=======
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Login from './components/Login'
import LoginCallback from './components/LoginCallback'
>>>>>>> main

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />} />,
<<<<<<< HEAD
    // <Route index element={<Home />} />,
    <Route path="about" element={<About />} />,
    <Route path="contact" element={<Contact />} />,
    <Route path="ideas" element={<ChallengeIdeas />} />,
    <Route path="inspiration" element={<SuccessStories />} />,
    // <Route path="/dashboard" element={<Dashboard />} />,
    // <Route path="/login" element={<Login />} />,
    // <Route path="/login/callback" element={<LoginCallback />} />,
=======
    <Route index element={<Home />} />,
    <Route path="/dashboard" element={<Dashboard />} />,
    <Route path="/login" element={<Login />} />,
    <Route path="/login/callback" element={<LoginCallback />} />,
>>>>>>> main
  ])
)

export default router
