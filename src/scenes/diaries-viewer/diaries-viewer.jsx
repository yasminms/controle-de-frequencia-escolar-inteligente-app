import React, { useEffect, useState } from 'react'
import { DiaryTable } from '@/components'
import { findAllStudents } from '@/services/student-service'
import { findAllDiaries } from '@/services/diary-service'

import './diaries-viewer.scss'

export const DiariesViewer = () => {
  const [studentsList, setStudentsList] = useState([])
  const [selectedStudents, setSelectedStudents] = useState([])
  const [diariesList, setDiariesList] = useState([])

  useEffect(() => {
    findAllStudents().then(response => {
      setStudentsList(response.data)
    })

    findAllDiaries().then(response => {
      setDiariesList(response.data)
    })
  }, [])

  const mapStudents = () =>
    studentsList &&
    studentsList.map(student => ({
      name: student.fullName,
      value: student.email,
    }))

  return (
    <div className='diaries-viewer'>
      <div className='diaries-viewer__table-container'>
        <DiaryTable diaries={diariesList} />
      </div>
    </div>
  )
}
