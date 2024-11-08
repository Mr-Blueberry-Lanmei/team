<template>
     <view class="banner">
      <swiper class="swiper-wrap" :autoplay="autoplay" :interval="interval" :circular="circular">
        <swiper-item v-for="v in banners" :key="v.targetId" class="swiper-item">
          <image :src="v.imageUrl" mode="widthFix" class="item"></image>
        </swiper-item>
      </swiper>
    </view>
    <login v-if="flag === false"/>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue" 
import {getBanner} from '../servers/servers'
import type{bannersitem} from '../servers/type'
import login from '@/components/Loading.vue'

const banners = ref<bannersitem[]>([])
const autoplay = ref(true)
const interval = ref(3000)
const circular = ref(true)
const flag = ref(false)

getBanner().then(res => banners.value = res.data.banners)
watch(banners,() =>{
  if(banners.value.length >0){
    flag.value = true
  }
})
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
