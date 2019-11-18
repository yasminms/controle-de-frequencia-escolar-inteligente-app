import axios from 'axios'
import { BASE_URL, headers } from '@/config'
import { getUserCredentials } from '@/services/auth-service'

const getPresences = () => {
  return axios.get(BASE_URL.concat('/presence'), {
    headers: headers(getUserCredentials().token),
  })
}

const getPresencesRequests = () => {
  return axios.get(BASE_URL.concat('/presence/request'), {
    headers: headers(getUserCredentials().token),
  })
}

const requestPresence = id => {
  return axios.post(BASE_URL.concat(`/presence/${id}/request`), null, {
    headers: headers(getUserCredentials().token),
  })
}

const updatePresence = request => {
  return axios.put(BASE_URL.concat(`/presence/${request.id}/request`), null, {
    params: { status: request.status },
    headers: headers(getUserCredentials().token),
  })
}

export { getPresences, requestPresence, getPresencesRequests, updatePresence }
