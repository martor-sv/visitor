<template>
  <div>
    <h1 class="title">预约登记</h1>
    <span style="height: 20px;display: block"></span>
    <div style="">
      <img class="img" src="../assets/smile.svg">
      <span style="margin-left: 15px">免冠照  &nbsp</span>
      <img style="width: 48px;margin-left: 40px" src="../assets/camera-fill.svg" @click="getImg">
      <input id="getUserImg" type="file" style="margin-left: 15px">
      <!--      <XInput  type='file'></XInput>-->
    </div>
    <div class="item">
      <img class="img" src="../assets/add-account.svg">
      <XInput class="input" title="拜访对象" placeholder="请输入拜访人名称" :show-clear="false">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/company.svg">
      <XInput class="input" title="拜访单位" placeholder="请输入拜访单位名称" :show-clear="false">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/bussiness-man.svg">
      <XInput class="input" title="您的姓名" placeholder="请输入您的姓名" :show-clear="false" v-model="name">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/mobile-phone.svg">
      <XInput class="input" title="手机号码" placeholder="请输入您的手机号码" :show-clear="false">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/company.svg">
      <XInput class="input" title="您的单位" placeholder="请输入您的单位" :show-clear="false">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/car-number.svg">
      <XInput class="input" title="车牌号码" placeholder="请输入您的车牌号码" :show-clear="false">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/on-time-shipment.svg">
      <XInput class="input" title="来访时间">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/help.svg">
      <span style="margin-left: 15px">来访事由</span>

      <checker v-model="view_type" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item value="1">商务</checker-item>
        <checker-item value="2">会议</checker-item>
        <checker-item value="3">面试</checker-item>

      </checker>

    </div>

    <XButton class="submit" @click.native="submit">提交</XButton>
  </div>

</template>

<script>
import {Checker, CheckerItem, XButton, XInput} from 'vux'

const wxmp = require("../api/wxmp");
// import 'weui-icon/dist/filled/add-friends.css';

export default {
  components: {
    XInput,
    XButton,
    Checker, CheckerItem
  },
  name: "Registration",
  data() {
    return {
      name: ''
    }
  },
  methods: {
    submit: function () {
      let params = new Map();
      params["name"] = this.name

      console.log(this.name)

      alert(this.name)
      // wxmp.creatVisitor(params)


      // alert("123")
      // this.$router.push('/invitationRegister')
      // alert("123")
    }, getImg: function () {
      // alert()

      document.getElementById("getUserImg").click()
    }
  },
}
</script>

<style scoped>

.title {
  margin-left: 30px;
  margin-top: 20px;
}

.item {
}

#getUserImg {
  display: none;
}

.img {
  margin-left: 30px;
  vertical-align: middle;
  width: 30px;
  height: 30px;
}

.input {
  display: inline-flex;
}

.submit {
  margin-top: 20px;
  width: 90%;
  background-color: #1890FF;
  color: white;
  border: white;
  border-radius: 25px;
}

.vux-checker-box {
  display: inline-block;
  margin-left: 15px;
}

.demo1-item {
  font-size: 15px;
  text-align: center;
  border: 1px solid #ececec;
  color: black;
  padding: 5px 15px;
}

.demo1-item-selected {
  color: white;
  background-color: #1890FF;
  border: 1px solid green;
}

</style>
