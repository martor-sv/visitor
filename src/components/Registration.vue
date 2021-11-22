<template>
  <div>
    <h1 class="title">预约登记</h1>
    <span style="height: 20px;display: block"></span>
    <div>
      <img class="img" src="../assets/smile.svg">
      <span style="margin-left: 15px">免冠照  &nbsp</span>
      <input title="选择"  ref="getUserImg"  type="file" id="take-picture" accept="image/*" v-on:change="imgUrl">
    </div>
    <div class="item">
      <img class="img" src="../assets/add-account.svg">
      <XInput class="input" title="拜访对象" placeholder="请输入拜访人名称" :show-clear="false" v-model="interviewName">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/company.svg">
      <popup-picker id="companyName" title="拜访单位" :data="[listCompany]" v-model="selectCompanyName" @on-show="onShow"
                    @on-hide="onHide"
                    @on-change="onChange" placeholder="请选择拜访单位"></popup-picker>
    </div>
    <div class="item">
      <img class="img" src="../assets/mobile-phone.svg">
      <XInput class="input" type="tel" title="手机号码" placeholder="请输入被访问人的手机号"  :show-clear="false" v-model="phoneNumber">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/bussiness-man.svg">
      <XInput class="input" title="您的姓名" placeholder="请输入您的姓名" :show-clear="false" v-model="name">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/company.svg">
      <XInput class="input" title="您的单位" placeholder="请输入您的单位" :show-clear="false" v-model="leaderCompanyName">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/company.svg">
      <XInput class="input" title="身份证号" placeholder="请输入身份证号码" :show-clear="false" v-model="idCardSn">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/car-number.svg">
      <XInput class="input" title="车牌号码" placeholder="请输入您的车牌号码" :show-clear="false" v-model="licensePlateList">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/on-time-shipment.svg">
      <!--      <span style="margin-left: 15px">来访时间  &nbsp</span>-->
      <XInput class="input" ref="visitTime" title="来访时间" disabled :placeholder="visitTime"
              @click.native="showPlugin" v-model="visitTime">
      </XInput>
      <!--      <span ref="visitTime" @click.native="showPlugin">选择时间</span>-->
    </div>
    <div class="item">
      <img class="img" src="../assets/on-time-shipment.svg">
      <!--      <span style="margin-left: 15px">来访时间  &nbsp</span>-->
      <XInput class="input" ref="leaveTime" title="离开时间" disabled :placeholder="leaveTime"
              @click.native="showLeavePlugin" v-model="leaveTime">
      </XInput>
      <!--      <span ref="visitTime" @click.native="showPlugin">选择时间</span>-->
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
import {Alert, Checker, CheckerItem, dateFormat, Datetime, PopupPicker, WechatPlugin, XButton, XInput} from 'vux'
import {empower} from "../utils/getWechatUserInfo";
import {Config} from "../api/Config";
import * as wxmp from "../api/wxmp";

// const wxmp = require("../api/wxmp");
// import 'weui-icon/dist/filled/add-friends.css';

