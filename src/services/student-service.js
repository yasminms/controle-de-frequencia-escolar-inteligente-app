import axios from 'axios'
import { BASE_URL, headers, token } from '@/config'

const register = () => {
  // TODO: adicionar URL da requisição
  return axios.post(BASE_URL.concat(''), {
    headers: headers(token),
  })
}

export { register }
