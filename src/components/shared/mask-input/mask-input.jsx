import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'

export const MaskInput = ({
  onChange,
  value,
  required,
  type,
  mask,
  placeholder,
  name,
}) => (
  <InputMask
    type={type}
    className='input'
    mask={mask}
    maskChar={null}
    value={value}
    onChange={onChange}
    required={required}
    minLength={15}
    placeholder={placeholder}
    name={name}
  />
)

MaskInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  mask: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
}

MaskInput.defaultProps = {
  value: '',
  required: true,
  type: 'text',
  placeholder: '',
}
