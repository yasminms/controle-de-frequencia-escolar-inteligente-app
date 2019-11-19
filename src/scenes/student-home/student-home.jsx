import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { getPresences } from '@/services/presence-service'
import { PresenceTable } from '@/components'
import { getUserCredentials } from '@/services/auth-service'
import URLEnum from '@/enums/url-enum'

import './student-home.scss'

export const StudentHome = () => {
  const [presences, setPresences] = useState([])
  useEffect(() => {
    if (getUserCredentials()) {
      getPresences().then(response => {
        setPresences(response.data)
      })
    }
  }, [])

  const updatePresenceList = updatedPresences => {
    setPresences(updatedPresences)
  }

  return !getUserCredentials() ? (
    <Redirect to={URLEnum.LOGIN} />
  ) : (
    <div className='student-presences'>
      <div className='student-presences__container'>
        <div className='student-presences__container__title'>
          <span>Visualize suas faltas e presenças</span>
        </div>
        <div className='student-presences__container__table'>
          <PresenceTable
            parentCallback={updatePresenceList}
            presences={presences}
          />
        </div>
      </div>
    </div>
  )
}
