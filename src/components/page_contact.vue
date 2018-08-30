<template lang="pug">
  .page-contact
    .container.pt-5
      h2.pt-5 聯繫方式
      hr
      h3 
        i.fa.fa-envelope-o
        | Mail
      p monoamestudio@gmail.com
      a(href="https://www.facebook.com/MonoameDesign/" target="_blank")
        h3 
          i.fa.fa-facebook-square
          | Facebook
      p 粉專：墨雨設計

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
<style scoped lang="sass?indentedSyntax">
.page-contact
  padding-top: 150px
  i.fa
    margin-right: 10px
    font-size: 30px 
  a
    color: #333
</style>
