<template lang="pug">
  .page-about
    p 視覺形象/品牌/互動網頁設計工作室，結合Motion Graphic加入互動性精神創造新型態的瀏覽體驗，從設計師的角度教學網頁程式開發，昇華更多創作的可能性，致力於幫助設計師踏上自學程式進化之路。
    //- div.sky
      .row
        div
          img(src="http://www.monoame.com/projects/proj_monoame/02.png", alt="")

    //- div.ground
      .container-fluid
        .row.person
          //- .col-sm-2
            img.head(src="https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/14207604_1275183372500283_7171235436697275571_o.jpg?_nc_cat=0&oh=45786d2ff2699e9553c8443aa46f7009&oe=5C00969F")
          .col-sm-12
            p 視覺形象/品牌/互動網頁設計工作室，結合Motion Graphic加入互動性精神創造新型態的瀏覽體驗，從設計師的角度教學網頁程式開發，昇華更多創作的可能性，致力於幫助設計師踏上自學程式進化之路。
            //- h5 吳哲宇 | Founder、Designer、Developer

            //- p 成立墨雨設計
            //-   | 接案不斷的磨練能力走上不同的道路。
            //-   | 兩年前開始學習前/後端網頁程式開發，
            //-   | 將Motion Graphic加入互動性精神創造新型態的網頁體驗。

    //.row.person
      .col-sm-2
        img.head(src="http://monoame.com/img/yiimg.jpg")
      .col-sm-10
        h5 陳億瑞 | Designer、Illustrator
        p 狐狸派。
            | 專長於插畫、平面與圖像設計，
            | 喜歡靈活地將各項設計品項整合於一體，
            | 熱衷於實驗性與藝術性值高的嘗試。


    //.row.person

      .col-sm-2
        img.head(src="http://monoame.com/img/minimg.jpg")
      .col-sm-10
        h5 魏敏 | Animator、User Researcher

        p 「兔子讓獅子用盡全力。」


    
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
<style scoped lang="sass">
.page-about
  // background-color: #EDDDC1
  min-height: 100vh
.head
  width: 100%
  // border-radius: 50%
  filter: saturate(0%)
  margin-bottom: 30px
.sky
  background-color: #B0D3D9
.ground
  
</style>
