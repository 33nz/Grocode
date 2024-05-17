/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Login from './components/Login'
import LoginCallback from './components/LoginCallback'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />} />,
    <Route index element={<Home />} />,
    <Route path="/dashboard" element={<Dashboard />} />,
    <Route path="/login" element={<Login />} />,
    <Route path="/login/callback" element={<LoginCallback />} />,
  ])
)

export default router
