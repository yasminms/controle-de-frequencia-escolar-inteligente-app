import axios from 'axios'
import { BASE_URL, headers } from '@/config'
import { getUserCredentials } from '@/services/auth-service'

const diaryRegister = data => {
  return axios.post(BASE_URL.concat('/diary'), data, {
    headers: headers(getUserCredentials().token),
  })
}

export { diaryRegister }
