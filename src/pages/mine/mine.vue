<template>
  <view class="cbl"></view>
  <navigator url="/pages/search/search" class="ser"></navigator>
  <view class="more"></view>
  <view v-if="false">
    <navigator url="/pages/login/login">
      <button>去登录</button>
    </navigator>
  </view>
  <view v-else>
    <view class="header">
      <image class="avater" src="../../static/wangyiyun.png"></image>
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
      <view class="tab">
        <view class="center1"  v-for="(item, index) in tabs" @click="curIndex=index" :class="{ 'active': curIndex===index }">
          {{ item }}
        </view>
      </view>
      <view>
        <Like v-if="curIndex===0" />
        <Blog v-if="curIndex===1" />
        <DynamicState v-if="curIndex===2" />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue" 
import { useUserStore } from "@/store/user"
import { userPlaylistApi } from "@/servers/servers"
import Like from '../../components/Like.vue'
import Blog from '../../components/Blog.vue'
import DynamicState from '../../components/DynamicState.vue'


const curIndex = ref(0)
const user = useUserStore()
const playlist = ref([])
const tabs = ['音乐', '博客', '动态']

watchEffect(async () => {
  if (user.account?.id) {
    const res = await userPlaylistApi(user.account.id)
    playlist.value = res.data.data.playlist
  }
})

// const goList = id => {
  
// }


</script>

<style lang="scss" scoped>
.header {
  height: 450rpx;
  background-image: url(../../static/wangyiyun.png);
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
  margin: 50rpx auto 20rpx;
}
.nickname {
  margin-top: 40rpx;
  text-align: center;
  color: white;
  font-weight: 700;
}
.test {
  margin-top: 60rpx;
  display: flex;
  justify-content: center;
  color: #cfc4c4;
  font-size: 14px;
  padding: 20rpx 0;
  .test-tag {
    margin: 0 20rpx;
    .bold {
      font-weight: 700;
      margin-right: 10rpx;
      color: white;
    }
  }
}
.cbl{
  position: fixed;
  top: 0;
  margin-top: 40rpx;
  left: 0;
  margin-left: 40rpx;
  width: 60rpx;
  height: 60rpx;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('../../static/icon-list.png');
}

.ser{
  position: fixed;
  top: 0;
  margin-top: 40rpx;
  right: 0;
  margin-right: 90rpx;
  width: 45rpx;
  height: 45rpx;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('../../static/sousuo.png');
}


.more{
  position: fixed;
  top: 0;
  margin-top: 40rpx;
  right: 0;
  margin-right: 20rpx;
  width: 45rpx;
  height: 45rpx;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('../../static/playlist.png');
}

.center1{
  height: 50rpx;
  width: 600rpx;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40rpx;
  margin: 0 40rpx;
  font-size: 28rpx;
  font-weight: 900;
  background: linear-gradient(to right, #00B4D8, #006B8E);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  &.active {
    color: purple;
  }
}


.tab{
  height: 100rpx;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 30rpx 30rpx 0 0;
  p{
    margin: 0 60rpx;
    font-size: 32rpx;
    font-weight: 900;
}
}
</style>
