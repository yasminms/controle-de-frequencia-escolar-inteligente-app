import axios from 'axios'
import { BASE_URL, headers, token } from '@/config'

const register = () => {
  return axios.post(BASE_URL.concat('/admin/companies'), {
    headers: headers(token),
  })
}

export { register }
