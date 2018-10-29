// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import service from './utils/request'
import 'normalize.css/normalize.css'//引入初始化样式
// import VueQuillEditor from 'vue-quill-editor'

// Vue.use(VueQuillEditor)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = service//全局导入axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
