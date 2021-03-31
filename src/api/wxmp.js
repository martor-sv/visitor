import HttpUtil from "../http/HttpUtil";
import {Common} from "./common";

export default {

  // 获取微信openId
  getOpenID(params) {
    return HttpUtil.get(Common.web_url, params)
  },

  //
  creatVisitor(params) {
    return HttpUtil.get(Common.user_url, params)
  },

}
