import axios from 'axios'
import { BASE_URL, headers } from '@/config'
import { getUserCredentials } from '@/services/auth-service'

const findAllSubjects = () => {
  return axios.get(BASE_URL.concat('/subject'), {
    headers: headers(getUserCredentials().token),
  })
}

export { findAllSubjects }
