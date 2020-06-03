<template>
  <el-container style="height: 700px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu >
        <el-submenu index="1" >
          <template slot="title"><i class="el-icon-user"></i>人员伤亡及失踪</template>
          <el-menu-item-group>
            <el-menu-item index="1-1"><el-link href="#/userlayout/usermshd/userpeople">死亡</el-link></el-menu-item>
            <el-menu-item index="1-2"><el-link href="#/userlayout/usermshd/userpeoplehurt">受伤</el-link></el-menu-item>
            <el-menu-item index="1-3"><el-link href="#/userlayout/usermshd/userpeoplemiss">失踪</el-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-home"></i>房屋破坏</template>
          <el-menu-item-group>
            <el-menu-item index="2-1"><el-link href="#/userlayout/usermshd/userhouse">土木</el-link></el-menu-item>
            <el-menu-item index="2-2"><el-link href="#/userlayout/usermshd/userhousezm">砖木</el-link></el-menu-item>
            <el-menu-item index="2-3"><el-link href="#/userlayout/usermshd/userhousezh">砖混</el-link></el-menu-item>
            <el-menu-item index="2-4"><el-link href="#/userlayout/usermshd/userhousekj">框架</el-link></el-menu-item>
            <el-menu-item index="2-5"><el-link href="#/userlayout/usermshd/userhouseqt">其他</el-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-truck"></i>生命线工程灾难</template>
          <el-menu-item-group>
            <el-menu-item index="3-1">交通</el-menu-item>
            <el-menu-item index="3-2">供水</el-menu-item>
            <el-menu-item index="3-3">输油</el-menu-item>
            <el-menu-item index="3-4">燃气</el-menu-item>
            <el-menu-item index="3-5">电力</el-menu-item>
            <el-menu-item index="3-6">通信</el-menu-item>
            <el-menu-item index="3-7">水利</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-s-flag"></i>次生灾害</template>
          <el-menu-item-group>
            <el-menu-item index="4-1">崩塌</el-menu-item>
            <el-menu-item index="4-2">滑坡</el-menu-item>
            <el-menu-item index="4-3">泥石流</el-menu-item>
            <el-menu-item index="4-4">塌陷</el-menu-item>
            <el-menu-item index="4-5">地裂缝</el-menu-item>
            <el-menu-item index="4-6">其他</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="el-icon-loading"></i>地震灾情</template>
          <el-menu-item-group>
            <el-menu-item index="5-1">基本震情</el-menu-item>
            <el-menu-item index="5-2">灾情预测</el-menu-item>
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
        <span>多源灾情数据库用户端</span>
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
    name: "UserMshd",
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
