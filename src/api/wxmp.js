import HttpUtil from "../http/HttpUtil";

export default {
  // 获取微信openId
  getOpenID (params) {
    return HttpUtil.get('/api1/weixin/third-platform/web', params)
  },

  creatVisitor(params){
    return HttpUtil.get('/api1/visitor-service/user',params)
  },

}
