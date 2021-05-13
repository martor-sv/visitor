<template>
  <div>
    <h1>页面导航</h1>

    <XButton type="primary" action-type="button" @click.native="binding"> 绑定微信</XButton>

    <XButton type="primary" action-type="button" @click.native="registration">预约登记</XButton>

    <XButton type="primary" action-type="button" @click.native="invitationRegister">邀请登记</XButton>

    <XButton type="primary" action-type="button" @click.native="inviteCodeView">邀请访客证</XButton>

    <XButton type="primary" action-type="button" @click.native="codeView">访客证</XButton>

    <XButton type="primary" action-type="button" @click.native="auditVisit">审核</XButton>

  </div>


</template>

<script>
import {XButton} from "vux";

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
    } ,
    codeView: function () {
      this.$router.push('/CodeView')
    },
    auditVisit: function () {
      this.$router.push('/auditVisit')
    }
  }

}
</script>

<style scoped>

</style>
