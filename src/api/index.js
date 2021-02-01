import request from '../utils/requets'
export function wordcloud () {
  return request({
    url: '/screen/wordcloud',
    method: 'get',
    params: { icode: 'C2CE489D152F6DD7' }
  })
}
