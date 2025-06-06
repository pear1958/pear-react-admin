import MockAdapter from 'axios-mock-adapter'
import http from '@/api'
import { getMockMenuData } from './modules/menu'
import { userInfo } from './modules/userInfo'
import { menuList } from './modules/menuList'
import { buttonData } from './modules/buttonData'

export const startMock = () => {
  // const mock = new MockAdapter(http.service, { delayResponse: 1000, onNoMatch: 'passthrough' })
  // mock
  //   .onPost('/user/login', {
  //     username: 'Admin',
  //     password: '123456',
  //     code: 'phfp'
  //   })
  //   .reply(200, {
  //     code: 200,
  //     msg: 'ok',
  //     data: true
  //   })
  // mock.onPost('/user/logout').reply(200, {
  //   code: 200,
  //   msg: 'ok',
  //   data: true
  // })
  // mock.onGet('/auth/menu').reply(200, {
  //   code: 200,
  //   msg: 'ok',
  //   data: menuList
  // })
  // mock.onGet('/user/button').reply(200, {
  //   code: 200,
  //   msg: 'ok',
  //   data: buttonData
  // })
  // mock.onGet('/user/info').reply(200, {
  //   code: 200,
  //   msg: 'ok',
  //   data: userInfo
  // })
  // mock.onGet('/systemManage/menu/list').reply(({ params }) => {
  //   return [
  //     200, // http-status
  //     {
  //       code: 200,
  //       msg: 'ok',
  //       data: {
  //         list: getMockMenuData(params),
  //         total: 10
  //       }
  //     }
  //   ]
  // })
  // mock.onGet('/device/list').reply(200, {
  //   code: 200,
  //   msg: 'ok',
  //   data: [
  //     {
  //       name: '111',
  //       type: 'aaa'
  //     },
  //     {
  //       name: '222',
  //       type: 'bbb'
  //     }
  //   ]
  // })
}
