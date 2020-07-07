import Taro from '@tarojs/taro'

const baseUrl = 'https://music-api.lujs.top'

  export function get(url) {
    return new Promise((resolve, reject) => {
      Taro.request({
      url: baseUrl + url,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        resolve(res)
        console.log(res.data, 'res is')
      },
      fail: res => {
        reject(res)
        console.error(res, 'is not true')
      }
    })
    })
}
