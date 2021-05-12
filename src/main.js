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
import {WechatPlugin} from 'vux'
import { DatetimePlugin } from 'vux'

Vue.use(DatetimePlugin)

Vue.use(VueRouter)

Vue.use(WechatPlugin)

//初始化 VConsole
import * as VConsole from "vconsole";
const vConsole = new VConsole();

//初始化 toast
import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)


const routes = [{
  // path: '/visitor',
  path: '/',
  component: Home
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
