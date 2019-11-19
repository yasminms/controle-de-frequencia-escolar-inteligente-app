import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { getPresencesRequests } from '@/services/presence-service'
import { PresenceRequestTable } from '@/components'
import { getUserCredentials } from '@/services/auth-service'
import URLEnum from '@/enums/url-enum'

import './teacher-home.scss'

export const TeacherHome = () => {
  const [requests, setRequests] = useState([])
  useEffect(() => {
    if (getUserCredentials()) {
      getPresencesRequests().then(response => {
        setRequests(response.data)
      })
    }
  }, [])

  const updatePresenceList = updatedRequests => {
    setRequests(updatedRequests)
  }

  return !getUserCredentials() ? (
    <Redirect to={URLEnum.LOGIN} />
  ) : (
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
