<template lang="pug">
.page-work-indep.pt-5
  router-link.back_btn.animated.delat-ani-30.slideInLeft(to="/works" )
    i.fa.fa-angle-left
  .container
    .row
      .col-sm-12
        //- .content
        //-   h3 {{proj.name}}
        //-   h5 {{proj.description}}
        .img_wrap(:style='\"background-image: url(\"+((proj.big_img!=null)?proj.big_img:proj.cover)+\")\"')
      .col-sm-12.mt-5
        .row
          .col-sm-6
            h1 {{proj.title}}
            p Client: {{proj.company}}
          .col-sm-6
            p {{proj.description}}
            a.btn-link(:href='proj.link', target='_blank')
              //- i.fa.fa-link
              | 前往作品
        .row
          .col-sm-12
            hr
            //- p(v-html="proj.content")
    .row
      .col-sm-12.mt-5
        div.content_indep(v-if='proj.content', v-html='proj.content')
      .col-sm-12.mt-5
        h1 Next Work
        router-link(:to="'/works/'+next_proj.id").row
          .projbox.col-sm-12
            .content
              h3 {{next_proj.name}}
              //- h5 {{next_proj.description}}
            .img_wrap(:style='\"background-image: url(\"+((next_proj.big_img!=null)?next_proj.big_img:next_proj.cover)+\")\"')

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
    ...mapState(['works','scrollTop']),
    proj(){
      var result=this.works.filter((obj)=>obj.id==this.id)[0]
      console.log(this.id)
      return result;
    },
    next_proj(){
      var i=this.works.indexOf(this.proj);
      console.log(i);
      return this.works[i+1];
    }
  },
  mounted(){
    document.title=this.proj.title;
    $("html,body").animate({scrollTop: 0});
    if (window.ga){
      ga('send', 'pageview');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
$colorBlue: #A8D3D2
.page-work-indep
  .projbox
    height: 400px
  .img_wrap
    padding-bottom: 50%
    display: flex
    justify-content: center
    align-items: center
    background-position: center center
    background-size: cover
  img
    margin-top: 5vmin
    box-shadow: 0px 0px 20px rgba(black,0.3)
  video
    width: 100%
      
  .btn-link
    padding: 5px 30px
    border: solid 1px
    border-radius: 3px
    font-size: 16px
    letter-spacing: 1px
    margin-top: 20px
    text-decoration: none
    background-color: white
    color: black

    &:hover
      color: white
      background-color: transparent
.back_btn 
  background-color: $colorBlue
  color: white

  position: fixed
  top: 0px
  left: 0
  padding: 20px
  z-index: 200
  // font-size: 40px
  vertical-align: middle
  cursor: pointer
  // color: #555
  // box-shadow: 10px 0px 20px rgba(0,0,0,0.1)
  i
    font-size: 50px

.content_indep
  width: 100%
  // background-color: #222
  img
    max-width: 100%
  // .img_wrap
  //   padding-bottom: 40%
    // width: 100px
</style>
