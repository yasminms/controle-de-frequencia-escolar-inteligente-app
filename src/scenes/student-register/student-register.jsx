import React, { useState } from 'react'
import { Row, Label, Input, Column, Radio, MaskInput } from '@/components'
import GENDER_ENUM from '../../enums/gender-enum'

import './student-register.scss'

export const StudentRegister = () => {
  const [name, setName] = useState()
  const [gender, setGender] = useState(GENDER_ENUM.MALE)
  const [birthDate, setBirthDate] = useState()
  const [cpf, setCpf] = useState()
  const [rg, setRg] = useState()

  return (
    <div className='student-register'>
      <Row>
        <Column>
          <Label
            text='Nome'
            htmlFor='name'
            className='student-register__label'
          />
          <div className='student-register__special-input'>
            <Input
              placeholder='Informe o nome do aluno'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </Column>
      </Row>
      <Row>
        <Column className='student-register__normal-input'>
          <Label text='Sexo' htmlFor='sexo' />
          <div>
            <Radio
              labelText='Feminino'
              name='gender'
              checked={gender === GENDER_ENUM.FEMALE}
              value={GENDER_ENUM.FEMALE}
              onChange={() => setGender(GENDER_ENUM.FEMALE)}
            />
            <Radio
              labelText='Masculino'
              name='gender'
              checked={gender === GENDER_ENUM.MALE}
              value={GENDER_ENUM.MALE}
              onChange={() => setGender(GENDER_ENUM.MALE)}
            />
          </div>
        </Column>
        <Column className='student-register__normal-input'>
          <Label text='Data de nascimento' htmlFor='birthDate' />
          <MaskInput
            type='text'
            mask='99/99/9999'
            value={birthDate}
            onChange={e => setBirthDate(e.target.value)}
            placeholder='dd/mm/aaaa'
            name='birthDate'
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Label text='CPF' htmlFor='cpf' className='student-register__label' />
          <div className='student-register__special-input'>
            <MaskInput
              type='text'
              mask='999.999.999-99'
              value={cpf}
              onChange={e => setCpf(e.target.value)}
              placeholder='000.000.000-00'
              name='cpf'
            />
          </div>
        </Column>
        <Column>
          <Label text='RG' htmlFor='rg' className='student-register__label' />
          <div className='student-register__special-input'>
            <Input
              placeholder='Informe o RG do aluno'
              name='rg'
              value={rg}
              onChange={e => setRg(e.target.value)}
            />
          </div>
        </Column>
      </Row>
    </div>
  )
}
