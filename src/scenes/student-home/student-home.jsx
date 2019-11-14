import React, { useState, useEffect } from 'react'
import { getPresences } from '@/services/presence-service'
import { PresenceTable } from '@/components'

import './student-home.scss'

export const StudentHome = () => {
  const [presences, setPresences] = useState([])
  useEffect(() => {
    getPresences().then(response => {
      setPresences(response.data)
    })
  }, [])

  const updatePresenceList = updatedPresences => {
    setPresences(updatedPresences)
  }

  return (
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
