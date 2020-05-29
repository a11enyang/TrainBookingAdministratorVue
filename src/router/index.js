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
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/', redirect:'/mshd/people'},
    {path: '/mshd', component: Mshd,
      children:[
        {path:'people',component: People},
        {path:'peoplehurt',component: PeopleHurt},
        {path:'peoplemiss',component: PeopleMiss},
        {path:'house',component: House},
        {path:'housekj',component: HouseKJ},
        {path:'houseqt',component: HouseQT},
        {path:'housezh',component: HouseZH},
        {path:'housezm',component: HouseZM},
      ]
    },
    {path:'/mshd', redirect: '/mshd/people'},
    {path: "/fileupload", component: FileUpload},
    {path: "/requests", component: Request},
  ]
})
