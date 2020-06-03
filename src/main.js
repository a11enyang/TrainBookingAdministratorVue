// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import less from "less";
import axios from 'axios'



// axios.defaults.baseURL = 'http://localhost:8082/'
axios.defaults.baseURL = "/apis"
Vue.prototype.$http= axios
Vue.use(ElementUI);
Vue.config.productionTip = false


axios.interceptors.request.use(config => {
  config.headers.Authorization = "Bearer " + window.sessionStorage.getItem("token");
  console.log("============");
  console.log(config);
  console.log("============");
  return config;
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
