<template>
  <div class="box">
    <div class="view_code">

      <img class="head_img"
           src="https://infinityicon.infinitynewtab.com/user-share-icon/3a9abce9ff5c6d6f6fa07c3eb60a2805.png?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim">

      <span class="user_name">{{this.userName}}</span>

      <span style="display: block;text-align: center;color:#A29C9C;margin-top: 10px">访客凭证</span>

      <div class="img_code" ref="qrCodeUrl"></div>

    </div>
    <div class="view_info">
      <div class="item">
        <img class="img" src="../assets/add-account.svg">
        <XInput class="input" title="被访人" :value="intervieweeName" readonly="readonly" :show-clear="false">
        </XInput>
      </div>
      <div class="item">
        <img class="img" src="../assets/on-time-shipment.svg">
        <XInput class="input" title="登记时间" :value="createTime" readonly="readonly" :show-clear="false">
        </XInput>
      </div>
      <divider style="height: 1px;width:100%"></divider>
      <span style="margin-left: 30px">上海市闵行区紫星路588号1号楼902室</span>
      <span style="padding-top:20px;margin-left: 30px">联系电话：<span style="color: #1890FF" @click="nativetoinvite">{{ this.mobile }}</span></span>

    </div>

  </div>
</template>

<script>
import {Divider, Scroller, XInput} from "vux";
import QRCode from 'qrcodejs2'
import * as wxmp from "../api/wxmp";

export default {
  name: "CodeView",
  components: {
    XInput, Divider, Scroller,
  },
  data(){
    return{
      "mobile":'',
      "userName":'',
      "intervieweeName":'',
      "createTime":'',
    }
  },
  methods: {
    nativetoinvite: function () {
      // this.$router.push("/inviteCodeView")
    }, creatQrCode() {
      const img_code = new QRCode(this.$refs.qrCodeUrl, {
        text: 'https://www.baidu.com',
        width: 240,
        height: 240,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      });
    }
  }, mounted() {
    wxmp.getVisitorCode().then(r => {
      console.log(r)
      console.log(r["papersList"][0])

      this.userName=r["papersList"][0]['visitor']['name']
      new QRCode(this.$refs.qrCodeUrl, {
        text: r["papersList"][0]['qrCode']['metadata'],
        width: 240,
        height: 240,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      });

      wxmp.getJobDetail({"jobIds":r["papersList"][0]['jobId']}).then(r=>{
        console.log(r)
        this.mobile=r['job']['interviewee']['mobile']
        this.intervieweeName=r['job']['interviewee']['name']
        this.createTime=r['job']['createTime'].substr(0,10)
      })

    })

    // this.creatQrCode();
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

.head_img {
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 5px;
  position: absolute;
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
  height: 200px;
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
  width: 180px;
}

</style>
