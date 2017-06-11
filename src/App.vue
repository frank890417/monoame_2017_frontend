<template lang="pug">
  #app
    .container-fluid
    .row
      .col-xs-12.col-sm-3.col-md-2.logo_bar.text-center
        img(src="http://www.monoame.com/img/iconwhite.svg" ,width=80)
        h5 Monoame Design Studio
        ul.nav
          li
            router-link(to="/works") 作品
          li
            router-link(to="/about") 介紹
          li
            router-link(to="/class") 課程
          li
            router-link(to="/contact") 聯繫
        //- h6 monoamestudio@gmail.com
      .col-md-10.col-sm-9.offset-lg-2.offset-sm-0
        transition(name="fade",mode="out-in")
          router-view(:key="$route.path")

</template>

<script>
export default {
  name: 'app',
  mounted(){   
    
  }
}
</script>

<style lang="sass?indentedSyntax">
$color_white: #FFF
$color_purple: #430095
$color_red: #EE3441
$color_grey: #333
@import url(https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900)
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css)
@mixin flex_center
  display: flex
  justify-content: center
  align-items: center

*
  vertical-align: top
  font-family: "Playfair Display", serif, "微軟正黑體"
  
html,body
  margin: 0
  padding: 0
  // background-color: #495338
  color: #555
  background-color: #F8F2EF
  
body
  color: $color_grey
  background-color: #fff
  font-size: 15px
  padding-bottom: 300px
  min-height: 100vh
  

.logo_bar
  position: fixed
  +flex_center
  height: 100%
  flex-direction: column
  // box-shadow: 0px 0px 20px rgba(0,0,0,0.3)
  // letter-spacing: 2px
  padding-right: 0
  h6
    font-weight: 300
  @media screen and (max-width: 1000px)
    position: relative
    padding-bottom: 30px
  h5
    font-size: 16px
  h5:before
    content: ""
    display: block
    width: 2px
    height: 20px
    border-left: solid 2px $color_grey
    margin: auto
    margin-bottom: 10px
  // background: url(http://www.monoame.com/newwebsite/img/blue_water.svg)
  background-repeat: no-repeat
  background-position: center center
  // background-color: #F8F2EF

  .nav
    a
      color: $color_grey
      padding: 0px 8px
      letter-spacing: 1px
      font-size: 16px


.icon
  height: 90px
  display: inline-block
  // margin: 0px 20px
  border: solid 1px rgba(0,0,0,0.05)
  // padding: 0px 20px
  // display: none
  
.projbox
  color: $color_white
  padding: 0
  // height: 300px
  cursor: pointer
  position: relative
  // border-radius: 30px
  // padding: 10px
  height: 500px
  padding: 0px
  margin-top: 0
  align-items: flex-start
  outline: none
  .workitem_inner
    display: block
    position: relative
    width: 100%
    // height: 100%
    // height: 300px
    height: 100%
    padding: 0
    // padding: 10px

  .img_wrap
    width: 100%
    height: 100%
    background-size: cover
    background-position: center center
  .blackmask
    position: absolute
    width: 100%
    height: 100%
    left: 0
    top: 0
    background-color: rgba(0,0,0,0.005)
    pointer-events: none
    transition-duration: 0.5s
    z-index: 3
  .content
    position: absolute
    // padding: 10px
    z-index: 5
    width: 100%
    height: 30%
    // height: 100%
    position: absolute
    bottom: 0px
    background: linear-gradient(transparent,rgba(black,0.6))
    display: flex
    flex-direction: column
    justify-content: flex-end
    padding-bottom: 10px
    // width: 100%
  h3,h5
    transition-duration: 0.5s
    // text-shadow: 0px 0px 15px rgba(0,0,0,0.2)
    font-weight: 300
    color: #333
    padding: 10px 20px
    // position: absolute
    // bottom: 0px
    font-weight: 300
    // display: inline-block


  h3
    letter-spacing: 2px
    font-size: 22px
    // background-color: #FFF
    color: white
    padding-bottom: 0


  h5
    letter-spacing: 2px
    font-size: 16px
    color: white
    padding-top: 0
    // padding: 0

  .proj_description
    opacity: 0.6
    
  &:hover
    h3,h5
      // color: $color_white
    .blackmask
      background-color: rgba(0,0,0,0.5)
    // .proj_description
      // opacity: 0.9
  
.fade-leave-active 
  transition: opacity .5s

.fade-enter-active
  transition: opacity .5s
  
.fade-enter, .fade-leave-active
  opacity: 0

nav
  float: right
  
  a
    color: #333
    cursor: pointer
    &:hover
      color: 3333
  li
    display: inline-block
    margin: 0px 10px
    margin-top: 30px
    
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
</style>
