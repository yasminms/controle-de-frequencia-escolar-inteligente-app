import React from 'react'
import PropTypes from 'prop-types'

import './label.scss'

export const Label = ({ labelFor, text, className, onClick }) => (
  <label htmlFor={labelFor} className={`label ${className}`} onClick={onClick}>
    {text}
  </label>
)

Label.propTypes = {
  text: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

Label.defaultProps = {
  className: '',
  onClick: () => null,
}
