import request from '../utils/requets'
export function wordcloud () {
  return request({
    url: '/screen/wordcloud',
    method: 'post'
  })
}
