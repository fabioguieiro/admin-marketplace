import Vue from 'vue'
import VueRouter from 'vue-router'
import Marketplace from '../views/Marketplace.vue'
import Application from '../views/Application.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/apps',
    name: 'marketplace',
    component: Marketplace
  },
  {
    path: '/apps/edit/:appId/:objectId?',
    name: 'application',
    component: Application
  },
  {
    path: '/apps/edit/1247/:objectId?',
    name: 'app-bling',
    component: () => import('../views/apps/AppBling.vue')
  },
  {
    path: '/apps/edit/1255/:objectId?',
    name: 'app-trustvox',
    component: () => import('../views/apps/AppTrustvox.vue')
  },
  {
    path: '/apps/edit/126944/:objectId?',
    name: 'app-mailchimp',
    component: () => import('../views/apps/AppMailchimp.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'application') {
    switch (to.params.appId) {
      case 1247:
        router.push({ ...to, name: 'app-bling' })
        break
      case 1255:
        router.push({ ...to, name: 'app-trustvox' })
        break
      case 126944:
        router.push({ ...to, name: 'app-mailchimp' })
        break
    }
  }
  next()
})

export default router
