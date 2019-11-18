import React, { useState, useEffect } from 'react'
import { getPresencesRequests } from '@/services/presence-service'
import { PresenceRequestTable } from '@/components'

import './teacher-home.scss'

export const TeacherHome = () => {
  const [requests, setRequests] = useState([])
  useEffect(() => {
    getPresencesRequests().then(response => {
      setRequests(response.data)
    })
  }, [])

  const updatePresenceList = updatedRequests => {
    setRequests(updatedRequests)
  }

  return (
    <div className='presence-requests'>
      <div className='presence-requests__container'>
        <div className='presence-requests__container__title'>
          <span>Solicitações de correção de presença</span>
        </div>
        <div className='presence-requests__container__table'>
          <PresenceRequestTable
            parentCallback={updatePresenceList}
            requests={requests}
          />
        </div>
      </div>
    </div>
  )
}
