<template>
  <div class="detail">
    <el-card>
      <div slot="header">
        管理员详细信息
      </div>
      <el-table :data="tableData" border>
        <el-table-column label="创建时间" prop="createdTime"width="160px"></el-table-column>
        <el-table-column label="证件号" prop="idnumber"></el-table-column>
        <el-table-column label="姓名" prop="nickname"></el-table-column>
        <el-table-column label="头像">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" class="table-item-img">
          </template>
        </el-table-column>
        <el-table-column label="薪资" prop="job"></el-table-column>
        <el-table-column label="电话" prop="phone"></el-table-column>
        <el-table-column label="性别" prop="sex">
          <template slot-scope="scope">
            {{scope.row.sex ? '男' : '女'}}
          </template>
        </el-table-column>
        <el-table-column label="描述" prop="desc"></el-table-column>
        <el-table-column label="地址" prop="hometown">
          <template slot-scope="scope">
            {{scope.row.hometown ? scope.row.hometown : '未填写'}}
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    name:'',
    data() {
      return {
        tableData: [

        ]
      }
    },
    methods: {
      getTableData() {
        const {id} = this.$route.params
        this.$axios.get(`/admin/user/${id}`).then(res => {
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
