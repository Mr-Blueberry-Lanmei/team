<template>
  <view v-if="true">
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
import { ref, watchEffect } from "vue" 
import { useUserStore } from "@/store/user"
import { userPlaylistApi } from "@/servers/servers"

const user = useUserStore()
const playlist = ref([])

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
</style>
