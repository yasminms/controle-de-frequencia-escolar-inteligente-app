import axios from 'axios'
import { BASE_URL, headers } from '@/config'
import { getUserCredentials } from '@/services/auth-service'

const register = data => {
  return axios.post(BASE_URL.concat('/student'), data, {
    headers: headers(getUserCredentials().token),
  })
}

const insertImages = data => {
  return axios.post(BASE_URL.concat('/student/attachment'), data.formData, {
    params: { email: data.email },
    headers: {
      Authorization: `Bearer ${getUserCredentials().token}`,
      'Content-Type': 'multipart/form-data',
    },
  })
}

const getPresences = () => {
  return axios.get(BASE_URL.concat('/student/presence'), {
    headers: headers(getUserCredentials().token),
  })
}

export { register, insertImages, getPresences }
