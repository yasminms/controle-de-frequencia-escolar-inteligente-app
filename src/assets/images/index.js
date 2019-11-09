import React from 'react'
import { Upload } from './upload'
import { Classroom } from './classroom'
import { EditPresence } from './edit-presence'

const icons = {
  Upload,
  Classroom,
  EditPresence,
}

export const Image = ({ icon, ...props }) => {
  if (icon) {
    return React.createElement(icons[icon], props) || null
  }
  return null
}
