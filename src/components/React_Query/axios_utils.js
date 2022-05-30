import axios from 'axios'

const client = axios.create({baseURL: 'http://3.134.252.48:4000/api/catoshi'})

export const apiRequest = ({...options}) => {
  const onSuccess = (response) => response
  const onError = (error) => error

  return client(options).then(onSuccess).catch(onError)
}
