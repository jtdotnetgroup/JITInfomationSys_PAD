(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0abc18"],{1740:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("el-dialog",{attrs:{title:"领料",visible:t.Picking,width:"30%"},on:{"update:visible":function(n){t.Picking=n}}},[i("el-form",{ref:"form",attrs:{model:t.form}},[i("el-form-item",{staticStyle:{"text-align":"right"}},[i("el-button",{on:{click:function(n){return t.onSubmit("BC")}}},[t._v("保存")]),i("el-button",{on:{click:function(n){t.Picking=!1}}},[t._v("取消")])],1)],1)],1)},o=[],c=i("c4bb"),l={data:function(){return{Picking:!1,form:{}}},methods:{show:function(t){this.Picking=!0,this.Detailed(t)},hide:function(){this.Picking=!1},onSubmit:function(t){switch(t){default:break}},Detailed:function(t){Object(c["e"])("ICException/Get",t).then(function(t){if(console.log(t),200===t.status){console.log(200);t.data.result}},function(t){console.log("error")})}}},u=l,r=i("2877"),s=Object(r["a"])(u,e,o,!1,null,null,null);n["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0abc18.6be4ffd0.js.map