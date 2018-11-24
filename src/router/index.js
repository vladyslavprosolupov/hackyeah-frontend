import Vue from 'vue'
import Router from 'vue-router'

import Start from '@/pages/Start'
import Options from '@/pages/Options'
import Geometry from '@/pages/option/Geometry'
import History from '@/pages/option/History'
import Languages from '@/pages/option/Languages'

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
