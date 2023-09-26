/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { redirect } from 'react-router-dom'

export interface User {
  name: string
  email: string
}

interface IAuthContextData {
  isAuthenticated: boolean
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>
  user?: User
  setUser: Dispatch<SetStateAction<User | undefined>>
}

interface IAuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext({} as IAuthContextData)

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<User>()

  useEffect(() => {
    try {
      const token = JSON.parse(localStorage.getItem('@FROST:TOKEN') || '')
      const userData = JSON.parse(
        localStorage.getItem('@FROST:USER_DATA') || '',
      )

      if (!!token && !!userData) {
        setUser(userData)
        setIsAuthenticated(true)
        redirect('/dashboard/incident-creation')
      } else {
        console.log('User not found')
        setIsAuthenticated(false)
        redirect('/')
      }
    } catch (error) {
      redirect('/')
      console.error('error')

      setIsAuthenticated(false)
    }
  }, [isAuthenticated])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}
