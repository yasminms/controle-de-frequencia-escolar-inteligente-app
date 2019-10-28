import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import URLEnum from '@/enums/url-enum'
import { ButtonSecondary } from '@/components'

import './header.scss'

export const Header = ({ name }) => {
  const [selectedItem, setSelectedItem] = useState(URLEnum.STUDENT_REGISTER)
  const history = useHistory()

  useEffect(() => {
    history.push(selectedItem)
  }, [selectedItem])

  return (
    <div className='header'>
      <h2 className='header__name'>{`Olá ${name}, seja bem vindo(a)`}</h2>
      <div className='header__itens'>
        <div className='header__itens__item'>
          <input
            type='radio'
            className='header__itens__item__radio'
            value={URLEnum.HOME}
            checked={selectedItem === URLEnum.HOME}
            onChange={e => setSelectedItem(e.target.value)}
            name='selectedItem'
            id='home'
          />
          <label htmlFor='home'>Home</label>
        </div>
        <div className='header__itens__item'>
          <input
            type='radio'
            className='header__itens__item__radio'
            value={URLEnum.SUBJECT_REGISTER}
            checked={selectedItem === URLEnum.SUBJECT_REGISTER}
            onChange={e => setSelectedItem(e.target.value)}
            name='selectedItem'
            id='subject'
          />
          <label htmlFor='subject'>Disciplina</label>
        </div>
        <div className='header__itens__item'>
          <input
            type='radio'
            className='header__itens__item__radio'
            value={URLEnum.CLASSROOM_REGISTER}
            checked={selectedItem === URLEnum.CLASSROOM_REGISTER}
            onChange={e => setSelectedItem(e.target.value)}
            name='selectedItem'
            id='classroom'
          />
          <label htmlFor='classroom'>Sala</label>
        </div>
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
          <label htmlFor='class'>Turma</label>
        </div>
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
        <ButtonSecondary text='Logout' onClick={() => null} />
      </div>
    </div>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
}
