<template>
  <div>
    <h1 class="title">绑定微信</h1>
    <h5 class="sub_title">无授权码请联系管理员开通授权码</h5>
    <XInput class="input" type="text" placeholder="请输入授权码" />
    <Button class="login">登陆</Button>
    <div class="privacy_agreement">
      <span>登录即表示同意</span> <a style="color: #1890FF" href="http://www.baidu.com">《用户隐私服务协议》</a>
    </div>

  </div>
</template>

<script>
import {Cell, Group, XInput} from 'vux'

export default {
  components: {
    Group,
    Cell,
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
  }
}
</script>

<style>

.title {
  margin-left: 30px;
  margin-top: 20px;
}

.sub_title {
  margin-left: 30px;
  color: #404040;
}
.input{
  width: 80%;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
}

.login {
  font-size: 18px;
  border-radius: 25px;
  background-color: #1890FF;
  color: white;
  border: white;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 50px;
  display: block;
}

.privacy_agreement {
  margin-top: 100px;
  text-align: center;
}
</style>
