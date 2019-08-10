import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index'
import Image from '@/views/image'
import Title from '../views/title'
import Goods from '../views/goods'
import Resource from '../resourceVue/resourceVue'
import VueMethods from '@/VueMethods/VueMethods'
import Pages from "@/Pages/Pages"
import Home from "@/components/home" 
import Search from "@/components/search"
import Member from "@/components/member"
import Shopping from "@/components/shopping"
import News from "@/components/subcomponents/news/news"
import newsinfo from "@/components/subcomponents/news/newsinfo"
import Imges from "@/components/subcomponents/images/images"
import Shop from "@/components/subcomponents/shop/shop"
import Shopinfo from "@/components/subcomponents/shop/shopinfo"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/home/news',
      name: 'news',
      component: News
    },
    {
      path: '/home/newsInfo/:id',
      name: 'newsinfo',
      component: newsinfo
    },
    {
      path:"/home/images",
      name:"iamges",
      component:Imges
    },
    {
      path:"/home/shop",
      name:"shop",
      component:Shop
    },
    {
      path:"/home/shopinfo/:id",
      name:"Shopinfo",
      component:Shopinfo
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },
    {
      path: '/pages',
      name: 'pages',
      component: Pages
    },
    {
      path:'/index', //动态路由 页面的路径匹配后才能进入到index页面 是由<router-view/>来承担的，为入口（一级路由）
      name:'index',
      component:Index,
      children:[
        {
          path:'title',
          name:'title',
          component:Title
        },
        {
          path:'image',
          name:'image',
          component:Image
        }
      ]
    },
    {
      path:'/good',
      name:'good',
      component:Goods,
      children:[
        {
          path:'resource',
          name:"resource",
          component:Resource
        }
      ]
    },
    {
      path:'/vueMethods',
      name:'vueMethods',
      component:VueMethods
    }
  ],
  linkActiveClass:'mui-active'
})
