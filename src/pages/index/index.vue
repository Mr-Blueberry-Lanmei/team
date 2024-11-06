<template>
    <view class="header">
      <view class="iconfont icon-gengduo"></view>
      <input type="text" class="inp">
      <view class="iconfont icon-yuyin"></view>
    </view>
    <view class="banner">
      <swiper class="swiper-wrap" :autoplay="autoplay" :interval="interval" :circular="circular">
        <swiper-item v-for="v in banners" :key="v.targetId" class="swiper-item">
          <image :src="v.imageUrl" mode="widthFix" class="item"></image>
        </swiper-item>
      </swiper>
    </view>
    <view class="tip">{{ tip }}</view>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue" 
import {getBanner} from '../../servers/servers'
import type{bannersitem} from '../../servers/type'

const banners = ref<bannersitem[]>([])
const autoplay = ref(true)
const interval = ref(3000)
const circular = ref(true)
const tip = computed(() => {
  const time = new Date()
  const hour = time.getHours()
  if(hour>=0 && hour < 9) return '早上好'
  if(hour>=9 && hour < 14) return '中午好'
  if(hour>=14 && hour < 24) return '晚上好'
})


getBanner().then(res => banners.value = res.data.banners)


</script>

<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.img{
  display: block;
}
.header{
  width: 100%;
  height: 100rpx;
  display: flex;
  align-items: center;
  padding: 0 20rpx;
  .iconfont{
    font-size: 50rpx;
  }
  .inp{
    width: 550rpx;
    height: 50rpx;
    border: 1px solid black;
    margin: 0 30rpx;
    border-radius: 20rpx;
    padding-left: 53rpx;
    background: url('../../static/sousuo.png') no-repeat left;
    background-size:30rpx 30rpx;
    background-position: left 20rpx top 10rpx; 
  }
}
.banner{
  padding: 0 40rpx;
  .swiper-wrap{
    width: 100%;
    height: 100%;
    height: 248rpx;
    background: red;
    border-radius: 20rpx;
    overflow: hidden;
    .item{
      width: 100%;
      height: 248rpx;
      background: gold;
    }
  }
  
}
.tip{
  width: 100%;
  height: 80rpx;
  padding: 0 40rpx;
  font-size: 36rpx;
  font-weight: 900;
  line-height: 80rpx;
}
</style>
