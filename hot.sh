### 
# @version: v0.0.1
 # @Author: hailong.chen
 # @Date: 2019-10-06 16:04:07
 # @LastEditors: hailong.chen
 # @LastEditTime: 2019-10-07 15:32:54
 # @Descripttion: 
 ###
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