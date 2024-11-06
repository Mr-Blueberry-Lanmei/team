<template>
  <view v-if="false">
    <navigator url="/pages/login/login">
        <button>去登录</button>
    </navigator>
  </view>
  <view v-else>
    <view class="header">
      <image class="avater" src="../../static/logo.png"></image>
      <view class="nickname">Lanmei</view>
      <view class="test">
        <view class="test-tag">
          <text class="bold">15</text>关注
        </view>
        <view class="test-tag">
          <text class="bold">16</text>粉丝
        </view>
        <view class="test-tag">
          <text class="bold">Lv.9</text>等级
        </view>
        <view class="test-tag">
          <text class="bold">6173时</text>听歌
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue" 

</script>

<style lang="scss" scoped>
.header {
  height: 450rpx;
  background-image: url(../../static/logo.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 100rpx;
}
.avater {
  display: block;
  width: 150rpx;
  height: 150rpx;
  border-radius: 50%;
  border: 1px solid white;
  margin: 0rpx auto 20rpx;
}
.nickname {
  text-align: center;
  color: white;
  font-weight: 700;
}
.test {
  display: flex;
  justify-content: center;
}
</style>
