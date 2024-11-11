<script setup lang="ts">
import { ref } from 'vue'

const showComment = ref<boolean>(false)

const goBack = () => {
  uni.switchTab({
    url: '/pages/mine/mine'
  })
}

</script>

<template>
  <view class="header">
    <view class="navHeader">
      <text @click="goBack">< &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;歌单</text>
    </view>
    <view class="bg">
      <view class="after"></view>
    </view>
    <view class="header-content">
      <view class="info">
        <image src="../../static/喜欢.png" mode="widthFix"></image>
        <view class="header-right">
          <view class="title">我喜欢的音乐</view>
          <view class="creator">
            <image src="../../static/喜欢.png" mode="widthFix"></image>
            <view class="nickname">Lanmei</view>
          </view>
        </view>
      </view>
      <view class="desc">111</view>
      <view class="btns">
        <view class="btn">
          <uni-icons type="redo-filled" size="20" color="#ffffff"></uni-icons>
          分享
        </view>
        <view class="btn" @click="showComment = true">
          <uni-icons type="chat-filled" size="20" color="#ffffff"></uni-icons>
          评论
        </view>
        <view class="btn">
          <uni-icons type="folder-add-filled" size="20" color="#ffffff"></uni-icons>
          收藏
        </view>
      </view>
    </view>
  </view>

  <view class="song-list">
    <uni-list :border="true">
      <uni-list-item clickable>
        <template v-slot:body>
          <view class="play-all">播放全部</view>
          <view class="playImg"><image src="../../static/play.png"></image></view>
        </template>
        
      </uni-list-item>
    </uni-list>
  </view>
</template>

<style lang="scss" scoped>
.header {
  padding: 30rpx;
  padding-top: 120rpx;
  position: relative;
  overflow: hidden;
  color: white;
}
.navHeader {
  position: absolute;
  height: 100rpx;
  line-height: 100rpx;
  color: white;
  width: 100%;
  background: pink;
  z-index: 10;
  top: 0;
  left: 0;
  padding: 0 30rpx;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(../../static/喜欢.png);
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(20px);
  transform: scale(1.5);
  .after {
    height: 100%;
    background: rgba(0, 0, 0, .25);
  }
}
.header-content {
  position: relative;
}
.info {
  display: flex;
  image {
    width: 240rpx;
    height: 240rpx;
    border-radius: 20rpx;
  }
}
.header-right {
  flex: 1;
  overflow: hidden;
  margin-left: 30rpx;
  .title {
    font-weight: 700;
  }
}
.creator {
  display: flex;
  align-items: center;
  margin-top: 20rpx;
  image {
    width: 50rpx;
    height: 50rpx;
    border-radius: 50%;
  }
  .nickname {
    margin-left: 16rpx;
    flex: 1;
    overflow: hidden;
    font-size: 12px;
  }
}
.desc {
  font-size: 12px;
  margin: 20rpx 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.btns {
  display: flex;
  .btn {
    flex: 1;
    margin-right: 30rpx;
    height: 70rpx;
    border-radius: 40rpx;
    background: rgba(255, 255, 255, .2);
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.playImg {
  margin-left: 10rpx;
  image {
    width: 40rpx;
    height: 40rpx;
  }
}
</style>