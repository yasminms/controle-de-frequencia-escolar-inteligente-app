import React, { useState } from 'react'
import {
  Label,
  Input,
  Column,
  Radio,
  MaskInput,
  PageTitle,
  Button,
  InputFile,
} from '@/components'
import GENDER_ENUM from '../../enums/gender-enum'

import './student-register.scss'

export const StudentRegister = () => {
  const [name, setName] = useState()
  const [gender, setGender] = useState(GENDER_ENUM.MALE)
  const [birthDate, setBirthDate] = useState()
  const [cpf, setCpf] = useState()
  const [rg, setRg] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <div className='student-register'>
      <div className='student-register__container'>
        <PageTitle text='Cadastre um aluno(a)' />
        <Column>
          <Label
            text='Nome'
            htmlFor='name'
            className='student-register__container__label'
          />
          <div className='student-register__container__normal-input'>
            <Input
              placeholder='Informe o nome do aluno'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </Column>
        <div className='student-register__container__fifth-container'>
          <div className='student-register__container__special-row'>
            <Column>
              <Label text='Sexo' htmlFor='sexo' />
              <div className='student-register__container__special-row__radio'>
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
              <Label text='CPF' htmlFor='cpf' />
              <MaskInput
                type='text'
                mask='999.999.999-99'
                value={cpf}
                onChange={e => setCpf(e.target.value)}
                placeholder='000.000.000-00'
                name='cpf'
              />
            </Column>
          </div>
          <div className='student-register__container__special-row right-container'>
            <Column>
              <Label text='Data de nascimento' htmlFor='birthDate' />
              <MaskInput
                type='text'
                mask='99/99/9999'
                value={birthDate}
                onChange={e => setBirthDate(e.target.value)}
                placeholder='dd/mm/aaaa'
                name='birthDate'
              />
              <Label text='RG' htmlFor='rg' />
              <MaskInput
                type='text'
                mask='9999999999'
                value={rg}
                onChange={e => setRg(e.target.value)}
                placeholder='Informe o RG do aluno'
                name='rg'
              />
            </Column>
          </div>
        </div>
        <div className='student-register__container__fifth-container'>
          <div className='student-register__container__special-row'>
            <Column>
              <Label
                text='Email'
                htmlFor='email'
                className='student-register__container__label'
              />
              <Input
                placeholder='Informe o email do aluno'
                type='email'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Column>
          </div>
          <div className='student-register__container__special-row right-container'>
            <Column>
              <Label
                text='Senha'
                htmlFor='password'
                className='student-register__container__label'
              />
              <Input
                placeholder='Informe a senha do aluno'
                name='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Column>
          </div>
        </div>
        <div className='student-register__container__files'>
          <Label text='Imagem' htmlFor='password' />
          <InputFile />
        </div>
        <div className='student-register__container__fifth-container'>
          <div className='student-register__container__special-row student-register__button'>
            <Button text='Cancelar' />
          </div>
          <div className='student-register__container__special-row right-container student-register__button'>
            <Button text='Salvar' type='submit' />
          </div>
        </div>
      </div>
    </div>
  )
}
