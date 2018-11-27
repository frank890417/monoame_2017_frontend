<template lang="pug">
nav.page-menu
  .bg(:class="{active: menu}")
  .container-fluid
    .row
      .col-sm-12.flex-center
        .mypic
          img.imgpic(src="http://www.monoame.com/monoamelogowhite.png")
        .nav
          ul
            li
              router-link(to="/works") 作品
            li
              router-link(to="/class") 課程
            li
              router-link(to="/contact") 聯繫
          //- li
          //-   router-link(to="/about") 簡介
    //- div.row3.close_page
    //-   h2.whitepagething.subpagetitle 關於我們
    //-   p.describe 
    //-     | 生活中充滿了樂趣<br>
    //-     | 而設計，正是把這些元素萃取出來<br>
    //-     | 用最精煉的呈現，喚起大家看到時內心共鳴<br>
    //-     | 墨雨，我們期望能夠把動機淬鍊如墨般濃烈純粹<br>
    //-     | 在每個人的心中，喚起一陣名為感動的記憶旅程。<br>
    
  
</template>

<script>
import $ from 'jquery'
import {mapState, mapMutations} from 'vuex'
export default {
  mounted(){
    //add Rains
    var rains="";
    var nowrain="";
    var rain_dist=20;
    var rain_max_length=25;
    var rain_max_duration=2.5;
    for(var i=0;i<70;i++){
      let rain_length=(5+Math.random()*rain_max_length);
      let rain_opacity=Math.random();
      let rain_duration=(1.5+Math.random()*rain_max_duration);
      let rain_delay=Math.random()*5;
      rains+="<div class='rainbasic' \
              style='height: "+rain_length+"px; \
                      left: "+(i*rain_dist)+"px; \
                      opacity: "+rain_opacity+"; \
                      animation-duration: "+rain_duration+"s; \
                      animation-delay: "+rain_delay+"s; ' \
                      ></div>\n";
      
    }
    //filter: blur("+(1-rain_opacity)*2+"px); \

    $(".bg").prepend(rains);

    //add Waves
    var waves="";
    for(i=0;i<90;i++){
      waves+="<div class='wavebasic wave"+i+"' ></div>"
    }
    $(".bg").append(waves);




  },
  computed: {
    ...mapState(['loading','menu','scrollTop'])
  },

}
</script>

