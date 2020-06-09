<template>
  <el-container style="height: 700px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu >
        <el-submenu index="1" >
          <template slot="title"><i class="el-icon-user"></i>售票端用户管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1"><el-link href="#/layout/systemcenter/ticketuser">售票端用户</el-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-home"></i>普通用户管理</template>
          <el-menu-item-group>
            <el-menu-item index="2-1"><el-link href="#/layout/systemcenter/ordinuser">普通用户管理</el-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-truck"></i>广告管理</template>
          <el-menu-item-group>
            <el-menu-item index="3-1"><el-link href="#/layout/systemcenter/ad">广告管理</el-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
<!--        <el-dropdown>-->
<!--          <i class="el-icon-setting" style="margin-right: 15px"></i>-->
<!--          <el-dropdown-menu slot="dropdown">-->
<!--            <el-dropdown-item>查看</el-dropdown-item>-->
<!--            <el-dropdown-item>新增</el-dropdown-item>-->
<!--            <el-dropdown-item>删除</el-dropdown-item>-->
<!--          </el-dropdown-menu>-->
<!--        </el-dropdown>-->
        <span>多源灾情数据库管理端</span>
      </el-header>

      <el-main>
<!--        <el-table :data="tableData">-->
<!--          <el-table-column prop="date" label="日期" width="140">-->
<!--          </el-table-column>-->
<!--          <el-table-column prop="name" label="姓名" width="120">-->
<!--          </el-table-column>-->
<!--          <el-table-column prop="address" label="地址">-->
<!--          </el-table-column>-->
<!--        </el-table>-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
  export default {
    name: "mshd",
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
