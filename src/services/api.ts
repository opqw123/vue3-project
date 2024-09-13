import api from '@/services/index'
import { AxiosPromise } from 'axios'
export function login(data: any) {
  return api({
    url: '/mock/user/login',
    method: 'post',
    data
  })
}
