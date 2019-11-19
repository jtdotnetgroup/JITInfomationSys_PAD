<template>
  <el-dialog
    title="余数拼箱"
    :visible.sync="AbnormalReport"
    width="50%"
    v-loading="loading"
    :append-to-body="true"
  >
    <div v-for="(item,key,index) in dataSource" :key="item">
      <el-card class="box-card" :key="index">
        <div slot="header" class="clearfix">
          <!-- <span>{{dataSource[item][0].BatchNum}}</span> -->
          <span>品番：{{key}}，单位包装数：{{item[0].F_102}}</span>
          <el-button style="float: right; padding: 3px 0" type="text" v-show="false">操作按钮</el-button>
        </div>
        <div class="text item">
          <el-table :data="item" style="width: 100%" :ref="key">
            <el-table-column prop="FBillNo2" label="检验单号" width="250"></el-table-column>
            <el-table-column prop="BatchNum" label="批次号" width="250"></el-table-column>
            <el-table-column align="center" prop="FYSQty" label="余数" width="80"></el-table-column>
            <el-table-column align="center" label="挑货" width="160">
              <template slot-scope="scope">
                <el-form :model="scope.row" ref="scope.row">
                  <el-form-item>
                    <div @click="DigitalOpen(scope.$index,scope.row,scope.row.PS)">
                      <el-input v-model="scope.row.PS" placeholder></el-input>
                    </div>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column prop="SY" align="center" label="剩余"></el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>

    <div style="text-align: right; padding-top: 25px;">
      <el-button type="success" @click="onSubmit('OK')">确认</el-button>
      <el-button @click="AbnormalReport = false">取消</el-button>
    </div>
    <!-- 打开数字键盘 以及接受回调 -->
    <Digital ref="Digital" @DigitalCallback="DigitalCallback" />
  </el-dialog>
</template>

<script>
//
import { GetAll, DataAddOrPUT } from '@/api/mission'
export default {
  name: 'LCL',
  components: {
    Digital: () => import('@/components/Common/Digital.vue')
  },
  data () {
    return {
      loading: false,
      AbnormalReport: false,
      dataSource: {}
    }
  }, // 声明方法
  methods: {
    getSummaries (param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '合计'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += ''
        } else {
          sums[index] = ''
        }
        if (index === 1 || index === 2) {
          sums[index] = ''
        }
      })

      return sums
    },
    // 打开键盘
    DigitalOpen (index, tmp, num) {
      var obj = {
        width: '30%',
        num: num,
        title: '拼箱数量',
        placeholder: '拼箱数量' + num,
        tmp: tmp,
        index: index
      }
      this.$refs.Digital.show(obj)
    },
    // 键盘回调并且关闭键盘
    DigitalCallback (obj) {
      this.$nextTick(() => {
        var num =
          this.dataSource[obj.tmp.FItemName][obj.index].FYSQty * 1 < obj.num * 1
            ? this.dataSource[obj.tmp.FItemName][obj.index].FYSQty * 1
            : obj.num * 1
        this.dataSource[obj.tmp.FItemName][obj.index].PS = num
        this.dataSource[obj.tmp.FItemName][obj.index].SY =
          this.dataSource[obj.tmp.FItemName][obj.index].FYSQty -
          this.dataSource[obj.tmp.FItemName][obj.index].PS
        // 由于UI框架问题，所以下面选项时必须的
        this.dataSource[obj.tmp.FItemName][obj.index].FYSQty++
        this.dataSource[obj.tmp.FItemName][obj.index].FYSQty--
      })
      // this.$nextTick(()=>{
      //   this.dataSource = this.dataSource
      // })
      this.$refs.Digital.hide()
    },
    show (obj) {
      this.AbnormalReport = true
      this.dataSource = {}
      console.log(obj)
      for (var i = 0; i < obj.length; i++) {
        var ai = obj[i]
        ai.PS = 0
        ai.SY = ai.FYSQty
        if (!this.dataSource[ai.FItemName]) {
          this.dataSource[ai.FItemName] = [ai] // 依赖分组字段可自行更改！
        } else {
          this.dataSource[ai.FItemName].push(ai)
        }
      }
      // console.log(this.dataSource);
      // map.forEach(item => {
      //   map[item.key]
      // });
    },
    hide () {
      this.AbnormalReport = false
    },
    // 提交
    onSubmit (type) {
      var _this = this
      switch (type) {
        case 'OK': {
          break
        }
        default: {
          break
        }
      }
      // 检验
      var KeyObj = []
      for (var key in this.dataSource) {
        var obj = {}
        obj.key = key
        obj.ZS = 0
        this.dataSource[key].forEach(tmp => {
          obj.BZS = tmp.F_102
          if (tmp.PS > 0) {
            obj.ZS += tmp.PS
          }
        })
        KeyObj.push(obj)
      }
      //
      var TF = true
      KeyObj.forEach(item => {
        if (item.PS < item.ZS) {
          this.$notify.error({
            title: '系统提示',
            message: item.key + '的拼箱数量合计不是整箱'
          })
          TF = false
          return
        }
        console.log(item.ZS % item.BZS)
        if (item.ZS % item.BZS !== 0) {
          this.$notify.error({
            title: '系统提示',
            message: item.key + '的拼箱数量合计不是整箱'
          })
          TF = false
        }
      })
      if (!TF) {
        return
      }
      // 开始传数据
      this.loading = true
      var objtmp = []
      var obj = { lclMxCreateInput: [] }
      for (var key in this.dataSource) {
        this.dataSource[key].forEach(tmp => {
          if (tmp.PS > 0) {
            obj.lclMxCreateInput.push({
              ICMOInspectBillId: tmp.FID,
              SpelledQty: tmp.PS
            })
          }
        })
      }
      //
      if (obj.lclMxCreateInput.length === 0) {
        this.$notify.error({
          title: '系统提示',
          message: '请选择拼箱数量'
        })
        return
      }
      objtmp.push(obj)
      DataAddOrPUT('RemainderLCL/Create', objtmp)
        .then(res => {
          console.log(res)
          this.$notify({
            title: '系统提示',
            message: '修改成功',
            type: 'success'
          })
          _this.$emit('addSuccess')
          this.hide()
          this.loading = false
        })
        .catch(function () {
          this.loading = false
        })
    }
  }
}
</script>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
</style>
