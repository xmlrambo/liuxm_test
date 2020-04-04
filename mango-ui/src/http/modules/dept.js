import axios from '../axios'

//机构管理模块

//保存
export const save = (data)=>{
  return axios({
    url: '/dept/save',
    method: 'post',
    data
  })
}
//删除
export const batchDelete = (data)=>{
  return axios({
    url: '/dept/delete',
    method: 'post',
    data
  })
}
//机构查询树
export const findDeptTree = (data)=>{
  return axios({
    url: '/dept/findTree',
    method: 'post',
    data
  })
}