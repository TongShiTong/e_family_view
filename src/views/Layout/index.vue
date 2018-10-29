<template>
  <div>
    <el-row>
      <el-col :span="5"style="height: 100vh">
        <SideBar></SideBar>
      </el-col>
      <el-col :span="19"style="height: 100vh;overflow-y: scroll">
        <com-header></com-header>
        <AppMain></AppMain>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import comHeader from '@/components/Header'
  import SideBar from '@/components/SideBar'
  import AppMain from './AppMain'
    export default {
      name: "index",
      components: {
        comHeader,
        SideBar,
        AppMain
      },
    }
</script>

<style scoped>

</style>
