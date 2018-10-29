<template>
  <div class="swiper-list">
    <el-card>
      <template slot="header">
        轮播图列表
      </template>
      <el-table :data="tableData" border>
        <el-table-column label="轮播图头图" prop="img" width="150">
          <template slot-scope="scope">
            <img :src="scope.row.img" class="table-item-img">
          </template>
        </el-table-column>
        <el-table-column label="轮播图标题" prop="title" width="200"></el-table-column>
        <el-table-column label="新闻标题" prop="newsId.title" width="200"></el-table-column>
        <el-table-column label="排序" prop="sort" width="120"></el-table-column>
        <el-table-column label="是否显示"prop="status" width="120">
          <template slot-scope="scope">
            {{scope.row.status ? '显示' : '不显示'}}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="228px">
          <template slot-scope="scope">
            <el-button type="warning" @click="handleEdit(scope.row._id)">编辑</el-button>
            <el-button type="danger" @click="handledelete(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
    export default {
      name: "index",
      data() {
        return {
          tableData: []
        }
      },
      methods: {
        getTableData() {
          this.$axios.get('/admin/swiper').then(res => {
            if (res.code == 200) {
              this.tableData = res.data
            }else {
              this.$message.error(res.msg)
            }
          })
        },
        handleEdit(id) {
          this.$router.push({path: 'swiperEdit', query: {id}})
        }
      },
      handledelete(id) {
        this.$confirm('此操作将永久删除该轮播图信息，是否继续?','警告',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          type:'warning'
        }).then(res => {
          this.$axios.delete(`/admin/swiper/delete/:${id}`).then(res => {
            if (res.code == 200) {
              this.$message.success(res.msg)
              this.$router.push('/layout/swiperList')
              this.getTableData()
            }
          }).catch(() => {
            this.$message.info(res.msg)
          })
        })
      },
      created() {
        this.getTableData()
      }
    }
</script>

<style scoped>

</style>
