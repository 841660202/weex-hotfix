<!--
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-06 13:33:41
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-06 14:21:57
 * @Descripttion: 
 -->
<template>
  <div>
    <banner class="banner" @itemClick="itemClick">
        <div class="banner-frame" v-for="(img, index) in imageList" v-bind:key="index">
            <image class="banner-image" resize="cover" :src="img.src"></image>
        </div>
    </banner>
    <marquee
      ref="reflectName"
      class="marquee"
      style="width:750px"
      :eeui="{
        text: scrollText,
        fontSize: 24,
      }"
      />
  </div>
</template>
<script>

export default {
   data() {
      return {
          imageList: [
              { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
              { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
              { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
          ],
           scrollText: "其实没什么好说的，没什么好回忆的。只是想，我要好好的做自己想做的事，我只怕自己投降",
      }
    },

    methods: {
        itemClick(res) {
            eeui.toast("点击" + (res.position + 1) + "项")
        }
    }
}
</script>
<style>
 .app {
        width: 750px;
        flex: 1;
    }

    .banner {
        width: 750px;
        height: 320px;
    }

    .banner-frame {
        width: 750px;
        height: 420px;
        position: relative;
    }

    .banner-image {
        width: 750px;
        height: 420px;
    }
    /* 跑马灯 */
    .marquee {
        height: 60px;
        /* background-color: #00B4FF; */
        background-color: #fff;
    }
</style>