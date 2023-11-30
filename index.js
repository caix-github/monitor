/*
 * @Author: caix 1058360098@qq.com
 * @Date: 2023-11-02 16:28:24
 * @LastEditors: caix 1058360098@qq.com
 * @LastEditTime: 2023-11-28 16:56:55
 * @FilePath: \monitor\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//引入两个模块：app 和 BrowserWindow
//app 模块，控制整个应用程序的事件生命周期。
//BrowserWindow 模块，它创建和管理程序的窗口。
const { app, BrowserWindow } = require('electron')

//在 Electron 中，只有在 app 模块的 ready 事件被激发后才能创建浏览器窗口
app.on('ready', () => {
  //创建一个窗口
  const mainWindow = new BrowserWindow()
  //窗口加载html文件
  mainWindow.loadFile('./src/main-elementui.html') // elementui + v2
  // mainWindow.loadFile('./src/main-nativeui.html') // nativeui + v3
  // mainWindow.webContents.openDevTools()
})


