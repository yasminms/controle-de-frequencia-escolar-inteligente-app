const BASE_URL = process.env.REACT_APP_API_URL
const headers = token => {
  return {
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  }
}
const headersWithoutAuthorization = {
  'Content-Type': 'application/json',
}

// TODO: implementar login com token
const token = ''

export { BASE_URL, headers, headersWithoutAuthorization, token }
