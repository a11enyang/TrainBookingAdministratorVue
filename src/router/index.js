import Vue from 'vue'
import Router from 'vue-router'
import Mshd from "../components/system/SystemCenter";
import People from "../components/people/People";
import Login from "../components/login/Login";
import Layout from "../components/layout/Layout";
import PersonCenter from "../components/personCenter/PersonCenter";
import SystemCenter from "../components/system/SystemCenter";
import TicketUser from "../components/systemPanel/TicketUser";
import Ad from "../components/systemPanel/Ad";
import OrdinUser from "../components/systemPanel/OrdinUser";

Vue.use(Router)

const router = new Router({
  routes: [
    // {path: '/', redirect: '/login'},
    {
      path: "/layout", component: Layout,
      children: [
        {path: "personal", component: PersonCenter},
        {
          path: "systemcenter", component: SystemCenter, children: [
            {path: 'ticketuser', component: TicketUser},
            {path: 'ad', component: Ad},
            {path: 'ordinuser', component: OrdinUser},
          ]
        }
      ]
    },
    {path: "/login", component: Login},
  ]
})


// 挂载路由导航守卫,to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作 next('/login')强制跳转login
router.beforeEach((to, from, next) => {
  // 访问登录页，放行
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  // 没有token, 强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})

export default router
