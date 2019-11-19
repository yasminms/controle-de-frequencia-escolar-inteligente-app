import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import {
  Select,
  Checkbox,
  MaskInput,
  Input,
  Label,
  InputTime,
  Row,
  Button,
  PageTitle,
} from '@/components'
import { findAllGroups } from '@/services/group-service'
import { findAllClassrooms } from '@/services/classroom-service'
import { findAllSubjects } from '@/services/subject-service'
import { classRegister } from '@/services/class-service'
import { getUserCredentials } from '@/services/auth-service'
import { success, error } from '@/services/toastr'
import INITIAL_DAYS_OBJECT from '@/res/initial-days-object'
import DAYS_OF_WEEK from '@/enums/days-of-week'
import URLEnum from '@/enums/url-enum'

import './class-register.scss'

export const ClassRegister = () => {
  const [groupsList, setGroupsList] = useState()
  const [group, setGroup] = useState()
  const [classroomsList, setClassroomsList] = useState()
  const [classroom, setClassroom] = useState()
  const [subjectsList, setSubjectsList] = useState()
  const [subject, setSubject] = useState()
  const [year, setYear] = useState(new Date().getFullYear())
  const [tolerance, setTolerance] = useState()
  const [classList, setClassList] = useState(INITIAL_DAYS_OBJECT)

  useEffect(() => {
    if (getUserCredentials()) {
      findAllGroups().then(response => {
        setGroupsList(response.data)
      })

      findAllClassrooms().then(response => {
        setClassroomsList(response.data)
      })

      findAllSubjects().then(response => {
        setSubjectsList(response.data)
      })
    }
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

  const listHandleChange = (index, value, field) => {
    const updatedClassList = [...classList]
    updatedClassList[index][field] = value

    setClassList(updatedClassList)
  }

  const getFormattedDaysObject = () => {
    return classList
      .map((classItem, index) => {
        if (classItem.isDaySelected) {
          return {
            dayOfWeek: DAYS_OF_WEEK[index],
            period: parseInt(classItem.periods, 0),
            startTime: classItem.startTime,
          }
        }
        return null
      })
      .filter(item => item != null)
  }

  const getRequestObject = () => {
    return {
      year,
      subjectId: parseInt(subject, 0),
      classroomId: parseInt(classroom, 0),
      groupId: parseInt(group, 0),
      tolerance,
      information: getFormattedDaysObject(),
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    classRegister(getRequestObject())
      .then(response => {
        success('Aula criada com sucesso')
      })
      .catch(err => {
        error(err.response.data.errors[0].defaultMessage)
      })
  }

  return !getUserCredentials() ? (
    <Redirect to={URLEnum.LOGIN} />
  ) : (
    <div className='class-register'>
      <form className='class-register__container' onSubmit={handleSubmit}>
        <PageTitle text='Cadastre sua aula' />
        <Row>
          <div className='class-register__container__column'>
            <div className='class-register__container__column__form-group'>
              <Label text='Turma' htmlFor='group' />
              <Select onChange={e => setGroup(e.target.value)} value={group}>
                <option hidden selected>
                  Selecione
                </option>
                {mapGroupsToOptions()}
              </Select>
            </div>
            <div className='class-register__container__column__form-group'>
              <Label text='Disciplina' htmlFor='subject' />
              <Select
                onChange={e => setSubject(e.target.value)}
                value={subject}
              >
                <option hidden selected>
                  Selecione
                </option>
                {mapSubjectsToOptions()}
              </Select>
            </div>
            <div className='class-register__container__column__form-group'>
              <Label text='Sala de aula' htmlFor='classroom' />
              <Select
                onChange={e => setClassroom(e.target.value)}
                value={classroom}
              >
                <option hidden selected>
                  Selecione
                </option>
                {mapClassroomsToOptions()}
              </Select>
            </div>
            <div className='class-register__container__column__double-item'>
              <div className='class-register__container__column__double-item__group'>
                <Label text='Ano' htmlFor='year' />
                <MaskInput
                  type='text'
                  mask='9999'
                  value={year}
                  onChange={e => setYear(e.target.value)}
                  name='year'
                />
              </div>
              <div className='class-register__container__column__double-item__group'>
                <Label text='Tolerância' htmlFor='tolerance' />
                <InputTime
                  inputComponent={<Input />}
                  value={tolerance}
                  onChange={e => setTolerance(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='class-register__container__column'>
            <div className='class-register__container__column__form-group'>
              <Label
                text='Dia da semana e início da aula'
                htmlFor='dayOfWeek'
              />
              <div className='class-register__container__column__item'>
                <Checkbox
                  checked={classList[0].isDaySelected}
                  onChange={() =>
                    listHandleChange(
                      0,
                      !classList[0].isDaySelected,
                      'isDaySelected'
                    )
                  }
                  text='Segunda-feira'
                  name='monday'
                />
                <div className='class-register__container__column__item__inputs'>
                  <div className='class-register__container__column__item__inputs__special-input'>
                    <InputTime
                      inputComponent={<Input />}
                      value={classList[0].startTime}
                      disabled={!classList[0].isDaySelected}
                      onChange={e =>
                        listHandleChange(0, e.target.value, 'startTime')
                      }
                    />
                  </div>
                  <div className='class-register__container__column__item__inputs__normal-input'>
                    <MaskInput
                      type='text'
                      mask='99'
                      value={classList[0].periods}
                      disabled={!classList[0].isDaySelected}
                      onChange={e =>
                        listHandleChange(0, e.target.value, 'periods')
                      }
                      placeholder='Períodos'
                      name='mondayPeriods'
                    />
                  </div>
                </div>
              </div>
              <div className='class-register__container__column__item'>
                <Checkbox
                  checked={classList[1].isDaySelected}
                  onChange={() =>
                    listHandleChange(
                      1,
                      !classList[1].isDaySelected,
                      'isDaySelected'
                    )
                  }
                  text='Terça-feira'
                  name='tuesday'
                />
                <div className='class-register__container__column__item__inputs'>
                  <div className='class-register__container__column__item__inputs__special-input'>
                    <InputTime
                      inputComponent={<Input />}
                      value={classList[1].startTime}
                      disabled={!classList[1].isDaySelected}
                      onChange={e =>
                        listHandleChange(1, e.target.value, 'startTime')
                      }
                    />
                  </div>
                  <div className='class-register__container__column__item__inputs__normal-input'>
                    <MaskInput
                      type='text'
                      mask='99'
                      value={classList[1].periods}
                      disabled={!classList[1].isDaySelected}
                      onChange={e =>
                        listHandleChange(1, e.target.value, 'periods')
                      }
                      placeholder='Períodos'
                      name='mondayPeriods'
                    />
                  </div>
                </div>
              </div>
              <div className='class-register__container__column__item'>
                <Checkbox
                  checked={classList[2].isDaySelected}
                  onChange={() =>
                    listHandleChange(
                      2,
                      !classList[2].isDaySelected,
                      'isDaySelected'
                    )
                  }
                  text='Quarta-feira'
                  name='wednesday'
                />
                <div className='class-register__container__column__item__inputs'>
                  <div className='class-register__container__column__item__inputs__special-input'>
                    <InputTime
                      inputComponent={<Input />}
                      value={classList[2].startTime}
                      disabled={!classList[2].isDaySelected}
                      onChange={e =>
                        listHandleChange(2, e.target.value, 'startTime')
                      }
                    />
                  </div>
                  <div className='class-register__container__column__item__inputs__normal-input'>
                    <MaskInput
                      type='text'
                      mask='99'
                      value={classList[2].periods}
                      disabled={!classList[2].isDaySelected}
                      onChange={e =>
                        listHandleChange(2, e.target.value, 'periods')
                      }
                      placeholder='Períodos'
                      name='mondayPeriods'
                    />
                  </div>
                </div>
              </div>
              <div className='class-register__container__column__item'>
                <Checkbox
                  checked={classList[3].isDaySelected}
                  onChange={() =>
                    listHandleChange(
                      3,
                      !classList[3].isDaySelected,
                      'isDaySelected'
                    )
                  }
                  text='Quinta-feira'
                  name='thursday'
                />
                <div className='class-register__container__column__item__inputs'>
                  <div className='class-register__container__column__item__inputs__special-input'>
                    <InputTime
                      inputComponent={<Input />}
                      value={classList[3].startTime}
                      disabled={!classList[3].isDaySelected}
                      onChange={e =>
                        listHandleChange(3, e.target.value, 'startTime')
                      }
                    />
                  </div>
                  <div className='class-register__container__column__item__inputs__normal-input'>
                    <MaskInput
                      type='text'
                      mask='99'
                      value={classList[3].periods}
                      disabled={!classList[3].isDaySelected}
                      onChange={e =>
                        listHandleChange(3, e.target.value, 'periods')
                      }
                      placeholder='Períodos'
                      name='mondayPeriods'
                    />
                  </div>
                </div>
              </div>
              <div className='class-register__container__column__item'>
                <Checkbox
                  checked={classList[4].isDaySelected}
                  onChange={() =>
                    listHandleChange(
                      4,
                      !classList[4].isDaySelected,
                      'isDaySelected'
                    )
                  }
                  text='Sexta-feira'
                  name='friday'
                />
                <div className='class-register__container__column__item__inputs'>
                  <div className='class-register__container__column__item__inputs__special-input'>
                    <InputTime
                      inputComponent={<Input />}
                      value={classList[4].startTime}
                      disabled={!classList[4].isDaySelected}
                      onChange={e =>
                        listHandleChange(4, e.target.value, 'startTime')
                      }
                    />
                  </div>
                  <div className='class-register__container__column__item__inputs__normal-input'>
                    <MaskInput
                      type='text'
                      mask='99'
                      value={classList[4].periods}
                      disabled={!classList[4].isDaySelected}
                      onChange={e =>
                        listHandleChange(4, e.target.value, 'periods')
                      }
                      placeholder='Períodos'
                      name='mondayPeriods'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <div className='class-register__container__buttons'>
          <div className='class-register__container__buttons__button'>
            <Button text='Limpar' />
          </div>
          <div className='class-register__container__buttons__button'>
            <Button text='Salvar' type='submit' />
          </div>
        </div>
      </form>
    </div>
  )
}
