<template>
     <view class="banner">
      <swiper class="swiper-wrap" :autoplay="autoplay" :interval="interval" :circular="circular">
        <swiper-item v-for="v in banners" :key="v.targetId" class="swiper-item">
          <image :src="v.imageUrl" mode="widthFix" class="item"></image>
        </swiper-item>
      </swiper>
    </view>
</template>

<script lang="ts" setup>
import { ref } from "vue" 
import {getBanner} from '../servers/servers'
import type{bannersitem} from '../servers/type'

const banners = ref<bannersitem[]>([])
const autoplay = ref(true)
const interval = ref(3000)
const circular = ref(true)

getBanner().then(res => banners.value = res.data.banners)

</script>

<style lang="scss" scoped>
.banner{
  padding: 0 40rpx;
  .swiper-wrap{
    width: 100%;
    height: 100%;
    height: 248rpx;
    border-radius: 20rpx;
    overflow: hidden;
    .item{
      width: 100%;
      height: 248rpx;
      background: gold;
    }
  }
}
</style>
