import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-responsive-modal'
import { PageTitle, AutoSuggest, Button, Label } from '@/components'
import { findAllStudents } from '@/services/student-service'
import { diaryRegister } from '@/services/diary-service'
import { success, error } from '@/services/toastr'

import './link-student-to-class.scss'

export const LinkStudentToClass = ({
  selectedDiary,
  modalOpened,
  toggleModal,
  parentCallback,
}) => {
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

  const mapInitialStudents = () =>
    selectedDiary &&
    selectedDiary.students.map(student => ({
      name: student.fullName,
      value: student.email,
    }))

  const mapSelectedStudents = () =>
    selectedStudents && selectedStudents.map(student => student.value)

  const handleSubmit = e => {
    e.preventDefault()

    const formattedStudentsEmail = mapSelectedStudents()

    const objectRequest = {
      emails: formattedStudentsEmail,
      id: selectedDiary.id,
    }

    diaryRegister(objectRequest)
      .then(response => {
        success('Vínculo de alunos atualizado')
        parentCallback(response.data)
      })
      .catch(err => error(err.response.data.errors[0].defaultMessage))
  }

  return (
    <div className='link-student-to-class'>
      <Modal open={modalOpened} onClose={() => toggleModal(false, null)} center>
        <form
          className='link-student-to-class__container'
          onSubmit={handleSubmit}
        >
          <PageTitle text='Vincular alunos ao diário' />
          <Label text='Selecione todos os estudantes que deseja vincular ao diário' />
          <div className='link-student-to-class__container__field'>
            <AutoSuggest
              emptyList='Não há alunos para mostrar'
              list={mapStudents()}
              defaultValue={mapInitialStudents()}
              onChange={value => setSelectedStudents(value)}
              placeholder='Adicione os alunos'
            />
          </div>
          <div className='link-student-to-class__container__button'>
            <Button type='submit' text='Vincular' />
          </div>
        </form>
      </Modal>
    </div>
  )
}

LinkStudentToClass.propTypes = {
  selectedDiary: PropTypes.object.isRequired,
  modalOpened: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  parentCallback: PropTypes.func.isRequired,
}
