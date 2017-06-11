import Vue from 'vue'
import Router from 'vue-router'
import page_works from '@/components/page_works'
import page_work_indep from '@/components/page_work_indep'
import page_contact from '@/components/page_contact'
import page_about from '@/components/page_about'
import page_class from '@/components/page_class'



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
    },
    {
      path: '/contact',
      name: 'page_contact',
      component: page_contact,
      props: true
    },
    {
      path: '/about',
      name: 'page_about',
      component: page_about,
      props: true
    },
    {
      path: '/class',
      name: 'page_class',
      component: page_class,
      props: true
    }

  ],
  mode: "history"
})
