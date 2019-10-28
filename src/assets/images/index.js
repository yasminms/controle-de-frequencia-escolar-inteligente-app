import React from 'react'
import { Upload } from './upload'

const icons = {
  Upload,
}

export const Image = ({ icon, ...props }) => {
  if (icon) {
    return React.createElement(icons[icon], props) || null
  }
  return null
}
