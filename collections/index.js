/*
 * @Author: caix 1058360098@qq.com
 * @Date: 2023-11-06 16:15:57
 * @LastEditors: caix 1058360098@qq.com
 * @LastEditTime: 2023-11-06 16:16:06
 * @FilePath: \monitor\collections\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import performance from './performance/index'
import behavior from './behavior/index'
import error from './error/index'

class FourDimension {
    constructor() {
        this.init()
    }
      // 初始化
    init() {
      performance()
      error()
      behavior()
    }
}

new FourDimension().init()
