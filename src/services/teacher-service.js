import axios from 'axios'
import { BASE_URL, headers } from '@/config'
import { getUserCredentials } from '@/services/auth-service'

const register = data => {
  return axios.post(BASE_URL.concat('/teacher'), data, {
    headers: headers(getUserCredentials().token),
  })
}

export { register }
