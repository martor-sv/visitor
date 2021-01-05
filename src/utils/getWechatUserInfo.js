import wxmp from "../api/wxmp";


function GetQueryString(name) {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  const r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
  if (r != null) return unescape(r[2]);
  return null;
}

//微信用户授权
let empower = () => {
  const code = GetQueryString("code");
  const state = GetQueryString("state");

  if (code != null) {
    console.log("code="+code)
    console.log("state="+state)
    const params =new Map()
    params["code"]=code
    params["originId"]=state
    wxmp.getOpenID(params).then(r =>{
      console.log(r)
      }
    )
  } else {
    //授权微信 获取code 使用code 来换取用户信息
    window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx93319a39b2c03f28&redirect_uri=http%3a%2f%2fwww.silverwind.tech%2fvisitor&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
  }
}


export {empower}


//10003	redirect_uri域名与后台配置不一致
//10004	此公众号被封禁
//10005	此公众号并没有这些scope的权限
//10006	必须关注此测试号
//10009	操作太频繁了，请稍后重试
//10010	scope不能为空
//10011	redirect_uri不能为空
//10012	appid不能为空
//10013	state不能为空
//10015	公众号未授权第三方平台，请检查授权状态
//10016	不支持微信开放平台的Appid，请使用公众号Appid
