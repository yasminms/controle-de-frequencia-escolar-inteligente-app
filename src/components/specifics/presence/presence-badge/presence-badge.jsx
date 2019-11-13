import React from 'react'
import PropTypes from 'prop-types'

import './presence-badge.scss'

export const PresenceBadge = ({ status }) => {
  return (
    <div className='presence-badge'>
      <div className={`presence-badge__icon ${status}`} />
    </div>
  )
}

PresenceBadge.propTypes = {
  status: PropTypes.string.isRequired,
}
