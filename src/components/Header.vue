<template>
  <div class="header clearfix">
    <el-breadcrumb separator="/" class="fll">
      <el-breadcrumb-item :to="{ path: '/layout/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown class="flr">
      <span class="el-dropdown-link">
        退出登录<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>取消</el-dropdown-item>
        <el-dropdown-item>
          <router-link to="/" style="color: #606266">
            退出登录
          </router-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
  .header {
    /*height: 50px;*/
    /*line-height: 50px;*/
    width: 98%;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
</style>
