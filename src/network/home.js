import {request} from "@/network/request";

export function getdata() {
  return request({
    url: '/home/multidata',
  })
}