(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a402e"],{"052e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fullscreen"},[a("tableHeader",{staticClass:"header",attrs:{title:e.title,items:e.tabItems},on:{tabChange:e.handelTabChange}}),a("el-row",{directives:[{name:"show",rawName:"v-show",value:"PHYS"===this.tabvalue,expression:"this.tabvalue === 'PHYS'"}],staticStyle:{"background-color":"white",padding:"20px 0px"}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content",staticStyle:{"text-align":"left","padding-left":"15px"}},[a("el-button",{attrs:{type:"success",plain:""},on:{click:e.OpenRemainderLCLMx}},[e._v("选中拼箱")])],1)])],1),a("el-table",{ref:"multipleTable",attrs:{data:e.tabledata,border:"",stripe:""}},[e._l(e.columns,function(e){return a("el-table-column",{key:e.id,attrs:{prop:e.id,label:e.label,width:e.width,type:e.type,align:e.align}})}),a("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.funmenu,function(n){return a("el-button",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"item.show"}],key:n.num,staticStyle:{"text-align":"center"},attrs:{plain:"",round:"",type:n.type},on:{click:function(a){return e.handle(n.num,t.$index,t.row)}}},[e._v(e._s(n.title))])})}}])})],2),a("Paging",{ref:"Paging",attrs:{PageSize:e.pageSize,PageIndex:e.currentPage,TotalNum:e.totalNum},on:{Refresh:e.GetData,RefreshPage:e.RefreshPage}}),a("RemainderLCLMx",{ref:"RemainderLCLMx",on:{addSuccess:e.Refresh}}),a("RemainderLCLRecord",{ref:"RemainderLCLRecord",on:{addSuccess:e.Refresh}})],1)},i=[],l=(a("ac6a"),a("c4bb")),o=[{id:"FBillNo1",label:"选择",width:55,sort:!1,type:"selection",align:"center"},{id:"FBillNo",label:"派工任务单号",width:220,sort:!1,type:""},{id:"FBiller",label:"派工人",width:100,sort:!1,type:""},{id:"FDate",label:"派工日期",width:160,sort:!1,type:""},{id:"FBillNo2",label:"检测单号",sort:!1,type:""},{id:"FItemName",label:"品番",width:180,sort:!1,type:""},{id:"BatchNum",label:"批次号",sort:!1,type:""},{id:"FYSQty",label:"余数",width:80,sort:!1,type:""},{id:"F_102",label:"单位包装数",width:120,sort:!1,type:""},{id:"FInspector",label:"检验人",width:100,sort:!1},{id:"FInspectTime",label:"检验时间",width:160,sort:!1,type:""}],r=[{id:"LCLCode",label:"拼单号",width:400,sort:!1,type:""},{id:"LCLTime",label:"拼单日期",width:160,sort:!1,type:""},{id:"CreateTime",label:"操作日期",width:160,sort:!1,type:""},{id:"Remark",label:"备注",sort:!1,type:""}],s={name:"Stock",data:function(){return{tabledata:[],currentPage:1,pageSize:10,totalNum:0,totalPage:0,columns:o,title:"批号余数",tabvalue:"PHYS",tabItems:[{title:"批号余数",value:"PHYS",count:0,key:"PHYS"},{title:"拼箱记录",value:"PXJL",count:0,key:"PXJL"}],funmenu:[{type:"",num:1,title:"明细",show:!0,ShowWhe:["PXJL"]}]}},components:{RemainderLCLMx:function(){return a.e("chunk-78559821").then(a.bind(null,"6743"))},RemainderLCLRecord:function(){return a.e("chunk-2d229d67").then(a.bind(null,"dec3"))},tableHeader:function(){return a.e("chunk-23968558").then(a.bind(null,"9962"))},Paging:function(){return a.e("chunk-4d2b06d5").then(a.bind(null,"3881"))}},methods:{showmenu:function(){var e=this;this.funmenu.forEach(function(t){t.show=t.ShowWhe.indexOf(e.tabvalue)>=0})},UpdCount:function(){var e=this.$store.state.TaskQty.TaskQty;console.log(e),this.tabItems.forEach(function(t){e.forEach(function(e){t.key===e.strKey&&(t.count=e.total)})})},handle:function(e,t,a){var n={};switch(console.log(t,a),e){case 1:n.RemainderLCLId=a.LCLId,n.LCLCode=a.LCLCode,this.$refs.RemainderLCLRecord.show(n);break;default:break}},OpenRemainderLCLMx:function(){this.$refs.RemainderLCLMx.show(this.$refs.multipleTable.selection)},handelTabChange:function(e){this.tabvalue=e,"PHYS"===this.tabvalue?this.columns=o:this.columns=r,this.currentPage=1,this.Refresh()},sizeChange:function(e){this.currentPage=e,this.Refresh()},currentChange:function(e){this.currentPage=e,this.Refresh()},RefreshPage:function(e){this.currentPage=e.PageIndex},Refresh:function(){"PHYS"===this.tabvalue?this.GetData():"PXJL"===this.tabvalue&&this.GetRemainderLCL(),this.showmenu(),this.UpdCount()},GetData:function(){var e=this,t=this,a=this.$loading({lock:!0,text:"数据加载中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),n={Sorting:"仓库",SkipCount:(this.currentPage-1)*this.pageSize,MaxResultCount:this.pageSize};Object(l["e"])("VM_ICMOInspectBillED/GetAll",n).then(function(n){var i=n.data.result;t.totalNum=i.totalCount;var l=[];i.items.forEach(function(e){var a={};a.FID=e.fid,a.FBillNo1=e.fBillNo,a.FBillNo=e.fBillNo,a.FBiller=e.fName,a.FDate=null===e.fDate?"":t.$moment(e.fDate).format("YYYY-MM-DD HH:mm"),a.FBillNo2=e.fBillNo2,a.BatchNum=e.batchNum,a.FYSQty=e.fysQty,a.FInspector=e.fInspector,a.FInspectTime=null===e.fInspectTime?"":t.$moment(e.fInspectTime).format("YYYY-MM-DD HH:mm"),a.FItemName=e.fItemName,a.F_102=e.f_102,l.push(a)}),e.tabledata=[],e.tabledata=l,e.tabItems.forEach(function(e){e.count=e.value===t.tabvalue?i.totalCount:e.count}),a.close()}).catch(function(){a.close()})},GetRemainderLCL:function(){var e=this,t=this,a=this.$loading({lock:!0,text:"数据加载中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),n={Sorting:"",SkipCount:(this.currentPage-1)*this.pageSize,MaxResultCount:this.pageSize};Object(l["e"])("RemainderLCL/GetAll",n).then(function(n){var i=n.data.result;t.totalNum=i.totalCount;var l=[];i.items.forEach(function(e){var a={};a.LCLId=e.lclId,a.LCLCode=e.lclCode,a.LCLTime=null===e.lclTime?"":t.$moment(e.lclTime).format("YYYY-MM-DD HH:mm"),a.CreateUserId=e.createUserId,a.CreateTime=null===e.createTime?"":t.$moment(e.createTime).format("YYYY-MM-DD HH:mm"),a.Remark=e.remark,l.push(a)}),e.tabledata=[],e.tabledata=l,e.tabItems.forEach(function(e){e.count=e.value===t.tabvalue?i.totalCount:e.count}),a.close()}).catch(function(){a.close()})}},computed:{},mounted:function(){this.Refresh()}},c=s,u=a("2877"),d=Object(u["a"])(c,n,i,!1,null,"af1ec83a",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0a402e.2fa5012f.js.map