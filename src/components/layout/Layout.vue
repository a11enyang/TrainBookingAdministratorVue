<template>
  <el-container>
    <el-header>
      <!--导航菜单-->
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/layout/systemcenter/ticketuser">火车售票系统管理面板</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">个人中心</template>
          <el-menu-item index="/layout/personal">管理者中心</el-menu-item>
          <el-menu-item  @click="loginOut">退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "layout",
    data() {
      return {
        activeIndex: this.$route.path,
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.$router.push(key);
      },
      loginOut(){
        window.sessionStorage.clear();
        this.$router.push("#/login");
      }
    }
  }
</script>

<style scoped>

</style>
