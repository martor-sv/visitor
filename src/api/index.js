// import axios from 'axios'
// import Vue from 'vue'
// import router from '../router/index'
//
// axios.defaults.withCredentials = false;
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';//配置请求头
// // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头
//
// //添加一个请求拦截器
// axios.interceptors.request.use(function (config) {
//   //console.dir(config);
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });
//
// // 添加一个响应拦截器
// axios.interceptors.response.use(function (response) {
//   if (response.data && response.data.code) {
//     Vue.$vux.toast.show({
//      text: '请重新登录'
//     })
//     if (parseInt(response.data.code) === 201003) {
//       //未登录
//       // road.showToast('warn','请重新登录')
//       Vue.$vux.toast.show({
//        text: '请重新登录'
//       })
//       //未登录
//     router.push({path:'/login'});
//     sessionStorage.setItem('newrouter','');
//     sessionStorage.setItem('userInfo','');
//     }
//   }
//   return response;
// }, function (err) {
//   if(err && err.response){
//       switch (err.response.status) {
//         case 400: err.message = '请求错误(400)' ; break;
//         case 401: err.message = '未授权，请重新登录(401)'; break;
//         case 403: err.message = '拒绝访问(403)'; break;
//         case 404: err.message = '请求出错(404)'; break;
//         case 408: err.message = '请求超时(408)'; break;
//         case 500: err.message = '服务器错误(500)'; break;
//         case 501: err.message = '服务未实现(501)'; break;
//         case 502: err.message = '网络错误(502)'; break;
//         case 503: err.message = '服务不可用(503)'; break;
//         case 504: err.message = '网络超时(504)'; break;
//         case 505: err.message = 'HTTP版本不受支持(505)'; break;
//         default: err.message = `连接出错(${err.response.status})!`;
//       }
//  }else{
//     err.message = '连接服务器失败!'
// }
// // alert(err.message);
// return Promise.reject(err);
// });
//
//
// //通用方法
// export const POST = (url, params) => {
//   return axios.post(`${url}`, params).then(res => res.data)
// }
//
// export const GET = (url, params) => {
//   return axios.get(`${url}`, {params: params}).then(res => res.data)
// }
//
// export const PUT = (url, params) => {
//   return axios.put(`${url}`, params).then(res => res.data)
// }
//
// export const DELETE = (url, params) => {
//   return axios.delete(`${url}`, {params: params}).then(res => res.data)
// }
//
// export const PATCH = (url, params) => {
//   return axios.patch(`${url}`, params).then(res => res.data)
// }
// export const downLoad = (url, params) => {
//   window.location.href = `${url}?${params}`;
// }
