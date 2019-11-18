import axios from 'axios'
import { BASE_URL, headers } from '@/config'
import { getUserCredentials } from '@/services/auth-service'

const classRegister = data => {
  return axios.post(BASE_URL.concat('/class'), data, {
    headers: headers(getUserCredentials().token),
  })
}

export { classRegister }
