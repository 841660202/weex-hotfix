<!--
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-06 12:12:39
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-07 15:33:18
 * @Descripttion: 
 -->
<template>
  <div class='login'>
    <!-- <text>账号666修复</text> -->
    <div class="avatar">
      <image class='avatar-img' src="https://avatars1.githubusercontent.com/u/18305361?s=460&v=4"></image>
    </div>
    <div class='login-form'>
      
      <div class="item">
        <input class="input" type="text"  placeholder="账 号"/>
      </div>
      <div class="item">
        <!-- <text class="label">密码</text> -->
        <input class="input" type="password"  placeholder="密码"/>
      </div>
       <div class="item remember-me">
         <text class="remember-me-text">记住登录</text>
       </div>
       <div class="list-input-item">
        <button class="button" :eeui="{text:' 登 陆 '}" @click="submitLogin"></button>
       </div>
    </div> 
    <div class='footer'>
    <text class='copy-right'>
       {{pkg.time}} {{pkg.name}} powered by {{pkg.author}} {{versionCode}}
    </text>
    </div>
  </div>
</template>
<script>
import pkg from "../../package.json";
const eeui = app.requireModule('eeui');
export default {
  data: function(){
    return {
        title: "登陆",
        pkg,
        versionCode: null
    }
  },
  methods: {
    submitLogin(){
      eeui.openPage({
        // url: 'charts/index.js',
        url: 'tab/index.js',
        statusBarAlpha: 0,
        statusBarType: 'immersion',
        loadingBackground: true,
        // loading: false
      }, function(result) {
          console.log(result)
      });
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    let variable = eeui.getSDKVersionCode()
      this.versionCode = variable
    })
  }
}
</script>
<style>
.login{
 background-image: linear-gradient(to top left,#ECB7DE, #8B89F4);
}
/* 页面标题 */
.login-title{
  color: red;
  font-size: 40px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar{
  display: flex;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 90px;
}
/* 头像 */
.avatar-img{
  width: 150px;
  height: 150px;
  border-radius: 100%;
}
/* 表单 */
.login-form{
  display: flex;
  align-items: center;
  padding-top:20px;
  padding-bottom: 20px; 
  
}
/* 输入 */
.item{
  margin-bottom: 30px;
}
.input {
  background-color: #fff;
  padding-left: 10px;
  border-width: 1px;
  height: 80px;
  font-size: 30px;
  border-radius: 10px;
  width: 600px;
  border-color: rgba(0,0,0,0.2);
}
/* 记住我 */
.remember-me{
  width: 600px;
  height: 60px;
  color: #666;
  display: flex;
  flex-direction: row;
  align-items: center;
}
/* 登录按钮 */
.button {
    font-size: 24px;
    /* margin-left: 37.5px; */
    /* margin-right: 37.5px; */
    /* margin-bottom: 20px; */
    width: 200px;
    height: 80px;
    border-radius: 100%;

}
/* 版权信息 */ 
.footer{
  position: fixed;
  bottom: 0;
  margin:0 auto;
  left:0; /*特殊处理*/
  right:0;/*特殊处理*/
  display: flex;
  align-items: center;

}
.copy-right{
  color: #fff;
}
</style>