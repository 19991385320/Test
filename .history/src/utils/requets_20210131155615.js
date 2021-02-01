import axios from 'axios'

const service = axios.create({
  baseURL: 'https://www.apis.imooc.com',
  timeout: 500
})

export default service
