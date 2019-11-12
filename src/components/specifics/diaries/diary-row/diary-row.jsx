import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '@/assets/images'
import 'moment/locale/pt-br'

import './diary-row.scss'

export const DiaryRow = ({ diary }) => {
  const { year, classroom, group, subject, teacher } = diary

  return (
    <tr>
      <td>{year}</td>
      <td>{classroom}</td>
      <td>{group}</td>
      <td>{subject}</td>
      <td>{teacher.fullName}</td>
      <td className='edit-diary'>
        <Image icon='EditPresence' />
      </td>
    </tr>
  )
}

DiaryRow.propTypes = {
  diary: PropTypes.object.isRequired,
}
