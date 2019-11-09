import axios from 'axios'
import { BASE_URL, USER_KEY } from '@/config'

const authenticate = data => {
  return axios.post(BASE_URL.concat('/public/auth'), data, null)
}

const setUserCredentials = user => {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

const getUserCredentials = () => {
  return JSON.parse(localStorage.getItem(USER_KEY))
}

const removeUserCredentials = () => {
  return localStorage.removeItem(USER_KEY)
}

export {
  authenticate,
  setUserCredentials,
  getUserCredentials,
  removeUserCredentials,
}
