webpackJsonp([1],[,,,,,,,,,,,,,,,function(t,s,a){"use strict";var e=a(7),n=a(4),o=a(38),i=a.n(o);e.a.use(n.c);var r=new n.c.Store({state:{works:[],scrollTop:0,loading:!0,menu:!1},mutations:{set_works:function(t,s){t.works=s},set_scrollTop:function(t,s){t.scrollTop=s},set_loading:function(t,s){t.loading=s},setMenu:function(t,s){t.menu=s}},actions:{load_works:function(t){i.a.get("https://build.monoame.com/api/works").then(function(s){t.commit("set_works",s.data),console.log("Action Result (get works):",s.data)})}}});s.a=r},,,,,,,,,,,,,,,,,,,function(t,s,a){"use strict";var e=a(7),n=a(124),o=a(123),i=a.n(o),r=a(114),c=a.n(r),l=a(113),u=a.n(l),d=a(110),m=a.n(d),p=a(108),f=a.n(p),v=a(109),_=a.n(v),g=a(15);e.a.use(i.a),e.a.use(n.a);var h=new n.a({routes:[{path:"/works",name:"page_works",component:c.a,meta:{title:"作品 | 墨雨設計"},alias:["/"]},{path:"/works/:id",name:"page_work_indep",component:u.a,props:!0,meta:{title:"作品 | 墨雨設計"}},{path:"/contact",name:"page_contact",component:m.a,props:!0,meta:{title:"聯繫 | 墨雨設計"}},{path:"/about",name:"page_about",component:f.a,props:!0,meta:{title:"關於 | 墨雨設計"}},{path:"/class",name:"page_class",component:_.a,props:!0,meta:{title:"線上課程 | 墨雨設計"}}],mode:"history"});h.beforeEach(function(t,s,a){console.log(t),g.a.commit("set_loading",!0),setTimeout(function(){g.a.commit("set_loading",!1)},1600),document.title=t.meta.title,"page_work_indep"!=t.name&&window.ga&&ga("send","pageview"),setTimeout(function(){a(),g.a.commit("setMenu",!1)},500)}),s.a=h},function(t,s){},,function(t,s,a){function e(t){a(97)}var n=a(3)(a(56),a(119),e,null,null);t.exports=n.exports},,,,,,,,,,,,,,,,,,,function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(5),n=a.n(e),o=a(111),i=a.n(o),r=a(112),c=a.n(r),l=a(2),u=a.n(l),d=a(4);s.default={name:"app",mounted:function(){},methods:n()({back_top_top:function(){u()("html,body").animate({scrollTop:0})}},a.i(d.a)(["setMenu"])),computed:n()({},a.i(d.b)(["loading","menu","scrollTop"])),components:{pageLoading:i.a,pageMenu:c.a}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=(a(4),a(2)),n=a.n(e);s.default={name:"hello",props:["id"],data:function(){return{msg:"Welcome to Your Vue.js App"}},computed:{},mounted:function(){n()("html,body").animate({scrollTop:0})}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=(a(4),a(2)),n=a.n(e);s.default={name:"hello",props:["id"],data:function(){return{msg:"Welcome to Your Vue.js App"}},computed:{},mounted:function(){n()("html,body").animate({scrollTop:0})},methods:{log_event:function(t){window.ga&&ga("send","event","點擊連結",t)}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(5),n=a.n(e),o=a(4),i=a(2),r=a.n(i);s.default={name:"hello",props:["id"],data:function(){return{msg:"Welcome to Your Vue.js App"}},computed:n()({},a.i(o.b)(["works"]),{proj:function(){var t=this,s=this.works.filter(function(s){return s.id==t.id})[0];return console.log(this.id),s},next_proj:function(){var t=this.works.indexOf(this.proj);return console.log(t),this.works[t+1]}}),mounted:function(){r()("html,body").animate({scrollTop:0})}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(5),n=a.n(e),o=a(2),i=a.n(o),r=a(4);s.default={mounted:function(){for(var t="",s=0;s<70;s++){t+="<div class='rainbasic'               style='height: "+(5+25*Math.random())+"px;                       left: "+20*s+"px;                       opacity: "+Math.random()+";                       animation-duration: "+(1.5+2.5*Math.random())+"s;                       animation-delay: "+5*Math.random()+"s; '                       ></div>\n"}i()(".bg").prepend(t);var a="";for(s=0;s<90;s++)a+="<div class='wavebasic wave"+s+"' ></div>";i()(".bg").append(a)},computed:n()({},a.i(r.b)(["loading","menu","scrollTop"]))}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(5),n=a.n(e),o=a(4),i=a(2),r=a.n(i);s.default={name:"hello",props:["id"],data:function(){return{msg:"Welcome to Your Vue.js App"}},computed:n()({},a.i(o.b)(["works","scrollTop"]),{proj:function(){var t=this,s=this.works.filter(function(s){return s.id==t.id})[0];return console.log(this.id),s},next_proj:function(){var t=this.works.indexOf(this.proj);return console.log(t),this.works[t+1]}}),mounted:function(){document.title=this.proj.title,r()("html,body").animate({scrollTop:0}),window.ga&&ga("send","pageview")}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(5),n=a.n(e),o=a(4),i=a(2),r=a.n(i);s.default={name:"hello",data:function(){return{show_num:4,can_load_more:!0,load_text:"載入中..."}},computed:n()({},a.i(o.b)(["works","scrollTop"]),{limit_works:function(){return this.works.slice(0,this.show_num)}}),mounted:function(){r()(window).scrollTop(0)},watch:{scrollTop:function(){var t=this;this.scrollTop+r()(window).outerHeight()>r()(".trigger_bar").offset().top&&this.can_load_more&&this.show_num<this.works.length&&(this.can_load_more=!1,setTimeout(function(){t.show_num+=4,console.log("add new post: "+t.show_num),t.can_load_more=!0},300))}}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(35),n=(a.n(e),a(36)),o=a(7),i=a(37),r=a.n(i),c=a(34),l=a(15),u=a(2),d=a.n(u);n.a.init(),o.a.config.productionTip=!1,new o.a({el:"#app",router:c.a,store:l.a,mounted:function(){l.a.dispatch("load_works"),d()(window).scroll(function(t){l.a.commit("set_scrollTop",d()(window).scrollTop())})},template:"<App/>",components:{App:r.a}}),setTimeout(function(){l.a.commit("set_loading",!1)},3e3),"monoame.com"==window.document.domain||"www.monoame.com"==window.document.domain?(!function(t,s,a,e,n,o,i){t.GoogleAnalyticsObject=n,t[n]=t[n]||function(){(t[n].q=t[n].q||[]).push(arguments)},t[n].l=1*new Date,o=s.createElement(a),i=s.getElementsByTagName(a)[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",i.parentNode.insertBefore(o,i)}(window,document,"script",0,"ga"),ga("create","UA-52977512-9","auto"),ga("send","pageview")):(window.ga=null,console.log("disable ga."))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,,,,,,function(t,s,a){function e(t){a(100)}var n=a(3)(a(57),a(122),e,"data-v-f12820bc",null);t.exports=n.exports},function(t,s,a){function e(t){a(95)}var n=a(3)(a(58),a(117),e,"data-v-529cefe6",null);t.exports=n.exports},function(t,s,a){function e(t){a(96)}var n=a(3)(a(59),a(118),e,"data-v-5eab6375",null);t.exports=n.exports},function(t,s,a){function e(t){a(94)}var n=a(3)(a(60),a(116),e,null,null);t.exports=n.exports},function(t,s,a){function e(t){a(99)}var n=a(3)(a(61),a(121),e,null,null);t.exports=n.exports},function(t,s,a){function e(t){a(98)}var n=a(3)(a(62),a(120),e,null,null);t.exports=n.exports},function(t,s,a){function e(t){a(93)}var n=a(3)(a(63),a(115),e,"data-v-1950e517",null);t.exports=n.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-works"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row works"},t._l(t.works,function(s,e){return a("div",{directives:[{name:"show",rawName:"v-show",value:e<t.show_num,expression:"wid<show_num"}],key:s,staticClass:"projbox col-lg-6 col-md-12"},[a("router-link",{staticClass:"workitem_inner",attrs:{to:"works/"+s.id,title:"點擊查看 "+s.title+"詳細資訊"}},[a("div",{staticClass:"ratio-wrapper animated fadeIn"},[a("div",{staticClass:"img_wrap",style:"background-image: url("+s.cover+")"}),a("div",{staticClass:"content"},[a("h4",{staticClass:"year animated fadeIn"},[t._v(t._s(s.established_time.split("-")[0]))]),a("div",{staticClass:"ovh"},[a("h3",{staticClass:"animated slideInUp"},[t._v(t._s(s.title))])]),a("div",{staticClass:"ovh"},[a("h5",{staticClass:"proj_description"},[t._v(t._s(s.description))])])])])])],1)})),a("div",{staticClass:"trigger_bar"},[a("br"),a("br"),a("h3",{staticClass:"text-center"},[a("transition",{attrs:{name:"fade"}})],1)])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-loading"},[a("div",{staticClass:"rains"},[a("div",{staticClass:"rain"}),a("div",{staticClass:"rain"}),a("div",{staticClass:"rain"}),a("div",{staticClass:"rain"})])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-class"},[a("div",{staticClass:"container pt-5"},[a("div",{staticClass:"row"},[a("a",{staticClass:"col-sm-4 class",attrs:{href:"https://hahow.in/cr/monoame-webdesign1",target:"_blank"},on:{click:function(s){t.log_event("動畫互動網頁程式入門")}}},[t._m(0)]),a("a",{staticClass:"col-sm-4 class",attrs:{href:"https://hahow.in/cr/monoame-webdesign2",target:"_blank"},on:{click:function(s){t.log_event("動畫互動網頁特效入門")}}},[t._m(1)]),a("a",{staticClass:"col-sm-4 class",attrs:{href:"https://www.facebook.com/pg/bosscodingplease",target:"_blank"},on:{click:function(s){t.log_event("老闆，來點寇汀吧。")}}},[t._m(2)])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"img",staticStyle:{"background-image":"url('https://hahow.in/images/574fab4f206cd60900c52a67?width=600')"}})]),a("div",{staticClass:"col-sm-12"},[a("h2",{staticClass:"mt-5 mb-3"},[t._v("動畫互動網頁程式入門(HTML/CSS/JS)")]),a("p",[t._v("想用 illustrator 的思維學習網頁前端程式設計嗎？看完一般網路教學總是離想像有一大段距離嗎？讓這堂課帶你走進前端動態網頁的世界。")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"img",staticStyle:{"background-image":"url('https://hahow.in/images/5b85f1a8297df5001efb0150?width=600')"}})]),a("div",{staticClass:"col-sm-12"},[a("h2",{staticClass:"mt-5 mb-3"},[t._v("動畫互動網頁特效入門（JS/CANVAS）")]),a("p",[t._v("深入淺出學習網頁動畫、特效與遊戲製作的原理，從零快速入門網頁、JS 與繪圖實戰範例，並學習使用 Vue.js 整合前端網頁。")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"img",staticStyle:{"background-image":"url('/static/img/bosscoding.jpg')"}})]),a("div",{staticClass:"col-sm-12"},[a("h2",{staticClass:"mt-5"},[t._v("老闆，來點寇汀吧。")]),a("h4",{staticClass:"mb-3"},[t._v("Boss,CODING please.")]),a("p",[t._v("寇汀，是一種名為Coding的雞尾酒。"),a("br"),t._v("深夜酒吧，想做什麼都可以"),a("br"),t._v("每週四十點，老闆帶著你直播寇汀Coding！")])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-contact"},[a("div",{staticClass:"container pt-5"},[a("h2",{staticClass:"pt-5"},[t._v("聯繫方式")]),a("hr"),a("h3",[a("i",{staticClass:"fa fa-envelope-o"}),t._v("Mail")]),a("p",[t._v("monoamestudio@gmail.com")]),a("a",{attrs:{href:"https://www.facebook.com/MonoameDesign/",target:"_blank"}},[a("h3",[a("i",{staticClass:"fa fa-facebook-square"}),t._v("Facebook")])]),a("p",[t._v("粉專：墨雨設計")])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{class:{loading:t.loading},attrs:{id:"app"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.loading?a("pageLoading"):t._e()],1),a("div",{staticClass:"menu-toggle",class:{open:t.menu},on:{click:function(s){t.setMenu(!t.menu)}}},[t._m(0)]),a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.menu?a("pageMenu"):t._e()],1),a("router-link",{attrs:{to:"/"}},[a("h5",{staticClass:"fixed-logo animated fadeIn delay-ani-10",class:{not_at_top:t.scrollTop>5||-1!=t.$route.path.indexOf("/works/")}},[a("span",[t._v("Monoame Design"),a("br"),t._v("墨雨設計")]),a("span",{staticClass:"small"},[t._v("Interactive Design Agency")]),a("div",{staticClass:"rains"},[a("div",{staticClass:"rain",style:"transform: translateY("+t.scrollTop/10+"px)"}),a("div",{staticClass:"rain",style:"transform: translateY("+t.scrollTop/12+"px)"}),a("div",{staticClass:"rain",style:"transform: translateY("+t.scrollTop/11+"px)"}),a("div",{staticClass:"rain",style:"transform: translateY("+t.scrollTop/8+"px)"})])])]),a("h6"),a("div",{staticClass:"container-fluid"}),a("div",{staticClass:"pages-area"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{key:t.$route.path})],1)],1)])])]),a("div",{staticClass:"back_to_top",class:{show:t.scrollTop>5},on:{click:t.back_top_top}},[a("i",{staticClass:"fa fa-angle-up"})]),t._m(1)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"rains"},[a("div",{staticClass:"rain"}),a("div",{staticClass:"rain"}),a("div",{staticClass:"rain"}),a("div",{staticClass:"rain"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",[a("p",{staticClass:"color_black",attrs:{id:"foot"}},[t._v("©版權所有 2018 墨雨設計")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-work-indep pt-5"},[a("router-link",{staticClass:"back_btn animated delat-ani-30 slideInLeft",attrs:{to:"/works"}},[a("i",{staticClass:"fa fa-angle-left"})]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"img_wrap",style:"background-image: url("+(null!=t.proj.big_img?t.proj.big_img:t.proj.cover)+")"})]),a("div",{staticClass:"col-sm-12 mt-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("h1",[t._v(t._s(t.proj.title))]),a("p",[t._v("Client: "+t._s(t.proj.company))])]),a("div",{staticClass:"col-sm-6"},[a("p",[t._v(t._s(t.proj.description))]),a("a",{staticClass:"btn-link",attrs:{href:t.proj.link,target:"_blank"}},[t._v("前往作品")])])]),t._m(0)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 mt-5"},[t.proj.content?a("div",{staticClass:"content_indep",domProps:{innerHTML:t._s(t.proj.content)}}):t._e()]),a("div",{staticClass:"col-sm-12 mt-5"},[a("h1",[t._v("Next Work")]),a("router-link",{staticClass:"row",attrs:{to:"/works/"+t.next_proj.id}},[a("div",{staticClass:"projbox col-sm-12"},[a("div",{staticClass:"content"},[a("h3",[t._v(t._s(t.next_proj.name))])]),a("div",{staticClass:"img_wrap",style:"background-image: url("+(null!=t.next_proj.big_img?t.next_proj.big_img:t.next_proj.cover)+")"})])])],1)])])],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("hr")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"page-menu"},[a("div",{staticClass:"bg",class:{active:t.menu}}),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 flex-center"},[t._m(0),a("div",{staticClass:"nav"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/works"}},[t._v("作品")])],1),a("li",[a("router-link",{attrs:{to:"/class"}},[t._v("課程")])],1),a("li",[a("router-link",{attrs:{to:"/contact"}},[t._v("聯繫")])],1)])])])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mypic"},[a("img",{staticClass:"imgpic",attrs:{src:"http://www.monoame.com/monoamelogowhite.png"}})])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-about"},[a("p",[t._v("視覺形象/品牌/互動網頁設計工作室，結合Motion Graphic加入互動性精神創造新型態的瀏覽體驗，從設計師的角度教學網頁程式開發，昇華更多創作的可能性，致力於幫助設計師踏上自學程式進化之路。")])])}]}}],[64]);
//# sourceMappingURL=app.5551b3c3de3139d7fe17.js.map