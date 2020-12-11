<template>
  <div>
    <h1 class="title">预约登记</h1>
    <span style="height: 20px;display: block"></span>
    <div>
      <img class="img" src="../assets/smile.svg">
      <span>免冠照</span>
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
      <img class="img" src="../assets/company.svg">
      <XInput class="input" title="您的姓名" placeholder="请输入您的姓名" :show-clear="false">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/company.svg">
      <XInput class="input" title="手机号码" placeholder="请输入您的手机号码" :show-clear="false">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/company.svg">
      <XInput class="input" title="您的单位" placeholder="请输入您的单位" :show-clear="false">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/company.svg">
      <XInput class="input" title="车牌号码" placeholder="请输入您的车牌号码" :show-clear="false">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/company.svg">
      <XInput class="input" title="来访时间">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/company.svg">
      <span style="margin-left: 15px">来访事由</span>

    </div>

    <XButton class="submit">提交</XButton>
  </div>

</template>

<script>
import {XButton, XInput} from 'vux'
import 'weui-icon/dist/filled/add-friends.css';

export default {
  components: {
    XInput,
    XButton
  },
  name: "Registration"
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

</style>
