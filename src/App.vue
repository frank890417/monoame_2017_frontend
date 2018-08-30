<template lang="pug">
#app(:class="{loading: loading}")
  transition(name="fade",mode="out-in")
    pageLoading(v-if="loading")
  .menu-toggle(@click="setMenu(!menu)",
               :class="{open: menu}")
    .rains
      .rain
      .rain
      .rain
      .rain
  transition(name="fade",mode="out-in")
    pageMenu(v-if="menu")
  h5.fixed-logo Monoame <br>Design Studio 墨雨設計
  .container-fluid
        
        
        //- h6 monoamestudio@gmail.com
  div.pages-area
    
    .container-fluid
      .row
        .col-12
          transition(name="fade",mode="out-in")
            router-view(:key="$route.path")
  .back_to_top(@click="back_top_top")
    i.fa.fa-angle-up
  footer
    p#foot.color_black &copy;版權所有 2018 墨雨設計
</template>

<script>
import pageLoading from './components/page_loading'
import pageMenu from './components/page_menu'
import $ from 'Jquery'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'app',
  mounted(){   
    
  },
  methods: {
    back_top_top(){
      $("html,body").animate({scrollTop: 0})
    },
    ...mapMutations(['setMenu'])
  },
  computed: {
    ...mapState(['loading','menu'])
  },
  components: {
    pageLoading , pageMenu
  }
}
</script>

<style lang="sass">
$color_white: #FFF
$color_purple: #430095
$color_red: #EE3441
$color_grey: #333

$colorBlue: #A8D3D2
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css)
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css)

@mixin flex_center
  display: flex
  justify-content: center
  align-items: center

*
  vertical-align: top
  font-family: 'Noto Sans TC', sans-serif
  
html,body
  margin: 0
  padding: 0
  // background-color: #495338
  color: #555
  background-color: #F8F2EF
  overflow-x: hidden

  
body
  color: $color_grey
  background-color: #fff
  font-size: 15px
  // padding-bottom: 300px
  min-height: 100vh
  overflow: hidden
  
// #app
//   &.loading
//     overflow: hidden
//     height: 100vh
h1,h2,h3,h4,h5,h6,p
  line-height: 1.4
h1
  font-size: 2.5rem
h2
  font-size: 2rem
h3
  font-size: 1.5rem
h4
  font-size: 1.3rem
h5
  font-size: 1rem
p
  font-size: 1rem
  letter-spacing: 1px
  line-height: 1.8
img
  max-width: 100%


.back_to_top
  position: fixed
  right: 15px
  bottom: 15px
  background-color: #FFF
  width: 50px
  height: 50px
  border-radius: 50%
  z-index: 200
  box-shadow: 0px 0px 20px 
  color: #333
  font-size: 30px
  padding-bottom: 5px
  cursor: pointer
  transition: 0.5s


  +flex-center
  &:hover
    background-color: #ddd

.fixed-logo
  position: fixed
  top: 10px
  left: 10px
  font-size: 100px
  opacity: 0.1
  font-weight: 200
.logo_bar
  // position: fixed
  +flex_center
  // height: 100%
  width: 100%
  flex-direction: column
  padding: 5vw
  // box-shadow: 0px 0px 20px rgba(0,0,0,0.3)
  // letter-spacing: 2px
  h6
    font-weight: 300
  @media screen and (max-width: 1000px)
    position: relative
    padding-bottom: 30px
  h5
    font-size: 16px
  // h5:before
  //   content: ""
  //   display: block
  //   width: 2px
  //   height: 20px
  //   border-left: solid 2px $color_grey
  //   margin: auto
  //   margin-bottom: 10px
  background-repeat: no-repeat
  background-position: center center

.menu-toggle
  position: fixed
  right: 30px
  top: 30px
  z-index: 500
  cursor: pointer
  .rains
    display: flex
    @keyframes rainIn
      0%,100%
        opacity: 0

      20%,80%
        opacity: 1
        transform: translateY(0px)
      0%
        transform: translateY(-30px)
      100%
        transform: translateY(30px)

    .rain
      width: 8px
      height: 30px
      background-color: $colorBlue
      border-radius: 50px
      margin: 5px
      animation: none
      @for $i from 1 through 4
        &:nth-child(#{$i})
          animation-delay: #{$i*-0.2s} 
    .rain
    &:hover
      .rain
        animation: rainIn 2s infinite
        @for $i from 1 through 4
          &:nth-child(#{$i})
            animation-delay: #{$i*-0.2s} 
    
  &.open
    .rain
      background-color: white
  
.fade-leave-active 
  transition: opacity .5s

.fade-enter-active
  transition: opacity .5s
  
.fade-enter, .fade-leave-active
  opacity: 0

[class^='page']
  min-height: 100vh
  margin-bottom: 30px
    
.bluerain
  display: none
  margin-top: 30px
  color: #9dd5d3
  font-weight: 900
  // transform: translate(0px,0px) rotate(-20deg)
  font-size: 20px
  letter-spacing: 2px
  background-color: transparent
  // mix-blend-mode: screen
    
.member_img
  // width: 150px
  border-radius: 50%
  filter: grayscale(1)
  display: inline-block
  width: 90%
.member_content
  display: inline-block
  // width: 70%
  
.memberbox
  margin-bottom: 40px
footer
  padding: 50px
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
</style>
