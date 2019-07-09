
<template>
  <div class="fullscreen">
    <!-- 标题栏目 -->
    <tableHeader class="header" :title="title" :items="tabItems" @tabChange="handelTabChange"/>
    <el-row
      v-show="this.tabvalue === 'PHYS'"
      style="background-color: white;
    padding: 20px 0px;"
    >
      <el-col :span="6">
        <div class="grid-content" style="text-align: left;padding-left: 15px;">
          <el-button @click="OpenRemainderLCLMx" type="success" plain>选中拼箱</el-button>
        </div>
      </el-col>
    </el-row>
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
      <el-table-column label="操作" align="center" fixed="right" width="300">
        <template slot-scope="scope">
          <el-button
            style="text-align: center"
            plain
            round
            v-for="item in funmenu"
            v-show="item.show"
            :key="item.num"
            @click="handle(item.num,scope.$index, scope.row)"
            :type="item.type"
          >{{item.title}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 底部分页 -->
    <Paging
      :PageSize="pageSize"
      :PageIndex="currentPage"
      :TotalNum="totalNum"
      @Refresh="GetData"
      @RefreshPage="RefreshPage"
      ref="Paging"
    />
    <!-- 底部分页 -->
    <!--其他页面模板-->
    <RemainderLCLMx ref="RemainderLCLMx" @addSuccess="Refresh"/>
    <RemainderLCLRecord ref="RemainderLCLRecord" @addSuccess="Refresh"/>
  </div>
</template>

<script>
// 数据处理
import { GetAll } from "@/api/mission";
const columns1 = [
  // 派工任务单号，批号，余数，派单人
  // A.FBillNo,A.FBiller,A.FDate,B.FBillNo,B.BatchNum,B.FYSQty,B.FInspector,B.FInspectTime
  {
    id: "FBillNo1",
    label: "选择",
    width: 55,
    sort: false,
    type: "selection",
    align: "center"
  },
  { id: "FBillNo", label: "派工任务单号", width: 220, sort: false, type: "" },
  { id: "FBiller", label: "派工人", width: 100, sort: false, type: "" },
  { id: "FDate", label: "派工日期", width: 160, sort: false, type: "" },
  { id: "FBillNo2", label: "检测单号", sort: false, type: "" },
  { id: "FItemName", label: "品番", width: 180, sort: false, type: "" },
  { id: "BatchNum", label: "批次号", sort: false, type: "" },
  { id: "FYSQty", label: "余数", width: 80, sort: false, type: "" },
  { id: "F_102", label: "单位包装数", width: 120, sort: false, type: "" },
  { id: "FInspector", label: "检验人", width: 100, sort: false },
  { id: "FInspectTime", label: "检验时间", width: 160, sort: false, type: "" }
];
const columns2 = [
  { id: "LCLCode", label: "拼单号", width: 400, sort: false, type: "" },
  { id: "LCLTime", label: "拼单日期", width: 160, sort: false, type: "" },
  // { id: "CreateUserId", label: "操作人", width: 100, sort: false, type: "" },
  { id: "CreateTime", label: "操作日期", width: 160, sort: false, type: "" },
  { id: "Remark", label: "备注", sort: false, type: "" }
];
// 派工单页面
export default {
  name: "Stock",
  data() {
    return {
      tabledata: [],
      currentPage: 1,
      pageSize: 10,
      totalNum: 0,
      totalPage: 0,
      columns: columns1,
      title: "批号余数",
      tabvalue: "PHYS",
      tabItems: [
        { title: "批号余数", value: "PHYS", count: 0, key: "PHYS" },
        { title: "拼箱记录", value: "PXJL", count: 0, key: "PXJL" }
      ],
      funmenu: [
        // {
        //  type: '',
        //  num: 0,
        //  title: '汇报',
        //  show: true,
        //  ShowWhe: ['report']
        // },
        {
          type: "",
          num: 1,
          title: "明细",
          show: true,
          ShowWhe: ["PXJL"]
        }
      ]
    };
  },
  components: {
    RemainderLCLMx: () => import("./RemainderLCLMx"),
    RemainderLCLRecord: () => import("./RemainderLCLRecord"),
    tableHeader: () => import("@/components/tablePageHeader.vue"),
    Paging: () => import("@/components/Common/Paging.vue")
  },
  methods: {
    // 显示菜单
    showmenu() {
      this.funmenu.forEach(item => {
        item.show = item.ShowWhe.indexOf(this.tabvalue) >= 0;
      });
    },
    UpdCount() {
      var TaskQty = this.$store.state.TaskQty.TaskQty;
      console.log(TaskQty);
      this.tabItems.forEach(tmp => {
        TaskQty.forEach(item => {
          if (tmp.key === item.strKey) {
            tmp.count = item.total;
          }
        });
      });
    },
    // 点击操作
    handle: function(type, index, row) {
      var _this = this;
      var obj = {};
      console.log(index, row);
      switch (type) {
        // 明细
        case 1:
          obj.RemainderLCLId = row.LCLId
          obj.LCLCode= row.LCLCode
          this.$refs.RemainderLCLRecord.show(obj);
          break;
        // 默认提示功能尚未开发
        default:
          break;
      }
    },
    //
    OpenRemainderLCLMx() {
      this.$refs.RemainderLCLMx.show(this.$refs.multipleTable.selection);
    },
    // 换菜单
    handelTabChange(value) {
      this.tabvalue = value;
      if (this.tabvalue === "PHYS") {
        this.columns = columns1;
      } else {
        this.columns = columns2;
      }
      this.currentPage = 1;
      this.Refresh();
    },
    // 切换页大小
    sizeChange(value) {
      this.currentPage = value;
      this.Refresh();
    },
    //
    currentChange(value) {
      this.currentPage = value;
      this.Refresh();
    },
    // 刷新页数
    RefreshPage(value) {
      this.currentPage = value.PageIndex;
    },
    // 刷新页面表格
    Refresh() {
      if (this.tabvalue === "PHYS") {
        this.GetData();
      } else if (this.tabvalue === "PXJL") {
        this.GetRemainderLCL();
      }
      this.showmenu();
      this.UpdCount();
    },
    // 获取余数
    GetData() {
      // if(obj!=="undefined"){this.currentPage=obj.PageIndex}
      var _this = this;
      const loading = this.$loading({
        lock: true,
        text: "数据加载中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      var obj = {
        Sorting: "仓库",
        SkipCount: (this.currentPage - 1) * this.pageSize,
        MaxResultCount: this.pageSize
      };
      GetAll("VM_ICMOInspectBillED/GetAll", obj)
        .then(res => {
          // console.log(res); // 返回对象
          // console.log(res.data.result.items); // 集合
          // console.log(res.data.result.totalCount); // 总长度

          var result = res.data.result; // 集合
          _this.totalNum = result.totalCount; // 总长度
          var TableList = []; // 集合

          // 遍历返回集合 选取需要的
          result.items.forEach(item => {
            var TabaleObj = {}; // 对象
            // A.FBillNo,A.FBiller,A.FDate,B.FBillNo,B.BatchNum,B.FYSQty,B.FInspector,B.FInspectTime
            TabaleObj.FID = item.fid;
            TabaleObj.FBillNo1 = item.fBillNo;
            TabaleObj.FBillNo = item.fBillNo;
            TabaleObj.FBiller = item.fName;
            TabaleObj.FDate =
              item.fDate === null
                ? ""
                : _this.$moment(item.fDate).format("YYYY-MM-DD HH:mm");
            TabaleObj.FBillNo2 = item.fBillNo2;
            TabaleObj.BatchNum = item.batchNum;
            TabaleObj.FYSQty = item.fysQty;
            TabaleObj.FInspector = item.fInspector;
            TabaleObj.FInspectTime =
              item.fInspectTime === null
                ? ""
                : _this.$moment(item.fInspectTime).format("YYYY-MM-DD HH:mm");
            TabaleObj.FItemName = item.fItemName;
            TabaleObj.F_102 = item.f_102;
            TableList.push(TabaleObj);
          });
          this.tabledata = [];
          // 重新渲染列表
          this.tabledata = TableList;
          //
          this.tabItems.forEach(item => {
            item.count =
              item.value === _this.tabvalue ? result.totalCount : item.count;
          });
          loading.close();
        })
        .catch(function() {
          loading.close();
        });
    },
    // 获取拼箱记录
    GetRemainderLCL() {
      var _this = this;
      const loading = this.$loading({
        lock: true,
        text: "数据加载中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      var obj = {
        Sorting: "",
        SkipCount: (this.currentPage - 1) * this.pageSize,
        MaxResultCount: this.pageSize
      };
      GetAll("RemainderLCL/GetAll", obj)
        .then(res => {
          // console.log(res); // 返回对象
          // console.log(res.data.result.items); // 集合
          // console.log(res.data.result.totalCount); // 总长度

          var result = res.data.result; // 集合
          _this.totalNum = result.totalCount; // 总长度
          var TableList = []; // 集合

          // 遍历返回集合 选取需要的
          result.items.forEach(item => {
            var TabaleObj = {}; // 对象
            TabaleObj.LCLId = item.lclId;
            TabaleObj.LCLCode = item.lclCode;
            TabaleObj.LCLTime =
              item.lclTime === null
                ? ""
                : _this.$moment(item.lclTime).format("YYYY-MM-DD HH:mm");
            TabaleObj.CreateUserId = item.createUserId;
            TabaleObj.CreateTime =
              item.createTime === null
                ? ""
                : _this.$moment(item.createTime).format("YYYY-MM-DD HH:mm");
            TabaleObj.Remark = item.remark;
            TableList.push(TabaleObj);
          });
          this.tabledata = [];
          // 重新渲染列表
          this.tabledata = TableList;
          //
          this.tabItems.forEach(item => {
            item.count =
              item.value === _this.tabvalue ? result.totalCount : item.count;
          });
          loading.close();
        })
        .catch(function() {
          loading.close();
        });
    }
  },
  computed: {},
  mounted: function() {
    this.Refresh();
  }
};
</script>

<style scoped>
</style>
