<template lang="pug">
.page-work-indep.pt-5
  router-link.back_btn(to="/works")
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
          .col-sm-4
            h1 {{proj.title}}
          .col-sm-8
            p {{proj.description}}
            p Client: {{proj.company}}
            a(:href='proj.link', target='_blank')
              h5 作品網站連結

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
    ...mapState(['works']),
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
      
.back_btn 
  background-color: white
  position: fixed
  top: 0px
  padding: 10px 16px
  z-index: 200
  font-size: 20px
  vertical-align: middle
  cursor: pointer
  color: #555
  // box-shadow: 10px 0px 20px rgba(0,0,0,0.1)
  i
    font-size: 30px

.content_indep
  width: 100%
  // background-color: #222
  img
    max-width: 100%
  // .img_wrap
  //   padding-bottom: 40%
    // width: 100px
</style>
