import React from 'react'
import ReactDOM from 'react-dom/client'

import { Layout } from './Components/Layout/layout'

const App = () => {
  return (
    <div>
      <Layout>
        <p>Hello from React !!!!</p>
        <div>Test </div>
      </Layout>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<App />)
