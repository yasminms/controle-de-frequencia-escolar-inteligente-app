import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { PresenceBadge } from '@/components'
import { Image } from '@/assets/images'
import { requestPresence } from '@/services/presence-service'

import 'moment/locale/pt-br'
import './presence-row.scss'

export const PresenceRow = ({ presence }) => {
  const {
    dateTime,
    classroom,
    subject,
    missedClasses,
    period,
    status,
  } = presence

  const onRequestPresence = event => {
    requestPresence(event.currentTarget.id).then(response => {
      alert(response.status)
    })
  }

  const getPresences = () => {
    const presences = period - missedClasses
    return `${presences.toString()}/${period.toString()}`
  }

  return (
    <tr>
      <td>{moment(dateTime).format('llll')}</td>
      <td>{classroom}</td>
      <td>{subject}</td>
      <td>{getPresences()}</td>
      <td>
        <PresenceBadge status={status} />
      </td>
      <td className='edit-presence'>
        <i id={presence.id} onClick={onRequestPresence}>
          <Image icon='EditPresence' />
        </i>
      </td>
    </tr>
  )
}

PresenceRow.propTypes = {
  presence: PropTypes.object.isRequired,
}
