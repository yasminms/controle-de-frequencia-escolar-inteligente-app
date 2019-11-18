import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '@/assets/images'
import 'moment/locale/pt-br'

import './diary-row.scss'

export const DiaryRow = ({ diary, toggleModal }) => {
  const { year, classroom, group, subject, teacher } = diary

  return (
    <tr className='diary-row'>
      <td>{year}</td>
      <td>{classroom}</td>
      <td>{group}</td>
      <td>{subject}</td>
      <td>{teacher.fullName}</td>
      <td className='diary-row__edit-diary'>
        <i onClick={() => toggleModal(true, diary)}>
          <Image icon='EditPresence' />
        </i>
      </td>
    </tr>
  )
}

DiaryRow.propTypes = {
  diary: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
}
