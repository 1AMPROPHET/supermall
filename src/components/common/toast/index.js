import Toast from './Toast'

const obj = {}

obj.install = function(Vue) {
  // 创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 通过new，根据组件构造器，可以创建一个组件对象实例
  const toast = new toastConstructor()
  // 手动挂载到某个元素上
  toast.$mount(document.createElement('div'))
  // toast.$el对应div
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}

export default obj