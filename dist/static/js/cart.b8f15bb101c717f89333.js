webpackJsonp([4],{"0C+S":function(t,e){},4349:function(t,e){},NW8W:function(t,e){},TFhR:function(t,e,i){"use strict";var n={hostLists:"/index/hotlists",bannerLists:"/index/banner",topLists:"/category/topList",subLists:"/category/subList",rank:"/category/rank",searchLists:"/search/list",details:"/goods/details",deal:"/goods/deal",evaluation:"/goods/evaluation",cartLists:"/cart/list",remove:"/cart/remove",mrremove:"/cart/mrremove",add:"/cart/add",reduce:"/cart/reduce",addressAdd:"/address/add",addressRemove:"/address/remove",addressLists:"/address/list",addressUpdate:"/address/update",addressDefault:"/address/setDefault"};for(var o in n)n[o]="http://rap2api.taobao.org/app/mock/7058"+n[o];e.a=n},"U/rD":function(t,e,i){"use strict";var n={filters:{currency:function(t){var e=(t+="").split(".");return 1===e.length?t+".00":1===e[1].length?t+"0":t}},components:{Footnav:i("n7YN").a}};e.a=n},eC21:function(t,e){},gWPi:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("mvHQ"),o=i.n(n),s=(i("NW8W"),i("0C+S"),i("eC21"),i("7+uW")),r=i("TFhR"),c=i("U/rD"),a=(i("mtWM"),i("9qgI")),u=i.n(a),d=i("Zrlr"),h=i.n(d),f=i("wxAW"),l=i.n(f),g=i("wI4f"),m=function(){function t(){h()(this,t)}return l()(t,null,[{key:"add",value:function(t){return Object(g.a)(r.a.add,{id:t,number:1})}},{key:"reduce",value:function(t){return Object(g.a)(r.a.reduce,{id:t,number:-1})}},{key:"remove",value:function(t){return Object(g.a)(r.a.remove,{id:t})}},{key:"mrremove",value:function(t){return Object(g.a)(r.a.mrremove,{ids:ids})}},{key:"getCartLists",value:function(){return Object(g.a)(r.a.cartLists)}}]),t}();new s.default({el:"#app",data:{cartLists:null,total:0,totalNum:"",editingShop:null,editingShopIndex:-1,removePopup:!1,removeData:null,removeMsg:"确定要删除该商品么?",isDeleted:-1},created:function(){this.getLists()},computed:{allSelect:{get:function(){return!(!this.cartLists||!this.cartLists.length)&&this.cartLists.every(function(t){return t.checked})},set:function(t){return this.cartLists&&this.cartLists.length&&this.cartLists.forEach(function(e){e.checked=t,e.goodsList.forEach(function(e){e.checked=t})}),!1}},selectList:function(){if(this.cartLists&&this.cartLists.length){var t=[],e=0;return this.cartLists.forEach(function(i){i.goodsList.forEach(function(i){i.checked&&(t.push(i),e+=i.price*i.number)})}),this.total=e,"[]"!==o()(t)?this.totalNum="("+t.length+")":this.totalNum="",t}return[]},allRemoveSelect:{get:function(){return!!this.editingShop&&this.editingShop.goodsList.every(function(t){return t.removeChecked})},set:function(t){this.editingShop&&(this.editingShop.removeChecked=t,this.editingShop.goodsList.forEach(function(e){e.removeChecked=t}))}},removeList:function(){if(this.editingShop){var t=[];return this.editingShop.goodsList.forEach(function(e){e.removeChecked&&t.push(e)}),t}return[]},filterNumber:function(){return!!this.editingShop&&this.editingShop.goodsList.map(function(t){return(t.number+"").split("").forEach(function(e){for(var i=!1,n=0;n<10;n++)if(n+""===e){i=!0;break}i||(t.number=1)}),t.number<1&&(t.number=1),t})}},methods:{getLists:function(){var t=this;m.getCartLists().then(function(e){var i=e.data.cartList;i.forEach(function(t){t.checked=!0,t.editingStatus=!1,t.editingMsg="编辑",t.removeChecked=!1,t.goodsList.forEach(function(t){t.checked=!0,t.removeChecked=!1,t.touchDelete=!1})}),t.cartLists=i})},goodSelect:function(t,e){var i=t.editingStatus?"removeChecked":"checked";e[i]=!e[i],t[i]=t.goodsList.every(function(t){return t[i]})},shopSelect:function(t,e){var i=t.editingStatus?"removeChecked":"checked";t[i]=!t[i],t.goodsList.forEach(function(e){e[i]=t[i]})},selectAll:function(){this.editingShop?this.allRemoveSelect=!this.allRemoveSelect:this.allSelect=!this.allSelect},editingSwitch:function(t,e){var i=this;t.editingStatus=!t.editingStatus,t.editingStatus&&t.goodsList.forEach(function(t,n){t.touchDelete&&(t.touchDelete=!1,i.$refs["goods-"+e+"-"+n][0].style.left="0px")}),t.editingMsg=t.editingStatus?"完成":"编辑",this.editingShop=t.editingStatus?t:null,this.editingShopIndex=t.editingStatus?e:-1,this.cartLists.forEach(function(i,n){n!==e&&(i.editingMsg=t.editingStatus?"":"编辑")})},removeSingelGood:function(t,e,i,n){this.removePopup=!0,this.removeData={good:t,goodIndex:e,shop:i,shopIndex:n},this.removeMsg="确定要删除该商品么?"},removeConfirm:function(){var t=this;if(this.removePopup=!1,"确定要删除该商品么?"===this.removeMsg){var e=this.removeData,i=e.good,n=e.goodIndex,o=e.shop,s=e.shopIndex;m.remove(i.id).then(function(e){o.goodsList.splice(n,1),o.goodsList.length||(t.cartLists.splice(s,1),t.removeComplete())})}else{var r=[];this.editingShop.goodsList.forEach(function(t){t.removeChecked&&r.push(t.id)}),m.mrremove(r).then(function(e){var i=[];t.editingShop.goodsList.forEach(function(t){t.removeChecked||i.push(t)}),t.editingShop.goodsList=i,i.length||(t.cartLists.splice(t.editingShopIndex,1),t.removeComplete())})}},removeComplete:function(){this.editingShop=null,this.editingShopIndex=-1,this.cartLists.forEach(function(t){t.editingMsg="编辑",t.editingStatus=!1})},removeGoods:function(){this.removePopup=!0;var t=this.removeList;this.removeMsg="确认删除所选的"+t.length+"个商品?"},addGood:function(t,e){m.add(t.id).then(function(e){t.number++})},reduceGood:function(t,e){1!==t.number&&m.reduce(t.id).then(function(e){t.number--})},start:function(t,e){e.startX=t.changedTouches[0].clientX},end:function(t,e,i,n,o){var s=this,r=t.changedTouches[0].clientX,c="0px";e.startX-r>100?(e.touchDelete=!0,c="-60px",u()(this.$refs["goods-"+n+"-"+i],{left:c}),o.goodsList.forEach(function(t,e){t.touchDelete&&e!==i&&(t.touchDelete=!1,u()(s.$refs["goods-"+n+"-"+e],{left:"0px"}))})):r-e.startX>100&&(e.touchDelete=!1,c="0px",u()(this.$refs["goods-"+n+"-"+i],{left:c}))}},mixins:[c.a]})},n7YN:function(t,e,i){"use strict";var n=i("mw3O"),o=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],s=i.n(n).a.parse(window.location.search.substring(1)).index,r={data:function(){return{navConfig:o,curIndex:parseInt(s,10)||0}},methods:{changeNav:function(t,e){location.href=e.href+"?index="+t}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bottom-nav"},[i("ul",t._l(t.navConfig,function(e,n){return i("li",{class:{active:t.curIndex===n},on:{click:function(i){t.changeNav(n,e)}}},[i("a",[i("i",{class:e.icon}),i("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]};var a=i("VU/8")(r,c,!1,function(t){i("4349")},null,null);e.a=a.exports},wI4f:function(t,e,i){"use strict";var n=i("//Fk"),o=i.n(n),s=i("mtWM"),r=i.n(s);e.a=function(t,e){return new o.a(function(i,n){r.a.post(t,e).then(function(t){t.data.status,i(t)}).catch(function(t){n(t)})})}}},["gWPi"]);
//# sourceMappingURL=cart.b8f15bb101c717f89333.js.map