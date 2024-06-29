import React, { useState } from 'react'
import * as styles from './login.module.css'
import PropTypes from 'prop-types'

export const LogIn = ({ isLogged, onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const validUsername = 'admin'
    const validPassword = 'password123'

    if (username === validUsername && password === validPassword) {
      onLogin(true)
    } else {
      alert('Invalid username or password')
    }
  }

  return (
    <div className={styles.login}>
      {isLogged ? (
        <span onClick={() => onLogin(false)}>Log Out</span>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      )}
    </div>
  )
}

LogIn.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired
}
