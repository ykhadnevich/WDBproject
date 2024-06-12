import React from 'react'

import classnames from 'classnames'
import * as styles from './counter.module.css'
import PropTypes from 'prop-types'

export const Counter = ({ value, type, active }) => {
  return (
    <div
      className={classnames(styles.counterBlock, {
        [styles.counterBlockActive]: active
      })}
    >
      <span
        className={classnames(styles.counterLabel, {
          [styles.counterLabelActive]: active
        })}
      >
        Заявок
      </span>
      <span
        className={classnames(styles.counterCount, {
          [styles.counterCountTotal]: type === 'total'
        })}
      >
        {value}
      </span>
    </div>
  )
}

Counter.propTypes = {
  type: PropTypes.oneOf(['total', 'new']).isRequired,
  active: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired
}
