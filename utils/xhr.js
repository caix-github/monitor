/*
 * @Author: caix 1058360098@qq.com
 * @Date: 2023-11-03 11:38:53
 * @LastEditors: caix 1058360098@qq.com
 * @LastEditTime: 2023-11-03 11:39:22
 * @FilePath: \monitor\utils\xhr.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const originalProto = XMLHttpRequest.prototype
export const originalOpen = originalProto.open
export const originalSend = originalProto.send