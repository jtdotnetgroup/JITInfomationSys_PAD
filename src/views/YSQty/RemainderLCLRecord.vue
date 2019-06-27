<template>
  <el-dialog
    :title="title"
    :visible.sync="AbnormalReport"
    width="70%"
    v-loading="loading"
    append-to-body="true"
  >
    <!-- 表格 -->
    <el-table :data="tabledata" border stripe ref="multipleTable">
      <el-table-column
        v-for="col in columns"
        :prop="col.id"
        :key="col.id"
        :label="col.label"
        :width="col.width"
        :type="col.type"
        :align="col.align"
      ></el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
const columns = [
  //   { id: "lclMxId", label: "拼箱明细ID", width: 400, sort: false, type: "" },
  { id: "LCLCode", label: "拼箱号", width: 400, sort: false, type: "" },
  {
    id: "icmoInspectBillId",
    label: "检验单号",
    sort: false,
    type: ""
  },
  { id: "spelledQty", label: "拼箱数量", width: 100, sort: false, type: "" },
  { id: "lclMxTime", label: "操作日期", width: 170, sort: false, type: "" }
];
//
import { GetAll, DataAddOrPUT } from "@/api/mission";
export default {
  data() {
    return {
      title: "拼箱明细",
      tabledata: [],
      columns,
      loading: false,
      AbnormalReport: false,
      LCLCode: ""
    };
  }, // 声明方法
  methods: {
    show(obj) {
      this.AbnormalReport = true;
      this.LCLCode = obj.LCLCode;
      this.tabledata = []; 
      this.Detailed(obj);
    },
    hide() {
      this.AbnormalReport = false;
    },
    // 明细
    Detailed(obj) {
      var _this = this;
      // console.log(obj)
      GetAll("RemainderLCLMx/GetAll", obj)
        .then(res => {
          // console.log(res); // 返回对象
          if (res.status === 200) {
            // console.log(200); // 返回对象
            var result = res.data.result;
            // 异常
            if (result != null) {
              result.forEach(item => {
                var tmp = {};
                tmp.lclMxId = item.lclMxId;
                tmp.LCLCode = _this.LCLCode;
                tmp.icmoInspectBillId = item.icmoInspectBillId;
                tmp.spelledQty = item.spelledQty;
                tmp.lclMxTime =
                  item.lclMxTime === null
                    ? ""
                    : _this.$moment(item.lclMxTime).format("YYYY-MM-DD HH:mm");
                _this.tabledata.push(tmp);
              });
            } else {
            }
          }
          this.loading = false;
        })
        .catch(function() {
          this.loading = false;
        });
    }
  }
};
</script>
