import { request } from '../utils'

export async function login (params) {
  return request('http://docking.work:8888/v1/login', {
    method: 'post',
    data: params
  })
}

export async function logout (params) {
  return request('/api/logout', {
    method: 'post',
    data: params
  })
}

export async function userInfo (params) {
  return request('/api/userInfo', {
    method: 'get',
    data: params
  })
}
