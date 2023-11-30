/*
 * @Author: caix 1058360098@qq.com
 * @Date: 2023-11-03 11:18:21
 * @LastEditors: caix 1058360098@qq.com
 * @LastEditTime: 2023-11-03 11:41:21
 * @FilePath: \monitor\utils\report.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { originalOpen, originalSend } from './xhr.js'
import { addCache, getCache, clearCache } from './cache.js'
import { generateUniqueID } from './common.js'
import config from '../config.js'

export function isSupportSendBeacon() {
    return !!window.navigator?.sendBeacon
}

const sendBeacon = isSupportSendBeacon() ? window.navigator.sendBeacon.bind(window.navigator) : reportWithXHR

const sessionID = generateUniqueID()
export function report(data, isImmediate = false) {
    if (!config.url) {
        console.error('请设置上传 url 地址')
    }

    const reportData = JSON.stringify({
        id: sessionID,
        appID: config.appID,
        userID: config.userID,
        data,
    })
    
    if (isImmediate) {
        sendBeacon(config.url, reportData)
        return
    }

    if (window.requestIdleCallback) {
        window.requestIdleCallback(() => {
            sendBeacon(config.url, reportData)
        }, { timeout: 3000 })
    } else {
        setTimeout(() => {
            sendBeacon(config.url, reportData)
        })
    }
}

let timer = null
export function lazyReportCache(data, timeout = 3000) {
    addCache(data)

    clearTimeout(timer)
    timer = setTimeout(() => {
        const data = getCache()
        if (data.length) {
            report(data)
            clearCache()
        }
    }, timeout)
}

export function reportWithXHR(data) {
    const xhr = new XMLHttpRequest()
    originalOpen.call(xhr, 'post', config.url)
    originalSend.call(xhr, JSON.stringify(data))
}