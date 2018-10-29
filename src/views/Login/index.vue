<template>
  <div class="login">
    <div class="login-box">
      <h2>党建E家后台管理系统</h2>
      <el-form :model="formData">
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名" v-model="formData.idnumber"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码"type="password" v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handelLogin"class="block-btn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          formData: {
            idnumber: '',
            password: '',
          }
        }
      },
      methods: {
        handelLogin() {
          this.$axios.post('/admin/user/login', this.formData)
            .then(res => {
              if(res.code == 200) {
                this.$message.success(res.msg)
                this.$router.push('/layout/home')
              }else {
                this.$message.info(res.msg)
              }
            })
        }
      }
    }
</script>

<style scoped lang="scss">
  .login {
    overflow: hidden;
    height: 100vh;
    background: #2d3a4b;

    h2 {
      color: #c3c3c3;
      text-align: center;
      font-weight: 400;
    }

    .login-box {
      padding: 30px;
      width: 500px;
      height: 400px;
      border-radius: 6px;
      box-sizing: border-box;
      border: 1px solid #2d3a4b;
      margin: 160px auto;
    }

    /deep/ .el-input__inner {
      background: #2d3333;
      border: none;
    }

    /deep/ .el-form-item__label {
      color: #c3c3c3;
    }

    .block-btn {
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  }
</style>
