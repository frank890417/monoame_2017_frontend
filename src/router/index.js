import Vue from 'vue'
import Router from 'vue-router'
import page_works from '@/components/page_works'
import page_work_indep from '@/components/page_work_indep'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/works',
      name: 'page_works',
      component: page_works
    },
    {
      path: '/works/:id',
      name: 'page_work_indep',
      component: page_work_indep,
      props: true
    }
  ],
  mode: "history"
})
