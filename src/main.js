import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
import toast from '@/components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

// 解决移动端点击300ms延迟
FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast)

// 图片懒加载
Vue.use(VueLazyLoad, {
  loading: require('@/assets/img/common/preload.jpg')
})

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')


