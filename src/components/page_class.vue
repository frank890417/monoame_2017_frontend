<template lang="pug">
  .page-class
    .container.pt-5
      .row
        a.col-sm-4.class(href="https://hahow.in/cr/monoame-webdesign1" target="_blank" @click="log_event('動畫互動網頁程式入門')")
          .row
            .col-sm-12
              .img(style="background-image: url('https://hahow.in/images/574fab4f206cd60900c52a67?width=600')")
            .col-sm-12
              h2.mt-5.mb-3 動畫互動網頁程式入門(HTML/CSS/JS)
              p 想用 illustrator 的思維學習網頁前端程式設計嗎？看完一般網路教學總是離想像有一大段距離嗎？讓這堂課帶你走進前端動態網頁的世界。
        a.col-sm-4.class(href="https://hahow.in/cr/monoame-webdesign2" target="_blank" @click="log_event('動畫互動網頁特效入門')")
          .row

            .col-sm-12
              .img(style="background-image: url('https://hahow.in/images/5b85f1a8297df5001efb0150?width=600')")
            .col-sm-12
              h2.mt-5.mb-3 動畫互動網頁特效入門（JS/CANVAS）
              p 深入淺出學習網頁動畫、特效與遊戲製作的原理，從零快速入門網頁、JS 與繪圖實戰範例，並學習使用 Vue.js 整合前端網頁。
        a.col-sm-4.class(href="https://www.facebook.com/pg/bosscodingplease" target="_blank" @click="log_event('老闆，來點寇汀吧。')")
          .row
            .col-sm-12
              .img(style="background-image: url('/static/img/bosscoding.jpg')")
            .col-sm-12
              h2.mt-5 老闆，來點寇汀吧。
              h4.mb-3 Boss,CODING please.
              p [老闆，來點寇汀吧。]<br>寇汀，是一種名為Coding的雞尾酒。<br>深夜酒吧，想做什麼都可以<br>每週四十點，老闆帶著你直播寇汀Coding！


    
</template>

<script>
import {mapState} from 'vuex'
import $ from 'jquery'
export default {
  name: 'hello',
  props: ['id'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
   
  },
  mounted(){
    $("html,body").animate({scrollTop: 0});

  },
  methods:{
    log_event(name){
      
      if (window.ga)
        ga('send', 'event',"點擊連結",name);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.page-class
  padding-top: 100px
  .class
    // padding: 50px
    padding: 30px
    margin-top: 5vw
    h2
      font-size: 30px
    .row
      padding: 10px
      border: solid 3px rgba(white,0.04)
      border-radius: 2px
      transition: 0.5s
      &:hover
        border: solid 3px rgba(white,0.8)
        // color: #333
        // background-color: #eee
        // text-decoration: none
    .img
      padding-bottom: 70%
      background-size: cover
      background-position: center center
  a
    text-decoration: none
    // color: #333
    color: #fff
    padding-top: 10px
    padding-bottom: 10px
</style>
