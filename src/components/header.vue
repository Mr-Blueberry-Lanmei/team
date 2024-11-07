<template>
    <view class="header">
      <view class="iconfont icon-gengduo"></view>
      <input type="text" class="inp">
      <view class="iconfont icon-yuyin"></view>
    </view>
</template>

<script lang="ts" setup>
import { ref } from "vue" 

</script>

<style lang="scss" scoped>

.header{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 80rpx;
  display: flex;
  align-items: center;
  padding: 0 20rpx;
  box-sizing: border-box;
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
    background: url('../static/sousuo.png') no-repeat left;
    background-size:30rpx 30rpx;
    background-position: left 20rpx top 10rpx; 
  }
}
</style>
