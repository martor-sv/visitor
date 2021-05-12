import HttpUtil from "../http/HttpUtil";
import {Common} from "./common";


export function creatVisitor(params) {
  return HttpUtil.post_json(Common.job_form, params)
}

export function getCompany(params) {
  return HttpUtil.get(Common.proprietor_url, params)
}

export function getOpenID(params) {
  return HttpUtil.get(Common.web_url, params)
}
