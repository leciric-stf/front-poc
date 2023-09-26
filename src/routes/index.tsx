import { LoaderFunctionArgs, createBrowserRouter } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { AuthResponse } from '../pages/auth-response'
import { IncidentCreation } from '../pages/incident-creation'
import { Root } from '../pages/root'
import { SignIn } from '../pages/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/auth-response',
    element: <AuthResponse />,
  },
  {
    path: '/dashboard',
    element: <Root></Root>,
    children: [
      {
        path: 'incident-creation',
        element: <IncidentCreation />,
      },
    ],
  },
])

function protectedLoader({ request }: LoaderFunctionArgs) {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) {
    const params = new URLSearchParams()
    params.set('from', new URL(request.url).pathname)
    return redirect('/login?' + params.toString())
  }
}
