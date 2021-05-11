<template>
  <div>
    <h1 class="title">预约登记</h1>
    <span style="height: 20px;display: block"></span>
    <div>
      <img class="img" src="../assets/smile.svg">
      <span style="margin-left: 15px">免冠照  &nbsp</span>
      <!--      <XInput class="input" title="免冠 照" placeholder="请输入拜访人名称" :show-clear="false" v-model="interviewName">  </XInput>-->
      <input class="getUserImg" ref="getUserImg" type="file" style="margin-left: 15px" v-on:change="imgUrl" multiple
             accept="image/png,image/jpeg,image/gif,image/jpg">
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
      <img class="img" src="../assets/bussiness-man.svg">
      <XInput class="input" title="您的姓名" placeholder="请输入您的姓名" :show-clear="false" v-model="name">
      </XInput>
    </div>
    <div class="item">
      <img class="img" src="../assets/mobile-phone.svg">
      <XInput class="input" type="tel" title="手机号码" placeholder="请输入您的手机号码" :show-clear="false" v-model="phoneNumber">
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
      <XInput class="input" ref="visitTime" title="来访时间" disabled placeholder="2020-01-01 00:00"
              @click.native="showPlugin" v-model="visitTime">
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
import {Checker, CheckerItem, Datetime, PopupPicker, XButton, XInput} from 'vux'
import HttpUtil from "../http/HttpUtil";
import {Common} from "../api/common";

const wxmp = require("../api/wxmp");
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
      visitTime: '2020-01-01 00:00',
      phoneNumber: '',
      listCompany: [],
      selectCompanyName: ["请选择拜访单位"],
      selectCompanyId: '',
      proprietorList: [],
    }
  },
  methods: {
    /**
     * 提交访客申请
     */
    submit: function () {
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
          "name": "张",
          "mobile": "19946068451"
        },
        "leader": {
          "visitorId": "1000086",
          "companyName": this.leaderCompanyName,
          "name": this.name,
          "mobile": this.phoneNumber,
          "idCardSn": this.idCardSn,
          "photoKey": "dev//visitor-service/2021-04-22/15/10065/2021-04-22/ddIFHM9Z4EakREwX"
        },
        "beginTime": this.visitTime,
        "endTime": "2028-5-11 18:00"
      }
      console.log(jsonParams)

      HttpUtil.post_json(Common.job_form, jsonParams).then(
        r => {
          if (r['code'] === 200000000) {
            console.log("创建成功")
          }
        }
      )

      // this.$router.push('/invitationRegister')

    },
    getImg: function () {
      this.$refs.getUserImg.click()
      // document.getElementById("getUserImg").click()
      // document.getElementById("getUserImg").style.display="inline";
    },
    imgUrl: function () {
      // console.log("11")
      // console.log(this.$refs.getUserImg.files[0].name)
      // console.log(this.$refs.getUserImg.files)
      // this.$refs.visitTime.value = "123";
      // console.log(this.$refs.visitTime)

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
      console.log('on show')
    },
    onHide(type) {
      console.log('on hide', type)
    }
  }, created() {
    HttpUtil.get(Common.proprietor_url, {}).then(r => {
      this.proprietorList = r['proprietorList']
      r['proprietorList'].forEach(e => {
        this.listCompany.push(e['name'])
        console.log(e)
      })
    })
  }
}
</script>

<style scoped>

.title {
  margin-left: 30px;
  margin-top: 20px;
}

.item {
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

</style>
