<template>
  <div class="box">
    <div class="view_code">

      <span class="head_title">邀</span>

      <span class="user_name">访客凭证</span>


      <img class="img_code"
           src="https://infinityicon.infinitynewtab.com/user-share-icon/3a9abce9ff5c6d6f6fa07c3eb60a2805.png?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim">

    </div>
    <div class="view_info">
      <div class="item">
        <img class="img" src="../assets/add-account.svg">
        <XInput class="input" title="邀请对象" value="关小羽" readonly="readonly" :show-clear="false">
        </XInput>
      </div>
      <div class="item">
        <img class="img" src="../assets/add-account.svg">
        <XInput class="input" title="邀请人" value="王家卫" readonly="readonly" :show-clear="false">
        </XInput>
      </div>

      <div class="item">
        <img class="img" src="../assets/on-time-shipment.svg">
        <XInput class="input" title="访问时间" value="2020-11-19 10：30" readonly="readonly" :show-clear="false">
        </XInput>
      </div>

      <div class="item">
        <img class="img" src="../assets/on-time-shipment.svg">
        <XInput class="input" title="单位" value="上海趋视信息科技有限公司" readonly="readonly" :show-clear="false">
        </XInput>
      </div>

      <divider style="height: 1px;width:100%"></divider>
      <span style="margin-left: 30px">上海市闵行区紫星路588号1号楼902室</span>

      <span style="padding-top:20px;margin-left: 30px">联系电话：<span style="color: #1890FF" @click="InviteCodeView">13100000000</span></span>

    </div>
  </div>

</template>

<script>
import {Divider, XInput} from "vux";

export default {
  name: "InviteCodeView",
  components: {
    XInput, Divider
  },methods:{
    InviteCodeView:function () {
      this.$router.push("/auditVisit")
    }
  }
}
</script>

<style scoped>

.box {
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: 100% 100%;
  background-color: #1890FF;
}

.view_code {
  border-radius: 20px;
  margin-top: 50px;
  width: 330px;
  height: 360px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
}

.head_title {
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 25px;
  position: absolute;
  text-align: center;
  color: #1890FF;
  font-size: 30px;
  padding: 2px;
  background-color: white;
  top: 25px;
  height: 50px;
  width: 50px;
  display: block;
}

.user_name {
  display: block;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 30px;
  color: #A29C9C;
}

.img_code {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 240px;
  height: 240px;
  display: block;
}

.view_info {
  border-radius: 20px;
  margin-top: 20px;
  width: 330px;
  height: 280px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
}

.img {
  margin-left: 30px;
  vertical-align: middle;
  width: 30px;
  height: 30px;
}

.input {
  display: inline-flex;
  width: 220px;
  font-size: 15px;
}

</style>
