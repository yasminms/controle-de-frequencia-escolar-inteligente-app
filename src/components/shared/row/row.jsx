import React from 'react'
import PropTypes from 'prop-types'

import './row.scss'

export const Row = ({ children, className }) => (
  <div className={`row${` ${className}`}`}>{children}</div>
)

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Row.defaultProps = {
  className: '',
}
