import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { PresenceBadge } from '@/components'
import { Image } from '@/assets/images'
import { requestPresence } from '@/services/presence-service'
import { success, error } from '@/services/toastr'

import 'moment/locale/pt-br'
import './presence-row.scss'

export const PresenceRow = ({ presence, parentCallback }) => {
  const {
    id,
    dateTime,
    classroom,
    subject,
    missedClasses,
    period,
    status,
  } = presence

  const onRequestPresence = event => {
    requestPresence(event.currentTarget.id)
      .then(response => {
        success('Correção de presença solicitada')
        parentCallback(response.data)
      })
      .catch(err => {
        error(err.response.data.message)
      })
  }

  const getPresences = () => {
    const presences = period - missedClasses
    return `${presences.toString()}/${period.toString()}`
  }

  return (
    <tr className='presence-row'>
      <td>{moment(dateTime).format('llll')}</td>
      <td>{classroom}</td>
      <td>{subject}</td>
      <td>{getPresences()}</td>
      <td>
        <PresenceBadge status={status} />
      </td>
      <td className='presence-row__edit-presence'>
        <i id={id} onClick={onRequestPresence}>
          <Image icon='EditPresence' />
        </i>
      </td>
    </tr>
  )
}

PresenceRow.propTypes = {
  presence: PropTypes.object.isRequired,
  parentCallback: PropTypes.func.isRequired,
}
