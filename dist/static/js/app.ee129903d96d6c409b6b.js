webpackJsonp([1],Array(24).concat([function(t,i,o){"use strict";var e=o(6),a=o(103),n=o(102),s=o.n(n),r=o(95),c=o.n(r),l=o(94),p=o.n(l),d=o(93),m=o.n(d),u=o(91),g=o.n(u),x=o(92),b=o.n(x);e.a.use(s.a),e.a.use(a.a);var f=new a.a({routes:[{path:"/works",name:"page_works",component:c.a,meta:{title:"作品 | 墨雨設計"},alias:["/"]},{path:"/works/:id",name:"page_work_indep",component:p.a,props:!0,meta:{title:"作品 | 墨雨設計"}},{path:"/contact",name:"page_contact",component:m.a,props:!0,meta:{title:"聯繫 | 墨雨設計"}},{path:"/about",name:"page_about",component:g.a,props:!0,meta:{title:"關於 | 墨雨設計"}},{path:"/class",name:"page_class",component:b.a,props:!0,meta:{title:"線上課程 | 墨雨設計"}}]});f.beforeEach(function(t,i,o){console.log(t),document.title=t.meta.title,"page_work_indep"!=t.name&&window.ga&&ga("send","pageview"),o()}),i.a=f},function(t,i,o){"use strict";var e=o(6),a=o(5),n=o(29),s=o.n(n);e.a.use(a.a);var r=new a.a.Store({state:{works:[],scrollTop:0},mutations:{set_works:function(t,i){t.works=i},set_scrollTop:function(t,i){t.scrollTop=i}},actions:{load_works:function(t){s.a.get("http://build.monoame.com/api/works").then(function(i){t.commit("set_works",i.data),console.log("Action Result (get works):",i.data)})}}});i.a=r},function(t,i){},function(t,i,o){function e(t){o(105)}var a=o(3)(o(47),o(97),e,null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=o(28),a=o.n(e);i.default={name:"app",mounted:function(){},methods:{back_top_top:function(){a()("html,body").animate({scrollTop:0})}}}},function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=(o(5),o(1)),a=o.n(e);i.default={name:"hello",props:["id"],data:function(){return{msg:"Welcome to Your Vue.js App"}},computed:{},mounted:function(){a()("html,body").animate({scrollTop:0})}}},function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=(o(5),o(1)),a=o.n(e);i.default={name:"hello",props:["id"],data:function(){return{msg:"Welcome to Your Vue.js App"}},computed:{},mounted:function(){a()("html,body").animate({scrollTop:0})},methods:{log_event:function(t){window.ga&&ga("send","event","點擊連結",t)}}}},function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=o(8),a=o.n(e),n=o(5),s=o(1),r=o.n(s);i.default={name:"hello",props:["id"],data:function(){return{msg:"Welcome to Your Vue.js App"}},computed:a()({},o.i(n.b)(["works"]),{proj:function(){var t=this,i=this.works.filter(function(i){return i.id==t.id})[0];return console.log(this.id),i},next_proj:function(){var t=this.works.indexOf(this.proj);return console.log(t),this.works[t+1]}}),mounted:function(){r()("html,body").animate({scrollTop:0})}}},function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=o(8),a=o.n(e),n=o(5),s=o(1),r=o.n(s);i.default={name:"hello",props:["id"],data:function(){return{msg:"Welcome to Your Vue.js App"}},computed:a()({},o.i(n.b)(["works"]),{proj:function(){var t=this,i=this.works.filter(function(i){return i.id==t.id})[0];return console.log(this.id),i},next_proj:function(){var t=this.works.indexOf(this.proj);return console.log(t),this.works[t+1]}}),mounted:function(){document.title=this.proj.title,r()("html,body").animate({scrollTop:0}),window.ga&&ga("send","pageview")}}},function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=o(8),a=o.n(e),n=o(5),s=o(1),r=o.n(s);i.default={name:"hello",data:function(){return{show_num:6,can_load_more:!0,load_text:"載入中..."}},computed:a()({},o.i(n.b)(["works","scrollTop"]),{limit_works:function(){return this.works.slice(0,this.show_num)}}),mounted:function(){r()(window).scrollTop(0)},watch:{scrollTop:function(){var t=this;this.scrollTop+r()(window).outerHeight()>r()(".trigger_bar").offset().top&&this.can_load_more&&this.show_num<this.works.length&&(this.can_load_more=!1,setTimeout(function(){t.show_num+=4,console.log("add new post: "+t.show_num),t.can_load_more=!0},300))}}}},function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=o(26),a=(o.n(e),o(6)),n=o(27),s=o.n(n),r=o(24),c=o(25),l=o(1),p=o.n(l);a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,store:c.a,mounted:function(){c.a.dispatch("load_works"),p()(window).scroll(function(t){c.a.commit("set_scrollTop",p()(window).scrollTop())})},template:"<App/>",components:{App:s.a}}),"monoame.com"==window.document.domain||"www.monoame.com"==window.document.domain?(!function(t,i,o,e,a,n,s){t.GoogleAnalyticsObject=a,t[a]=t[a]||function(){(t[a].q=t[a].q||[]).push(arguments)},t[a].l=1*new Date,n=i.createElement(o),s=i.getElementsByTagName(o)[0],n.async=1,n.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(n,s)}(window,document,"script",0,"ga"),ga("create","UA-52977512-9","auto"),ga("send","pageview")):(window.ga=null,console.log("disable ga."))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,i,o){i=t.exports=o(2)(void 0),i.push([t.i,".back_btn{background-color:#fff;position:fixed;top:0;padding:10px 16px;z-index:200;font-size:20px;vertical-align:middle;cursor:pointer;color:#555}.back_btn i{font-size:30px}.content_indep,.content_indep img{width:100%}",""])},function(t,i,o){i=t.exports=o(2)(void 0),i.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900);",""]),i.push([t.i,"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css);",""]),i.push([t.i,'*{vertical-align:top;font-family:Playfair Display,serif}body,html{margin:0;padding:0;color:#555;background-color:#f8f2ef;overflow-x:hidden}body{font-size:15px;padding-bottom:300px;min-height:100vh}.back_to_top,body{color:#333;background-color:#fff}.back_to_top{position:fixed;right:15px;bottom:15px;width:50px;height:50px;border-radius:50%;z-index:200;box-shadow:0 0 20px;font-size:30px;padding-bottom:5px;cursor:pointer;transition:.5s;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.back_to_top:hover{background-color:#ddd}.logo_bar{position:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-right:0;background-repeat:no-repeat;background-position:50%}.logo_bar h6{font-weight:300}@media screen and (max-width:1000px){.logo_bar{position:relative;padding-bottom:30px}}.logo_bar h5{font-size:16px}.logo_bar h5:before{content:"";display:block;width:2px;height:20px;border-left:2px solid #333;margin:auto;margin-bottom:10px}.logo_bar .nav{white-space:no-wrap;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.logo_bar .nav a,.logo_bar .nav li{white-space:nowrap}.logo_bar .nav a{color:#333;padding:0 5px;letter-spacing:1px;font-size:16px}.icon{height:90px;display:inline-block;border:1px solid rgba(0,0,0,.05)}.projbox{color:#fff;cursor:pointer;position:relative;height:500px;padding:0;margin-top:0;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;outline:none}@media screen and (max-width:700px){.projbox{height:300px}.projbox .content{padding:10px}}.projbox .workitem_inner{display:block;position:relative;width:100%;height:100%;padding:0}.projbox .img_wrap{width:100%;height:100%;background-size:cover;background-position:50%}.projbox .blackmask{position:absolute;width:100%;height:100%;left:0;top:0;background-color:rgba(0,0,0,.005);pointer-events:none;transition-duration:.5s;z-index:3}.projbox .content{z-index:5;width:100%;height:30%;position:absolute;bottom:0;background:linear-gradient(transparent,rgba(0,0,0,.5));display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:10px}.projbox h3,.projbox h5{transition-duration:.5s;color:#333;padding:10px 20px;font-weight:300}.projbox h3{font-size:22px;padding-bottom:0}.projbox h3,.projbox h5{letter-spacing:2px;color:#fff}.projbox h5{font-size:16px;padding-top:0}.projbox .proj_description{opacity:.5}.projbox:hover .blackmask{background-color:rgba(0,0,0,.5)}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-active{opacity:0}nav{float:right}nav a{color:#333;cursor:pointer}nav a:hover{color:3333}nav li{display:inline-block;margin:0 10px;margin-top:30px}.bluerain{display:none;margin-top:30px;color:#9dd5d3;font-weight:900;font-size:20px;letter-spacing:2px;background-color:transparent}.member_img{border-radius:50%;-webkit-filter:grayscale(1);filter:grayscale(1);width:90%}.member_content,.member_img{display:inline-block}.memberbox{margin-bottom:40px}',""])},function(t,i,o){i=t.exports=o(2)(void 0),i.push([t.i,".page[data-v-0845e520]{padding:10px;padding-top:50px}.head[data-v-0845e520]{width:100%;-webkit-filter:saturate(0);filter:saturate(0);margin-bottom:30px}h3[data-v-0845e520]{margin-bottom:20px;margin-top:40px}h5[data-v-0845e520]{margin-bottom:15px}p[data-v-0845e520]{max-width:80%;margin-bottom:30px}.person p[data-v-0845e520]{max-width:500px;line-height:30px}",""])},function(t,i,o){i=t.exports=o(2)(void 0),i.push([t.i,".page[data-v-4b22a5db]{padding:10px;padding-top:50px}.head[data-v-4b22a5db]{width:100%}h3[data-v-4b22a5db]{margin-top:40px}h4[data-v-4b22a5db]{margin-bottom:15px;margin-top:10px;line-height:35px}p[data-v-4b22a5db]{max-width:80%}a[data-v-4b22a5db]{text-decoration:none;color:#333;transition:.5s;padding-top:10px;padding-bottom:10px}a[data-v-4b22a5db]:hover{color:#333;background-color:#eee;text-decoration:none}.person p[data-v-4b22a5db]{max-width:500px;line-height:30px}",""])},function(t,i,o){i=t.exports=o(2)(void 0),i.push([t.i,".page[data-v-7b4c45c3]{padding-top:50px}i.fa[data-v-7b4c45c3]{margin-right:10px;font-size:30px}a[data-v-7b4c45c3]{color:#333}",""])},function(t,i,o){i=t.exports=o(2)(void 0),i.push([t.i,".load_icon[data-v-e47bfa36]{-webkit-filter:saturate(0);filter:saturate(0)}.row[data-v-e47bfa36]{margin-top:0;padding-top:0}",""])},,,function(t,i){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0i5ZyW5bGkXzEiIGRhdGEtbmFtZT0i5ZyW5bGkIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQzLjM3IDc4LjkiPjxkZWZzPjxzdHlsZT4uY2xzLTEsLmNscy0yLC5jbHMtM3tmaWxsOm5vbmU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoxLjdweDt9LmNscy0xLC5jbHMtMntzdHJva2U6IzQ5NTMzODt9LmNscy0yLC5jbHMtM3tzdHJva2UtbGluZWNhcDpyb3VuZDt9LmNscy0ze3N0cm9rZTojOWRkNWQzO308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbndoaXRlPC90aXRsZT48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjExLjk1IiB5PSI5LjM3IiB3aWR0aD0iMTkuNzYiIGhlaWdodD0iNy4zOCIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjIxLjgzIiB5MT0iNDUuNjkiIHgyPSIyMS44MyIgeTI9IjU5LjI2Ii8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iMTIuMjEiIHkxPSIyMS4yOCIgeDI9IjMxLjIzIiB5Mj0iMjEuMjgiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSI3Ljg1IiB5MT0iMjUuODMiIHgyPSIzNS44MiIgeTI9IjI1LjgzIi8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iMTUuNjEiIHkxPSIzMS45NyIgeDI9IjE1LjciIHkyPSIyOS45NyIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjI3LjkxIiB5MT0iMzEuOTciIHgyPSIyNy44MyIgeTI9IjI5Ljk3Ii8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iOS4zNCIgeTE9IjMxLjUzIiB4Mj0iOS43NiIgeTI9IjI5Ii8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iMzQuMTkiIHkxPSIzMS41NCIgeDI9IjMzLjc2IiB5Mj0iMjguOTkiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSI5LjQ5IiB5MT0iNDUuNjkiIHgyPSIzMy43OSIgeTI9IjQ1LjY5Ii8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNOS40OSw0NS42OUExNTguOTQsMTU4Ljk0LDAsMCwxLDkuMDgsNjIuMiIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjE1LjY3IiB5MT0iNTEuMzkiIHgyPSIxNS43IiB5Mj0iNTAuNTYiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSIxNS42NCIgeTE9IjU1LjI1IiB4Mj0iMTUuNTkiIHkyPSI1OC44NCIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjI4LjAxIiB5MT0iNTEuNDIiIHgyPSIyNy45OCIgeTI9IjUwLjU5Ii8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iMjguMDUiIHkxPSI1NS4yNSIgeDI9IjI4LjA5IiB5Mj0iNTguOTMiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zNCw0NS42OWExNTguMTgsMTU4LjE4LDAsMCwwLC41MiwxNi41MSIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjEwLjE2IiB5MT0iNDEuMDEiIHgyPSIzMy41MyIgeTI9IjQxLjAxIi8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iMjEuODMiIHkxPSI5LjM3IiB4Mj0iMjEuODMiIHkyPSI0MS4wMSIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjI3LjA3IiB5MT0iMTIuOTYiIHgyPSIyNi42NCIgeTI9IjEzIi8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iMTcuMDMiIHkxPSIxMyIgeDI9IjE2LjU5IiB5Mj0iMTIuOTYiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSIxMy4yOSIgeTE9IjM2LjA0IiB4Mj0iMzAuNCIgeTI9IjM2LjA0Ii8+PGxpbmUgY2xhc3M9ImNscy0zIiB4MT0iOC45OCIgeTE9IjY2LjA0IiB4Mj0iOC45OCIgeTI9IjY4LjM1Ii8+PGxpbmUgY2xhc3M9ImNscy0zIiB4MT0iMTUuMzkiIHkxPSI2Ni4wNCIgeDI9IjE1LjM5IiB5Mj0iNjguMzUiLz48bGluZSBjbGFzcz0iY2xzLTMiIHgxPSIyMS44NCIgeTE9IjY2LjA0IiB4Mj0iMjEuODQiIHkyPSI2OC4zNSIvPjxsaW5lIGNsYXNzPSJjbHMtMyIgeDE9IjI3Ljk5IiB5MT0iNjYuMDQiIHgyPSIyNy45OSIgeTI9IjY4LjM1Ii8+PGxpbmUgY2xhc3M9ImNscy0zIiB4MT0iMzQuNDkiIHkxPSI2Ni4wNCIgeDI9IjM0LjQ5IiB5Mj0iNjguMzUiLz48L3N2Zz4="},function(t,i,o){function e(t){o(106)}var a=o(3)(o(48),o(98),e,"data-v-0845e520",null);t.exports=a.exports},function(t,i,o){function e(t){o(107)}var a=o(3)(o(49),o(99),e,"data-v-4b22a5db",null);t.exports=a.exports},function(t,i,o){function e(t){o(108)}var a=o(3)(o(50),o(100),e,"data-v-7b4c45c3",null);t.exports=a.exports},function(t,i,o){function e(t){o(104)}var a=o(3)(o(51),o(96),e,null,null);t.exports=a.exports},function(t,i,o){function e(t){o(109)}var a=o(3)(o(52),o(101),e,"data-v-e47bfa36",null);t.exports=a.exports},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return t.proj?o("div",[o("router-link",{staticClass:"back_btn",attrs:{to:"/works"}},[o("i",{staticClass:"fa fa-angle-left"})]),o("div",{staticClass:"projbox col-sm-12"},[o("div",{staticClass:"content"},[o("h3",[t._v(t._s(t.proj.name))]),o("h5",[t._v(t._s(t.proj.description))])]),o("div",{staticClass:"img_wrap",style:"background-image: url("+(null!=t.proj.big_img?t.proj.big_img:t.proj.cover)+")"})]),o("div",{staticClass:"col-sm-12"},[o("h3",[t._v(t._s(t.proj.name))]),o("a",{attrs:{href:t.proj.link,target:"_blank"}},[o("h5",[t._v("作品網站連結")])]),o("hr"),o("p",[t._v(t._s(t.proj.description))])]),o("div",{staticClass:"col-sm-12"},[t.proj.content?o("div",{staticClass:"content_indep",domProps:{innerHTML:t._s(t.proj.content)}}):t._e(),t._m(0)]),o("div",{staticClass:"col-sm-12"},[o("h1",[t._v("Next Work")]),o("router-link",{attrs:{to:"/works/"+t.next_proj.id}},[o("div",{staticClass:"projbox col-sm-12"},[o("div",{staticClass:"content"},[o("h3",[t._v(t._s(t.next_proj.name))]),o("h5",[t._v(t._s(t.next_proj.description))])]),o("div",{staticClass:"img_wrap",style:"background-image: url("+(null!=t.next_proj.big_img?t.next_proj.big_img:t.next_proj.cover)+")"})])])],1)],1):t._e()},staticRenderFns:[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",[o("div",{staticClass:"col-sm-12"},[o("hr")])])}]}},function(t,i,o){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container-fluid"}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-3 col-md-2 logo_bar text-center"},[e("img",{attrs:{src:o(90),width:"80"}}),e("h5",[t._v("Monoame Design Studio")]),e("ul",{staticClass:"nav"},[e("li",[e("router-link",{attrs:{to:"/works"}},[t._v("作品")])],1),e("li",[e("router-link",{attrs:{to:"/about"}},[t._v("介紹")])],1),e("li",[e("router-link",{attrs:{to:"/class"}},[t._v("課程")])],1),e("li",[e("router-link",{attrs:{to:"/contact"}},[t._v("聯繫")])],1)])]),e("div",{staticClass:"col-md-10 col-sm-9 offset-lg-2 offset-sm-0"},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view",{key:t.$route.path})],1)],1)]),e("div",{staticClass:"back_to_top",on:{click:t.back_top_top}},[e("i",{staticClass:"fa fa-angle-up"})])])},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"page"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-12"},[o("h3",[t._v("About")]),o("p",[t._v("視覺形象/品牌/互動網頁設計工作室，結合Motion Graphic加入互動性精神創造新型態的瀏覽體驗，從設計師的角度教學網頁程式開發，昇華更多創作的可能性，致力於幫助設計師踏上自學程式進化之路。")])]),o("div",{staticClass:"col-sm-12"},[o("h3",[t._v("Member")])])]),o("div",{staticClass:"row person"},[o("div",{staticClass:"col-sm-2"},[o("img",{staticClass:"head",attrs:{src:"https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/26169339_1842004802484801_5666809996321113913_n.jpg?_nc_eui2=v1%3AAeGO-0OAdufjd-peiEPgTgSuiR_gO_vkt4haCWri3ED4K0jPSRRNp277L67ytTBvFQJRhcJdGettVzisALSAyp2Z1Pet7tBAx5ObNDpxfhvsDQ&oh=c0090e48f4b04e031c0065682be9e2f9&oe=5B0AB41B"}})]),o("div",{staticClass:"col-sm-10"},[o("h5",[t._v("吳哲宇 | Founder、Designer、Developer")]),o("p",[t._v("成立墨雨設計，三年前踏入平面設計的領域，接案不斷的磨練能力走上不同的道路。\n兩年前開始學習前/後端網頁程式開發，\n將Motion Graphic加入互動性精神創造新型態的網頁體驗。")])])]),o("div",{staticClass:"row person"},[o("div",{staticClass:"col-sm-2"},[o("img",{staticClass:"head",attrs:{src:"http://monoame.com/img/yiimg.jpg"}})]),o("div",{staticClass:"col-sm-10"},[o("h5",[t._v("陳億瑞 | Designer、Illustrator")]),o("p",[t._v("狐狸派。專長於插畫、平面與圖像設計，\n喜歡靈活地將各項設計品項整合於一體，\n熱衷於實驗性與藝術性值高的嘗試。")])])]),o("div",{staticClass:"row person"},[o("div",{staticClass:"col-sm-2"},[o("img",{staticClass:"head",attrs:{src:"http://monoame.com/img/minimg.jpg"}})]),o("div",{staticClass:"col-sm-10"},[o("h5",[t._v("魏敏 | Animator、User Researcher")]),o("p",[t._v("「兔子讓獅子用盡全力。」")])])])])}]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"page"},[t._m(0),o("a",{staticClass:"row person",attrs:{href:"https://hahow.in/cr/monoame-webdesign1",target:"_blank"},on:{click:function(i){t.log_event("動畫互動網頁程式入門")}}},[t._m(1),t._m(2)]),o("a",{staticClass:"row person",attrs:{href:"https://hahow.in/cr/monoame-webdesign2",target:"_blank"},on:{click:function(i){t.log_event("動畫互動網頁特效入門")}}},[t._m(3),t._m(4)]),t._m(5),o("a",{staticClass:"row person",attrs:{href:"https://www.facebook.com/pg/bosscodingplease",target:"_blank"},on:{click:function(i){t.log_event("老闆，來點寇汀吧。")}}},[t._m(6),t._m(7)])])},staticRenderFns:[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-12"},[o("h3",[t._v("線上課程")]),o("hr")])])},function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"col-sm-3"},[o("img",{staticClass:"head",attrs:{src:"https://hahow.in/images/574fab4f206cd60900c52a67?width=600"}})])},function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"col-sm-9"},[o("h4",[t._v("動畫互動網頁程式入門 (HTML/CSS/JS)")]),o("p",[t._v("深入淺出學習網頁動畫、特效與遊戲製作的原理，從零快速入門網頁、JS 與繪圖實戰範例，並學習使用 Vue.js 整合前端網頁。")])])},function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"col-sm-3"},[o("img",{staticClass:"head",attrs:{src:"https://hahow.in/images/59131a7f2fa2a607008bc8ca?width=600"}})])},function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"col-sm-9"},[o("h4",[t._v("動畫互動網頁特效入門（JS/CANVAS）")]),o("p",[t._v("想用 illustrator 的思維學習網頁前端程式設計嗎？看完一般網路教學總是離想像有一大段距離嗎？讓這堂課帶你走進前端動態網頁的世界。")])])},function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-12"},[o("h3",[t._v("直播教學")]),o("hr")])])},function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"col-sm-3"},[o("img",{staticClass:"head",attrs:{src:"https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/17308904_1822494568003955_966572233505397914_n.jpg?oh=8bf6294d2647d4664a6fb0aa8695cdf2&oe=59A9F6B3"}})])},function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"col-sm-9"},[o("h4",[t._v("老闆，來點寇汀吧。 "),o("br"),t._v("Boss,CODING please.")]),o("p",[t._v("[老闆，來點寇汀吧。]"),o("br"),t._v("寇汀，是一種名為Coding的雞尾酒。"),o("br"),t._v("深夜酒吧，想做什麼都可以"),o("br"),t._v("每週四十點，老闆帶著你直播寇汀Coding！")])])}]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"page"},[o("div",{staticClass:"container"},[o("h2",[t._v("聯繫方式")]),o("hr"),o("h3",[o("i",{staticClass:"fa fa-envelope-o"}),t._v("Mail")]),o("p",[t._v("monoamestudio@gmail.com")]),o("a",{attrs:{href:"https://www.facebook.com/MonoameDesign/",target:"_blank"}},[o("h3",[o("i",{staticClass:"fa fa-facebook-square"}),t._v("Facebook")])]),o("p",[t._v("粉專：墨雨設計")])])])}]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",[o("transition-group",{staticClass:"row works",attrs:{name:"fade"}},t._l(t.works,function(i,e){return o("div",{directives:[{name:"show",rawName:"v-show",value:e<t.show_num,expression:"wid<show_num"}],key:i,staticClass:"projbox col-lg-6 col-md-12"},[o("router-link",{staticClass:"workitem_inner",attrs:{to:"works/"+i.id,title:"點擊查看 "+i.title+"詳細資訊"}},[o("div",{staticClass:"blackmask"}),o("div",{staticClass:"content"},[o("h3",[t._v(t._s(i.title))]),o("h5",{staticClass:"proj_description"},[t._v(t._s(i.description))])]),o("div",{staticClass:"img_wrap",style:"background-image: url("+i.cover+")"})])],1)})),o("div",{staticClass:"trigger_bar"},[o("br"),o("br"),o("h3",{staticClass:"text-center"},[o("transition",{attrs:{name:"fade"}},[t.can_load_more?t._e():o("img",{staticClass:"load_icon",attrs:{src:"http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif",width:"100px"}})])],1)])],1)},staticRenderFns:[]}},,,function(t,i,o){var e=o(82);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o(4)("4e1dc502",e,!0)},function(t,i,o){var e=o(83);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o(4)("2cb5f336",e,!0)},function(t,i,o){var e=o(84);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o(4)("27e6a3c6",e,!0)},function(t,i,o){var e=o(85);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o(4)("5170eaee",e,!0)},function(t,i,o){var e=o(86);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o(4)("56d90194",e,!0)},function(t,i,o){var e=o(87);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o(4)("686fe087",e,!0)}]),[53]);
//# sourceMappingURL=app.ee129903d96d6c409b6b.js.map