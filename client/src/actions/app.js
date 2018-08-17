import {
  // GET /homePage 首页标语
  GET_INIT_URL,
  // 用户ip
  GET_USERINFO_URL
} from '@/constants/api.js'
import http from '@/http/index.js'
// import store from '@/store'

export function init (param) {
  return http.fetch(`${GET_INIT_URL}`)
    .then(({
      response
    }) => response)
    .catch()
}

export function getUserInfo (param) {
  return http.fetch(`${GET_USERINFO_URL}`, {ie: 'utf-8'})
    .then(({
      response
    }) => response)
    .catch()
}
