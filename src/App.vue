<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  .fll {
    float: left;
  }
  .flr {
    float: right;
  }
  .clearfix:after {
    content: '';
    clear: both;
    height: 0;
    width: 0;
    display: block;
  }
  a {
    text-decoration: none;
    color: #c3c3c3;
  }

  //表格全局样式
  .table-item-img {
    width: 80px;
    height: 80px;
  }

  //card全局样式
  .main-wrap .el-card {
    min-height: calc(100vh - 160px);
  }
</style>
