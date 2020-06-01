<template>
  <div id="app">
<!--    <el-container>-->
<!--      <el-header>-->
<!--        &lt;!&ndash;导航菜单&ndash;&gt;-->
<!--        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
<!--          <el-menu-item index="/mshd/people">多源灾情数据库管理面板</el-menu-item>-->
<!--          <el-menu-item index="/fileupload">文件上传</el-menu-item>-->
<!--          <el-menu-item index="/requests">请求处理</el-menu-item>-->
<!--        </el-menu>-->
<!--      </el-header>-->
<!--      <el-main>-->
<!--        <router-view/>-->
<!--      </el-main>-->
<!--    </el-container>-->
<!--  </div>-->
      <router-view>

      </router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                activeIndex: this.$route.path,
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                this.$router.push(key);
            }
        }
    }
</script>

<style>
</style>
