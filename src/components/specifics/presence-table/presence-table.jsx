import React, { useState } from 'react'

import PropTypes from 'prop-types'
import './presence-table.scss'
import { PresenceRow } from '@/components'

export const PresenceTable = ({ presences }) => {
  const mapPresences = () => {
    return presences.map(presence => <PresenceRow presence={presence} />)
  }

  return (
    <table className='presence-table'>
      <thead>
        <tr>
          <th>Data/Hora</th>
          <th>Sala</th>
          <th>Disciplina</th>
          <th>Presenças / Total Períodos</th>
          <th>Status</th>
          <th>Solicitar correção de presença</th>
        </tr>
      </thead>
      <tbody>{mapPresences()}</tbody>
    </table>
  )
}

PresenceTable.propTypes = {
  presences: PropTypes.array.isRequired,
}
