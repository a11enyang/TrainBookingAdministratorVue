<template>
  <div class="login_container">
    <div>

    </div>
    <div class="login_box">
      <!-- 登录表单 -->
      <div>
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="loginFormRules"
          label-width="60px"
          class="login_form"
        >
          <el-form-item label="账号" prop="username">
            <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" >
            <el-input
              v-model="loginForm.password"
              type="password"
              prefix-icon="iconfont icon-3702mima"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetLoginForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import aes from "../../utils/aes";
  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          username: 'admin',
          password: '123456'
        },
        loginFormEncrypt: {
          username: "",
          password: "",
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
      // 表单重置按钮
      resetLoginForm() {
        // console.log(this)
        // resetFields：element-ui提供的表单方法
        this.$refs.loginFormRef.resetFields();
      },
      login() {
        // 表单预验证
        // valid：bool类型
        this.$refs.loginFormRef.validate(async valid => {
          // console.log(valid)
          if (!valid) return false
          // this.$http.post('login', this.loginForm): 返回值为promise
          // 返回值为promise，可加await简化操作 相应的也要加async
          this.loginFormEncrypt.username = this.loginForm.username;
          this.loginFormEncrypt.password = aes.encrypt(this.loginForm.password);
          console.log(this.loginFormEncrypt.password);
          console.log(  aes.decrypt(this.loginFormEncrypt.password));
          const {data: res} = await this.$http.post('/login', this.loginFormEncrypt)
          // const result = await this.$http.post('http://localhost:9191/login', this.loginForm)
          // console.log(result)
          if (res.meta.status !== 200) return this.$message.error('用户名或者密码不对,登录失败')
          this.$message.success('登录成功')
          // // 1、将登陆成功之后的token, 保存到客户端的sessionStorage中; localStorage中是持久化的保存
          // //   1.1 项目中出现了登录之外的其他API接口，必须在登陆之后才能访问
          // //   1.2 token 只应在当前网站打开期间生效，所以将token保存在sessionStorage中
          console.log(res.token);
          window.sessionStorage.setItem('token', res.token)
          // // 2、通过编程式导航跳转到后台主页, 路由地址为：/home
          this.$router.push('/layout/mshd/people')
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  /* // lang="less" 支持less格式
  // scoped vue的指令，只在当前组件生效 */

  .login_container {
    background-color: #185ea3;
    height: 100%;
  }

  .login_box {
    width: 450px;
    height: 360px;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    border: 2px solid black;
  }


  .login_form {
    position: absolute;
    bottom: 60px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .btns {
    display: flex;
    justify-content: center;
  }

  .info {
    font-size: 13px;
    margin: 10px 15px;
  }
</style>
