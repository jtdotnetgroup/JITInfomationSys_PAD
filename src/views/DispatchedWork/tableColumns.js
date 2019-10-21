import moment from 'moment'

const columns = {
  receive: [{
    id: '派工单号',
    label: '派工单号',
    width: 220,
    sort: true,
    align: 'center'
  },
  {
    id: '设备',
    label: '设备',
    width: 120,
    sort: true,
    align: 'center'
  },
  {
    id: '班次',
    label: '班次',
    width: 120,
    sort: true,
    align: 'center'
  },
  {
    id: '生产日期',
    label: '生产日期',
    width: 120,
    sort: true,
    align: 'center',
    formatter: function (row, column, cellValue, index) {
      return moment(row.生产日期).format('YYYY-MM-DD')
    }
  },
  {
    id: '制单日期',
    label: '制单日期',
    width: 120,
    sort: true,
    align: 'center',
    formatter: function (row, column, cellValue, index) {
      return moment(row.制单日期).format('YYYY-MM-DD')
    }
  },
  {
    id: '产品名称',
    label: '产品',
    width: 220,
    sort: true,
    align: 'center'
  },
  {
    id: '工序',
    label: '工序',
    width: 120,
    sort: true,
    align: 'center'
  },

  {
    id: '计划开工/完工',
    label: '计划开工/完工',
    sort: true,
    align: 'center',
    formatter: function (row, column, cellValue, index) {
      return moment(row.计划开工日期).format('YYYY-MM-DD') + '/' + moment(row.计划完工日期).format('YYYY-MM-DD')
    }
  },
  {
    id: '派工数量',
    label: '派工',
    width: 120,
    sort: true,
    align: 'center'
  }, {
    id: 'fPackQty',
    label: '包装数',
    width: 120,
    sort: true,
    align: 'center'
  }
  ],
  report: [{
    id: '派工单号',
    label: '派工单号',
    width: 250,
    sort: true,
    align: 'center'
  },
  {
    id: '设备',
    label: '设备',
    width: 120,
    sort: true,
    align: 'center'
  },
  {
    id: '班次',
    label: '班次',
    width: 120,
    sort: true,
    align: 'center'
  }, {
    id: '生产日期',
    label: '生产日期',
    width: 120,
    sort: true,
    align: 'center',
    formatter: function (row, column, cellValue, index) {
      return moment(row.生产日期).format('YYYY-MM-DD')
    }
  },
  {
    id: '制单日期',
    label: '制单日期',
    width: 120,
    sort: true,
    align: 'center',
    formatter: function (row, column, cellValue, index) {
      return moment(row.制单日期).format('YYYY-MM-DD')
    }
  },
  {
    id: '产品名称',
    label: '产品',
    width: 220,
    sort: true,
    align: 'center'
  },
  {
    id: '工序',
    label: '工序',
    sort: true,
    align: 'center'
  },
  {
    id: '派工数量',
    label: '派工数',
    width: 120,
    sort: true,
    align: 'center'
  },
  {
    id: 'fPackQty',
    label: '包装数',
    width: 120,
    sort: true,
    align: 'center'
  },
  {
    id: '汇报数量',
    label: '汇报数',
    width: 120,
    sort: true,
    align: 'center'
  },
  {
    id: '合格数量',
    label: '合格',
    width: 120,
    sort: true,
    align: 'center'
  },
  {
    id: '不合格数量',
    label: '不合格',
    width: 120,
    sort: true,
    align: 'center'
  }
  ]
}

export default columns
