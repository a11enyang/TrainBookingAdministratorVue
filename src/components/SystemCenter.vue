<template>
  <el-container style="height: 700px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu >
        <el-submenu index="1" >
          <template slot="title"><i class="el-icon-user"></i>售票端用户管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1"><el-link :href="ticketuser">售票端用户</el-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-home"></i>普通用户管理</template>
          <el-menu-item-group>
            <el-menu-item index="2-1"><el-link :href="ordinuser">普通用户管理</el-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-truck"></i>广告管理</template>
          <el-menu-item-group>
            <el-menu-item index="3-1"><el-link :href="ad">广告管理</el-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-truck"></i>系统运行状况</template>
          <el-menu-item-group>
            <el-menu-item index="3-1"><el-link :href="systemlog">系统日志</el-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span>火车售票系统管理端</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
  export default {
    name: "home",
    data(){
      return {
        ad: "#"+this.$addressMap.AD,
        ordinuser: "#"+this.$addressMap.ORGINARYUSER,
        ticketuser: "#"+this.$addressMap.TICKETUSER,
        systemlog: "#"+this.$addressMap.SYSTEMLOG
      }
    },
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
