import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '@/assets/images'

import './checkbox.scss'

export const Checkbox = ({ name, checked, onChange, text }) => (
  <label className='checkbox'>
    <input
      className='checkbox__input'
      type='checkbox'
      name={name}
      checked={checked}
      onChange={onChange}
    />
    <div className='checkbox__container'>
      <i className='checkbox__container__icon'>
        <Image icon='Check' />
      </i>
    </div>
    <span className='checkbox__label'>{text}</span>
  </label>
)

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
