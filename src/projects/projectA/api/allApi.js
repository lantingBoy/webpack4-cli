import api from './api'
// 获取列表
export function getTaskList(params) {
  return api.get({
    url: 'task/getList',
    params: params
  })
}


export function testApi(params) {
  return api.post({
    url: 'point',
    params: params
  })
}

/* 获取公告列表 */
export function getNoticeList(params) {
  return api.post({

  })
}
