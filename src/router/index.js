import Vue from 'vue'
import Router from 'vue-router'
import Mshd from "../components/mshd/Mshd";
import People from "../components/people/People";
import PeopleHurt from "../components/people/PeopleHurt";
import PeopleMiss from "../components/people/PeopleMiss";
import House from "../components/house/House";
import HouseQT from "../components/house/HouseQT";
import HouseZH from "../components/house/HouseZH";
import HouseZM from "../components/house/HouseZM";
import HouseKJ from "../components/house/HouseKJ";
import FileUpload from "../components/file/FileUpload";
import Request from "../components/request/Request";
import Login from "../components/login/Login";
import Layout from "../components/layout/Layout";
import PersonCenter from "../components/personCenter/PersonCenter";
import UserLayout from "../components/user/UserLayout";
import UserMshd from "../components/user/UserMshd";
import UserPeople from "../components/user/userPeople/UserPeople";
import UserPeopleHurt from "../components/user/userPeople/UserPeopleHurt";
import UserPeopleMiss from "../components/user/userPeople/UserPeopleMiss";
import UserHouse from "../components/user/userHouse/UserHouse";
import UserHouseKJ from "../components/user/userHouse/UserHouseKJ";
import UserHouseQT from "../components/user/userHouse/UserHouseQT";
import UserHouseZH from "../components/user/userHouse/UserHouseZH";
import UserHouseZM from "../components/user/userHouse/UserHouseZM";

Vue.use(Router)

const router = new Router({
  routes: [
    // {path: '/', redirect: '/login'},
    {
      path: "/layout", component: Layout,
      children: [
        {path: "fileupload", component: FileUpload},
        {path: "requests", component: Request},
        {path: "personal", component: PersonCenter},
        {
          path: "mshd", component: Mshd, children: [
            {path: 'people', component: People},
            {path: 'peoplehurt', component: PeopleHurt},
            {path: 'peoplemiss', component: PeopleMiss},
            {path: 'house', component: House},
            {path: 'housekj', component: HouseKJ},
            {path: 'houseqt', component: HouseQT},
            {path: 'housezh', component: HouseZH},
            {path: 'housezm', component: HouseZM},
          ]
        }
      ]
    },
    {path: "/login", component: Login},
    {
      path: "/userlayout", component: UserLayout,
      children: [
        {
          path: "usermshd", component: UserMshd, children: [
            {path: "userpeople", component: UserPeople},
            {path: "userpeoplehurt", component: UserPeopleHurt},
            {path: "userpeoplemiss", component: UserPeopleMiss},
            {path: "userhouse", component: UserHouse},
            {path: "userhousekj", component: UserHouseKJ},
            {path: "userhouseqt", component: UserHouseQT},
            {path: "userhousezh", component: UserHouseZH},
            {path: "userhousezm", component: UserHouseZM},
          ]
        },

      ]

    },
  ]
})


// 挂载路由导航守卫,to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作 next('/login')强制跳转login
router.beforeEach((to, from, next) => {
  // 访问登录页，放行
  if (to.path === '/login') return next()

  console.log(to.path);

  //如果是用户端的内容,放行
  if (to.path.indexOf("/userlayout") !== -1) return next();

  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  console.log("++++++++++++");
  console.log(tokenStr);
  console.log("++++++++++++");
  // 没有token, 强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})

export default router
