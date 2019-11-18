import React from 'react'
import PropTypes from 'prop-types'
import { PresenceRequestRow } from '@/components'

import './request-table.scss'

export const PresenceRequestTable = ({ requests, parentCallback }) => {
  const updateRequestList = updatedRequests => {
    parentCallback(updatedRequests)
  }

  const mapRequests = () => {
    return requests.map(request => (
      <PresenceRequestRow
        parentCallback={updateRequestList}
        request={request}
      />
    ))
  }

  return (
    <table className='request-table'>
      <thead>
        <tr>
          <th>Aluno</th>
          <th>Turma</th>
          <th>Detecções e Capturas</th>
          <th>Disciplina</th>
          <th>Horário da aula</th>
          <th>Aceitar</th>
          <th>Rejeitar</th>
        </tr>
      </thead>
      <tbody>
        {requests.length > 0 ? (
          mapRequests()
        ) : (
          <div className='request-table__no-data'>
            Não há solicitações pendentes
          </div>
        )}
      </tbody>
    </table>
  )
}

PresenceRequestTable.propTypes = {
  requests: PropTypes.array.isRequired,
  parentCallback: PropTypes.func.isRequired,
}
