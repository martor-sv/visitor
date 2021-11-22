// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/BindWeChat'
import Registration from "./components/Registration";
import InvitationRegister from "./components/InvitationRegister";
import CodeView from "./components/CodeView";
import InviteCodeView from "./components/InviteCodeView";
import AuditVisit from "./components/AuditVisit";
import Approved from "./components/Approved";
//初始化 toast
import {DatetimePlugin, ToastPlugin, WechatPlugin} from 'vux'
import NavigerView from "./components/NavigerView";

Vue.use(DatetimePlugin)

Vue.use(VueRouter)

Vue.use(WechatPlugin)

//初始化 VConsole
// import * as VConsole from "vconsole";
// const vConsole = new VConsole();
//
Vue.use(ToastPlugin)


const routes = [{
  // path: '/visitor',
  path: '/',
  component: NavigerView
}, {
  path: '/registration',
  component: Registration
}, {
  path: '/invitationRegister',
  component: InvitationRegister
}, {
  path: '/codeView',
  component: CodeView
}, {
  path: '/inviteCodeView',
  component: InviteCodeView
}, {
  path: '/auditVisit',
  component: AuditVisit
}, {
  path: '/Approved',
  component: Approved
},{
  path: '/Home',
  component: Home
},
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
