(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229d67"],{dec3:function(t,e,l){"use strict";l.r(e);var i=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{title:t.title,visible:t.AbnormalReport,width:"70%","append-to-body":"true"},on:{"update:visible":function(e){t.AbnormalReport=e}}},[l("el-table",{ref:"multipleTable",attrs:{data:t.tabledata,border:"",stripe:""}},t._l(t.columns,function(t){return l("el-table-column",{key:t.id,attrs:{prop:t.id,label:t.label,width:t.width,type:t.type,align:t.align}})}),1)],1)},a=[],n=(l("ac6a"),l("c4bb")),o=[{id:"LCLCode",label:"拼箱号",width:400,sort:!1,type:""},{id:"icmoInspectBillId",label:"检验单号",sort:!1,type:""},{id:"spelledQty",label:"拼箱数量",width:100,sort:!1,type:""},{id:"lclMxTime",label:"操作日期",width:170,sort:!1,type:""}],d={data:function(){return{title:"拼箱明细",tabledata:[],columns:o,loading:!1,AbnormalReport:!1,LCLCode:""}},methods:{show:function(t){this.AbnormalReport=!0,this.LCLCode=t.LCLCode,this.tabledata=[],this.Detailed(t)},hide:function(){this.AbnormalReport=!1},Detailed:function(t){var e=this,l=this;Object(n["e"])("RemainderLCLMx/GetAll",t).then(function(t){if(200===t.status){var i=t.data.result;null!=i&&i.forEach(function(t){var e={};e.lclMxId=t.lclMxId,e.LCLCode=l.LCLCode,e.icmoInspectBillId=t.icmoInspectBillId,e.spelledQty=t.spelledQty,e.lclMxTime=null===t.lclMxTime?"":l.$moment(t.lclMxTime).format("YYYY-MM-DD HH:mm"),l.tabledata.push(e)})}e.loading=!1}).catch(function(){this.loading=!1})}}},r=d,s=l("2877"),c=Object(s["a"])(r,i,a,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d229d67.9def72c7.js.map