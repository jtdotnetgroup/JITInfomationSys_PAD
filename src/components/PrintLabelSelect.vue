<template>
  <el-dialog title="选择需要打印的标签" :visible.sync="visiable" width="80%" append-to-body="true" @close="handelClose">
    <div id="printType">
      标签类型：
      <el-select v-model="printType" placeholder>
      <el-option label="半成品" value="bcp"></el-option>
      <el-option label="成品" value="cp"></el-option>
    </el-select>
    </div>
    
    <el-table
      height="400"
      :data="labelList"
      border
      stripe
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" align="center" width="55"></el-table-column>

      <el-table-column
        v-for="col in columns"
        align="center"
        :prop="col.id"
        :key="col.id"
        :label="col.label"
        :width="col.width"
      ></el-table-column>
    </el-table>

    <span slot="footer">
      <el-button @click="handelClose">取 消</el-button>
      <el-button type="primary" @click="handelSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { GetAll2 } from "@/api/mission";
import { ComputePrintLable } from "@/lib/computeLable";

export default {
  name: "printlabelselect",
  data() {
    return {
      visiable: false,
      printData: {},
      billData: {},
      selectedRows: [],
      columns: [
        { id: "itemNum", label: "物料编码" },
        { id: "itemName", label: "物料名称" },
        { id: "printQty", label: "数量" },
        { id: "lotNum", label: "批号" },
        { id: "proDate", label: "生产日期" },
        { id: "labelNum", label: "箱号" }
      ],
      printType:""
    };
  },
  methods: {
    handelClose() {
      this.visiable = false;
    },
    handelSubmit() {
      const result = {}
      result.printEntries=this.selectedRows;
      result.Labels=this.printData

      if(!this.printType){
        this.$message({
          message: "标签类型未选择",
          type: "error"
        });
        return;
      }

      result.printType=this.printType

      winForm.Preview(JSON.stringify(result));
    },
    show() {
      this.visiable = true;
    },
    getData(bill) { 
      var id = []
      bill.forEach(item => { 
        id.push(item.FID)
      });
      var obj = { FID: id };
      this.billData = bill;

      GetAll2("Printing/GetAllPrinting", obj)
        .then(res => {
          if (res.data.success) {
            this.show();
            this.printData = res.data.result;
          }
        })
        .catch(() => {})
        .finally(() => {});
    },
    handleSelectionChange(val) {
      this.selectedRows = val;
    }
  },
  computed: {
    labelList() {
      var tmp = []
      this.printData.forEach((item,index)=>{ 
          ComputePrintLable(item, this.billData[index].FBillTime).forEach(element => {
            tmp.push(element);
          }); 
      }) 
       return tmp
    }
  }
};
</script>

<style  scoped>
#printType{
  text-align: left;
  padding :15px 10px
}
</style>