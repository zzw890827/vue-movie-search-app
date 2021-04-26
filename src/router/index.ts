import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Search from '@/views/SearchPage.vue'
import Detail from '@/views/DetailPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/search'
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
