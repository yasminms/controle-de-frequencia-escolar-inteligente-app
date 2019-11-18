import React from 'react'
import PropTypes from 'prop-types'
import { Label } from '../label/label'

import './radio.scss'

export const Radio = ({
  onChange,
  disabled,
  value,
  name,
  required,
  labelText,
  checked,
  className,
}) => (
  <div className='radio-container'>
    <input
      className={`radio-container__radio${className ? ` ${className}` : ``}`}
      type='radio'
      onChange={onChange}
      disabled={disabled}
      name={name}
      value={value}
      autoComplete={false}
      required={required}
      checked={checked}
    />
    <Label
      text={labelText}
      className='radio-container__label'
      onClick={onChange}
    />
  </div>
)

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  required: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
}

Radio.defaultProps = {
  disabled: false,
  required: true,
  className: '',
}
