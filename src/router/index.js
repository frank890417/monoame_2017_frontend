import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import page_works from '@/components/page_works'
import page_work_indep from '@/components/page_work_indep'
import page_contact from '@/components/page_contact'
import page_about from '@/components/page_about'
import page_class from '@/components/page_class'
import store from '../store'

Vue.use(Meta)
Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/works',
      name: 'page_works',
      component: page_works,
      meta: {title: '作品 | 墨雨設計'},
      alias: [
        "/"
      ]
    },
    {
      path: '/works/:id',
      name: 'page_work_indep',
      component: page_work_indep,
      props: true,
      meta: {title: '作品 | 墨雨設計'}
    },
    {
      path: '/contact',
      name: 'page_contact',
      component: page_contact,
      props: true,
      meta: {title: '聯繫 | 墨雨設計'}
    },
    {
      path: '/about',
      name: 'page_about',
      component: page_about,
      props: true,
      meta: {title: '關於 | 墨雨設計'}
    },
    {
      path: '/class',
      name: 'page_class',
      component: page_class,
      props: true,
      meta: {title: '線上課程 | 墨雨設計'}
    }

  ],
  mode: "history"
})

router.beforeEach((to, from, next) => {
  console.log(to)
  store.commit('set_loading',true)
  setTimeout(() => {
    store.commit('set_loading',false)
  }, 1600);
  document.title = to.meta.title
  if (to.name!="page_work_indep")
    if (window.ga){
      ga('send', 'pageview');
    }
  setTimeout(() => {
    next()
    store.commit('setMenu',false)

  }, 500);
})

export default router

