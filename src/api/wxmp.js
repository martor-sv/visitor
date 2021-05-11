import HttpUtil from "../http/HttpUtil";
import {Common} from "./common";

export default {

  // 获取微信openId
  getOpenID(params) {
    return HttpUtil.get(Common.web_url, params)
  },

  //创建访客
  creatVisitor:function(params) {
    return  HttpUtil.post_json(Common.job_form, params)
  },

    getCompany :function(params) {
    return HttpUtil.get(Common.proprietor_url,params)
  }


}
