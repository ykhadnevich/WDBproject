import React from 'react'
import ReactDOM from 'react-dom/client'

import * as styles from './style.module.css'

const App = () => {
  return <div className={styles.header}>Hello from React !!!!</div>
}

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<App />)
