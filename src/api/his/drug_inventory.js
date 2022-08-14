import request from '@/utils/request'

// 查询厂家列表
export function listFactory(query) {
  return request({
    url: '/drugInventory/list',
    method: 'get',
    params: query
  })
}

// 查询厂家详细
export function getFactory(facId) {
  return request({
    url: '/drugInventory/' + facId,
    method: 'get'
  })
}

// 新增字典类型
export function addFactory(data) {
  return request({
    url: '/drugInventory/',
    method: 'post',
    data: data
  })
}

// 修改字典类型
export function updateFactory(data) {
  return request({
    url: '/drugInventory/',
    method: 'put',
    data: data
  })
}

// 删除字典类型
export function delFactory(dictId) {
  return request({
    url: '/drugInventory/' + dictId,
    method: 'delete'
  })
}

// 刷新字典缓存
export function refreshCache() {
  return request({
    url: '/system/dict/type/refreshCache',
    method: 'delete'
  })
}

