import React from 'react'
import PropTypes from 'prop-types'

import './select.scss'

export const Select = ({ children, onChange, value, required }) => (
  <select
    className='select'
    onChange={onChange}
    value={value}
    required={required}
  >
    {children}
  </select>
)

Select.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
}

Select.defaultProps = {
  required: true,
}
