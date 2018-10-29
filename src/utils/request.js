import axios from 'axios'
import router from '../router'
import {Message} from 'element-ui'

// 创建axios实例
const env = process.env.NODE_ENV//在生产环境的时候，将会被设置为production
//在开发环境的时候，将会被设置为development
let baseURL = env == 'development' ? '/api' : '/'

const service = axios.create({
  baseURL:baseURL,
  timeout: 15000
})

// const service = axios.create({
//   baseURL: process.env.BASE_API, // api 的 base_url
//   timeout: 5000 // 请求超时时间
// })

const fetch = {
  get(url, data, config) {
    return new Promise((resolve, reject) => {
      service.get(url, data, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  instance(url, data, config, methods) {
    return new Promise((resolve, reject) => {
      service[methods](url, data, config).then(res => {
        console.log(res.data.code)
        if(res.data.code == 403){

          Message({
            type: 'info',
            message: '登录状态失效，正在跳转...'
          })
          router.push({name: 'login'})
        }
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url, data, config) {
    return this.instance(url, data, config, "post")
  },
  delete(url, data, config) {
    return this.instance(url, data, config, "delete")
  },
  patch(url, data, config) {
    return this.instance(url, data, config, "patch")
  }
}


export default fetch
