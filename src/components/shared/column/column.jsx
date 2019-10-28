import React from 'react'
import PropTypes from 'prop-types'

import './column.scss'

export const Column = ({ children, className }) => (
  <div className={`column ${className}`}>{children}</div>
)

Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Column.defaultProps = {
  className: '',
}
