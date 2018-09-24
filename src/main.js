// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
// 引入公共css
import './assets/css/style.css'
// 引入jQuery
import $ from 'jquery'

import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueLazyload)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
