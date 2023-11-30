<!--
 * @Author: caix 1058360098@qq.com
 * @Date: 2023-11-02 16:30:09
 * @LastEditors: caix 1058360098@qq.com
 * @LastEditTime: 2023-11-09 11:43:26
 * @FilePath: \monitor\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 日志

1. 搭建过程报错404处理
```
// 新建.npmrc文件
registry=https://registry.npm.taobao.org
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl=http://npm.taobao.org/mirrors/phantomjs
electron_mirror=http://npm.taobao.org/mirrors/electron/
```
切换electron镜像源
```
npm config set electron_mirror http://npm.taobao.org/mirrors/electron/
npm config set electron_custom_dir 8.0.2
```