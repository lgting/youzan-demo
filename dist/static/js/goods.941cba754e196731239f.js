webpackJsonp([1],{4349:function(t,e){},AeEs:function(t,e){},AnIW:function(t,e){},"Do/K":function(t,e){},HFfA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("JWK+"),a=(n.n(s),n("pI1A")),i=(n.n(a),n("AeEs")),o=(n.n(i),n("AnIW")),r=(n.n(o),n("d7BR")),c=(n.n(r),n("Do/K")),u=(n.n(c),n("7+uW")),d=n("mtWM"),l=n.n(d),h=n("TFhR"),f=n("mw3O"),p=n.n(f),m=n("U/rD"),v=n("gN+L"),g=p.a.parse(window.location.search.substring(1)).id,w=void 0;new u.default({el:"#app",data:{id:g,detailsLists:null,dealLists:null,bannerLists:null,detailTags:["商品详情","本店成交"],curIndex:0,showSku:!1,skuType:1,skuValue:1,addToCart:!1},created:function(){this.getDetails()},methods:{getDetails:function(){var t=this;l.a.post(h.a.details,{id:g}).then(function(e){t.detailsLists=e.data.data,t.bannerLists=[],t.detailsLists.imgs.forEach(function(e){t.bannerLists.push({img:e,clickUrl:"javascript:;"})})})},chageCurIndex:function(t){this.curIndex=t,t&&this.getDeal()},getDeal:function(){var t=this;l.a.post(h.a.deal,{id:g}).then(function(e){t.dealLists=e.data.data.lists})},changeSkuType:function(t){this.showSku=!0,this.skuType=t},closeSku:function(){this.showSku=!1},changeSkuValue:function(t){if(t<0){if(1===this.skuValue)return;this.skuValue--}else this.skuValue++},addCart:function(){this.addToCart=!0,this.closeSku()}},components:{Swipe:v.a},mixins:[m.a],watch:{showSku:function(t,e){t&&(w=document.scrollingElement.scrollTop,document.body.style.top=-w+"px"),document.body.style.position=t?"fixed":"static",document.querySelector("html").style.overflow=t?"hidden":"auto",document.body.style.width=t?"100%":"auto",document.querySelector("html").style.height=t?"100%":"auto",t||(document.scrollingElement.scrollTop=w)}}})},"JWK+":function(t,e){},TFhR:function(t,e,n){"use strict";var s={hostLists:"/index/hotlists",bannerLists:"/index/banner",topLists:"/category/topList",subLists:"/category/subList",rank:"/category/rank",searchLists:"/search/list",details:"/goods/details",deal:"/goods/deal",evaluation:"/goods/evaluation",cartLists:"/cart/list",remove:"/cart/remove",mrremove:"/cart/mrremove",add:"/cart/add",reduce:"/cart/reduce",addressAdd:"/address/add",addressRemove:"/address/remove",addressLists:"/address/list",addressUpdate:"/address/update",addressDefault:"/address/setDefault"};for(var a in s)s[a]="http://rap2api.taobao.org/app/mock/7058"+s[a];e.a=s},"U/rD":function(t,e,n){"use strict";var s={filters:{currency:function(t){var e=(t+="").split(".");return 1===e.length?t+".00":1===e[1].length?t+"0":t}},components:{Footnav:n("n7YN").a}};e.a=s},WHxc:function(t,e){},d7BR:function(t,e){},"gN+L":function(t,e,n){"use strict";n("v2ns");var s=n("gsqX"),a=n.n(s),i={name:"Swipe",props:["lists"],created:function(){},mounted:function(){new a.a(".swiper-container",{autoplay:!0,loop:!0,pagination:{el:".swiper-pagination"}})}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(t){return e("div",{staticClass:"swp-page swiper-slide"},[e("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[e("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])})),this._v(" "),e("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var r=n("VU/8")(i,o,!1,function(t){n("WHxc")},null,null);e.a=r.exports},n7YN:function(t,e,n){"use strict";var s=n("mw3O"),a=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],i=n.n(s).a.parse(window.location.search.substring(1)).index,o={data:function(){return{navConfig:a,curIndex:parseInt(i,10)||0}},methods:{changeNav:function(t,e){location.href=e.href+"?index="+t}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-nav"},[n("ul",t._l(t.navConfig,function(e,s){return n("li",{class:{active:t.curIndex===s},on:{click:function(n){t.changeNav(s,e)}}},[n("a",[n("i",{class:e.icon}),n("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]};var c=n("VU/8")(o,r,!1,function(t){n("4349")},null,null);e.a=c.exports},pI1A:function(t,e){},v2ns:function(t,e){}},["HFfA"]);
//# sourceMappingURL=goods.941cba754e196731239f.js.map