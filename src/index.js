import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './Components/Layout/layout'
import { LogIn } from './Components/Login/Login'
const App = () => {
  const [isLogged, setIsLogged] = useState(false)

  const handleLogin = (status) => {
    setIsLogged(status)
  }

  return (
    <div>
      <Layout>
        <LogIn isLogged={isLogged} onLogin={handleLogin} />
      </Layout>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)
