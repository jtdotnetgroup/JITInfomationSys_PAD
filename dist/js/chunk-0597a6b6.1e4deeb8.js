(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0597a6b6"],{"229d":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menus"},[t._l(t.menus,function(e,s){return[e.meta?n("mainItem",{key:s,staticClass:"menuItem",attrs:{path:e.path,icon:e.meta.icon,title:e.meta.title,secTitle:e.meta.secTitle,count:e.meta.count}}):t._e(),3===s?n("br",{key:"br"+s}):t._e()]})],2)},a=[],c=(n("ac6a"),n("cebc")),i=n("2f62"),r={components:{mainItem:function(){return n.e("chunk-40f5f71c").then(n.bind(null,"00c8"))}},data:function(){return{}},methods:Object(c["a"])({},Object(i["b"])({getList:"menus/getList"}),{RefreshTaskQty:function(){this.$store.dispatch("GetAllTaskQty",{StrKey:"*"})},UpdateTaskQty:function(){}}),mounted:function(){this.getList(),this.$nextTick(function(){setInterval(this.RefreshTaskQty,15e3)})},beforeCreate:function(){this.$store.dispatch("GetAllTaskQty",{StrKey:"*"})},created:function(){},computed:{username:function(){return this.$store.state.account.username},menus:function(){var t=this.$store.state.TaskQty.TaskQty,e=this.$store.getters.addRouters.filter(function(t){return!!t.meta});return e.forEach(function(e){t.forEach(function(t){var n=e.meta;n.key===t.strKey&&(e.meta.count=t.total)})}),e}}},u=r,o=(n("64a5"),n("2877")),f=Object(o["a"])(u,s,a,!1,null,"563e9e07",null);e["default"]=f.exports},2606:function(t,e,n){},"64a5":function(t,e,n){"use strict";var s=n("2606"),a=n.n(s);a.a}}]);
//# sourceMappingURL=chunk-0597a6b6.1e4deeb8.js.map