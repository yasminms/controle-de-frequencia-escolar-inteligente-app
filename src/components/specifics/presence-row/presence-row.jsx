import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { PresenceBadge } from '@/components'
import { Image } from '@/assets/images'

import 'moment/locale/pt-br'
import './presence-row.scss'

export const PresenceRow = ({ presence }) => {
  const { dateTime, classroom, subject, missedClasses, period } = presence

  const getPresences = () => {
    const presences = period - missedClasses
    return `${presences.toString()}/${period.toString()}`
  }

  return (
    <tr>
      <td>{moment(dateTime).calendar()}</td>
      <td>{classroom}</td>
      <td>{subject}</td>
      <td>{getPresences()}</td>
      <td>
        <PresenceBadge missedClasses={missedClasses} period={period} />
      </td>
      <td className='edit-presence'>
        <Image icon='EditPresence' />
      </td>
    </tr>
  )
}

PresenceRow.propTypes = {
  presence: PropTypes.object.isRequired,
}
