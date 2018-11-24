import Vue from 'vue'
import Router from 'vue-router'

import Start from '@/pages/Start'
import Options from '@/pages/options/Index'
import Geometry from '@/pages/options/Geometry'
import History from '@/pages/options/History'
import Languages from '@/pages/options/Languages'

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
      name: 'Geometry_Scan',
      path: '/options/geometry',
      component: Geometry
    },
    {
      name: 'History_Scan',
      path: '/options/history',
      component: History
    },
    {
      name: 'Languages_Scan',
      path: '/options/languages',
      component: Languages
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
