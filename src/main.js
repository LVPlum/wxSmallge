import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'css/api.css'
import 'css/aui.css'
import 'css/skin.css'
import 'css/tea.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

Vue.use(require('vue-wechat-title'))