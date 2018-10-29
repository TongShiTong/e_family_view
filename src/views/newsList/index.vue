<template>
  <div class="news-list">
    <el-card>
      <template slot="header">
        新闻列表
      </template>
      <el-table :data="newsData" border>
        <el-table-column label="新闻头图" prop="img" width="150">
          <template slot-scope="scope">
            <img :src="scope.row.img" class="table-item-img">
          </template>
        </el-table-column>
        <el-table-column label="新闻标题" prop="title" ></el-table-column>
        <el-table-column label="作者" prop="author.nickname" ></el-table-column>
        <el-table-column label="排序" prop="sort" ></el-table-column>
        <el-table-column label="分类"prop="type.title" >
        </el-table-column>
        <!--<el-table-column label="操作" width="228px">-->
          <!--<template slot-scope="scope">-->
            <!--<el-button type="warning" @click="handleEdit(scope.row._id)">编辑</el-button>-->
            <!--<el-button type="danger" @click="handledelete(scope.row._id)">删除</el-button>-->
          <!--</template>-->
        <!--</el-table-column>-->
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        newsData: []
      }
    },
    methods: {
      getData() {
        this.$axios.get('/admin/news').then(res => {
          if (res.code == 200) {
            this.newsData = res.data
          } else {
            this.$message.error(res.msg)
          }
        })
      },
      //   handleEdit(id) {
      //     this.$router.push({path: 'swiperEdit', query: {id}})
      //   }
      // },
      // handledelete(id) {
      //   this.$confirm('此操作将永久删除该轮播图信息，是否继续?','警告',{
      //     confirmButtonText:'确定',
      //     cancelButtonText:'取消',
      //     type:'warning'
      //   }).then(res => {
      //     this.$axios.delete(`/admin/swiper/delete/:${id}`).then(res => {
      //       if (res.code == 200) {
      //         this.$message.success(res.msg)
      //         this.$router.push('/layout/swiperList')
      //         this.getTableData()
      //       }
      //     }).catch(() => {
      //       this.$message.info(res.msg)
      //     })
      //   })
      // },
      created() {
        this.getData()
      }
    }
  }
</script>

<style scoped>

</style>
