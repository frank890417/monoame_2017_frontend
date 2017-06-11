<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
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
*
  font-family: 'Playfair Display','微軟正黑體' !important
  vertical-align: top
  
html,body
  margin: 0
  padding: 0
  background-color: $color_white
  color: #555
  
  
body
  color: $color_grey
  background-color: #fff
  font-size: 15px
  padding-bottom: 300px
  min-height: 100vh
  
.icon
  height: 90px
  display: inline-block
  // margin: 0px 20px
  border: solid 1px rgba(0,0,0,0.05)
  padding: 0px 20px
  // display: none
  
.projbox
  height: 350px
  color: $color_white
  padding: 0
  cursor: pointer
  position: relative
  // border-radius: 30px
  padding: 2px
  .content
    position: absolute
    padding: 10px 20px
    z-index: 5
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
    
  h3,h5
    color: rgba($color_white,0.9)
    transition-duration: 0.5s
    text-shadow: 0px 0px 15px rgba(0,0,0,0.2)
  .proj_description
    opacity: 0.6
    
  &:hover
    h3,h5
      color: $color_white
    .blackmask
      background-color: rgba(0,0,0,0.5)
    .proj_description
      opacity: 0.9
    
    
  &:hover
  
.fade-leave-active 
  transition: opacity .5s,max-height .5s

.fade-enter-active
  transition: opacity .5s 1s,max-height .5s .5s
  
.fade-enter, .fade-leave-active
  opacity: 0
  max-height: 0

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
