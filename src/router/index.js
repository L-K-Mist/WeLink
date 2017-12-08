import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import HowThis from '@/components/HowThis'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello,
    // },
    {
      path: '/howthis',
      name: 'HowThis',
      component: HowThis,
    },
  ],
})
