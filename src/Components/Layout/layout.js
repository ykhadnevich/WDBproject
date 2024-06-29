import PropTypes from 'prop-types'
import React from 'react'

export const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My App</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
