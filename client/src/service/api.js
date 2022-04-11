const getToken = () => {
  const token = window.localStorage.getItem('bearerToken')
  if(token !== null) {
    return token
  }
}
const headers = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache'
}
const AuthHeaders = {
  'Authorization': '',
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache'
}
const error = new Error("Something went wrong. Please try again!")

export const validateResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  throw error
}

export const getJson = (url) => {
  const token = getToken()
  if(token) {
    AuthHeaders.Authorization = token
  }
  return fetch(url, {
    method: 'get',
    withCredentials: true,
    credentials: 'include',
    headers: token ? AuthHeaders : headers,
  }).then((response) => validateResponse(response))
  .catch(() => {
    throw error
  })
}
export const postJson = (url, body) => {
  const token = getToken()
  if(token) {
    AuthHeaders.Authorization = token
  }
  return fetch(url, {
    method: 'post',
    withCredentials: true,
    credentials: 'include',
    headers: token ? AuthHeaders : headers,
    body : JSON.stringify(body)
  })
  .then((res) => validateResponse(res))
  .catch(() => {
    throw error
  })
}

export const postLogin = (body) => {
  return fetch('/api/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(body)
  })
  .then((res) => validateResponse(res))
  .catch(() => {
    throw new Error('Bad Credentials')
  })
}

export const getMessagesList = (folderName) => getJson(`/api/folders/${folderName}`)
export const getMessageDetail = (id) => getJson(`/api/messages/${id}`)
export const postSendMessage = (body) => postJson(`/api/sendMessage`, body)
