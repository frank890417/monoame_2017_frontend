<template lang="pug">
  div.page
    .row
      .col-sm-12
        h3 線上課程
        hr

    a.row.person(href="https://hahow.in/cr/monoame-webdesign1" target="_blank")
      .col-sm-3
        img.head(src="https://hahow.in/images/574fab4f206cd60900c52a67?width=1000")
      .col-sm-9
        h4 動畫互動網頁程式入門 (HTML/CSS/JS)
        p 深入淺出學習網頁動畫、特效與遊戲製作的原理，從零快速入門網頁、JS 與繪圖實戰範例，並學習使用 Vue.js 整合前端網頁。
    a.row.person(href="https://hahow.in/cr/monoame-webdesign2" target="_blank")

      .col-sm-3
        img.head(src="https://hahow.in/images/59131a7f2fa2a607008bc8ca?width=1000")
      .col-sm-9
        h4 動畫互動網頁特效入門（JS/CANVAS）
        p 想用 illustrator 的思維學習網頁前端程式設計嗎？看完一般網路教學總是離想像有一大段距離嗎？讓這堂課帶你走進前端動態網頁的世界。
    .row
      .col-sm-12
        h3 直播教學
        hr
    a.row.person(href="https://www.facebook.com/pg/bosscodingplease" target="_blank")
      .col-sm-3
        img.head(src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/17308904_1822494568003955_966572233505397914_n.jpg?oh=8bf6294d2647d4664a6fb0aa8695cdf2&oe=59A9F6B3")
      .col-sm-9
        h4 動畫互動網頁程式入門 (HTML/CSS/JS)
        p 深入淺出學習網頁動畫、特效與遊戲製作的原理，從零快速入門網頁、JS 與繪圖實戰範例，並學習使用 Vue.js 整合前端網頁。


    
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass?indentedSyntax">
.page
  padding: 10px
  padding-top: 50px
.head
  width: 100%
  // border-radius: 50%
  // filter: saturate(0%)
h3
  margin-top: 40px
h4
  margin-bottom: 15px
p
  max-width: 80%
a
  text-decoration: none
  color: #333
  transition: 0.5s
  padding-top: 10px
  padding-bottom: 10px
  &:hover
    color: #333
    background-color: #eee
    text-decoration: none

.person
  // margin-bottom: 50px
  p
    max-width: 500px
    line-height: 30px
</style>
