import React from 'react'

import * as styles from './login.module.css'
import PropTypes from 'prop-types'

export const LogIn = ({ isLogged }) => {
  return <div className={styles.login}>{isLogged ? 'Log In' : 'Log Out'}</div>
}

LogIn.propTypes = {
  isLogged: PropTypes.bool.isRequired
}
