<template>
  <el-container>
    <el-header>
      <!--导航菜单-->
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#409EFF
">
        <el-menu-item index="/userlayout/usermshd/userpeople" style="color: white">多源灾情数据库查看面板</el-menu-item>
        <el-menu-item index="/userlayout/userrequest" style="color: white">发起请求</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "UserLayout",
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
    }
  }
</script>

<style scoped>

</style>
