<template lang="pug">
  div.page
    h3 Mail
    p monoamestudio@gmail.com
    h3 Facebook
    p 墨雨設計
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
.page
  padding-top: 50px
</style>
