import React from 'react'
import PropTypes from 'prop-types'

import * as styles from './header.module.css'

export const Header = ({ children }) => {
  return <div className={styles.header}>{children}</div>
}

Header.propTypes = {
  children: PropTypes.node
}
