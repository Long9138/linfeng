import Vue from 'vue'
import Router from 'vue-router'
import ShouYe from '@/components/ShouYe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: ShouYe
    }
  ]
})
