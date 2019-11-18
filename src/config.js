const BASE_URL = process.env.REACT_APP_API_URL
const headers = token => {
  return {
    'Content-Type': 'application/json',
    authorization: `${token}`,
  }
}
const headersWithoutAuthorization = {
  'Content-Type': 'application/json',
}

// TODO: implementar login com token
const token = ''

const USER_KEY = 'user'

export { BASE_URL, headers, headersWithoutAuthorization, token, USER_KEY }
