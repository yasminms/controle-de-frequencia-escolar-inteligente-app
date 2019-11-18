import React, { useState } from 'react'
import { Input, Button } from '@/components'
import { Image } from '@/assets/images'
import { authenticate, setUserCredentials } from '@/services/auth-service'

import './login.scss'

export const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const getFormattedData = () => {
    return { email, password }
  }

  const authenticateOnSubmit = event => {
    event.preventDefault()
    authenticate(getFormattedData()).then(response => {
      setUserCredentials(response.data)
    })
  }

  return (
    <div className='login'>
      <div className='login__container'>
        <form className='login__container__fields'>
          <h2 className='login__container__fields__title'>
            Controle de Frequência Escolar Inteligente
          </h2>
          <div className='login__container__fields__welcome-info'>
            <h2 className='login__container__fields__welcome-info__title'>
              Bem-vindo ao sistema
            </h2>
            <span className='login__container__fields__welcome-info__text'>
              Seja bem-vindo ao sistema, por favor logue-se na sua conta
            </span>
          </div>
          <div className='login__container__fields__container'>
            <Input
              placeholder='E-mail'
              type='email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              placeholder='Senha'
              type='password'
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <div className='login__container__fields__button'>
              <Button
                text='Login'
                type='submit'
                onClick={authenticateOnSubmit}
              />
            </div>
          </div>
        </form>
        <div className='login__container__info'>
          <Image icon='Classroom' />
          <h2 className='login__container__info__primary'>
            Cadastro automático da presença dos estudantes
          </h2>
          <span className='login__container__info__secondary'>
            Com o nosso sistema, todo o processo é feito de forma automática
            através do reconhecimento facial dos alunos
          </span>
        </div>
      </div>
    </div>
  )
}
