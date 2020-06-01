<template>

  <el-row>
    <el-col :span="12" :offset="6">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="名字">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即修改</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>



</template>

<script>
  export default {
    name: "PersonCenter",
    data() {
      return {
        form: {
          name: '',
          password: "",
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
    created() {
      console.log(window.sessionStorage);
      this.$http.post("http://localhost:8082/personal/"+window.sessionStorage.token)
                .then(res => {
                  this.form.name = res.data.name;
                  this.form.password = res.data.password;
                });
    }
  }
</script>

<style scoped>

</style>
