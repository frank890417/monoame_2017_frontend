<template lang="pug">
  div(v-if="proj")
    ul.breadcrumb
      li
        a(href='#/works') 作品
      li {{proj.name}}
    .projbox.col-sm-12
      .content
        h3 {{proj.name}}
        h5 {{proj.description}}
      .img_wrap(:style='\"background-image: url(\"+((proj.big_img!=null)?proj.big_img:proj.img)+\")\"')
    .col-sm-12
      h3 {{proj.name}}
      a(:href='proj.website', target='_blank')
        h5 作品網站連結
      hr
      p {{proj.description}}
    .col-sm-12
      div(v-if='proj.content', v-html='proj.content')
      div
        .col-sm-12
          hr

</template>

<script>
import {mapState} from 'vuex'
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass?indentedSyntax">

</style>
