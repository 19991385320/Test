import axios from 'axios'

const service = axios.create({
  baseURL: 'https://apis.imooc.com',
  timeout: 500
})

export default service
