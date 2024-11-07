<template>
  <view class="login">
    <image class="wyy" src="../../static/wangyiyun.png"></image>
    <Phone v-if="loginType === 'phone'" />
    <QRcode v-else />
    <view class="change-type">
      <view
        v-for="item in typeArr"
        :key="item.type"
        class="link"
        :class="{show: typeShow === item.type}"
        @click="loginType = item.type"
      >
        {{ item.text }}
      </view>
    </view>
  </view>
</template>
 
<script lang="ts" setup>
import { ref, watch } from "vue"
import Phone from "./components/Phone.vue"
import QRcode from "./components/QRcode.vue"

const loginType = ref('phone')
const typeArr = [
  {text: '手机号登录', type: 'phone'},
  {text: '二维码登录', type: 'QR'}
]
const typeShow = ref('')


watch(loginType, (newValue) => {
  typeShow.value = newValue
}, { immediate: true })


</script>

<style lang="scss" scoped>
.login {
  width: 750rpx;
  height: 1035rpx;
  background: #281D25;
  padding-top: 300rpx;
}
.wyy {
  display: block;
  width: 150rpx;
  height: 150rpx;
  border-radius: 50%;
  border: none;
  margin: 0rpx auto 20rpx;
}
.change-type {
  font-size: 12px;
  display: flex;
  justify-content: center;
  padding: 40rpx;
  .link {
    margin: 0 10px;
    transition: all 0.3s ease;
    &.show {
      background-color: pink;
      border-radius: 5px;
    }
  }
}
</style>
