import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/components/shouye'
import shouyeMain from '@/components/shouyeMain'
import quanan from '@/components/quanan'
import anli from '@/components/anli'
import tuandui from '@/components/tuandui'
import pinzhi from '@/components/pinzhi'

import pinzhiGY from '@/components/pinzhiGY'
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
        },
        {
          path: '/tuandui',
          name: 'tuandui',
          component: tuandui
        },
        {
          path: '/pinzhi',
          name: 'pinzhi',
          component: pinzhi,
          children:[
            {
              path: '/pinzhi',
              name: 'pinzhiGY',
              component:pinzhiGY
            }
          ]
        }
      ]
    }
   
  ]
})
