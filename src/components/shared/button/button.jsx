import React from 'react'
import PropTypes from 'prop-types'

import './button.scss'

export const Button = ({ text, onClick, type }) => (
  <button type={type} onClick={onClick} className='button'>
    {text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
}

Button.defaultProps = {
  onClick: () => null,
  type: 'button',
}