<style lang="sass">
$colorBlue: #A8D3D2
.page-menu
    
  position: fixed
  background-color: $colorBlue
  background-color: #112
  width: 100vw  
  height: 100vh
  // white-space: no-wrap
  display: flex
  flex-direction: column
  position: fixed
  left: 0
  top: 0
  z-index: 100
  .flex-center
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
  .bg
    position: absolute
    width: 100%
    height: 100%
    left: 0
    top: 0
    .wavebasic
      transition-delay: 3s
      transition-duration: 1s
      transform: translateY(200px)
    &.active
      .wavebasic
        transform: translateY(0px)


  .menu
    list-style: none
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    height: 100%
    li
      white-space: nowrap
      margin-top: 30px
    a
      padding: 0px 5px
      letter-spacing: 1px
      font-size: 40px
      white-space: nowrap
      color: white
      transition: 0.5s
      &:hover,&.active
        text-decoration: none
        

  .icon
    height: 90px
    display: inline-block
    // margin: 0px 20px
    border: solid 1px rgba(0,0,0,0.05)
    // padding: 0px 20px
    // display: none
    
  .btline
    width: 30%
    height: 2px
    position: absolute
    top: 380px
    transition-duration: 0.8s

  .nav
    cursor: pointer
    z-index: 100
    position: relative
    margin-top: 50px
    ul
      display: flex
      list-style: none
      font-size: 20px
      padding: 0
    li
      min-width: 80px
    a
      color: #4A523C
      padding: 10px 20px
    
  .blacknav
    > a
      color: black
      

  .color_black
    color: #494539

  .mypic
    width: 200px
    left: 50%
    overflow: hidden
    transition-duration: 1s
    text-align: center
    padding-top: 30vh
    z-index: 0
    &:before
      width: 190px
      height: 190px
      border-radius: 200px
      border-width: 1px
      border-style: solid
      border-color: #333

  .imgpic
    width: 35%

  .row
    width: 100%
    text-align: center

  #row1
    height: 300px
    transition-duration: 0.5s
    box-shadow: 4px 4px 12px -2px rgba(20%,20%,40%,0.5)


    
  .blue
    background-color: #9dd5d3

  .line
    width: 18%
    height: 16px
    border-radius: 30px
    position: absolute
    left: 26%
    top: 180px
    transition-duration: 0.5s

  #row1:hover
    .btline
      top: 340px
    height: 280px
    #line1
      width: 10%
      left: 30%
    #line2
      width: 12%
      left: 67%
    #myhomepage
      letter-spacing: 15px

  #line2
    width: 24%
    top: 230px
    left: 60%
    transition-delay: 0.1s
    

    
  .row2
    height: 100%
    width: 100%
    background-color: #9dd5d3
    transition-duration: 1s
    position: relative
    overflow: hidden
    z-index: 10
    display: flex
    justify-content: center
    align-items: center

  .close_page
    height: 0px  
  .close_page2
    height: 200px  

  .row2:hover
    .leftpart
      transform: rotateZ(1deg)
      height: 105%
    #describe
      top: 27%
    .cloud
      transform: scale(1.2)


  .inlineblock
    display: inline-block

  #titlename
    font-size: 40px
    font-weight: 300
    letter-spacing: 8px
    color: #fffefc
    padding: 0px
    position: absolute
    width: 70%
    left: 10%
    top: 13%
    padding-left: 10px
    border-bottom-style: solid
    padding-bottom: 6px
    border-bottom-width: 2px

  .monoame
    width: 45px
    position: absolute
    left: 42%
    top: 75px

  footer
    text-align: center
    width: 100%
    height: 100px
    background-color: #fefefc
  

  #foot
    margin-top: 70px
    letter-spacing: 10px
    font-size: 13px

  #describe
    font-size: 16px
    font-weight: 300
    letter-spacing: 2px
    color: #494539
    padding: 0px
    position: absolute
    left: 12%
    top: 24%
    line-height: 30px
    transition-duration: 2s

  #titlename:after
    padding-left: 30px
    font-size: 13px
    color: white
    content: "設計師"
    font-weight: 100

  #dlist
    display: inline-block

  .color_white
    color: #fffefc
  .white
    background-color: #fffefc
    
  .rainbasic
    width: 1.5px
    background-color: white
    position: absolute
    top: -100px
    animation-name: raindrop
    animation-timing-function: ease-in
    animation-iteration-count: infinite

  .wavebasic
    background-color: white
    position: absolute
    bottom: -200px
    animation-timing-function: ease-in-out
    animation-iteration-count: infinite
    transition-duration: 0.5s
    cursor: crosshair
    &:hover
      opacity: 0
    

  @keyframes raindrop
    0%
      top: -50px
    100%
      top: 700px

  @for $i from 1 through 100
    .wave#{$i}
      $wavesize: random(150)+50 
      width: $wavesize+px 
      height: $wavesize+px
      border-radius: $wavesize+px
      left: #{$i*20-200}px
      opacity: random(100)/60
      background-color: #{random(255)}

      animation-name: wave#{$i}
      animation-duration: 2+random(5)+s

        

    @keyframes wave#{$i} 
      $oritop: random(20)+70
      0%
        bottom: -$oritop+px
      50%
        bottom: (-$oritop+random(50))+px
      100%
        bottom: -$oritop+px

  .whitepagething
    color: black

  .subpagetitle
    font-size: 26px
    font-weight: 400
    color: #494539
    opacity: 0.5
    letter-spacing: 15px

  .describe
    color: #222
    opacity: 0.6
    line-height: 40px
    letter-spacing: 2px
    margin-top: 70px
    

</style>
