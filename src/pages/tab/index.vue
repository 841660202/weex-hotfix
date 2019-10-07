<!--
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-06 14:02:17
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-06 14:21:01
 * @Descripttion: 
 -->
<template>
  <div class="app">

    <tabbar
        ref="reflectName"
        class="tabbar"
        :eeui="{ tabType: 'bottom' }"
        @pageSelected="pageSelected"
        @tabReselect="tabReselect">

        <!--页签①-->
        <tabbar-page ref="name_1" @refreshListener="refreshListener"
                      :eeui="{ tabName: 'name_1', title:'首页', selectedIcon:'md-home', }">
            <!-- <navbar class="page-navbar"> -->
                <!-- <navbar-item type="back"></navbar-item> -->
                <!-- <navbar-item type="title">
                    <text class="page-navbar-title">首页</text>
                </navbar-item> -->
                <!-- <navbar-item type="right" @click="viewCode('component/tabbar')">
                    <icon content="md-code-working" class="iconr"></icon>
                </navbar-item> -->
            <!-- </navbar> -->
            <div class="page-content">
                <Home></Home>
                <image src="https://eeui.app/assets/images/cartoon/m2.png" class="page-content-image"></image>
                <text class="content-text"></text>
            </div>
        </tabbar-page>

        <!--页签②-->
        <tabbar-page 
          ref="name_2" 
          @refreshListener="refreshListener"
          :eeui="{ 
            tabName: 'name_2',
            title:'好友',
            message:3, 
            selectedIcon:'https://eeui.app/assets/images/cartoon/m8.png' , 
            unSelectedIcon:'https://eeui.app/assets/images/cartoon/m7.png',
            statusBarColor
          }">
            <navbar class="page-navbar">
                <navbar-item type="title">
                    <text class="page-navbar-title">好友</text>
                </navbar-item>
            </navbar>
            <div class="page-content">
                <text class="content-text">page 2，tab显示器图标支持网络图片</text>
            </div>
        </tabbar-page>

        <!--页签③-->
        <tabbar-page 
          ref="name_3" 
          @refreshListener="refreshListener"
          :eeui="{
            tabName: 'name_3',
            title:'圈子',
            message:99, 
            selectedIcon:'md-aperture',
           statusBarColor
          }">
            <navbar class="page-navbar">
                <navbar-item type="title">
                    <text class="page-navbar-title">圈子</text>
                </navbar-item>
            </navbar>
            <div class="page-content">
                <text class="content-text">page 3</text>
            </div>
        </tabbar-page>

        <!--页签④-->
        <tabbar-page 
          ref="name_4"
          @refreshListener="refreshListener"
          :eeui="{ 
            tabName: 'name_4', 
            title:'设置',
            dot:true, 
            selectedIcon:'md-cog',
            statusBarColor
          }">
            <navbar class="page-navbar">
                <navbar-item type="title">
                    <text class="page-navbar-title">设置</text>
                </navbar-item>
            </navbar>
            <div class="page-content">
                <text class="content-text">page 4</text>
            </div>
        </tabbar-page>

    </tabbar>

  </div>
</template>

<style>
    .app {
        flex: 1
    }

    .iconr {
        width: 100px;
        height: 100px;
        color: #ffffff;
    }

    .tabbar {
        width: 750px;
        flex: 1;
    }

    .page-content {
        width: 750px;
        align-items: center;
    }

    .content-text {
        font-size: 24px;
    }

    .page-navbar {
        width: 750px;
        height: 90px;
    }

    .page-navbar-title {
        color: #ffffff;
        font-size: 28px;
    }

    .page-content-image {
        width: 480px;
        height: 480px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
</style>

<script>
  import Home from './home.vue'
  const eeui = app.requireModule('eeui');

  export default {
    components:{
      Home
    },
    data() {
      return {
        statusBarColor: '#00B4FF'
      }
    },
    methods: {
        viewCode(str) {
            this.openViewCode(str);
        },
        pageSelected(params) {
            eeui.toast({
                message: "切换到第" + (params.position + 1) + "个标签页",
                gravity: "middle"
            });
        },
        tabReselect(params) {
            eeui.toast({
                message: "第" + (params.position + 1) + "个标签页被再次点击",
                gravity: "middle"
            });
            eeui.toast();
        },
        refreshListener(params) {
            setTimeout(() => {
                eeui.toast({
                    message: "刷新成功：" + params.tabName,
                    gravity: "middle"
                });
                this.$refs[params.tabName].refreshEnd();
            }, 1000);
        }
    }
  };
</script>
