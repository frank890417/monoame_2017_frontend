import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    works: [],
    scrollTop: 0,
    loading: true,
    menu: false
  },
  mutations: {
    set_works(state,works){
      state.works=works;
    },
    set_scrollTop(state,value){
      state.scrollTop=value;
    },
    set_loading(state,value){
      state.loading=value
    },
    setMenu(state,value){
      state.menu=value
    }
  },
  actions: {
    load_works(context){
      axios.get("https://build.monoame.com/api/works").then(
        (res)=>{
          context.commit("set_works",res.data);
          console.log("Action Result (get works):",res.data)
        }
      )
    }
  }

});

export default store
