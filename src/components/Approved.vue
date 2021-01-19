<template>

  <div>
    <div class="audit_visit_title">
      <span style="display: block;text-align: center;position: relative;
            top: 50%;transform: translateY(-50%);color:#fff;">申请已通过</span>
    </div>

    <div class="item">
      <img class="img" src="../assets/add-account.svg">
      <cell class="cell" title="访客姓名">王家卫</cell>
    </div>

    <div class="item">
      <img class="img" src="../assets/add-account.svg">
      <cell class="cell" title="访客手机号">13512311233</cell>
    </div>

    <div class="item">
      <img class="img" src="../assets/add-account.svg">
      <cell class="cell" title="访客单位">上海趋视信息科技有限公司</cell>
    </div>

    <div class="item">
      <img class="img" src="../assets/add-account.svg">
      <cell class="cell" title="来访时间">2020-01-01 9：30</cell>
    </div>

    <div class="item">
      <img class="img" src="../assets/add-account.svg">
      <cell class="cell" title="访问事由">面试</cell>
    </div>

    <div class="item">
      <img class="img" src="../assets/add-account.svg">
      <cell class="cell" title="身份证号">340881111111111111111</cell>
    </div>


  </div>
</template>

<script>
import {Cell, XButton} from "vux";

export default {
  name: "Approved",
  components: {
    Cell, XButton
  },

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

</style>
