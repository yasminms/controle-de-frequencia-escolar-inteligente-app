import React, { useState, useEffect } from 'react'
import {
  Select,
  Checkbox,
  MaskInput,
  Input,
  Label,
  InputTime,
  Row,
} from '@/components'
import { findAllGroups } from '@/services/group-service'
import { findAllClassrooms } from '@/services/classroom-service'
import { findAllSubjects } from '@/services/subject-service'

import './class-register.scss'

export const ClassRegister = () => {
  const [groupsList, setGroupsList] = useState()
  const [group, setGroup] = useState()
  const [classroomsList, setClassroomsList] = useState()
  const [classroom, setClassroom] = useState()
  const [subjectsList, setSubjectsList] = useState()
  const [subject, setSubject] = useState()
  const [monday, setMonday] = useState(false)
  const [tuesday, setTuesday] = useState(false)
  const [wednesday, setWednesday] = useState(false)
  const [thursday, setThursday] = useState(false)
  const [friday, setFriday] = useState(false)
  const [mondayTime, setMondayTime] = useState()
  const [mondayPeriods, setMondayPeriods] = useState()
  const [year, setYear] = useState(new Date().getFullYear())
  const [tolerance, setTolerance] = useState()

  useEffect(() => {
    findAllGroups().then(response => {
      setGroupsList(response.data)
    })

    findAllClassrooms().then(response => {
      setClassroomsList(response.data)
    })

    findAllSubjects().then(response => {
      setSubjectsList(response.data)
    })
  }, [])

  const mapGroupsToOptions = () =>
    groupsList &&
    groupsList.map(groupItem => (
      <option value={groupItem.id}>{groupItem.name}</option>
    ))

  const mapClassroomsToOptions = () =>
    classroomsList &&
    classroomsList.map(classroomItem => (
      <option value={classroomItem.id}>{classroomItem.name}</option>
    ))

  const mapSubjectsToOptions = () =>
    subjectsList &&
    subjectsList.map(subjectItem => (
      <option value={subjectItem.id}>{subjectItem.name}</option>
    ))

  return (
    <div className='class-register'>
      <div className='class-register__container'>
        <div className='class-register__container__column'>
          <div className='class-register__container__column__form-group'>
            <Label text='Turma' htmlFor='group' />
            <Select onChange={e => setGroup(e.target.value)} value={group}>
              {mapGroupsToOptions()}
            </Select>
          </div>
          <div className='class-register__container__column__form-group'>
            <Label text='Disciplina' htmlFor='subject' />
            <Select onChange={e => setSubject(e.target.value)} value={subject}>
              {mapSubjectsToOptions()}
            </Select>
          </div>
          <div className='class-register__container__column__form-group'>
            <Label text='Sala de aula' htmlFor='classroom' />
            <Select
              onChange={e => setClassroom(e.target.value)}
              value={classroom}
            >
              {mapClassroomsToOptions()}
            </Select>
          </div>
          <Row>
            <div className='class-register__container__column__form-group  class-register__container__column__first-element-row'>
              <Label text='Ano' htmlFor='year' />
              <MaskInput
                type='text'
                mask='9999'
                value={year}
                onChange={e => setYear(e.target.value)}
                name='year'
              />
            </div>
            <div className='class-register__container__column__form-group'>
              <Label text='Tolerância' htmlFor='tolerance' />
              <InputTime
                inputComponent={<Input />}
                value={tolerance}
                onChange={e => setTolerance(e.target.value)}
              />
            </div>
          </Row>
        </div>
        <div className='class-register__container__column'>
          <div className='class-register__container__column__form-group'>
            <Label text='Dia da semana e início da aula' htmlFor='dayOfWeek' />
            <div className='class-register__container__column__item'>
              <Checkbox
                checked={monday}
                onChange={() => setMonday(!monday)}
                text='Segunda-feira'
                name='monday'
              />
              <div className='class-register__container__column__item__special-input'>
                <InputTime
                  inputComponent={<Input />}
                  value={mondayTime}
                  onChange={e => setMondayTime(e.target.value)}
                />
              </div>
              <div className='class-register__container__column__item__normal-input'>
                <MaskInput
                  type='text'
                  mask='99'
                  value={mondayPeriods}
                  onChange={e => setMondayPeriods(e.target.value)}
                  placeholder='Períodos'
                  name='mondayPeriods'
                />
              </div>
            </div>
            <div className='class-register__container__column__item'>
              <Checkbox
                checked={tuesday}
                onChange={() => setTuesday(!tuesday)}
                text='Terça-feira'
                name='tuesday'
              />
              <div className='class-register__container__column__item__special-input'>
                <InputTime
                  inputComponent={<Input />}
                  value={mondayTime}
                  onChange={e => setMondayTime(e.target.value)}
                />
              </div>
              <div className='class-register__container__column__item__normal-input'>
                <MaskInput
                  type='text'
                  mask='99'
                  value={mondayPeriods}
                  onChange={e => setMondayPeriods(e.target.value)}
                  placeholder='Períodos'
                  name='mondayPeriods'
                />
              </div>
            </div>
            <div className='class-register__container__column__item'>
              <Checkbox
                checked={wednesday}
                onChange={() => setWednesday(!wednesday)}
                text='Quarta-feira'
                name='wednesday'
              />
              <div className='class-register__container__column__item__special-input'>
                <InputTime
                  inputComponent={<Input />}
                  value={mondayTime}
                  onChange={e => setMondayTime(e.target.value)}
                />
              </div>
              <div className='class-register__container__column__item__normal-input'>
                <MaskInput
                  type='text'
                  mask='99'
                  value={mondayPeriods}
                  onChange={e => setMondayPeriods(e.target.value)}
                  placeholder='Períodos'
                  name='mondayPeriods'
                />
              </div>
            </div>
            <div className='class-register__container__column__item'>
              <Checkbox
                checked={thursday}
                onChange={() => setThursday(!thursday)}
                text='Quinta-feira'
                name='thursday'
              />
              <div className='class-register__container__column__item__special-input'>
                <InputTime
                  inputComponent={<Input />}
                  value={mondayTime}
                  onChange={e => setMondayTime(e.target.value)}
                />
              </div>
              <div className='class-register__container__column__item__normal-input'>
                <MaskInput
                  type='text'
                  mask='99'
                  value={mondayPeriods}
                  onChange={e => setMondayPeriods(e.target.value)}
                  placeholder='Períodos'
                  name='mondayPeriods'
                />
              </div>
            </div>
            <div className='class-register__container__column__item'>
              <Checkbox
                checked={friday}
                onChange={() => setFriday(!friday)}
                text='Sexta-feira'
                name='friday'
              />
              <div className='class-register__container__column__item__special-input'>
                <InputTime
                  inputComponent={<Input />}
                  value={mondayTime}
                  onChange={e => setMondayTime(e.target.value)}
                />
              </div>
              <div className='class-register__container__column__item__normal-input'>
                <MaskInput
                  type='text'
                  mask='99'
                  value={mondayPeriods}
                  onChange={e => setMondayPeriods(e.target.value)}
                  placeholder='Períodos'
                  name='mondayPeriods'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
