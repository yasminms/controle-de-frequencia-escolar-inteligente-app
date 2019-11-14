import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Image } from '@/assets/images'
import { updatePresence } from '@/services/presence-service'

import 'moment/locale/pt-br'
import './request-row.scss'

export const PresenceRequestRow = ({ request, parentCallback }) => {
  const { id, detection, capture, student, group, subject, startTime } = request

  const onUpdatePresence = (event, status) => {
    const requestObject = {
      id: event.currentTarget.parentNode.id,
      status,
    }

    updatePresence(requestObject).then(response => {
      parentCallback(response.data)
    })
  }

  return (
    <tr className='request-row'>
      <td>{student.fullName}</td>
      <td>{group}</td>
      <td>{`${detection}/${capture}`}</td>
      <td>{subject}</td>
      <td>{moment(startTime).format('llll')}</td>
      <td id={id} className='request-row__request-action'>
        <i onClick={event => onUpdatePresence(event, true)}>
          <Image icon='Checkmark' />
        </i>
      </td>
      <td id={id} className='request-row__request-action'>
        <i onClick={event => onUpdatePresence(event, false)}>
          <Image icon='Wrong' />
        </i>
      </td>
    </tr>
  )
}

PresenceRequestRow.propTypes = {
  request: PropTypes.object.isRequired,
  parentCallback: PropTypes.func.isRequired,
}
