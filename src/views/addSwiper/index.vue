<template>
  <div class="swiper-add">
    <el-card>
      <div slot="header">
        添加轮播图
      </div>
      <el-form :data="formData"label-width="100px"  label-position="left">
        <el-form-item label="轮播图标题" required>
          <el-input v-model="formData.title" style="width: 500px"></el-input>
        </el-form-item>
        <el-form-item label="轮播图头图" required>
          <upload v-model="formData.img"></upload>
        </el-form-item>
        <el-form-item label="轮播图新闻" required>
          <el-select v-model="formData.newsId">
            <el-option v-for="(item, index) in newsData" :label="item.title" :value="item._id" :key="index">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="轮播图排序">
          <el-input-number v-model="formData.sort" :min="1" :step="1" size="medium">
          </el-input-number>
        </el-form-item>
        <el-form-item label="是否显示">
          <el-switch v-model="formData.status"
                     :active-value="1"
                     :inactive-value="0"
                     active-text="显示"
                     inactive-text="不显示"
          >
          </el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit" v-if="!isEdit">提交</el-button>
          <el-button type="warning" @click="handleSave" v-else>保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import upload from '@/components/Upload'
    export default {
      name: "index",
      components: {
          upload
      },
      data() {
        return {
          formData: {
            title: '',
            img: '',
            newsId:'',
            sort: '', // 排序
            status: 1 // 控制显示
          },
          newsData: [],
          isEdit: false
        }
      },
      methods: {
        getNews() {
          this.$axios.get('/admin/news').then(res => {
            if (res.code == 200) {
              this.newsData = res.data
            }
          })
        },
        handleSubmit() {
          this.$axios.post('/admin/swiper', this.formData).then(res => {
            if (res.code == 200) {
              this.$message.success(res.msg)
              this.$router.push({name: 'swiperList'})
            }else {
              this.$message.error(res.msg)
            }
          })
        },
        getEditData() {
          const id = this.$route.query.id
          this.$axios.get(`/admin/swiper/${id}`).then(res => {
            if (res.code == 200) {
              this.formData = res.data
            }
          })
        },
        handleSave() {
          const id = this.$route.query.id
          this.$axios.get(`/admin/swiper/${id}`, this.formData).then(res => {
            if(res.code == 200){
              this.$message.success(res.msg)
              this.$router.push({name: 'swiperList'})
            }else {
              this.$message.error(res.msg)
            }
          })
        }
      },
      created() {
        if (this.$route.name == 'swipperEdit'){
          this.isEdit = true
        } else {
          this.isEdit = false
        }
        this.getNews()
        if (this.isEdit) {
          this.getEditData()
        }
      },
      watch: {
        $route(to, foem){
          if (to.name == 'swiperEdit'){
            this.isEdit = true
          }else {
            this.isEdit = false
            this.formData = {
              title: '',
              img: '',
              newsId: '',
              sort: '',
              status: 1
            }
          }
        }
      }
    }
</script>

<style scoped>

</style>
