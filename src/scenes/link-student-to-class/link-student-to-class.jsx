import React, { useEffect, useState } from 'react'
import { PageTitle, AutoSuggest, Button } from '@/components'
import { findAllStudents } from '@/services/student-service'
import { diaryRegister } from '@/services/student-service'

import './link-student-to-class.scss'

export const LinkStudentToClass = () => {
  const [studentsList, setStudentsList] = useState([])
  const [selectedStudents, setSelectedStudents] = useState([])

  useEffect(() => {
    findAllStudents().then(response => {
      setStudentsList(response.data)
    })
  }, [])

  const mapStudents = () =>
    studentsList &&
    studentsList.map(student => ({
      name: student.fullName,
      value: student.email,
    }))

  const mapSelectedStudents = () =>
    selectedStudents && selectedStudents.map(student => student.email)

  const getDefaultValue = () => {
    return
  }

  const handleSubmit = () => {
    const formattedStudentsEmail = mapSelectedStudents()

    // TODO: request to API
  }

  return (
    <div className='link-student-to-class'>
      <form
        className='link-student-to-class__container'
        onSubmit={handleSubmit}
      >
        <PageTitle text='Vincular alunos a aula' />
        <div className='link-student-to-class__container__field'>
          <AutoSuggest
            list={mapStudents()}
            onChange={setSelectedStudents}
            placeholder='Adicione os alunos'
          />
        </div>
        <div className='link-student-to-class__container__field'>
          {/* TODO: add class select */}
        </div>
        <div className='link-student-to-class__container__button'>
          <Button type='submit' text='Vincular' />
        </div>
      </form>
    </div>
  )
}
