import React, { useState } from 'react'
import {
  Label,
  Input,
  Column,
  Radio,
  MaskInput,
  PageTitle,
  Button,
} from '@/components'
import GENDER_ENUM from '../../enums/gender-enum'
import { register } from '@/services/teacher-service'
import { success, error } from '@/services/toastr'

import './teacher-register.scss'

export const TeacherRegister = () => {
  const [fullName, setFullName] = useState()
  const [gender, setGender] = useState(GENDER_ENUM.FEMALE)
  const [birthDate, setBirthDate] = useState()
  const [cpf, setCpf] = useState()
  const [rg, setRg] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const getFormattedData = () => {
    return {
      birthDate,
      email,
      cpf,
      rg,
      fullName,
      password,
      gender,
    }
  }

  const registerOnSubmit = event => {
    event.preventDefault()
    register(getFormattedData())
      .then(response => success('Professor cadastrado com sucesso'))
      .catch(err => error(err.response.data.errors[0].defaultMessage))
  }

  return (
    <div className='teacher-register'>
      <form className='teacher-register__container'>
        <PageTitle text='Cadastre um professor' />
        <Column>
          <Label
            text='Nome'
            htmlFor='name'
            className='teacher-register__container__label'
          />
          <div className='teacher-register__container__normal-input'>
            <Input
              placeholder='Informe o nome do professor'
              name='name'
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
          </div>
        </Column>
        <div className='teacher-register__container__fifth-container'>
          <div className='teacher-register__container__special-row'>
            <Column>
              <Label text='Sexo' htmlFor='sexo' />
              <div className='teacher-register__container__special-row__radio'>
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
          <div className='teacher-register__container__special-row right-container'>
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
                placeholder='Informe o RG do professor'
                name='rg'
              />
            </Column>
          </div>
        </div>
        <div className='teacher-register__container__fifth-container'>
          <div className='teacher-register__container__special-row'>
            <Column>
              <Label
                text='E-mail'
                htmlFor='email'
                className='teacher-register__container__label'
              />
              <Input
                placeholder='Informe o e-mail do professor'
                type='email'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Column>
          </div>
          <div className='teacher-register__container__special-row right-container'>
            <Column>
              <Label
                text='Senha'
                htmlFor='password'
                className='teacher-register__container__label'
              />
              <Input
                placeholder='Informe a senha do professor'
                name='password'
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Column>
          </div>
        </div>
        <div className='teacher-register__container__fifth-container'>
          <div className='teacher-register__container__special-row teacher-register__button'>
            <Button text='Limpar' />
          </div>
          <div className='teacher-register__container__special-row right-container teacher-register__button'>
            <Button text='Salvar' type='submit' onClick={registerOnSubmit} />
          </div>
        </div>
      </form>
    </div>
  )
}
