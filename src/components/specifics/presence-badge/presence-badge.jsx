import React from 'react'
import PropTypes from 'prop-types'

import './presence-badge.scss'

export const PresenceBadge = ({ missedClasses, period }) => {
  const getStatus = () => {
    if (missedClasses === 0) {
      return 'present'
    }
    if (missedClasses === period) {
      return 'notPresent'
    }
    return 'parcial'
  }

  return (
    <div className='presence-badge'>
      <div className={`presence-badge__icon ${getStatus()}`} />
    </div>
  )
}

PresenceBadge.propTypes = {
  missedClasses: PropTypes.number.isRequired,
  period: PropTypes.number.isRequired,
}
