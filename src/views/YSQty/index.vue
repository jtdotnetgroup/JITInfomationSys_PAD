
<template>
  <div class="fullscreen">
    <!-- 标题栏目 -->
    <tableHeader class="header" :title="title" :items="tabItems" @tabChange="handelTabChange"/>
    <!-- 表格 -->
    <el-table :data="tabledata" border stripe>
      <el-table-column
        v-for="col in columns"
        :prop="col.id"
        :key="col.id"
        :label="col.label"
        :width="col.width"
        :type="col.type"
        :align='col.align'
      ></el-table-column>
      <!-- <el-table-column label="操作">
        <template>
        </template>
      </el-table-column>-->
    </el-table>
    <!-- <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page="currentPage"
      :page-sizes="[20, 40, 80, 100]"
      :page-size="pageSize"
      layout="prev, pager, next"
      :total="totalNum"
      background
    ></el-pagination> -->
    <!-- 底部分页 -->
    <Paging :PageSize="pageSize" :PageIndex="currentPage" :TotalNum="totalNum" @Refresh="GetData" @RefreshPage="RefreshPage" ref="Paging" />
    <!-- 底部分页 -->
  </div>
</template>

<script>
// 数据处理
import { GetAll } from '@/api/mission'
const columns = [
  // 派工任务单号，批号，余数，派单人
  // A.FBillNo,A.FBiller,A.FDate,B.FBillNo,B.BatchNum,B.FYSQty,B.FInspector,B.FInspectTime
  { id: 'FBillNo', label: '选择', width: 55, sort: false, type: 'selection', align: 'center' },
  { id: 'FBillNo', label: '派工任务单号', width: 220, sort: false, type: '' },
  { id: 'FBiller', label: '派工人', width: 100, sort: false, type: '' },
  { id: 'FDate', label: '派工日期', width: 160, sort: false, type: '' },
  { id: 'FBillNo2', label: '检测单号', sort: false, type: '' },
  { id: 'BatchNum', label: '批次号', sort: false, type: '' },
  { id: 'FYSQty', label: '余数', width: 80, sort: false, type: '' },
  { id: 'FInspector', label: '检验人', width: 100, sort: false },
  { id: 'FInspectTime', label: '检验时间', width: 160, sort: false, type: '' }
]
// 派工单页面
export default {
  name: 'Stock',
  data () {
    return {
      tabledata: [],
      currentPage: 1,
      pageSize: 10,
      totalNum: 0,
      totalPage: 0,
      columns,
      title: '批号余数',
      tabvalue: 'PHYS',
      tabItems: [{ title: '批号余数', value: 'PHYS', count: 0 }]
    }
  },
  components: {
    tableHeader: () => import('@/components/tablePageHeader.vue'),
    Paging: () => import('@/components/Common/Paging.vue')
  },
  methods: {
    handelTabChange (value) {
      this.tabvalue = value
    },
    sizeChange (value) {
      this.currentPage = value
      this.GetData()
    },
    currentChange (value) {
      this.currentPage = value
      this.GetData()
    },
    RefreshPage (value) {
      this.currentPage = value.PageIndex
    },
    GetData () {
      // if(obj!=="undefined"){this.currentPage=obj.PageIndex}
      var _this = this
      const loading = this.$loading({
        lock: true,
        text: '数据加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      var obj = {
        Sorting: '仓库',
        SkipCount: (this.currentPage - 1) * this.pageSize,
        MaxResultCount: this.pageSize
      }
      GetAll('ICMOInspectBill/GetAllYSQty', obj)
        .then(res => {
          // console.log(res); // 返回对象
          // console.log(res.data.result.items); // 集合
          // console.log(res.data.result.totalCount); // 总长度

          var result = res.data.result // 集合
          _this.totalNum = result.totalCount // 总长度
          var TableList = [] // 集合

          // 遍历返回集合 选取需要的
          result.items.forEach(item => {
            var TabaleObj = {} // 对象
            // A.FBillNo,A.FBiller,A.FDate,B.FBillNo,B.BatchNum,B.FYSQty,B.FInspector,B.FInspectTime
            TabaleObj.FBillNo = item.fBillNo
            TabaleObj.FBiller = item.fName
            TabaleObj.FDate = item.fDate === null ? '' : _this.$moment(item.fDate).format('YYYY-MM-DD HH:mm')
            TabaleObj.FBillNo2 = item.fBillNo2
            TabaleObj.BatchNum = item.batchNum
            TabaleObj.FYSQty = item.fysQty
            TabaleObj.FInspector = item.fInspector
            TabaleObj.FInspectTime = item.fInspectTime === null ? '' : _this.$moment(item.fInspectTime).format('YYYY-MM-DD HH:mm')
            TableList.push(TabaleObj)
          })
          this.tabledata = []
          // 重新渲染列表
          this.tabledata = TableList
          //
          this.tabItems.forEach(item => {
            item.count =
              item.value === _this.tabvalue ? result.totalCount : item.count
          })
          loading.close()
        })
        .catch(function () {
          loading.close()
        })
    }
  },
  computed: {

  },
  mounted: function () {
    this.GetData()
  }
}
</script>

<style scoped>

</style>
