<script setup lang="ts">


</script>

<template>
  <view class="dyst">
    <view class="music">
      <image src="../static/音乐.png"></image>
      <text>分享你喜欢的音乐吧</text>
    </view>
    <button>去分享</button>
  </view>
</template>

<style lang="scss" scoped>
.dyst{
  height: calc(100vh - 528rpx);
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
}
.music {
  padding-top: 80rpx;
  padding-bottom: 20rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  image {
    width: 80rpx;
    height: 80rpx;
  }
}
button {
  background: #eee;
  border-radius: 40rpx;
  font-size: 16px;
  padding: 0 30rpx;
  border: none;
}
</style>