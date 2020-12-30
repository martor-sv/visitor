<template>
  <div>
    <h1 class="title">绑定微信</h1>
    <h5 class="sub_title">无授权码请联系管理员开通授权码</h5>
    <XInput class="input_code" type="text" placeholder="请输入授权码" :show-clear="false" v-model="input_code"></XInput>
    <Button class="login" @click="login">登陆</Button>
    <div class="privacy_agreement">
      <span>登录即表示同意</span> <a style="color: #1890FF"
                              href="http://www.silverwind.tech:45080/privacy/app/privacy-agreement.html">《用户隐私服务协议》</a>
    </div>

  </div>
</template>

<script>


import {empower} from "../utils/getWechatUserInfo";
import HttpUtil from "../http/HttpUtil";

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
      msg: 'Hello World!'
    }
  }, methods: {
    login: async function () {
      // alert(this.input_code)
      // console.log(this.input_code)
      const res = await HttpUtil.get("/token","11")


      console.log(res)

      // this.$router.push('/Registration')
      // http.get()
    },
  }, created() {
    empower();
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
