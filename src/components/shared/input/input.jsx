import React from 'react'
import PropTypes from 'prop-types'

import './input.scss'

export const Input = ({
  onChange,
  type,
  placeholder,
  disabled,
  value,
  name,
  required,
}) => (
  <input
    className='input'
    onChange={onChange}
    type={type}
    placeholder={placeholder}
    disabled={disabled}
    name={name}
    value={value}
    autoComplete={false}
    required={required}
  />
)

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  required: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  disabled: false,
  required: true,
}
