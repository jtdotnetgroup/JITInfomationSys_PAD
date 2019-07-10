
<template>
  <div class='fullscreen'>
    <tableHeader class='header' :title='title' :items='tabItems' @tabChange='handelTabChange' />
    <el-button type='primary' @click='PreviewTest'>打印测试</el-button>
  </div>
</template>

<script>
export default {
  name: 'BarCode',
  data() {
    return {
      title: '条码打印',
      tabItems: [{ title: '条码打印', value: 'TMDY', count: 0 }]
    };
  },
  components: {
    tableHeader: () => import('@/components/tablePageHeader.vue')
  },
  methods: {
    handelTabChange(value) {
      this.tabvalue = value;
    },
    sizeChange(value) {},
    currentChange(value) {},
    PreviewTest() {
      const tester = [
        {
          itemNum: '12313132',
          itemName: 'Name123123',
          lotNum: 'Lot12312313',
          qty: 1230,
          qrCode: 'code123123123',
          packQty: 123
        }
      ];
      winForm.Preview(JSON.stringify( tester));
    }
  },
  computed: {
    columnHeader() {
      switch (this.tabvalue) {
        case 'TMDY': {
          return this.tableColumns.TMDY;
        }
      }
      return '';
    }
  }
};
</script>

<style scoped>
</style>
