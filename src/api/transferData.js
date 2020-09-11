import Axios from "axios";
export default {
  //普通用户分页查询
  findAllPeople(page) {
    return Axios.post("/administratorapi/ordinaryuser/page/" + page);
  },

  //搜索相关用户
  searchPeople(data) {
     return Axios.post("/administratorapi/ordinaryuser/search", data)
  },

  //更新用户
  savePeople(data) {
    return Axios.post("/administratorapi/ordinaryuser/updateOne", data)
  },

  //删除用户
  deletePeople(data){
    return Axios.post("/administratorapi/ordinaryuser/delete/" + data)
  },

  //删除广告
  deleteAd(data){
    return Axios.post("/administratorapi/ad/delete/" + data)
  },

  //查找所有广告
  findAllAds(page) {
    return Axios.post("administratorapi/ad/page/" + page);
  },

  //保存单个广告
  saveAd(data){
    return Axios.post("administratorapi/ad/save", data);
  },

  //保存票务端用户
  saveTicketUser(data){
    return Axios.post("administratorapi/ticketuser/save", data);
  },

  //删除票务端用户
  deleteTicketUser(data){
    return Axios.post("administratorapi/ticketuser/delete/" + data);
  },

  //票务管理员分页查询
  findAllTicketUsers(data){
    return  Axios.post("administratorapi/ticketuser/page/" + data);
  },
  //管理员登录
  managerLogin(data){
    return Axios.post('/administrator/login', this.loginForm);
  },

  //获取系统日志的分页内容
  findSystemLog(data){
    return Axios.get("/administratorapi/systemlog/page/" + data);
  },

  //
}
