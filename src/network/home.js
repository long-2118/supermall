import {request} from './request';

export function getHomeMultidata() {
  return request({    //调用request网络请求
    url:'/home/multidata'
  })
}