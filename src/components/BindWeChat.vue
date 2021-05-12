<template>
  <div>
    <h1 class="title">绑定微信</h1>
    <h5 class="sub_title">无授权码请联系管理员开通授权码</h5>
    <XInput class="input_code" type="text" placeholder="请输入授权码" :show-clear="false" v-model="input_code" ></XInput>
    <Button class="login" @click="login">登陆</Button>
    <div class="privacy_agreement">
      <span>登录即表示同意</span> <a style="color: #1890FF"
                              href="https://truthvison-iacp.obs.cn-east-3.myhuaweicloud.com/privacy/app/shentu/privacy-agreement.html">《用户隐私服务协议》</a>
    </div>

  </div>
</template>

<script>


import {empower} from "../utils/getWechatUserInfo";
import {cookie} from "vux";

const {XInput} = require("vux");

export default {
  components: {
    XInput
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      input_code: ''
    }
  }, methods: {
    login: function () {
      console.log(this.input_code)

      // log(input_code)
      this.$router.push('/Registration')

    },
  }, created() {
    // empower();
    window.localStorage.setItem('accessToken', "eyJhbGciOiJIbWFjU0hBMjU2IiwidHlwIjoiVFYifQ.eyJ1aWQiOiJkYjFlZmEwZC0wOWVmLTRhOGYtOTRmOC0wZDhkMzc1MjU1OWUiLCJuYW1lIjoi5YWs5Y-4566h55CG5ZGYIiwibmJmIjoiMjAyMS0wNS0xMiAxMDo0NjoyOC4xMTYiLCJpYXQiOiIyMDIxLTA1LTEyIDEwOjQ2OjI4LjExNiJ9.adlk0vtEklsAJaMP-8oQuJqRmlwRm1Hqx5Vapysv0Uc")
    // cookie.set('accessToken', "eyJhbGciOiJIbWFjU0hBMjU2IiwidHlwIjoiVFYifQ.eyJ1aWQiOiJkYjFlZmEwZC0wOWVmLTRhOGYtOTRmOC0wZDhkMzc1MjU1OWUiLCJuYW1lIjoi5YWs5Y-4566h55CG5ZGYIiwibmJmIjoiMjAyMS0wNS0xMSAxMDozNTo0Mi40MjIiLCJpYXQiOiIyMDIxLTA1LTExIDEwOjM1OjQyLjQyMiJ9.pQL8dUbJTQBD83j5A9-Gh83o7MbPlkNoxwrbSBpZf0o")
  }


}
</script>

<style scoped>

.title {
  margin-left: 30px;
  margin-top: 20px;
}

.sub_title {
  margin-left: 30px;
  color: #404040;
}

.input_code {
  width: 80%;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}

.login {
  font-size: 18px;
  border-radius: 25px;
  background-color: #1890FF;
  color: white;
  border: white;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 40px;
  display: block;
}

.privacy_agreement {
  margin-top: 70px;
  text-align: center;
}
</style>
