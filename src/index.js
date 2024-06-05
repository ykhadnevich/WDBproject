import React from 'react'
import ReactDOM from 'react-dom/client'

import * as styles from './style.module.css'
import { Layout } from './Components/layout'

const App = () => {
  return (
    <div className={styles.header}>
      <Layout>
        <p>Hello from React !!!!</p>
        <div>Test</div>
      </Layout>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<App />)
