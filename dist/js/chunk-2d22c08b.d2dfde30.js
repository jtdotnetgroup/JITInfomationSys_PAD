(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c08b"],{f209:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"fullscreen"},[n("tableHeader",{staticClass:"header",attrs:{title:e.title,items:e.tabItems},on:{tabChange:e.handelTabChange}}),n("el-table",{attrs:{data:e.tabledata,border:"",stripe:""}},[e._l(e.columnHeader,function(e){return n("el-table-column",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],key:e.id,attrs:{prop:e.id,align:e.align,label:e.label,width:e.width,sortable:e.sort}})}),n("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.funmenu,function(a){return n("el-button",{directives:[{name:"show",rawName:"v-show",value:a.show,expression:"item.show"}],key:a.num,staticStyle:{"text-align":"center"},attrs:{plain:"",round:"",type:a.type},on:{click:function(n){return e.handle(a.num,t.$index,t.row)}}},[e._v(e._s(a.title))])})}}])})],2),n("Paging",{ref:"Paging",attrs:{PageSize:e.pageSize,PageIndex:e.currentPage,TotalNum:e.totalNum},on:{Refresh:e.GetData,RefreshPage:e.RefreshPage}}),n("OpenWork",{ref:"OpenWork",on:{addSuccess:e.GetData}}),n("AbnormalReportList",{ref:"AbnormalReportList",on:{addSuccess:e.GetData}}),n("Picking",{ref:"Picking",on:{addSuccess:e.GetData}}),n("Report",{ref:"Report",on:{addSuccess:e.GetData}}),n("ReportDetailed",{ref:"ReportDetailed",on:{addSuccess:e.GetData}})],1)},i=[],r=(n("ac6a"),n("c4bb")),l={receive:[{id:"派工单号",label:"派工单号",width:220,sort:!0,align:"center"},{id:"设备",label:"设备",width:120,sort:!0,align:"center"},{id:"班次",label:"班次",width:120,sort:!0,align:"center"},{id:"生产日期",label:"生产日期",width:120,sort:!0,align:"center"},{id:"制单日期",label:"制单日期",width:120,sort:!0,align:"center"},{id:"产品名称",label:"产品",width:220,sort:!0,align:"center"},{id:"工序",label:"工序",width:120,sort:!0,align:"center"},{id:"计划开工/完工",label:"计划开工/完工",sort:!0,align:"center"},{id:"派工",label:"派工",width:120,sort:!0,align:"center"}],report:[{id:"派工单号",label:"派工单号",width:250,sort:!0,align:"center"},{id:"设备",label:"设备",width:120,sort:!0,align:"center"},{id:"班次",label:"班次",width:120,sort:!0,align:"center"},{id:"生产日期",label:"生产日期",width:120,sort:!0,align:"center",sortable:!0},{id:"制单日期",label:"制单日期",width:120,sort:!0,align:"center"},{id:"产品名称",label:"产品",width:220,sort:!0,align:"center"},{id:"工序",label:"工序",sort:!0,align:"center"},{id:"派工",label:"派工数",width:120,sort:!0,align:"center"},{id:"汇报",label:"汇报数",width:120,sort:!0,align:"center"},{id:"合格",label:"合格",width:120,sort:!0,align:"center"},{id:"不合格",label:"不合格",width:120,sort:!0,align:"center"}]},o=l,s={name:"DispatchedWork",data:function(){return{fullscreenLoading:!1,title:"派工任务",tabItems:[{title:"待开工",value:"receive",count:0,key:"PGRW"},{title:"待汇报",value:"report",count:0,key:"PGRWDHB"}],tabledata:[],currentPage:1,pageSize:20,totalNum:0,tabvalue:"receive",tableColumns:o,funmenu:[{type:"",num:1,title:"领料",show:!0,ShowWhe:["receive"]},{type:"primary",num:2,title:"开工",show:!0,ShowWhe:["receive"]},{type:"danger",num:3,title:"异常",show:!1,ShowWhe:["report","receive"]},{type:"",num:4,title:"汇报",show:!0,ShowWhe:["report"]}]}},components:{tableHeader:function(){return n.e("chunk-9e626158").then(n.bind(null,"9962"))},OpenWork:function(){return n.e("chunk-9e5c59a2").then(n.bind(null,"ea4b"))},AbnormalReportList:function(){return n.e("chunk-1f2e69a9").then(n.bind(null,"f649"))},Picking:function(){return n.e("chunk-2d0abc18").then(n.bind(null,"1740"))},Report:function(){return n.e("chunk-2d0a3183").then(n.bind(null,"015a"))},ReportDetailed:function(){return n.e("chunk-f8ed199c").then(n.bind(null,"ee6e"))},Paging:function(){return n.e("chunk-3f472d77").then(n.bind(null,"3881"))}},methods:{UpdCount:function(){var e=this.$store.state.TaskQty.TaskQty;this.tabItems.forEach(function(t){e.forEach(function(e){t.key===e.strKey&&(t.count=e.total)})})},RefreshPage:function(e){this.currentPage=e.PageIndex},Refresh:function(){this.GetData()},handle:function(e,t,n){var a=this,i=this,l={};switch(console.log(t,n),e){case 0:l={FFinishAuxQty:1*n.汇报,FID:n.FID},i.$refs.Report.show(l);break;case 1:l={id:0},i.$refs.Picking.show(l);break;case 2:this.$confirm("是否确认开工?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.fullscreenLoading=!0,Object(r["b"])("ICMODispBill/OpenWork",{FID:n.FID}).then(function(e){e.data.success?(a.$message({message:"标记开工成功",type:"success"}),i.GetData()):(a.$message.error("标记开工失败"),setTimeout(function(){},2e3))}).catch(function(){setTimeout(function(){},2e3)}).finally(function(){setTimeout(function(){i.fullscreenLoading=!1},2e3),i.$store.dispatch("GetAllTaskQty",{StrKey:"*"}),i.UpdCount()})}).catch(function(){});break;case 3:l={FID:n.FID,FSrcID:n.FSrcID},i.$refs.AbnormalReportList.Show(l);break;case 4:i.$refs.ReportDetailed.Show(n);break;default:break}},handelTabChange:function(e){this.tabvalue=e,this.showmenu(),this.GetData()},sizeChange:function(e){},currentChange:function(e){},GetData:function(){var e=this,t=this;t.tabledata=[];var n={"操作者":"1",FStatus:"receive"===this.tabvalue?0:1,FClosed:null,Sorting:"FClosed",SkipCount:(this.currentPage-1)*this.pageSize,MaxResultCount:this.pageSize},a=this.$loading({lock:!0,text:"数据加载中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});Object(r["e"])("VW_MODispBillList/GetAll",n).then(function(n){n.success;var a=n.data.result;e.totalNum=a.totalCount;var i=[];a.items.forEach(function(t){var n={};n.fTranType=t.fTranType,n.派工单号=t.派工单号,n.设备=t.设备,n.产品名称=t.产品名称,n.产品名称=t.产品名称,n.规格型号=t.规格型号,n.工序=t.工序,n.生产日期=e.$moment(t.生产日期).format("YYYY-MM-DD"),n.制单日期=e.$moment(t.fBillTime).format("YYYY-MM-DD"),n.派工=t.派工数量,n.汇报=t.汇报数量,n.合格=t.合格数量,n.不合格=t.不合格数量,n.FID=t.fid,n.FSrcID=t.fsrcID,n.班次=t.班次,i.push(n)}),e.tabledata=i,e.tabItems.forEach(function(e){e.count=e.value===t.tabvalue?a.totalCount:e.count})}).catch(function(){}).finally(function(){a.close()})},TestData:function(){var e={fTranType:1,"派工单号":3213,"设备":4132431,"产品名称":4321};e.产品名称=432,e.规格型号=5234,e.工序=5364,e.生产日期=7654,e.派工=7654,e.汇报=7654,e.FID=7654,e.FSrcID=5634,this.tabledata.push(e)},showmenu:function(){var e=this;this.funmenu.forEach(function(t){t.show=t.ShowWhe.indexOf(e.tabvalue)>=0})}},created:function(){this.UpdCount()},mounted:function(){this.GetData(),this.showmenu()},computed:{columnHeader:function(){switch(this.tabvalue){case"receive":return this.tableColumns.receive;case"report":return this.tableColumns.report;default:return""}}},watch:{}},c=s,u=n("2877"),d=Object(u["a"])(c,a,i,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d22c08b.d2dfde30.js.map