(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c1c2104"],{"141c":function(t,e,l){"use strict";l.r(e);var o=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"fullscreen"},[l("tableHeader",{staticClass:"header",attrs:{title:t.title,items:t.tabItems},on:{tabChange:t.handelTabChange}}),l("el-row",{staticStyle:{"background-color":"white",padding:"20px 0px"}},[l("el-col",{attrs:{span:2}},[l("div",{staticClass:"grid-content"},[l("div",{staticClass:"demo-input-suffix",staticStyle:{"line-height":"40px","font-size":"20px"}},[t._v("检验单号：")])])]),l("el-col",{attrs:{span:4}},[l("div",{staticClass:"grid-content"},[l("div",{staticClass:"demo-input-suffix"},[l("el-input",{attrs:{disabled:"disabled",placeholder:"请输检验单号"},model:{value:this.$route.query.FBillNo,callback:function(e){t.$set(this.$route.query,"FBillNo",e)},expression:" this.$route.query.FBillNo"}})],1)])]),l("el-col",{attrs:{span:2}},[l("div",{staticClass:"grid-content"},[l("div",{staticClass:"demo-input-suffix",staticStyle:{"line-height":"40px","font-size":"20px"}},[t._v("工序：")])])]),l("el-col",{attrs:{span:4}},[l("div",{staticClass:"grid-content"},[l("div",{staticClass:"demo-input-suffix"},[l("el-input",{attrs:{disabled:"disabled",placeholder:"请输入工序"},model:{value:t.from.Step,callback:function(e){t.$set(t.from,"Step",e)},expression:"from.Step"}})],1)])]),l("el-col",{attrs:{span:2}},[l("div",{staticClass:"grid-content"},[l("div",{staticClass:"demo-input-suffix",staticStyle:{"line-height":"40px","font-size":"20px"}},[t._v("批号：")])])]),l("el-col",{attrs:{span:4}},[l("div",{staticClass:"grid-content"},[l("div",{staticClass:"demo-input-suffix"},[l("el-input",{attrs:{disabled:"disabled",placeholder:"请输入批号"},model:{value:t.from.BatchNum,callback:function(e){t.$set(t.from,"BatchNum",e)},expression:"from.BatchNum"}})],1)])]),l("el-col",{attrs:{span:6}},[l("div",{staticClass:"grid-content",staticStyle:{"text-align":"right","padding-right":"15px"}},[l("el-button",{attrs:{plain:""},on:{click:t.Cancel}},[t._v("取消")]),l("el-button",{attrs:{type:"success",plain:""},on:{click:t.OnSubmit}},[t._v("提交")])],1)])],1),l("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"bbtbt",attrs:{gutter:0}},t._l(t.AllCol,function(e,o){return l("el-col",{key:o,staticClass:"btbt",staticStyle:{overflow:"auto","max-height":"70vh"},attrs:{span:8}},[l("div",{staticClass:"grid-content"},[l("el-row",{staticClass:"text-bule",attrs:{gutter:0}},[l("el-col",{attrs:{span:12}},[l("div",{staticClass:"grid-content btt btr"},[t._v(t._s(e.title1))])]),l("el-col",{attrs:{span:12}},[l("div",{staticClass:"grid-content btt"},[t._v(t._s(e.title2))])])],1)],1),t._l(e.Col,function(e,o){return l("div",{key:o,staticClass:"grid-content"},[l("el-row",{class:o%2==0?"text-gray":"text-white",attrs:{gutter:0}},[l("el-col",{attrs:{span:12}},[l("div",{class:o%2==0?"grid-content bt btr":"grid-content bt btrw",style:"color:"+e.typecolor},[t._v(t._s(e.type))])]),l("el-col",{attrs:{span:12}},[l("div",{staticClass:"grid-content bt"},[l("i",{directives:[{name:"show",rawName:"v-show",value:e.IsAddDel,expression:"item.IsAddDel"}],staticClass:"el-icon-minus icon",on:{click:function(l){return t.DelNum(e.key)}}}),l("span",{style:"color:"+e.numcolor,attrs:{id:e.key},on:{click:function(l){return t.DigitalOpen(e,e.IsAddDel)}}},[t._v(t._s(e.num))]),l("i",{directives:[{name:"show",rawName:"v-show",value:e.IsAddDel,expression:"item.IsAddDel"}],staticClass:"el-icon-plus icon",on:{click:function(l){return t.AddNum(e.key)}}})])])],1)],1)})],2)}),1),l("Digital",{ref:"Digital",on:{DigitalCallback:t.DigitalCallback}})],1)},i=[],n=(l("ac6a"),l("c4bb")),a={name:"IPQC",data:function(){return{loading:!1,title:"质检汇报",tabItems:[{title:"质检汇报",value:"ZJHB",count:0}],tabvalue:"ZJHB",from:{FID:0,FBillNo:"",FItemID:0,Step:"",BatchNum:"","汇报数":0,FOperID:0},AllCol:[{ColKey:"col1",title1:"项目",title2:"数量",Col:[{key:"FAuxQty",type:"汇报数",num:0,typecolor:"back",numcolor:"back",IsAddDel:!1},{key:"FCheckAuxQty",type:"检验数",num:0,typecolor:"back",numcolor:"back",IsAddDel:!0},{key:"FPassAuxQty",type:"合格数",num:0,typecolor:"back",numcolor:"back",IsAddDel:!1},{key:"FFailAuxQty",type:"不合格",num:0,typecolor:"red",numcolor:"red",IsAddDel:!0},{key:"BZS",type:"单位包装数",num:this.$route.query.F_102,typecolor:"red",numcolor:"red",IsAddDel:!1},{key:"FYSQty",type:"余数",num:0,typecolor:"red",numcolor:"red",IsAddDel:!1}]},{ColKey:"col2",title1:"不良判断",title2:"数量",Col:[{key:"FFailAuxQtyP",type:"工废",num:0,typecolor:"back",numcolor:"back",IsAddDel:!0},{key:"FFailAuxQtyM",type:"料废",num:0,typecolor:"back",numcolor:"back",IsAddDel:!0},{key:"FPassAuxQtyP",type:"工回",num:0,typecolor:"red",numcolor:"red",IsAddDel:!0},{key:"FPassAuxQtyM",type:"料回",num:0,typecolor:"red",numcolor:"red",IsAddDel:!0}]}],TB_BadItemRelation:[]}},watch:{},components:{tableHeader:function(){return l.e("chunk-23968558").then(l.bind(null,"9962"))},Digital:function(){return l.e("chunk-2d0be698").then(l.bind(null,"2fc1"))}},methods:{AddNum:function(t){this.AllCol.forEach(function(e){e.Col.forEach(function(e){e.key===t&&e.num++})}),this.IsTD(t)},DelNum:function(t){this.AllCol.forEach(function(e){e.Col.forEach(function(e){e.key===t&&e.num--})}),this.IsTD(t)},SetNum:function(t,e){this.AllCol.forEach(function(l){l.Col.forEach(function(l){l.key===t&&(l.num=e)})})},IsTD:function(t){if("FCheckAuxQty"===t||"FPassAuxQty"===t||"FFailAuxQty"===t){var e=this.AllCol[0].Col.filter(function(t){return"FCheckAuxQty"===t.key})[0].num,l=this.AllCol[0].Col.filter(function(t){return"FFailAuxQty"===t.key})[0].num,o=this.AllCol[0].Col.filter(function(t){return"BZS"===t.key})[0].num;this.SetNum("FYSQty",(1*e-1*l)%o),this.SetNum("FPassAuxQty",1*e-1*l)}},DigitalOpen:function(t,e){if(e){var l={width:"30%",num:t.num,title:t.type,placeholder:"当前数量"+t.num,key:t.key};this.$refs.Digital.show(l)}},DigitalCallback:function(t){this.AllCol.forEach(function(e){e.Col.forEach(function(e){e.key===t.key&&(e.num=1*t.num)})}),this.$refs.Digital.hide(),this.IsTD(t.key)},GetTB_BadItemRelation:function(){var t=this;t.loading=!0,Object(n["e"])("TB_BadItemRelation/GetAll",{}).then(function(e){var l=e.data.result;t.TB_BadItemRelation=l,t.AllCol[2].Col.push()}).catch(function(){}).finally(function(){t.loading=!1,t.Detailed()})},Cancel:function(){this.$router.go(-1)},OnSubmit:function(){var t=this;0===t.from.BatchNum.length&&t.$message({showClose:!0,message:"批号不能为空！",type:"warning"});var e={icmoInspectBill:{fid:t.from.FID,fOperID:t.from.FOperID,fAuxQty:t.AllCol[0].Col[0].num,fCheckAuxQty:t.AllCol[0].Col[1].num,fPassAuxQty:t.AllCol[0].Col[2].num,fFailAuxQty:t.AllCol[0].Col[3].num,fFailAuxQtyP:t.AllCol[1].Col[0].num,fFailAuxQtyM:t.AllCol[1].Col[1].num,fPassAuxQtyP:t.AllCol[1].Col[2].num,fPassAuxQtyM:t.AllCol[1].Col[3].num,fNote:"",fYSQty:this.$route.query.F_102},icQualityRptsList:[]};t.AllCol.length>2&&t.AllCol[2].Col.forEach(function(t){e.icQualityRptsList.push({FID:0,FItemID:t.key,FAuxQty:t.num,FRemark:"",FNote:""})}),Object(n["b"])("ICMOInspectBill/ICMODispBillSave",e).then(function(e){e.data.success&&(t.$message({message:"提交成功",type:"success"}),t.Printing(),t.Cancel())}).catch(function(){}).finally(function(){t.loading=!1})},Detailed:function(){var t=this,e=this;e.loading=!0;var l={fid:this.from.FID,fItemID:this.from.FItemID,fOperID:this.from.FOperID};Object(n["g"])("ICMOInspectBill/ICMOInspectBillDetailed",l).then(function(l){if(l.data.success){var o=l.data.result,i=o.icmoInspectBill,n=o.icQualityRptsList;1*i.fAuxQty===0&&(i.fAuxQty=1*e.from.汇报数);var a={ColKey:"col1",title1:"项目",title2:"数量",Col:[{key:"FAuxQty",type:"汇报数",num:1*i.fAuxQty,typecolor:"back",numcolor:"back",IsAddDel:!1},{key:"FCheckAuxQty",type:"检验数",num:1*i.fCheckAuxQty,typecolor:"back",numcolor:"back",IsAddDel:!0},{key:"FPassAuxQty",type:"合格数",num:1*i.fPassAuxQty,typecolor:"back",numcolor:"back",IsAddDel:!1},{key:"FFailAuxQty",type:"不合格",num:1*i.fFailAuxQty,typecolor:"red",numcolor:"red",IsAddDel:!0},{key:"BZS",type:"单位包装数",num:t.$route.query.F_102,typecolor:"red",numcolor:"red",IsAddDel:!1},{key:"FYSQty",type:"余数",num:0,typecolor:"red",numcolor:"red",IsAddDel:!1}]},s={ColKey:"col2",title1:"不良判断",title2:"数量",Col:[{key:"FFailAuxQtyP",type:"工废",num:1*i.fFailAuxQtyP,typecolor:"back",numcolor:"back",IsAddDel:!0},{key:"FFailAuxQtyM",type:"料废",num:1*i.fFailAuxQtyM,typecolor:"back",numcolor:"back",IsAddDel:!0},{key:"FPassAuxQtyP",type:"工回",num:1*i.fPassAuxQtyP,typecolor:"red",numcolor:"red",IsAddDel:!0},{key:"FPassAuxQtyM",type:"料回",num:1*i.fPassAuxQtyM,typecolor:"red",numcolor:"red",IsAddDel:!0}]},c={ColKey:"col3",title1:"项目",title2:"数量",Col:[]};0===e.TB_BadItemRelation.length?t.GetTB_BadItemRelation_SeticQualityRptsList(n,c):e.TB_BadItemRelation.forEach(function(t){var e=!t.fDeleted,l=t.fid,o=t.fName,i=0;n.forEach(function(l){l.fItemID===t.fid&&(e=!0,i=l.fAuxQty)}),e&&c.Col.push({key:l,type:o,num:i,typecolor:"back",numcolor:"back",IsAddDel:!0})}),e.AllCol=[],e.AllCol=[a,s,c];var u=0;e.AllCol.forEach(function(t){t.Col.forEach(function(t){u++})}),e.tabItems.forEach(function(t){t.count=t.value===e.tabvalue?u:t.count})}e.loading=!1}).catch(function(){e.loading=!1})},GetTB_BadItemRelation_SeticQualityRptsList:function(t,e){var l=this;l.AllCol.length>2||(l.loading=!0,Object(n["e"])("TB_BadItemRelation/GetAll",{}).then(function(o){var i=o.data.result;l.TB_BadItemRelation=i,l.TB_BadItemRelation.forEach(function(l){var o=l.fDeleted,i=l.fid,n=l.fName,a=0;t.forEach(function(t){t.fItemID===l.fid&&(o=!0,a=t.fAuxQty)}),o&&e.Col.push({key:i,type:n,num:a,typecolor:"back",numcolor:"back",IsAddDel:!0})}),l.AllCol.indexof(e)>=0||l.AllCol.push(e);var n=0;l.AllCol.forEach(function(t){t.Col.forEach(function(t){n++})}),l.tabItems.forEach(function(t){t.count=t.value===l.tabvalue?n:t.count})}).catch(function(){l.loading=!1}))},handelTabChange:function(t){},sizeChange:function(t){},currentChange:function(t){},Printing:function(){var t={FID:[this.$route.query.FID]};Object(n["f"])("Printing/GetAllPrinting",t).then(function(t){t.data.success&&winForm.Preview(JSON.stringify(t.data.result[0]))}).catch(function(){}).finally(function(){})}},created:function(){this.from.FID=this.$route.query.FID,this.from.FItemID=this.$route.query.FItemID,this.from.Step=this.$route.query.Step,this.from.汇报数=this.$route.query.FAuxQty,this.from.FOperID=this.$route.query.FOperID,this.from.BatchNum=this.$route.query.BatchNum,this.from.FBillNo=this.$route.query.FBillNo,this.GetTB_BadItemRelation(),this.Printing()},computed:{columnHeader:function(){switch(this.tabvalue){case"ZJHB":return this.tableColumns.ZJHB}return""}}},s=a,c=(l("cef0"),l("2877")),u=Object(c["a"])(s,o,i,!1,null,null,null);e["default"]=u.exports},"2acb":function(t,e,l){},cef0:function(t,e,l){"use strict";var o=l("2acb"),i=l.n(o);i.a}}]);
//# sourceMappingURL=chunk-2c1c2104.296f35aa.js.map