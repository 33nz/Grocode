import { RouterProvider } from 'react-router-dom'
import router from '../router'
import Login from './Login' // Assuming Login.tsx is in the same directory

function App() {
  return (
    <RouterProvider router={router}>
      <div>
        <h1>App</h1>
        <p>React development has begun!</p>
        <Login /> {/* Login component wrapped here */}
      </div>
    </RouterProvider>
  )
}

export default App
