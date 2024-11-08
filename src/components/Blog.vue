<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getClassify } from '../servers/servers'
  
  const Recommended = ref<any>([])
  
  onMounted(async () => {
    try {
      const res = await getClassify({ limit: 10})
      Recommended.value = res.data.playlists
    } catch (error) {
      console.error(error)
    }
  })
  
  const formatPlayCount = (count: any) => {
    if (count >= 10000) {
      return (count / 10000).toFixed(1) + 'W'
    }
    return count
  }
</script>

<template>
<view class="blog">
    <!-- 添加博客 -->
    <view class="like">
      <view class="like1">
        <view class="like-pic">
          <image src="" alt="" />
        </view>
        <view class="like-content">
          <view class="like-title">添加博客和有声书</view>
        </view>
      </view>
    </view>
  
    <!-- 为你推荐专区 -->
    <view class="foryou">
      <view class="rec">为你推荐</view>
  
      <view class="like" v-for="item in Recommended" :key="item">
        <view class="like1">
          <view class="like-pic">
            <image :src="item.coverImgUrl" />
          </view>
          <view class="like-content">
            <view class="like-title text-ellipsis">{{ item.name }}</view>
            <view class="like-desc text-ellipsis">{{ item.description }}</view>
            <view class="like-info">
              <text class="like-tag">{{ item.tags[0] }}</text>
              <text class="like-count">{{ formatPlayCount(item.playCount) }} 次播放</text>
            </view>
          </view>
          <view class="collect-btn">收藏</view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
 .blog {
    height: calc(100vh - 528rpx);
    background-color: #f4f4f4;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .like {
    padding: 20rpx 0;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #fff;
    margin-bottom: 2rpx;
  }
  
  .like1 {
    width: 90%;
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .like-pic {
    width: 100rpx;
    height: 100rpx;
    flex-shrink: 0;
    
    image {
      width: 100%;
      height: 100%;
      border-radius: 8rpx;
    }
  }
  
  .like-content {
    flex: 1;
    margin-left: 20rpx;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100rpx;
  }
  
  .text-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  .like-title {
    font-size: 28rpx;
    color: #333;
    font-weight: 500;
    line-height: 1.4;
  }
  
  
  .like-desc {
    font-size: 24rpx;
    color: #999;
    line-height: 1.4;
  }
  
  .like-info {
    font-size: 24rpx;
    color: #999;
    display: flex;
    align-items: center;
  }
  
  .like-tag {
    background-color: #f5f5f5;
    padding: 2rpx 12rpx;
    border-radius: 4rpx;
    margin-right: 12rpx;
  }
  
  .like-count {
    color: #999;
  }
  
  .collect-btn {
    width: 120rpx;
    height: 56rpx;
    line-height: 56rpx;
    text-align: center;
    font-size: 26rpx;
    color: #666;
    border: 2rpx solid #ddd;
    border-radius: 28rpx;
    flex-shrink: 0;
  }
  
  .foryou {
    margin-top: 20rpx;
    width: 100vw;
    height: 100rpx;
  }
  
  .rec {
    width: 80vw;
    height: 90rpx;
    font-size: 32rpx;
    font-weight: 600;
    padding: 0 30rpx;
    line-height: 90rpx;
    border-bottom: 2rpx solid #f5f5f5;
  }
</style>