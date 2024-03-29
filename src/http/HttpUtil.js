import axios from 'axios'
import {Config} from "../api/Config";
// var host = process.env.NODE_ENV === 'development' ? 'http://' : '/_gataway';
const service = axios.create({
  // baseURL: '/api/',
  // baseURL: 'http://192.168.4.70:10080',
  // baseURL: 'http://27.115.4.34:58700',  //研发
  // baseURL: 'http://192.168.4.16:10080',
  // baseURL: 'http://192.168.4.16:10080',
  baseURL: "https://lan.truthvision.com/dev",

  timeout: 50000,
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    '.AspNetCore.Culture': 'c=zh-Hans|uic=zh-Hans',
  },
})

// 拦截添加token
service.interceptors.request.use(
  function (config) {
    let token = window.localStorage.getItem(Config.accessToken)
    let wxUnionId = window.localStorage.getItem(Config.wxUnionId)
    if (token) {
      //将token放到请求头发送给服务器,将tokenkey放在请求头中
      config.headers.accessToken = token;
    }
    if (wxUnionId){
      //将wxUnionId放到请求头发送给服务器,将tokenkey放在请求头中
      config.headers.wxUnionId = wxUnionId;
    }

    return config;
  }
)


service.interceptors.response.use(
  response => {
    console.log(response.status)

    return response;
  }, function (error) {

    ///todo  token 失效未处理
    // if (error.toString().indexOf('422') !== -1) {
    //   // console.log(11111)
    // }

    return Promise.reject(error)

  },)


// export default service
export function axios_get(url, params) {
  return new Promise((resolve, reject) => {
    service
      .get(url, {params})
      .then(
        response => {

          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

// query参数对应POST
export function axios_post(url, params) {
  const urlObj = new FormData()
  for (var i in params) {
    urlObj.append(i, params[i])
  }

  return new Promise((resolve, reject) => {
    service
      .post(url, urlObj)
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

// body参数对应POST
export function axios_post_json(url, params) {
  return new Promise((resolve, reject) => {
    service
      .post(url, params)
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

export function file_post(url, params) {
  let imageFormData = new FormData()
  imageFormData.append("images", params)
  return new Promise((resolve, reject) => {
    service
      .post(url, imageFormData)
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}


// body参数对应delete
export function axios_delete(url, params) {
  return new Promise((resolve, reject) => {
    service
      .delete(url, params)
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

// body参数对应put
export function axios_put(url, params) {
  return new Promise((resolve, reject) => {
    service
      .put(url, params)
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

export default {
  get: function (url, params) {
    return axios_get(url, params)
  },
  post: function (url, params) {
    return axios_post(url, params)
  },
  post_json: function (url, params) {
    return axios_post_json(url, params)
  },
  delete: function (url, params) {
    return axios_delete(url, params)
  },
  put: function (url, params) {
    return axios_put(url, params)
  },
  file_post: function (url, params) {
    return file_post(url, params)
  }
}
