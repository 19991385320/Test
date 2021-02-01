import axios from 'axios'

const service = axios.create({
  baseURL: 'https://www.baidu.com',
  timeout: 500
})

export default service
