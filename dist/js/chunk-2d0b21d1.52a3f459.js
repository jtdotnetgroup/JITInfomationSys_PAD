(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b21d1"],{2371:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fullscreen"},[n("tableHeader",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"header",attrs:{title:e.tableHeader.title,items:e.tableHeader.tabItems}}),n("el-table",{attrs:{data:e.DataSource,border:"",stripe:""}},[e._l(e.column,function(e){return n("el-table-column",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],key:e.id,attrs:{prop:e.id,label:e.label,width:e.width,align:e.align}})}),n("el-table-column",{attrs:{label:"操作",fixed:"right",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.funmenu,function(i){return n("el-button",{directives:[{name:"show",rawName:"v-show",value:i.show&&"已检验"!==t.row.FStatus||"打印"===i.title,expression:"item.show && (scope.row.FStatus!=='已检验')||item.title==='打印'"}],key:i.num,staticStyle:{"text-align":"center"},attrs:{plain:"",round:"",type:i.type},on:{click:function(n){return e.Handle(i.num,t.$index,t.row)}}},[e._v(e._s(i.title))])})}}])})],2),n("printLabelSelect",{ref:"printLabelSelect"})],1)},a=[],l=(n("ac6a"),n("c4bb")),r=[{id:"FBillNo",label:"检验单号",width:200,sort:!1,align:"center"},{id:"Step",label:"工序",width:80,sort:!1,align:"center"},{id:"BatchNum",label:"批次号",width:200,sort:!1,align:"center"},{id:"FStatus",label:"状态",width:100,sort:!1,align:"center"},{id:"FAuxQty",label:"汇报数",width:100,sort:!1,align:"center"},{id:"FCheckAuxQty",label:"检验数",width:100,sort:!1,align:"center"},{id:"FPassAuxQty",label:"合格数",width:100,sort:!1,align:"center"},{id:"FFailAuxQty",label:"不合格",width:100,sort:!1,align:"center"},{id:"FYSQty",label:"余数",width:100,sort:!1,align:"center"},{id:"FBillTime",label:"汇报日期",width:170,sort:!1,align:"center"},{id:"FInspector",label:"检验员",width:100,sort:!1,align:"center"},{id:"FInspectTime",label:"检验时间",width:170,sort:!1,align:"center"},{id:"FNote",label:"说明",sort:!1,align:"center"}],o={data:function(){return{tableHeader:{title:"质量检验明细",tabItems:[{title:"质量检验明细列表",value:"receive",count:0}]},tabvalue:"receive",loading:!1,column:r,funmenu:[{type:"",num:0,title:"质检明细",show:!0,ShowWhe:["report"]},{type:"",num:1,title:"打印",show:!0,ShowWhe:["report"]}],DataSource:[]}},components:{tableHeader:function(){return n.e("chunk-9e626158").then(n.bind(null,"9962"))},printLabelSelect:function(){return n.e("chunk-c75efa72").then(n.bind(null,"288b"))}},methods:{ShowLod:function(){this.loading=!0},HideLod:function(){this.loading=!1},ShowMenu:function(){this.funmenu.forEach(function(e){e.show=e.ShowWhe.indexOf("1")>=0})},Handle:function(e,t,n){var i=this,a=n;switch(console.log(t,n),a.Step=this.$route.query.Step,a.FItemID=this.$route.query.FItemID,a.FOperID=this.$route.query.FOperID,a.FBillNo=n.FBillNo,a.F_102=this.$route.query.F_102,a.BatchNum=n.BatchNum,e){case 0:i.$router.push({name:"IPQCReport",query:a});break;case 1:this.Printing(a);break;default:break}},Printing:function(e){this.$refs.printLabelSelect.getData(e)},GetDataSource:function(e){var t=this,n=this;n.ShowLod();var i="ICMOInspectBill/GetList";Object(l["e"])(i,e).then(function(e){if(e.data.success){var i=[],a=e.data.result,l=t.$route.query.Step;a.forEach(function(e){var t={};t.Step=l,t.FBillNo=e.fBillNo,t.FStatus=1===e.fStatus?"已检验":"待检验",t.FAuxQty=e.fAuxQty,t.FCheckAuxQty=e.fCheckAuxQty,t.FPassAuxQty=e.fPassAuxQty,t.FFailAuxQty=e.fFailAuxQty,t.FYSQty=e.fysQty,t.FBillTime=null===e.fBillTime?"":n.$moment(e.fBillTime).format("YYYY-MM-DD HH:mm"),t.FInspector=e.fInspector,t.FInspectTime=null===e.fInspectTime?"":n.$moment(e.fInspectTime).format("YYYY-MM-DD HH:mm"),t.FNote=e.fNote,t.FID=e.fid,t.BatchNum=e.batchNum,i.push(t)}),n.DataSource=i,n.tableHeader.tabItems.forEach(function(e){console.log(e.value),e.count=e.value===n.tabvalue?i.length:e.count})}n.HideLod()}).catch(function(){n.HideLod()})}},mounted:function(){this.GetDataSource({ICMODispBillID:this.$route.query.FID})}},u=o,s=n("2877"),c=Object(s["a"])(u,i,a,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b21d1.52a3f459.js.map