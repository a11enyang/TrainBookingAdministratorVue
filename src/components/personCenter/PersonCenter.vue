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
          <el-button type="primary" @click="onSubmit">立即更新</el-button>
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
          token: "",
        }
      }
    },
    methods: {
      onSubmit() {
        this.form.token = window.sessionStorage.getItem("token");
        this.$http.post("/api/updatemanager", this.form)
                  .then(res =>
                    {
                      if (res.data.status){
                        this.successResult();
                        this.findManager();
                      }
                    }
                  )
      },
      successResult() {
        this.$message({
          message: '操作成功!',
          type: 'success'
        });
      },
      failResult() {
        this.$message.error('操作失败!');
      },
      findManager(){
        this.$http.post("/personal/"+window.sessionStorage.token)
          .then(res => {
            this.form.name = res.data.name;
            this.form.password = res.data.password;
          });
      }
    },
    created() {
      this.findManager();
    }
  }
</script>

<style scoped>

</style>
