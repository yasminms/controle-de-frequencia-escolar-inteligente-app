import axios from 'axios'
import { BASE_URL, headers } from '@/config'
import { getUserCredentials } from '@/services/auth-service'

const findAllGroups = () => {
  return axios.get(BASE_URL.concat('/group'), {
    headers: headers(getUserCredentials().token),
  })
}

export { findAllGroups }
