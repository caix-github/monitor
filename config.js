/*
 * @Author: caix 1058360098@qq.com
 * @Date: 2023-11-03 11:39:49
 * @LastEditors: caix 1058360098@qq.com
 * @LastEditTime: 2023-11-03 11:39:55
 * @FilePath: \monitor\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const config = {
  url: '',
  appID: '',
  userID: '',
  vue: {
      Vue: null,
      router: null,
  },
}

export default config

export function setConfig(options) {
  for (const key in config) {
      if (options[key]) {
          config[key] = options[key]
      }
  }
}