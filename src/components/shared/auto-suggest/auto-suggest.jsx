import React from 'react'
import { Multiselect } from 'react-widgets'
import PropTypes from 'prop-types'

import './auto-suggest.scss'

export const AutoSuggest = ({ list, onChange, placeholder, defaultValue }) => {
  return (
    <Multiselect
      containerClassName='auto-suggest'
      data={list}
      textField='name'
      valueField='value'
      onChange={value => onChange(value)}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  )
}

AutoSuggest.propTypes = {
  list: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.array,
}

AutoSuggest.defaultProps = {
  placeholder: '',
  defaultValue: [],
}
