import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '@/components/Shouye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: Shouye
    }
  ]
})
