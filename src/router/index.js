import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {
      path: '/layout',
      component: Layout,
      redirect: '/layout/home',
      children: [
        {
          path: 'home',
          meta: {
            title: '首页'
          },
          component: () => import('@/views/Home')
        },
        {
          path: 'adminUser',
          meta: {
            title: '管理员列表'
          },
          component: () => import('@/views/adminUser')
        },
        {
          path: 'addUser',
          meta: {
            title: '添加管理员管理员'
          },
          component: () => import('@/views/addUser')
        },
        {
          path: 'userEdit',
          name: 'userEdit',
          meta: {
            title: '编辑信息'
          },
          component: () => import('@/views/addUser')
        },
        {
          path: 'userDetail/:id',
          name: 'userDetail',
          meta: {
            title: '管理员详情'
          },
          component: () => import('@/views/userDetail')
        },
        {
          path: 'swiperList',
          name: 'swiperList',
          meta: {
            title: '轮播图列表'
          },
          component: () => import('@/views/swiperList')
        },
        {
          path: 'addSwiper',
          name: 'addSwiper',
          meta: {
            title: '添加轮播图'
          },
          component: () => import('@/views/addSwiper')
        },
        {
          path: 'swiperEdit',
          name: 'swiperEdit',
          meta: {
            title: '编辑轮播图'
          },
          component: () => import('@/views/addSwiper')
        },
        {
          path: 'newsList',
          name: 'newsList',
          meta: {
            title: '新闻列表'
          },
          component: () => import('@/views/newsList')
        },
        {
          path: 'addNews',
          name: 'addNews',
          meta: {
            title: '添加新闻'
          },
          component: () => import('@/views/addNews')
        },
        {
          path: 'newsDetail/:id',
          name: 'newsDetail',
          meta: {
            title: '添加新闻'
          },
          component: () => import('@/views/newsDetail')
        }
      ]
    }
  ]
})
