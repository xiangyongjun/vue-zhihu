<template>
  <div id="login">
    <div class="content">
      <div class="box-big">
        <el-image
          style="width: 128px; height: 81px; padding-bottom: 30px;"
          src="https://pic4.zhimg.com/80/v2-a47051e92cf74930bedd7469978e6c08_hd.png"
        ></el-image>
        <el-card class="box-card">
          <el-tabs v-model="activeName">
            <el-tab-pane label="登录" name="first">
              <el-form ref="form" :model="form">
                <el-form-item>
                  <el-input v-model="form.username" placeholder="手机号或邮箱"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input v-model="form.password" placeholder="密码" show-password></el-input>
                </el-form-item>
                <div style="display: flex; justify-content: space-between; flex-wrap: no-wrap; padding-bottom: 22px;">
                  <el-input maxlength="4" v-model="form.code" placeholder="验证码" style="width: 220px;"></el-input>
                  <RandomCode number="4" @CodeHandle="CodeHandle" style="width: 120px; height: 40px;"/>
                </div>
                <el-form-item>
                  <el-button type="primary" style="width: 100%;" @click="LoginHandle()">登录</el-button>
                </el-form-item>
                <p style="color: grey; font-size: 13px;">未注册手机验证后自动登录，注册即代表同意《知乎协议》《隐私保护指引》</p>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="注册" name="second">
              <el-form ref="form" :model="form">
                <el-form-item>
                  <el-input v-model="reg.username" placeholder="手机号或邮箱"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input v-model="reg.password" placeholder="密码" show-password></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input v-model="reg.repeat" placeholder="重复密码" show-password></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" style="width: 100%;" @click="RegisterHandler()">注册</el-button>
                </el-form-item>
                <p style="color: grey; font-size: 13px;">未注册手机验证后自动登录，注册即代表同意《知乎协议》《隐私保护指引》</p>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </div>
    </div>
    <footer>
      <p>© 2020 知乎京 ICP 证 110745 号京 ICP 备 13052560 号 - 1京公网安备 11010802010035 号出版物经营许可证</p>
      <p>侵权举报网上有害信息举报专区儿童色情信息举报专区违法和不良信息举报：010-82716601</p>
    </footer>
  </div>
</template>

<script>
import { Message, Loading } from "element-ui";
import RandomCode from "@/components/RandomCode"

export default {
  name: "Login",
  components: {
    RandomCode
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
        code: ""
      },
      reg: {
        username: '',
        password: '',
        repeat: ''
      },
      code: '',
      activeName: "first"
    }
  },
  methods: {
    CodeHandle(code) {
      this.code = code
    },
    LoginHandle() {
      if (!this.form.username || !this.form.password) {
        Message({
          showClose: true,
          message: "用户名或密码为空，请重新填写",
          type: "error"
        })
        return;
      }
      if (!this.form.code) {
        Message({
          showClose: true,
          message: "验证码不能为空",
          type: "error"
        })
        return
      }
        
      if (this.form.code != this.code) {
        Message({
          showClose: true,
          message: "验证码不正确",
          type: "error"
        })
        return
      }
        
      let loadingInstance = Loading.service({ fullscreen: true, text: '登录中' })
      this.$api.login(this.form.username, this.form.password).then(res => {
        loadingInstance.close()
        if (res.code == 200) this.$router.push({ path: "/" })
      })
    },
    RegisterHandler() {
      if (!this.reg.username || !this.reg.password) {
        Message({
          showClose: true,
          message: "用户名或密码为空，请重新填写",
          type: "error"
        })
        return
      }

      if (this.reg.password != this.reg.repeat) {
        Message({
          showClose: true,
          message: "两次输入的密码不一致",
          type: "error"
        })
        return
      }

      this.$api.register(this.form.username, this.form.password)
    }
  }
}
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(../assets/background.png);
  background-color: #83e2f5;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1 1;
}

.box-big {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 400px;
}

footer {
  text-align: center;
  font-size: 14px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;
  text-shadow: 0 1px 2px #999;
}
</style>
