import MicrosoftLogin from 'react-microsoft-login'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

interface MicrosoftLoginProps {
  accessToken: string
  account: {
    name: string
    username: string
  }
}

export function SignIn() {
  const { setIsAuthenticated, setUser } = useAuth()

  const navigate = useNavigate()

  const authHandler = (err: unknown, data: MicrosoftLoginProps) => {
    console.log(err, data)

    if (data?.accessToken) {
      localStorage.setItem('@FROST:TOKEN', JSON.stringify(data.accessToken))
      localStorage.setItem(
        '@FROST:USER_DATA',
        JSON.stringify({
          email: data.account.username,
          name: data.account.name,
        }),
      )

      setUser({ email: data.account.username, name: data.account.name })
      setIsAuthenticated(true)
      // navigate('/dashboard/incident-creation')
    }
  }

  return (
    <main className="w-screen h-screen flex items-center justify-center ">
      <MicrosoftLogin
        clientId="3b8933d6-8ca3-49b6-97c2-458d315ad84f"
        authCallback={authHandler}
      >
        <button className="py-2 px-4 font-bold text-center text-md bg-blue-500 rounded text-white">
          Sign In with Microsoft
        </button>
      </MicrosoftLogin>
    </main>
  )
}
