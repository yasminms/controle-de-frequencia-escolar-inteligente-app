import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import URLEnum from '@/enums/url-enum'
import RoleEnum from '@/enums/role-enum'
import GenderEnum from '@/enums/gender-enum'
import { ButtonSecondary } from '@/components'
import { getUserCredentials } from '@/services/auth-service'

import './header.scss'

export const Header = () => {
  const [selectedItem, setSelectedItem] = useState()
  const [loggedUser, setLoggedUser] = useState()
  const history = useHistory()

  useEffect(() => {
    history.push(selectedItem)

    setLoggedUser(getUserCredentials())
  }, [selectedItem])

  const getUserFirstName = () => {
    return loggedUser && loggedUser.user.fullName.split(' ')[0]
  }

  const getUserGender = () => {
    return loggedUser && loggedUser.user.gender === GenderEnum.FEMALE
      ? 'a'
      : 'o'
  }

  const verifyUserType = role => {
    return loggedUser && loggedUser.user.role === role
  }

  return (
    <div className='header'>
      {console.log(loggedUser)}
      <h2 className='header__name'>{`Olá ${getUserFirstName()}, seja bem vind${getUserGender()}`}</h2>
      <div className='header__itens'>
        <div className='header__itens__item'>
          <input
            type='radio'
            className='header__itens__item__radio'
            value={
              verifyUserType(RoleEnum.STUDENT)
                ? URLEnum.HOME_STUDENT
                : URLEnum.HOME_TEACHER
            }
            checked={
              selectedItem ===
              (verifyUserType(RoleEnum.STUDENT)
                ? URLEnum.HOME_STUDENT
                : URLEnum.HOME_TEACHER)
            }
            onChange={e => setSelectedItem(e.target.value)}
            name='selectedItem'
            id='home'
          />
          <label htmlFor='home'>Home</label>
        </div>
        {verifyUserType(RoleEnum.TEACHER) && (
          <div className='header__itens__item'>
            <input
              type='radio'
              className='header__itens__item__radio'
              value={URLEnum.CLASS_REGISTER}
              checked={selectedItem === URLEnum.CLASS_REGISTER}
              onChange={e => setSelectedItem(e.target.value)}
              name='selectedItem'
              id='class'
            />
            <label htmlFor='class'>Aula</label>
          </div>
        )}
        {verifyUserType(RoleEnum.ADMIN) ||
          (verifyUserType(RoleEnum.TEACHER) && (
            <div className='header__itens__item'>
              <input
                type='radio'
                className='header__itens__item__radio'
                value={URLEnum.STUDENT_REGISTER}
                checked={selectedItem === URLEnum.STUDENT_REGISTER}
                onChange={e => setSelectedItem(e.target.value)}
                name='selectedItem'
                id='student'
              />
              <label htmlFor='student'>Aluno</label>
            </div>
          ))}
        {verifyUserType(RoleEnum.ADMIN) ||
          (verifyUserType(RoleEnum.TEACHER) && (
            <div className='header__itens__item'>
              <input
                type='radio'
                className='header__itens__item__radio'
                value={URLEnum.DIARIES}
                checked={selectedItem === URLEnum.DIARIES}
                onChange={e => setSelectedItem(e.target.value)}
                name='selectedItem'
                id='diaries'
              />
              <label htmlFor='diaries'>Diários</label>
            </div>
          ))}
        <ButtonSecondary text='Logout' onClick={() => null} />
      </div>
    </div>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
}
