import React from 'react'
import PropTypes from 'prop-types'
import { PresenceRow } from '@/components'

import './presence-table.scss'

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
      <tbody>
        {presences.length > 0 ? (
          mapPresences()
        ) : (
          <div className='presence-table__no-data'>Não há registros</div>
        )}
      </tbody>
    </table>
  )
}

PresenceTable.propTypes = {
  presences: PropTypes.array.isRequired,
}
