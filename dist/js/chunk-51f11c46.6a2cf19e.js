(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51f11c46"],{1346:function(t,e,n){},"229d":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menus"},[t._l(t.menus,function(e,s){return[e.meta?n("mainItem",{key:s,staticClass:"menuItem",attrs:{path:e.path,icon:e.meta.icon,title:e.meta.title,secTitle:e.meta.secTitle,count:e.meta.count}}):t._e(),3===s?n("br",{key:"br"+s}):t._e()]})],2)},c=[],a=(n("ac6a"),n("cebc")),i=n("2f62"),r={components:{mainItem:function(){return n.e("chunk-ecc0b160").then(n.bind(null,"00c8"))}},data:function(){return{}},methods:Object(a["a"])({},Object(i["b"])({getList:"menus/getList"}),{RefreshTaskQty:function(){this.$store.dispatch("GetAllTaskQty",{StrKey:"*"}),console.log("s")},UpdateTaskQty:function(){}}),mounted:function(){this.getList(),this.$nextTick(function(){setInterval(this.RefreshTaskQty,15e3)})},beforeCreate:function(){this.$store.dispatch("GetAllTaskQty",{StrKey:"*"})},created:function(){},computed:{username:function(){return this.$store.state.account.username},menus:function(){var t=this.$store.state.TaskQty.TaskQty,e=this.$store.getters.addRouters.filter(function(t){return!!t.meta});return e.forEach(function(e){t.forEach(function(t){var n=e.meta;n.key===t.strKey&&(e.meta.count=t.total)})}),e}}},u=r,o=(n("4d60"),n("2877")),f=Object(o["a"])(u,s,c,!1,null,"a53c2872",null);e["default"]=f.exports},"4d60":function(t,e,n){"use strict";var s=n("1346"),c=n.n(s);c.a}}]);
//# sourceMappingURL=chunk-51f11c46.6a2cf19e.js.map