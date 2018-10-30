<template>
    <div>
      <el-card class="card">
        <div slot="header">
          管理员列表
        </div>
        <el-table :data="tableData" border>
          <el-table-column label="姓名" prop="nickname"width="140px"></el-table-column>
          <el-table-column label="手机" prop="phone"width="160px"></el-table-column>
          <el-table-column label="头像" prop="avatar"width="150px">
            <template slot-scope="scope">
              <img :src="scope.row.avatar" alt="" class="table-item-img">
            </template>
          </el-table-column>
          <el-table-column label="性别" prop="sex" width="80px">
            <template slot-scope="scope">
              {{scope.row.sex ? '男' : '女'}}
            </template>
          </el-table-column>
          <el-table-column label="个性签名" prop="desc" width="200px"></el-table-column>
          <el-table-column label="操作">
            <div slot-scope="scope"class="operation">
              <el-button type="primary" size="mini"@click="handleDetail(scope.row._id)">查看详细</el-button>
              <el-button type="warning"size="mini"@click="handleEdit(scope.row._id)">编辑</el-button>
              <el-button type="danger" size="mini" @click="deleteData(scope.row._id)">删除</el-button>
            </div>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
</template>

<script>
    export default {
      name: "index",
      data () {
        return {
          tableData: []
        }
      },
      methods: {
        getData () {
          this.$axios.get('/admin/user').then(res => {
            // console.log(res)
            if (res.code == 200) {
              this.tableData = res.data
            }
          })
        },
        deleteData (id) {
          this.$confirm('此操作将永久删除该管理员信息，是否继续?','警告',{
            confirmButtonText:'确定',
            cancelButtonText:'取消',
            type:'warning'
          }).then(res => {
            this.$axios.delete(`/admin/user/delete?id=${id}`).then(res => {
              if (res.code == 200) {
                this.$message.success(res.msg)
                this.getData()
              }
            }).catch(() => {
              this.$message.info(res.msg)
            })
          })
        },
        handleEdit(id) {
          this.$router.push({name: 'userEdit', query: {id}})
        },
        handleDetail(id) {
          this.$router.push(`/layout/userDetail/${id}`)
        }
      },
      created() {
        this.getData()
      }
    }
</script>

<style scoped lang="scss">
  .card {
    .operation {
      display: flex;
      justify-content: space-between;
    }
  }

</style>
