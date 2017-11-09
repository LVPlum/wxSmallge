import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { ToastPlugin } from 'vux'
import 'css/api.css'
import 'css/aui.css'
import 'css/skin.css'
import 'css/tea.css'

Vue.use(require('vue-wechat-title'))
Vue.use(ToastPlugin)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})