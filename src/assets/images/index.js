import React from 'react'
import { Upload } from './upload'
import { Classroom } from './classroom'
import { Check } from './check'
import { EditPresence } from './edit-presence'
import { Checkmark } from './checkmark'
import { Wrong } from './wrong'

const icons = {
  Upload,
  Classroom,
  Check,
  EditPresence,
  Checkmark,
  Wrong,
}

export const Image = ({ icon, ...props }) => {
  if (icon) {
    return React.createElement(icons[icon], props) || null
  }
  return null
}
