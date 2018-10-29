<template>
  <div class="news-add">
    <el-card>
      <div slot="header">
        添加新闻
      </div>
      <el-form :model="formData"label-width="100px"  label-position="left">
        <el-form-item label="新闻标题" required>
          <el-input v-model="formData.title" style="width: 500px"></el-input>
        </el-form-item>
        <el-form-item label="新闻作者" required>
          <el-select v-model="formData.author">
            <el-option v-for="(item, index) in userData" :key="index" :value="item._id" :label="item.nickname"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="新闻头图" required>
          <upload v-model="formData.img"></upload>
        </el-form-item>
        <el-form-item label="新闻内容" required>
          <quill-editor
            v-model="formData.content"
            ref="myQuillEditor"
            :options="editorOption"
            @change="handleChange($event)"
          >
          </quill-editor>
        </el-form-item>
        <el-form-item label="新闻分类" required>
          <el-select v-model="formData.type">
            <el-option v-for="(item, index) in categoryData" :key="index" :value="item._id" :label="item.title"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAdd">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import axios from 'axios'
  import 'quill/dist/quill.snow.css'
  import {quillEditor,Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
  import upload from '@/components/Upload'
  Quill.register('modules/ImageExtend', ImageExtend)
  export default {
    name: "index",
    components: {
      upload,
      quillEditor,
    },
    data() {
      return {
        formData: {
          title: '',
          content: '',
          contentText: '',
          author: '',
          type: '',
          img: ''
        //  http://oowantxlb.bkt.clouddn.com/upload/rear/c132c80c8549b82b77f3be4fd9ed0891.png
        },
        token: '',
        userData: [],
        categoryData: [],
        editorOption: {
          modules: {
            ImageExtend: {
              loading: true,
              name: 'file',
              action: 'https://upload-z1.qiniup.com',
              response: (res) => {
                return res.url
              },
              change: (xhr, formData) => {
                formData.append('token', this.token)
              }
            },
            toolbar: {
                container: container,
                handlers: {
                  'image': function () {
                    QuillWatch.emit(this.quill.id)
                  }
                }
              }
          }
        },
      }
    },
    methods: {
      getUserData() {
        this.$axios.get('/admin/user').then(res => {
          if (res.code == 200) {
            this.userData = res.data
          }
        })
      },
      getToken() {
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
            this.token = res.data.data
        })
      },
      handleChange({quill, content, text}) {
        this.formData.contentText = text
      },
      getType() {
        this.$axios.get('/admin/category').then(res => {
          if(res.code = 200) {
            this.categoryData = res.data
          }
        })
      },
      handleAdd() {
        this.$axios.post('/admin/news', this.formData).then(res => {
          if (res.code == 200) {
            this.$message.success(res.msg)
            this.$router.push('/layout/newsList')
          } else {
            this.$message.info(res.msg)
          }
        })
      }
    },
    created() {
      this.getUserData()
      this.getToken()
      this.getType()
    }
  }
</script>

<style scoped lang="scss">
  /deep/ {
  .ql-container {
    min-height: 200px;
  }
  }
</style>
