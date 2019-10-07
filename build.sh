### 
# @version: v0.0.1
 # @Author: hailong.chen
 # @Date: 2019-10-06 16:04:07
 # @LastEditors: hailong.chen
 # @LastEditTime: 2019-10-06 16:45:59
 # @Descripttion: 
 ###
#!/bin/bash
npm run build
cd ./platforms/android/eeuiApp
./gradlew clean
./gradlew assembleRelease
cd ../../../
open ./platforms/android/eeuiApp/app/build/outputs/apk/release/