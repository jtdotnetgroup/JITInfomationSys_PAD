(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8ed199c"],{7882:function(t,i,e){},c86d:function(t,i,e){"use strict";var n=e("7882"),o=e.n(n);o.a},ee6e:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{title:t.FromStyle.title,visible:t.dialogVisible,width:t.FromStyle.width,"before-close":t.handleClose},on:{"update:visible":function(i){t.dialogVisible=i}}},[e("el-row",{staticStyle:{padding:"20px 0px"}},[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"grid-content"},[e("div",{staticClass:"demo-input-suffix",staticStyle:{"line-height":"40px","font-size":"20px","text-align":"left"}},[t._v("\n          派工单号：\n          "),e("span",{staticClass:"color_red"},[t._v(t._s(t.from.派工单号))]),t._v("\n          ，设备："+t._s(t.from.设备)+"，产品名称："+t._s(t.from.产品名称)+"，工序："+t._s(t.from.工序)+"，派工数：\n          "),e("span",{staticClass:"color_red"},[t._v(t._s(t.from.派工数量))])])])]),e("el-col",{attrs:{span:10}},[e("div",{staticClass:"grid-content",staticStyle:{"text-align":"right","padding-right":"15px"}})])],1),e("el-table",{attrs:{data:t.DataSource,border:"",stripe:""}},[t._l(t.column,function(t){return e("el-table-column",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],key:t.id,attrs:{prop:t.id,label:t.label,width:t.width}})}),e("el-table-column",{attrs:{label:"操作",fixed:"right",width:"200"},scopedSlots:t._u([{key:"default",fn:function(i){return t._l(t.funmenu,function(n){return e("el-button",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"item.show"}],key:n.num,attrs:{plain:"",round:"",type:n.type},on:{click:function(e){return t.Handle(n.num,i.$index,i.row)}}},[t._v(t._s(n.title))])})}}])})],2),e("div",{staticStyle:{"text-align":"right","padding-top":"30px"}},[e("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"请输入批次号"},model:{value:t.from.BatchNum,callback:function(i){t.$set(t.from,"BatchNum",i)},expression:"from.BatchNum"}},[e("template",{slot:"prepend"},[t._v("批次号")])],2),e("i",{staticClass:"el-icon-minus icon",on:{click:function(i){t.from.HB--}}}),e("span",{staticClass:"icon",on:{click:function(i){return t.DigitalOpen()}}},[t._v(t._s(t.from.HB))]),e("i",{staticClass:"el-icon-plus icon",on:{click:function(i){t.from.HB++}}}),e("el-button",{attrs:{type:"danger"},on:{click:function(i){return t.onSubmit()}}},[t._v("汇报")]),e("el-button",{on:{click:function(i){t.dialogVisible=!1}}},[t._v("取消")])],1),e("Digital",{ref:"Digital",on:{DigitalCallback:t.DigitalCallback}}),e("HBPC",{ref:"HBPC",on:{addSuccess:t.GetDataSource}})],1)},o=[],a=(e("ac6a"),e("c4bb")),l=[{id:"fBillNo",label:"检验单号",width:200,sort:!1},{id:"FStatus",label:"状态",width:90,sort:!1},{id:"BatchNum",label:"批次号",width:200,sort:!1},{id:"FAuxQty",label:"汇报数",width:90,sort:!1},{id:"FCheckAuxQty",label:"检验数",width:90,sort:!1},{id:"FPassAuxQty",label:"合格数",width:90,sort:!1},{id:"FFailAuxQty",label:"不合格",width:90,sort:!1},{id:"FBillTime",label:"汇报日期",width:160,sort:!1},{id:"FInspector",label:"检验员",width:100,sort:!1},{id:"FInspectTime",label:"检验时间",width:160,sort:!1},{id:"FNote",label:"说明",sort:!1}],s={components:{Digital:function(){return e.e("chunk-2d0be698").then(e.bind(null,"2fc1"))},HBPC:function(){return e.e("chunk-2d2080f4").then(e.bind(null,"a2d1"))}},data:function(){return{from:{FID:"",HB:0,"工序":"","设备":"","产品名称":"","派工":0,"派工单号":"",BatchNum:""},loading:!1,column:l,FromStyle:{width:"80%",title:"汇报明细"},dialogVisible:!1,funmenu:[{type:"",num:0,title:"修改",show:!0},{type:"",num:1,title:"删除",show:!0}],DataSource:[]}},methods:{DigitalCallback:function(t){this.from.HB=t.num,this.$refs.Digital.hide()},DigitalOpen:function(){var t={width:"30%",num:this.from.HB,title:"汇报数",placeholder:"当前数量"+this.from.HB,key:1};this.$refs.Digital.show(t)},handleClose:function(){this.Hide()},Show:function(t){this.dialogVisible=!0,this.from.FID=t.fid,this.from.工序=t.工序,this.from.设备=t.设备,this.from.派工单号=t.派工单号,this.from.派工数量=t.派工数量,this.from.产品名称=t.产品名称,this.GetDataSource()},Hide:function(){this.dialogVisible=!1},ShowLod:function(){this.loading=!0},HideLod:function(){this.loading=!1},ShowMenu:function(){this.funmenu.forEach(function(t){t.show=t.ShowWhe.indexOf("1")>=0})},Handle:function(t,i,e){var n=this,o=this,l={};switch(t){case 0:l={FID:e.fid,num:e.FAuxQty,BatchNum:e.BatchNum,fBillNo:e.fBillNo},o.$refs.HBPC.show(l);break;case 1:this.$confirm("确定要删除该汇报记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.ShowLod(),Object(a["c"])("ICMOInspectBill/Delete",{FID:e.Fid}).then(function(t){var i=t.data;i.success?(o.GetDataSource(n.from),n.$message.success("删除成功")):n.$message.error("删除失败，请稍后重试"),o.HideLod()}).catch(function(){o.HideLod()})}).catch(function(){n.HideLod()});break;default:break}},onSubmit:function(){var t=this,i=this;0!==i.from.BatchNum.length?this.$confirm("确认汇报该数量吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={ICMODispBillID:i.from.FID,FAuxQty:i.from.HB,BatchNum:i.from.BatchNum};i.ShowLod(),Object(a["a"])("ICMOInspectBill/Create",e).then(function(e){e.data.success&&(t.$notify({title:"系统提示",message:"添加汇报成功",type:"success"}),i.from.HB=0,i.from.BatchNum="",i.Hide(),i.$emit("addSuccess"))}).catch(function(){})}).catch(function(){}):this.$message.error("批次号不能为空！")},GetDataSource:function(){var t=this,i={ICMODispBillID:this.from.FID};t.ShowLod();var e="ICMOInspectBill/GetList";Object(a["f"])(e,i).then(function(i){if(i.data.success){var e=[];i.data.result.forEach(function(i){var n={};n.fBillNo=i.fBillNo,n.FStatus=0===i.fStatus?"未完成":"已完成",n.FAuxQty=i.fAuxQty,n.FCheckAuxQty=i.fCheckAuxQty,n.FPassAuxQty=i.fPassAuxQty,n.FFailAuxQty=i.fFailAuxQty,n.FBillTime=t.$moment(i.fBillTime).format("YYYY-MM-DD hh:mm"),n.FInspector=i.fInspector,n.FInspectTime=null===i.fInspectTime?"":t.$moment(i.fInspectTime).format("YYYY-MM-DD hh:mm"),n.FNote=i.fNote,n.Fid=i.fid,n.BatchNum=i.batchNum,e.push(n)}),t.DataSource=e}t.HideLod()}).catch(function(){t.HideLod()})}},mounted:function(){}},c=s,r=(e("c86d"),e("2877")),u=Object(r["a"])(c,n,o,!1,null,null,null);i["default"]=u.exports}}]);
//# sourceMappingURL=chunk-f8ed199c.c521e301.js.map