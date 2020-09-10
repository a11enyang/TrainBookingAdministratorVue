import ElementUI from 'element-ui';
import Vue from 'vue'

//全局消息提示
Vue.prototype.$message = function (msg) {
  ElementUI.Message({...msg, duration: 1000})
}

//成功
Vue.prototype.$message.error = function (msg) {
  return ElementUI.Message.error({
    message: msg,
    duration: 1000
  })
}

//失败
Vue.prototype.$message.success = function (msg) {
  return ElementUI.Message.success({
    message: msg,
    duration: 1000
  })
}
export default {
  //成功
  sucess(msg) {
    Vue.prototype.$message.success(msg);
  },

  //失败
  error(msg) {
    Vue.prototype.$message.error(msg);
  }

}


