import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import "./utils/utils";
import utils from "./utils/utils";
import addressmap from "./address/addressmap";
import echarts from "echarts"



axios.defaults.baseURL = '/apis'
Vue.prototype.$http= axios
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$addressMap = addressmap
Vue.prototype.$echarts = echarts

//前端发起请求前进行拦截处理
axios.interceptors.request.use(config => {
  config.headers.Authorization = "Bearer " + window.sessionStorage.getItem("token");
  return config;
})

//后端请求的数据处理后再显示在页面上
axios.interceptors.response.use( response => {
  if (response.data.code === 1){
    utils.error("操作失败");
  }else if (response.data.code === 101){
    utils.error("账号或密码错误")
  }else{
    return response;
  }
  return;
})



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
