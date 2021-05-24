<template>
  <div class="box">
    <h1 class="title_i">邀请登记</h1>
    <span style="height: 20px;display: block"></span>
    <div>
      <img class="img" src="../assets/smile.svg">
      <span style="margin-left: 15px">免冠照  &nbsp</span>
      <input class="getUserImg" ref="getUserImg" type="file" style="margin-left: 15px" v-on:change="imgUrl" multiple
             accept="image/png,image/jpeg,image/gif,image/jpg">
      <!--      <XInput  type='file'></XInput>-->
    </div>
    <div class="item">
      <img class="img" src="../assets/add-account.svg">
      <XInput class="input" title="邀请对象" placeholder="请输入邀请对象姓名" :show-clear="false" v-model="name">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/company.svg">
      <XInput style="width: 70%" class="input" title="邀请对象单位" placeholder="请输入邀请对象单位名称" :show-clear="false" v-model="leaderCompanyName">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/mobile-phone.svg">
      <XInput class="input" title="手机号码" placeholder="请输入邀请对象的手机号码" :show-clear="false">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/company.svg">
      <XInput class="input" title="身份证号" placeholder="请输入邀请对象的身份证号" :show-clear="false">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/on-time-shipment.svg">
      <XInput class="input" ref="visitTime" title="来访时间" disabled :placeholder="visitTime" @click.native="showPlugin" v-model="visitTime">
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
      <span>{{ proprietor["name"] }}</span>
    </div>
    <div style="margin-top: 10px;margin-bottom: 10px">
      <span style="margin-left: 30px">邀请单位 ｜ </span>
      <span>{{ proprietor["name"] }}</span>
    </div>


    <XButton class="submit" @click.native="codeView">提交</XButton>
  </div>

</template>

<script>
import {Checker, CheckerItem, dateFormat, XButton, XInput} from 'vux'
import * as wxmp from "../api/wxmp";
import {Config} from "../api/Config";
// import 'weui-icon/dist/filled/add-friends.css';

export default {
  components: {
    XInput,
    XButton,
    Checker, CheckerItem
  },
  name: "InvitationRegister",
  data() {
    return {
      name: '',
      leaderCompanyName: '',
      view_type: '',
      visitTime: '',
      fileKey: '',
      proprietor: '',
    }
  },
  methods: {
    codeView: function () {

      let memo;
      switch (this.view_type.toString()) {
        case "1": {
          memo = "商务";
          break;
        }
        case "2": {
          memo = "拜访";
          break;
        }
        case "3": {
          memo = "面试";
          break;
        }
      }

      let jsonParams = {
        "licensePlateList": this.licensePlateList,
        "leader": {
          "companyName": this.leaderCompanyName,
          "idCardSn": this.idCardSn,
          "name": this.name,
        },
        "inviter": {
          "name": localStorage.userName,
          "company": {
            "name": localStorage.companyName
          }
        },
        "beginTime": this.visitTime,
        "memo":memo
      }

      console.log(jsonParams)

      // this.$router.push('/codeView')
    },
    imgUrl(){
      wxmp.uploadImages(this.$refs.getUserImg.files[0]).then(r => {
        this.fileKey = r["resultList"][0]["fileKey"]
        console.log(r["resultList"][0]["fileKey"])
      })
    },
    showPlugin() {
      const that = this
      this.$vux.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'YYYY-MM-DD HH:mm',
        value: '2021-01-01 00:00',
        onConfirm(val) {
          // this.$set(this.visitTime,val)
          that.visitTime = val
          that.$refs.visitTime.value=val;
          console.log(that.visitTime)
          console.log('plugin confirm', val)
        },
        onShow() {
          console.log('plugin show')
        },
        onHide() {
          console.log('plugin hide')
        }
      })
    }
  },
  created() {
    let newData = new Date();
    this.visitTime =  dateFormat(newData)
    wxmp.getCompany({"ids":localStorage.getItem(Config.personId)}).then(r => {
      this.proprietor = r['proprietor']

    })
  }
}
</script>

<style scoped>

.title_i {
  margin-left: 30px;
  margin-top: 20px;
}

.item {

}

.getUserImg{
  width: 50%;
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
