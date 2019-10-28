import React from 'react'
import PropTypes from 'prop-types'

import './button-secondary.scss'

export const ButtonSecondary = ({ text, onClick, type }) => (
  <button type={type} onClick={onClick} className='button-secondary'>
    {text}
  </button>
)

ButtonSecondary.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
}

ButtonSecondary.defaultProps = {
  onClick: null,
  type: 'button',
}
