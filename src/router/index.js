import Vue from 'vue'
import Router from 'vue-router'

import Start from '@/pages/Start'
import Options from '@/pages/Options'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'Start',
      path: '/',
      component: Start
    },
    {
      name: 'Options',
      path: '/options',
      component: Options
    },
    {
      path: '*',
      redirect () {
        return '/'
      }
    }
  ]
})

export default router
