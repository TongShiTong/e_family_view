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
        <!--<el-table-column label="排序" prop="sort" ></el-table-column>-->
        <el-table-column label="分类"prop="type.title" >
        </el-table-column>
        <el-table-column label="操作" width="228px">
          <template slot-scope="scope">
            <!--<el-button type="warning" @click="handleEdit(scope.row._id)">编辑</el-button>-->
            <el-button type="primary" @click="handleDetail(scope.row._id)">查看详情</el-button>
            <el-button type="danger" @click="handledelete(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--分页-->
      <el-pagination
        background
        layout="prev, pager, next"
        :total="count"
        @current-change="pageChange">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        newsData: [],
        page: 1,
        count: 0
      }
    },
    methods: {
      getData() {
        this.$axios.get('/admin/news', {page: this.page, page_size: 5}).then(res => {
          // console.log(res)
          if (res.code == 200) {
            console.log(res)
            this.newsData = res.data
            this.count = res.count
            console.log(this.count)
          } else {
            this.$message.error(res.msg)
          }
        })
      },
      pageChange (page) {
        this.page = page
        this.getData()
      },

      handleDetail(id) {
       this.$router.push(`/layout/newsDetail/${id}`)
      },
      handledelete(id) {
        this.$confirm('此操作将永久删除该新闻信息，是否继续?','警告',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          type:'warning'
        }).then(res => {
          this.$axios.delete(`/admin/news/:${id}`).then(res => {
            if (res.code == 200) {
              this.$message.success(res.msg)
              this.$router.push('/layout/newsList')
              this.getData()
            }
          }).catch(() => {
            this.$message.info(res.msg)
          })
        })
      },
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>

</style>
