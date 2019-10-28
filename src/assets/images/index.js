import React from 'react'
import { Upload } from './upload'
import { Classroom } from './classroom'

const icons = {
  Upload,
  Classroom,
}

export const Image = ({ icon, ...props }) => {
  if (icon) {
    return React.createElement(icons[icon], props) || null
  }
  return null
}
