<template>
<div class="admin-add">
  <el-card>
    <div slot="header">
      添加管理员
    </div>
    <div style="width: 550px; margin: 0 80px">
      <el-form :model="formData" label-width="80px" label-position="left">
        <el-form-item label="上传头像">
          <upload v-model="formData.avatar"></upload>
        </el-form-item>
        <el-form-item label="证件号" required>
          <el-input v-model="formData.idnumber"></el-input>
        </el-form-item>
        <el-form-item label="密码" required v-if="!isEdit">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item v-else>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formData.nickname"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="formData.phone"></el-input>
        </el-form-item>
        <el-form-item label="薪资">
          <el-input v-model="formData.job"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="formData.sex">
            <el-option value="1" label="男"></el-option>
            <el-option value="0" label="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="个性签名">
          <el-input v-model="formData.desc" @keyup.enter.native="handleSubmit"></el-input>
        </el-form-item>
        <el-form-item label="操作">
          <el-button type="primary" @click="handleSubmit" v-if="!isEdit">提交</el-button>
          <el-button type="warning" @click="handleSave" v-else>保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</div>
</template>

<script>
  import upload from "@/components/Upload"
  export default {
    data() {
      return {
        formData: {
          avatar: '',
          idnumber: '',
          password: '',
          nickname: '',
          sex: '',
          desc: '',
          phone: '',
          job: ''
        },
        isEdit: false
      }
    },
    components: {
      upload
    },
    methods: {
      handleSubmit() {
        this.$axios.post('/admin/user', this.formData).then(res => {
          if (res.code == 200) {
            this.$message.success(res.msg)
            this.$router.push('/layout/adminUser')
          }
        })
      },
      handleSave() {
        const id = this.$route.query.id
        this.$axios.patch(`/admin/user/update/${id}`, this.formData).then(res => {
          if (res.code == 200) {
            this.$message.success(res.msg)
            this.$router.push('/layout/adminUser')
          }else {
            this.$message.error(res.msg)
          }
        })
      },
      getEditData() {
        const id = this.$route.query.id
        this.$axios.get(`/admin/user/${id}`).then(res => {
          this.formData = res.data
        })
      },
    },
    created() {
      if (this.$route.name == 'userEdit') {
        this.isEdit = true
      }else {
        this.isEdit = false
      }
      if (this.isEdit) {
        this.getEditData()
      }
    },
    watch: {
      $route(to, from) {
        if (to.name == 'userEdit') {
          this.isEdit = true
        }else {
          this.isEdit = false
          this.formData = {
            avatar: '',
            idnumber: '',
            password: '',
            nickname: '',
            sex: '',
            desc: '',
            phone: '',
            job: ''
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>

