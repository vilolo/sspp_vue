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