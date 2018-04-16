// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'bootstrap'

import VueRouter from 'vue-router'
import routes from './router'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
const router =new VueRouter ({
	mode: 'history',
	routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
