<template lang="pug">
  div
    transition-group(name="fade").row.works
      .projbox.col-lg-6.col-md-12(v-for="(proj,wid) in works",v-show="wid<show_num",:key="proj")
        router-link.workitem_inner(
                    :to='"works/"+proj.id'
                    :title='"點擊查看 "+proj.title+"詳細資訊"')
          .blackmask

          .content
            h3 {{proj.title}}
            h5.proj_description {{proj.description}}

          .img_wrap(:style='"background-image: url("+proj.cover+")"')
    .trigger_bar
      br 
      br 
      h3.text-center
        //- span(v-if="!can_load_more") {{load_text}}
        transition(name="fade")
          img.load_icon(v-if="!can_load_more",src="http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif",width="100px") 

  
</template>

<script>
import {mapState} from 'vuex'
import $ from 'jquery'
export default {
  name: 'hello',
  data () {
    return {
      show_num: 6,
      can_load_more: true,
      load_text: "載入中...",
      
    }
  },
  computed: {
    ...mapState(['works','scrollTop']),
    limit_works(){
      return this.works.slice(0,this.show_num);
    }
  },
  mounted(){
    $(window).scrollTop(0)

  },
  watch: {
    scrollTop(){
      var y =this.scrollTop+$(window).outerHeight();
      var trigger = $(".trigger_bar").offset().top;
      // console.log(y,trigger);

      if (y>trigger && this.can_load_more && this.show_num<this.works.length){
        this.can_load_more=false;

        setTimeout(()=>{
          this.show_num+=6;
          console.log("add new post: " + this.show_num);
          this.can_load_more=true;

        },300);
        
      }
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass?indentedSyntax">

.load_icon
  filter: saturate(0%)
.row
  margin-top: 0
  padding-top: 0

</style>
