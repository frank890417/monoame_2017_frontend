// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/bootstrap-4.0.0-alpha.6/scss/bootstrap.scss'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import $ from 'jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mounted(){
    store.dispatch("load_works");
    router.replace("/works");
    $(window).scroll((evt)=>{
      store.commit("set_scrollTop",$(window).scrollTop())
    });
  },
  template: '<App/>',
  components: { App }
})


if (window.document.domain=="monoame.com" || window.document.domain=="www.monoame.com"){
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-52977512-9', 'auto');
  ga('send', 'pageview');
}else{
  window.ga=null;
  console.log("disable ga.")
}