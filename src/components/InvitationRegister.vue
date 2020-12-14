<template>
  <div>
    <h1 class="title">邀请登记</h1>
    <span style="height: 20px;display: block"></span>
    <div>
      <img class="img" src="../assets/smile.svg">
      <span style="margin-left: 15px">免冠照  &nbsp</span>
      <input type="file" style="margin-left: 15px">
      <!--      <XInput  type='file'></XInput>-->
    </div>
    <div class="item">
      <img class="img" src="../assets/add-account.svg">
      <XInput class="input" title="邀请对象" placeholder="请输入邀请对象名称" :show-clear="false">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/company.svg">
      <XInput class="input" title="邀请对象单位" placeholder="请输入邀请对象单位名称" :show-clear="false">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/mobile-phone.svg">
      <XInput class="input" title="手机号码" placeholder="请输入您的手机号码" :show-clear="false">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/company.svg">
      <XInput class="input" title="身份证号" placeholder="请输入被邀请的人身份证号" :show-clear="false">
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
    <div style="margin-top: 10px;margin-bottom: 10px">
      <span style="margin-left: 30px;">邀请人 ｜ </span>
      <span>王家卫</span>
    </div>
    <div style="margin-top: 10px;margin-bottom: 10px">
      <span style="margin-left: 30px">邀请单位 ｜ </span>
      <span>上海趋视信息科技有限公司</span>
    </div>


    <XButton class="submit">提交</XButton>
  </div>

</template>

<script>
import {Checker, CheckerItem, XButton, XInput} from 'vux'
import 'weui-icon/dist/filled/add-friends.css';

export default {
  components: {
    XInput,
    XButton,
    Checker, CheckerItem
  },
  name: "InvitationRegister"
}
</script>

<style scoped>

.title {
  margin-left: 30px;
  margin-top: 20px;
}

.item {
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

.vux-checker-box{
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
