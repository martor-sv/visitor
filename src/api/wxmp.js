import HttpUtil from "../http/HttpUtil";

export default {
  // 获取微信openId
  getOpenID (params) {
    return HttpUtil.get('/api1/weixin/third-platform/web', params)
  },

  code(params){
    return HttpUtil.get('/jmh/weChat/sms',params)
  },

}
