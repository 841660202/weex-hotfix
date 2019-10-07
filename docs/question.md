<!--
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-06 13:40:31
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-07 16:40:21
 * @Descripttion: 
 -->
1. 文档错误 text-align:center；写错了
- 下载缓慢
  需从github下载模版， eeui setting 进行配置，配置完成后，检测eeui版本信息为undefined  需要在项目目录下进行 eeui update
- 运行，真机调试，遇到 update require,需用 eeui.app点击DEV 进行DEV，配置ip和端口
- 样式：常用的css样式发生显示，缩写基本上不支持，
- 所有页面的样式为隔离状态，无需scope
- 创建页面后自动生成路由，这个有限制，需要重新npm run dev ，否则会遇到页面跳转一直处于loading状态，log输出正常
- 打包(android)
- 创建 build.sh
```bash

#!/bin/bash

npm run build
cd ./platforms/android/eeuiApp
./gradlew clean
./gradlew assembleRelease
cd ../../../
open ./platforms/android/eeuiApp/app/build/outputs/apk/release/

```
- 热修复，使用命令修复，就没有提示修复了
- 
## 热修复包

 * (手动压缩，然后解压，看不出来变化，完全一致，但到手机上，查看文件管理)
![avatar](./imges/hot-mobile-package.jpg)

* 创建hot.sh

```bash
#!/bin/bash

######### 有问题的命令 ##########
# npm run build
# cd ./common
# zip -r data.zip dist/*
######## 正常更新的命令 ##########
npm run build
cd ./common/dist
# 删除旧的压缩包
rm data.zip
# 压缩新的压缩包
zip -r data.zip ./*
# 移动压缩包位置
mv ./data.zip ../热更新.zip
open ./
cd ../
######## 正常更新的命令 ##########
```

* 执行 $ sh hot.sh

![avatar](./imges/hot-zip.png)


* 将热更新.zip上传到 console.eeui

![avatar](./imges/hot-console.eeui.p
## re热更新配置
![avatar](./imges/hot-config-1.jpg)
<video src="http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4" width="320" height="180"
controls="controls"></video> 

<video id="video" controls="" preload="none" poster="http://media.w3.org/2010/05/sintel/poster.png">
  <source id="mp4" src="./1.mp4" type="video/mp4" />
</video>


 - 我的理解是这个并不是将手机update缓存的文件清理。有点像是版本回滚的意思

 - 所以就像下面描述一样，会将已更新的进行回滚此更新，
由于这个热修复一次性不能直接升级到最新，就导致每次回滚，都又会想到14版本，要到14就要先13，13完了到14，到了14又会回滚。这就出现了我上面录制的情况了 陷入死循环了我觉得这热更新缺少编辑功能
 - 目前只见到删除，
code-push是可以改变某一更新版本的启用、停用、回滚、强制更新；
它的回滚命令式好像是是创建了一个新版本，出现错误时候（认为是更新过的），是不执行更新的；
这样每次直接热修复到最后一个版本，不考虑中间版本情况也就不会出现这个问题 和 一个新用户安装app后，有多少次热更新 就会多少次提示更新的问题了