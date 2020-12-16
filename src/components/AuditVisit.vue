<template>

  <div>
    <div class="audit_visit_title">
      <span style="display: block;text-align: center;position: relative;
            top: 50%;transform: translateY(-50%);color:#fff;">预约拜访登记</span>
    </div>

    <div class="item">
      <img class="img" src="../assets/add-account.svg">
      <span>免冠照</span>
    </div>
    <div class="item">
      <img class="img" src="../assets/add-account.svg">
      <cell class="cell" title="访客姓名">王家卫</cell>
    </div>
    <div class="item">
      <img class="img" src="../assets/mobile-phone.svg">
      <cell class="cell" title="访客手机">13100000000</cell>
    </div>
    <div class="item">
      <img class="img" src="../assets/company.svg">
      <cell class="cell" title="访客单位">上海趋视信息科技有限公司</cell>
    </div>
    <div class="item">
      <img class="img" src="../assets/on-time-shipment.svg">
      <cell class="cell" title="来访时间">2020-11-18 10：00</cell>
    </div>
    <div class="item">
      <img class="img" src="../assets/help.svg">
      <cell class="cell" title="访问事由">商务</cell>
    </div>
    <div class="item">
      <img class="img" src="../assets/coupons-fill.svg">
      <cell class="cell" title="身份证号">340881888811110115</cell>
    </div>
    <div class="item">
      <img class="img" src="../assets/bussiness-man.svg">
      <cell class="cell" title="被访人信息">章北海</cell>
    </div>

    <div class="div_button">
      <XButton class="reject" @click.native="reject">拒绝</XButton>
      <XButton class="accept" @click.native="accept">通过</XButton>
    </div>


  </div>

</template>

<script>
import {Cell, XButton} from "vux";

export default {
  name: "AuditVisit",
  components: {
    Cell, XButton
  }, methods: {
    reject: function () {
      alert("拒绝")
    }, accept: function () {
      alert("通过")
    }
  }
}
</script>

<style scoped>

.audit_visit_title {
  width: 350px;
  height: 80px;
  margin: 20px auto 0;
  background-color: #1890FF;
  vertical-align: middle;
  font-size: 20px;
  border-radius: 5px;
}

.item {
  display: inline-flex;
}

.img {
  display: inline-block;
  margin-left: 30px;
  transform: translateY(20%);
  width: 30px;
  height: 30px;
}

.cell {
  width: 280px;
}

.reject {
  width: 150px;
  text-align: center;
  color: red;
  border: 1px solid red;
}

.accept {
  width: 150px;
  text-align: center;
  background-color: #1890FF;
  color: white;
}

.div_button {
  margin-top: 20px;
  display: flex;
  position: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
}

.weui-btn + .weui-btn {
  margin-top: 0;
}

</style>
