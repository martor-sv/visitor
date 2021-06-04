<template>
  <div>
    <h1>页面导航</h1>

    <XButton type="primary" action-type="button" @click.native="binding"> 绑定微信</XButton>

    <XButton type="primary" action-type="button" @click.native="registration">预约登记</XButton>

    <XButton type="primary" action-type="button" @click.native="invitationRegister">邀请登记</XButton>

    <XButton type="primary" action-type="button" @click.native="inviteCodeView">邀请访客证</XButton>

    <XButton type="primary" action-type="button" @click.native="codeView">访客证</XButton>

    <XButton type="primary" action-type="button" @click.native="auditVisit">审核</XButton>

    <XButton type="primary" action-type="button" @click.native="approved">审核通过</XButton>

  </div>


</template>

<script>
import {XButton} from "vux";
import {empower} from "../utils/getWechatUserInfo";
import {Config} from "../api/Config";

export default {
  name: "NavigerView",
  components: {
    XButton
  }, methods: {

    binding: function () {
      this.$router.push('/Home')
    },
    registration: function () {
      this.$router.push('/Registration')
    },
    inviteCodeView: function () {
      this.$router.push('/InviteCodeView')
    },
    invitationRegister: function () {
      this.$router.push('/InvitationRegister')
    },
    codeView: function () {
      this.$router.push('/CodeView')
    },
    auditVisit: function () {
      this.$router.push('/auditVisit')
    },
    approved: function () {
      this.$router.push('/Approved')
    }
  },
  created() {
    // window.localStorage.setItem(Config.wxUnionId,"123")
    //
    // let wxUnionId = window.localStorage.getItem(Config.wxUnionId)
    // if (wxUnionId){
    //   console.log("wxUnionId 不为空")
    // }
    // console.log("wxUnionId 空")
    // window.localStorage.setItem('accessToken', "eyJhbGciOiJIbWFjU0hBMjU2IiwidHlwIjoiVFYifQ.eyJ1aWQiOiJkYjFlZmEwZC0wOWVmLTRhOGYtOTRmOC0wZDhkMzc1MjU1OWUiLCJuYW1lIjoi54mp5Lia5YWs5Y-4566h55CG5ZGYIiwibmJmIjoiMjAyMS0wNS0xNyAxMzoyNzo1Mi40MzgiLCJpYXQiOiIyMDIxLTA1LTE3IDEzOjI3OjUyLjQzOCJ9.BK6lFx9NLw0adj57GYmEh7SIF-71gf7XHDV8FhYJPvE")
    // cookie.set('accessToken', "eyJhbGciOiJIbWFjU0hBMjU2IiwidHlwIjoiVFYifQ.eyJ1aWQiOiJkYjFlZmEwZC0wOWVmLTRhOGYtOTRmOC0wZDhkMzc1MjU1OWUiLCJuYW1lIjoi5YWs5Y-4566h55CG5ZGYIiwibmJmIjoiMjAyMS0wNS0xMSAxMDozNTo0Mi40MjIiLCJpYXQiOiIyMDIxLTA1LTExIDEwOjM1OjQyLjQyMiJ9.pQL8dUbJTQBD83j5A9-Gh83o7MbPlkNoxwrbSBpZf0o")
  }

}
</script>

<style scoped>

</style>
