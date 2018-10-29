<template>
  <div class="side-bar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#1f2d3d"
    >
      <el-menu-item index="home" class="nav-item">
        <router-link to="/layout/home">
          <i class="el-icon-location"></i>
          首页
        </router-link>
      </el-menu-item>
      <el-submenu index="admin-manage">
        <div slot="title" class="title">
          <i class="el-icon-menu"></i>
          管理员管理
        </div>
        <el-menu-item index="/layout/adminUser" class="nav-item">
          <router-link to="/layout/adminUser">
            <i class="el-icon-document"></i>
            管理员列表
          </router-link>
        </el-menu-item>
        <el-menu-item index="/layout/addUser" class="nav-item">
          <router-link to="/layout/addUser">
            <i class="el-icon-setting"></i>
            添加管理员
          </router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="swiper-manage">
        <div slot="title" class="title">
          <i class="el-icon-menu"></i>
          新闻管理
        </div>
        <el-menu-item index="/layout/newsList" class="nav-item">
          <router-link to="/layout/newsList">
            <i class="el-icon-document"></i>
            新闻列表
          </router-link>
        </el-menu-item>
        <el-menu-item index="/layout/addNews" class="nav-item">
          <router-link to="/layout/addNews">
            <i class="el-icon-setting"></i>
            添加新闻
          </router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="news-manage">
        <div slot="title" class="title">
          <i class="el-icon-menu"></i>
          轮播图管理
        </div>
        <el-menu-item index="/layout/swiperList" class="nav-item">
          <router-link to="/layout/swiperList">
            <i class="el-icon-document"></i>
            轮播图列表
          </router-link>
        </el-menu-item>
        <el-menu-item index="/layout/addSwiper" class="nav-item">
          <router-link to="/layout/addSwiper">
            <i class="el-icon-setting"></i>
            添加轮播图
          </router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
    export default {
      name: "Sidebar",
      methods: {
        handleOpen(key, keyPath) {
          // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          // console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped lang="scss">
 .side-bar {
   min-height: 100vh;
   border-right: 1px solid #f1f1f1;
   background: #304156;

   .title {
     color: #c3c3c3;
   }

   .el-menu {
     overflow: hidden;
   }

   .nav-item {
     display: block;
     background: #1f2d3d !important;
   }
   /deep/ {
     .el-menu {
       border-right:none;
     }
   }
 }
</style>