export default {
  components: {
    XInput,
    XButton,
    Checker,
    CheckerItem,
    Datetime,
    PopupPicker
  },
  name: "Registration",
  data() {
    return {
      name: '',
      idCardSn: '',
      licensePlateList: '',
      leaderCompanyName: '',
      interviewName: '',
      interviewCompanyName: '',
      view_type: '',
      hourListValue: '',
      visitTime: '',
      leaveTime: '',
      phoneNumber: '',
      listCompany: [],
      selectCompanyName: ["请选择拜访单位"],
      selectCompanyId: '',
      proprietorList: [],
      fileKey: '',
    }
  },
  methods: {
    /**
     * 提交访客申请
     */
    submit: function () {

      // this.$router.push('/invitationRegister')
      // return;
      // 19946068451


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
        "memo": memo,
        "property": {
          "id": "15",
          "name": "访客物业公司",
          "type": "visitor-property"
        },
        "proprietor": {
          "id": this.selectCompanyId,
          "name": this.selectCompanyName[0],
          "type": "visitor-proprietor"
        },
        "interviewee": {
          "name": this.interviewName,
          "mobile": this.phoneNumber
        },
        "leader": {
          "visitorId": window.localStorage.getItem(Config.personId),
          "companyName": this.leaderCompanyName,
          "name": this.name,
          "mobile": "",
          "idCardSn": this.idCardSn,
          "photoKey": this.fileKey
        },
        "beginTime": this.visitTime,
        "endTime": this.leaveTime
      }
      console.log(jsonParams)

      if (this.selectCompanyId == '') {
        this.$vux.toast.text('请选择公司', 'center')
        return
      }
      if (this.fileKey == '') {
        this.$vux.toast.text('请上传图片', 'center')
        return
      }
      wxmp.creatVisitor(jsonParams).then(
        r => {
          if (r['code'] === 200000000) {
            console.log(r)
            console.log("创建成功")
            alert("创建成功")

          }
        }
      )
      // this.$router.push('/invitation**Register')

    },
    getImg: function () {
      console.log(11)
      // WechatPlugin.$wechat.closeWindow();
      // WechatPlugin.$wechat.config({
      //   debug: false,
      //   appId: _data.appId,
      //   timestamp: _data.timestamp,
      //   nonceStr: _data.nonceStr,
      //   signature: _data.signature,
      //   jsApiList: ['scanQRCode']
      // });
      //
      // WechatPlugin.$wechat.scanQRCode({
      //   needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      //   scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
      //   success: function (res) {
      //     var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
      //   }
      // });

      // this.$refs.getUserImg.click()
      // document.getElementById("getUserImg").click()
      // document.getElementById("getUserImg").style.display="inline";
    },
    imgUrl: function () {
      // const that = this
      wxmp.uploadImages(this.$refs.getUserImg.files[0]).then(r => {
        this.fileKey = r["resultList"][0]["fileKey"]
        console.log(r["resultList"][0]["fileKey"])
      },function (result) {
        alert("图片上传错误")
      })

      // console.log(this.$refs.getUserImg.files[0].name)
    },
    showPlugin() {
      const that = this
      this.$vux.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'YYYY-MM-DD HH:mm',
        value: this.visitTime,
        onConfirm(val) {
          that.visitTime = val
          that.$refs.visitTime.value = val;
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
    },
    showLeavePlugin() {
      const that = this
      this.$vux.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'YYYY-MM-DD HH:mm',
        value: this.leaveTime,
        onConfirm(val) {
          // this.$set(this.visitTime,val)
          that.leaveTime = val
          that.$refs.leaveTime.value = val;
          console.log(that.leaveTime)
          console.log('plugin confirm', val)
        },
        onShow() {
          console.log('plugin show')
        },
        onHide() {
          console.log('plugin hide')
        }
      })
    },

    onChange(val) {
      console.log('val change', val)
      this.proprietorList.forEach(p => {
          if (val[0] === p['name']) {
            this.selectCompanyId = p['id']
          }
        }
      )
      console.log(this.selectCompanyId)
      // console.log(this.value1)
    },
    onShow() {
      wxmp.getCompany({}).then(r => {
        this.proprietorList = r['proprietorList']
        r['proprietorList'].forEach(e => {
          this.listCompany.push(e['name'])
          console.log(e)
        })
      })
      console.log('on show')
    },
    onHide(type) {
      console.log('on hide', type)
    }
  }, created() {
    let newData = new Date();
    this.visitTime =  dateFormat(newData)
    newData.setHours(newData.getHours()+2)
    this.leaveTime =  dateFormat(newData)

    // if (localStorage.getItem(Config.accessToken)==null){
      empower("/Registration");
    // }
    // wxmp.getCompany({}).then(r => {
    //   this.proprietorList = r['proprietorList']
    //   r['proprietorList'].forEach(e => {
    //     this.listCompany.push(e['name'])
    //     console.log(e)
    //   })
    // })
  }
}
</script>

<style scoped>

.title {
  margin-left: 30px;
  margin-top: 20px;
}

.item {
  width: 100%;
  display: inline-flex;
}

.getUserImg {
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

/deep/ .weui-cell_access {

}

/deep/ .vux-cell-box {
  width: 80%;
  margin-right: 10%;

}

</style>
