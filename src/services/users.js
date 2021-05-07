import { request } from '../utils'

export async function query (params) {
  return request('http://docking.work:8888/v1/dockingwork_user/', {
    method : 'get',
    params
  })
}

export async function create (params) {
  return request('http://docking.work:8888/v1/dockingwork_user', {
    method: 'post',
    data: params
  })
}

export async function remove (params) {
  return request('http://docking.work:8888/v1/dockingwork_user/', {
    method: 'delete',
    data: params
  })
}

export async function update (params) {
  return request('/api/users', {
    method: 'put',
    data: params
  })
}
