import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.tsx'
import './index.css'
import { router } from './routes/index.tsx'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={client}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
