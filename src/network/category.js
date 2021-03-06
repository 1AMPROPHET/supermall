import {request} from "@/network/request";

export function getCategoryDate() {
  return request({
    url: '/category'
  }).catch(err => {})
}

export function getSubCategory(maitKey) {
  return request({
    url: "/subcategory",
    params: {
      maitKey
    }
  }).catch(err => {});
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: "/subcategory/detail",
    params: {
      miniWallkey,
      type
    }
  }).catch(err => {});
}