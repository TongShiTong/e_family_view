<template>
    <div class="home">
      欢迎 {{nickname}}，来到党建E家后台管理
    </div>
</template>

<script>
    export default {
      name: "index",
      data() {
        return {
          nickname:''
        }
      },
      // methods: {
      //   getData () {
      //     this.$axios.post('/admin/user/login').then(res => {
      //       console.log(res)
      //     })
      //   }
      // },
      // created() {
      //   this.getData()
      // }
    }
</script>

<style scoped>
 .home {
   margin-top: 200px;
   font-weight: 500;
   font-size: 30px;
   color: #2D9BFF;
   text-align: center;
 }
</style>
