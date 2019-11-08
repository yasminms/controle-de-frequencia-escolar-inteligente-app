import React from 'react'
import PropTypes from 'prop-types'
import TimeField from 'react-simple-timefield'

export const InputTime = ({ value, onChange, inputComponent, disabled }) => (
  <TimeField
    className='input'
    onChange={onChange}
    input={inputComponent}
    value={value}
    colon=':'
    disabled={disabled}
  />
)

InputTime.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  inputComponent: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
}

InputTime.defaultProps = {
  disabled: false,
}
