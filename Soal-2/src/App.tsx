import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App