<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="请求方"
      width="200">
    </el-table-column>
    <el-table-column
      prop="ip"
      label="IP地址"
      width="180">
    </el-table-column>
    <el-table-column
      prop="request"
      label="请求内容"
      width="160">
    </el-table-column>
    <el-table-column
      prop="targetAddr"
      label="目标地址"
      width="200">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button
          type="primary"
          size="small">
          允许
        </el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="danger"
          size="small">
          拒绝
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "Request",
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2020-05-29',
          name: '北京地震管理安全局',
          ip: '168.63.214.166',
          targetAddr: 'https://element.eleme.cn/#/zh-CN/component/table',
          request: '获取人员伤亡列表'
        },
          {
            date: '2020-05-29',
            name: '上海地震管理安全局',
            ip: '168.63.214.166',
            targetAddr: 'https://element.eleme.cn/#/zh-CN/component/table',
            request: '获取房屋破坏列表'
          },
          {
            date: '2020-05-29',
            name: '上海地震管理安全局',
            ip: '168.63.214.166',
            targetAddr: 'https://element.eleme.cn/#/zh-CN/component/table',
            request: '获取房屋破坏列表'
          },
          {
            date: '2020-05-29',
            name: '上海地震管理安全局',
            ip: '168.63.214.166',
            targetAddr: 'https://element.eleme.cn/#/zh-CN/component/table',
            request: '获取房屋破坏列表'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
