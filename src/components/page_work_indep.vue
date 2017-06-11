<template lang="pug">
div(v-if="proj")
  router-link.back_btn(to="/works")
    i.fa.fa-angle-left
  .projbox.col-sm-12
    .content
      h3 {{proj.name}}
      h5 {{proj.description}}
    .img_wrap(:style='\"background-image: url(\"+((proj.big_img!=null)?proj.big_img:proj.cover)+\")\"')
  .col-sm-12
    h3 {{proj.name}}
    a(:href='proj.link', target='_blank')
      h5 作品網站連結
    hr
    p {{proj.description}}
  .col-sm-12
    div.content_indep(v-if='proj.content', v-html='proj.content')
    div
      .col-sm-12
        hr
  .col-sm-12
    h1 Next Work
    router-link(:to="'/works/'+next_proj.id")
      .projbox.col-sm-12
        .content
          h3 {{next_proj.name}}
          h5 {{next_proj.description}}
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
    $("html,body").animate({scrollTop: 0});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass?indentedSyntax">
.back_btn 
  background-color: white
  position: fixed
  top: 0px
  padding: 10px 20px
  z-index: 200
  font-size: 20px
  vertical-align: middle
  cursor: pointer
  color: #555
  i
    font-size: 40px

.content_indep
  width: 100%
  // background-color: #222
  img
    width: 100%
    // width: 100px
</style>
