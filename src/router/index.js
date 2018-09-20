import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/components/shouye'
import shouyeMain from '@/components/shouyeMain'
import quanan from '@/components/quanan'
import anli from '@/components/anli'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: shouye,
      children:[
        {
          path: '/',
          name: 'shouyeMain',
          component: shouyeMain
        },
        {
          path: '/quanan',
          name: 'quanan',
          component: quanan
        },
        {
          path: '/anli',
          name: 'anli',
          component: anli
        }
      ]
    }
   
  ]
})
