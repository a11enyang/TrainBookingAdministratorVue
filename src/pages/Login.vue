<template>
  <body id="poster">
  <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="60px" label-position="left"
           class="login-container">
    <h3 class="login_title">管理员登录</h3>
    <el-form-item label="账号" prop="username">
      <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginForm.password"
        type="password"
        prefix-icon="iconfont icon-3702mima"
        show-password
      ></el-input>
    </el-form-item>
    <el-form-item class="btns">
      <el-button type="primary" @click="login" style="width: 100%;background: #505458;border: none">登录</el-button>
    </el-form-item>
  </el-form>
  </body>


</template>

<script>
  import aes from "../utils/aes";
  import transferData from "../api/transferData";
  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          username: 'admin',
          password: '123456'
        },
        // 表单验证
        loginFormRules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入用户密码', trigger: 'blur'},
            {min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      login() {
        // 表单预验证
        // valid：bool类型
        this.$refs.loginFormRef.validate(async valid => {
          // console.log(valid)
          if (!valid) return false
          // this.$http.post('login', this.loginForm): 返回值为promise
          // 返回值为promise，可加await简化操作 相应的也要加async
          const {data: res} = await this.$http.post('/administrator/login', this.loginForm)
          this.$message.success('登录成功')
          // // 1、将登陆成功之后的token, 保存到客户端的sessionStorage中; localStorage中是持久化的保存
          // //   1.1 项目中出现了登录之外的其他API接口，必须在登陆之后才能访问
          // //   1.2 token 只应在当前网站打开期间生效，所以将token保存在sessionStorage中
          window.sessionStorage.setItem('token', res.data)
          // // 2、通过编程式导航跳转到后台主页, 路由地址为：/home
          this.$router.push(this.$addressMap.HOME)
        })
      }
    }
  }
</script>

<style scoped>
  #poster {
    /*background: url() no-repeat;*/
    background:url("../assets/train.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }

  body {
    margin: 0px;
    padding: 0;
  }

  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 360px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }


</style>
