import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import URLEnum from '@/enums/url-enum'
import RoleEnum from '@/enums/role-enum'
import GenderEnum from '@/enums/gender-enum'
import { ButtonSecondary } from '@/components'
import { getUserCredentials } from '@/services/auth-service'
import { removeUserCredentials } from '@/services/auth-service'

import './header.scss'

export const Header = () => {
  const [selectedItem, setSelectedItem] = useState()
  const history = useHistory()

  useEffect(() => {
    history.push(selectedItem)
  }, [selectedItem])

  const getUserFirstName = () => {
    return (
      getUserCredentials() && getUserCredentials().user.fullName.split(' ')[0]
    )
  }

  const getUserGender = () => {
    return getUserCredentials() &&
      getUserCredentials().user.gender === GenderEnum.FEMALE
      ? 'a'
      : 'o'
  }

  const logout = () => {
    removeUserCredentials()
    window.location.pathname = URLEnum.LOGIN
  }

  const verifyUserType = role => {
    return getUserCredentials() && getUserCredentials().user.role === role
  }

  return (
    getUserCredentials() && (
      <div className='header'>
        <h2 className='header__logo'>
          Controle de Frequência
          <br />
          Escolar Inteligente
        </h2>
        <div className='header__menu'>
          <h2 className='header__menu__name'>{`Olá ${getUserFirstName()}, seja bem vind${getUserGender()}`}</h2>
          <div className='header__menu__itens'>
            <div className='header__menu__itens__item'>
              <input
                type='radio'
                className='header__menu__itens__item__radio'
                value={
                  verifyUserType(RoleEnum.STUDENT)
                    ? URLEnum.HOME_STUDENT
                    : URLEnum.HOME_COLABORATOR
                }
                checked={
                  selectedItem ===
                  (verifyUserType(RoleEnum.STUDENT)
                    ? URLEnum.HOME_STUDENT
                    : URLEnum.HOME_COLABORATOR)
                }
                onChange={e => setSelectedItem(e.target.value)}
                name='selectedItem'
                id='home'
              />
              <label htmlFor='home'>Home</label>
            </div>
            {verifyUserType(RoleEnum.TEACHER) && (
              <div className='header__menu__itens__item'>
                <input
                  type='radio'
                  className='header__menu__itens__item__radio'
                  value={URLEnum.CLASS_REGISTER}
                  checked={selectedItem === URLEnum.CLASS_REGISTER}
                  onChange={e => setSelectedItem(e.target.value)}
                  name='selectedItem'
                  id='class'
                />
                <label htmlFor='class'>Aula</label>
              </div>
            )}
            {(verifyUserType(RoleEnum.ADMIN) ||
              verifyUserType(RoleEnum.TEACHER)) && (
              <div className='header__menu__itens__item'>
                <input
                  type='radio'
                  className='header__menu__itens__item__radio'
                  value={URLEnum.STUDENT_REGISTER}
                  checked={selectedItem === URLEnum.STUDENT_REGISTER}
                  onChange={e => setSelectedItem(e.target.value)}
                  name='selectedItem'
                  id='student'
                />
                <label htmlFor='student'>Aluno</label>
              </div>
            )}
            {verifyUserType(RoleEnum.ADMIN) && (
              <div className='header__menu__itens__item'>
                <input
                  type='radio'
                  className='header__menu__itens__item__radio'
                  value={URLEnum.TEACHER_REGISTER}
                  checked={selectedItem === URLEnum.TEACHER_REGISTER}
                  onChange={e => setSelectedItem(e.target.value)}
                  name='selectedItem'
                  id='teacher'
                />
                <label htmlFor='teacher'>Professor</label>
              </div>
            )}
            {(verifyUserType(RoleEnum.ADMIN) ||
              verifyUserType(RoleEnum.TEACHER)) && (
              <div className='header__menu__itens__item'>
                <input
                  type='radio'
                  className='header__menu__itens__item__radio'
                  value={URLEnum.DIARIES}
                  checked={selectedItem === URLEnum.DIARIES}
                  onChange={e => setSelectedItem(e.target.value)}
                  name='selectedItem'
                  id='diaries'
                />
                <label htmlFor='diaries'>Diários</label>
              </div>
            )}
            <ButtonSecondary className='' text='Logout' onClick={logout} />
          </div>
        </div>
      </div>
    )
  )
}
