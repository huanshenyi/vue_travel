import Vue from 'vue'
import Router from 'vue-router'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home.vue')
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  // スクロールする時に画面切り替えても一番上に戻る
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
