import {ADD_COUNTER, ADD_TO_CART} from './mutation-types'

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // let oldProduct = null
      // payload：新添加的商品,查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      // for(let item of state.cartList) {
      //   if (item.iid === payload.iid) {
      //     oldProduct = item
      //   }
      // }
      // 判断oldProduct
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve('商品数量加1')
      } else {
        payload.count = 1
        // state.cartList.push(payload)
        context.commit(ADD_TO_CART, payload)
        resolve('添加新商品成功')
      } 
    })
  }
}