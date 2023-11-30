/*
 * @Author: caix 1058360098@qq.com
 * @Date: 2023-11-03 11:37:26
 * @LastEditors: caix 1058360098@qq.com
 * @LastEditTime: 2023-11-03 11:37:36
 * @FilePath: \monitor\utils\common.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function deepCopy(target) {
  if (typeof target === 'object') {
      const result = Array.isArray(target) ? [] : {}
      for (const key in target) {
          if (typeof target[key] == 'object') {
              result[key] = deepCopy(target[key])
          } else {
              result[key] = target[key]
          }
      }

      return result
  }

  return target
}

export function onBFCacheRestore(callback) {
  window.addEventListener('pageshow', event => {
      if (event.persisted) {
          callback(event)
      }
  }, true)
}

export function onBeforeunload(callback) {
  window.addEventListener('beforeunload', callback, true)
}

export function onHidden(callback, once) {
  const onHiddenOrPageHide = (event) => {
      if (event.type === 'pagehide' || document.visibilityState === 'hidden') {
          callback(event)
          if (once) {
              window.removeEventListener('visibilitychange', onHiddenOrPageHide, true)
              window.removeEventListener('pagehide', onHiddenOrPageHide, true)
          }
      }
  }

  window.addEventListener('visibilitychange', onHiddenOrPageHide, true)
  window.addEventListener('pagehide', onHiddenOrPageHide, true)
}

export function executeAfterLoad(callback) {
  if (document.readyState === 'complete') {
      callback()
  } else {
      const onLoad = () => {
          callback()
          window.removeEventListener('load', onLoad, true)
      }

      window.addEventListener('load', onLoad, true)
  }
}

export function getPageURL() {
  return window.location.href 
}

export function generateUniqueID() {
  return `v2-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`
}