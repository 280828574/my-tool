// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import scripts from './scripts/index'
import App from './App.vue'
import * as Pinia from 'pinia'
import stores from './stores/index'
import uView from './uni_modules/vk-uview-ui'
export function createApp() {
  const app = createSSRApp(App)
  app.use(uView)
  app.use(Pinia.createPinia())
  // 挂载全局
  app.config.globalProperties.$scripts = scripts
  app.config.globalProperties.$stores = stores
  return {
    app,
    Pinia,
  }
}
// #endif
