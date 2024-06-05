import React from 'react'
import PropTypes from 'prop-types'

import * as styles from './header.module.css'

export const Header = () => {
  return <div className={styles.header}>Header</div>
}

Header.propTypes = {
  children: PropTypes.node
}
