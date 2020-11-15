import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/base/layout'
import Signin from '@/views/signin'
import Home from '@/views/home'
import Sspp from '@/views/sspp'
import Demo from '@/views/demo'
import NotFound from '@/views/404'
import Temptw from '@/views/temptw'
import Tempmy from '@/views/tempmy'
import Tempth from '@/views/tempth'
import Sspp2 from '@/views/sspp2'
import Fei from '@/views/fei'
import Title from '@/views/title'
import TemplateShow from '@/views/templateShow'
import Image from '@/views/image'
import Market from '@/views/market'

Vue.use(Router)

const router = new Router({
    routes: [
      // 首先是登录页的路由
      {
        path: "/signin",
        name: "Signin",
        meta: {
          title: "Signin"
        },
        component: Signin
      },

      {
        path: '/', 
        redirect: '/home',
        component: Layout,
        children: [
          {
            path: "/home",
            name: "Home",
            meta: {
              title: "Home"
            },
            component: Home
          },
          {
            path: "/sspp",
            name: "sspp",
            meta: {
              title: "sspp"
            },
            component: Sspp
          },
          {
            path: "/sspp2",
            name: "sspp2",
            meta: {
              title: "sspp2"
            },
            component: Sspp2
          },
          {
            path: "/demo",
            name: "demo",
            meta: {
              title: "demo"
            },
            component: Demo
          },
          {
            path: "/temptw",
            name: "temptw",
            meta: {
              title: "temptw"
            },
            component: Temptw
          },
          {
            path: "/tempmy",
            name: "tempmy",
            meta: {
              title: "tempmy"
            },
            component: Tempmy
          },
          {
            path: "/tempth",
            name: "tempth",
            meta: {
              title: "tempth"
            },
            component: Tempth
          },
          {
            path: "/fei",
            name: "fei",
            meta: {
              title: "fei"
            },
            component: Fei
          },
          {
            path: "/title",
            name: "title",
            meta: {
              title: "title"
            },
            component: Title
          },
          {
            path: "/template",
            name: "template",
            meta: {
              title: "template"
            },
            component: TemplateShow
          },
          {
            path: "/image",
            name: "image",
            meta: {
              title: "image"
            },
            component: Image
          },
          {
            path: "/market",
            name: "market",
            meta: {
              title: "market"
            },
            component: Market
          },
        ]
      },  
      
      {
        path: "*",
        name: "404",
        meta: {
          title: "404"
        },
        component: NotFound
      }
    ]
})

export default router