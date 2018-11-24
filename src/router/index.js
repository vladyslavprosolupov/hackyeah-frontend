import Vue from 'vue'
import Router from 'vue-router'

import Start from '@/pages/Start'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'Start',
      path: '/',
      component: Start
    }
  ]
})

export default router
