<template>
  <div class="detail">
    <el-card>
      <div slot="header">
        新闻详细信息
      </div>
      <el-table :data="tableData" border>
        <el-table-column label="创建时间" prop="createdTime"width="160px"></el-table-column>
        <el-table-column label="新闻标题" prop="title"></el-table-column>
        <el-table-column label="作者" prop="author.nickname"></el-table-column>
        <el-table-column label="新闻头图"prop="img">
          <template slot-scope="scope">
            <img :src="scope.row.img" class="table-item-img">
          </template>
        </el-table-column>
        <el-table-column label="分类" prop="type.title"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [

        ]
      }
    },
    methods: {
      getTableData() {
        const {id} = this.$route.params
        this.$axios.get(`/admin/news/${id}`).then(res => {
          console.log(res)
          let time = new Date(res.data.createTime)
          let year = time.getFullYear()
          let month = time.getMonth() + 1
          let day = time.getDate()
          let hour = time.getHours()
          let minute = time.getMinutes()
          let second = time.getSeconds()
          res.data.createdTime = `${year}.${month}.${day} ${hour}:${minute}:${second}`
          this.tableData = [res.data]
        })
      }
    },
    created() {
      this.getTableData()
    }
  }
</script>

<style scoped>
</style>
