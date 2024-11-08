<template>
  <view class="box">
    <view class="tip">{{ tip }}</view>
    <view v-for="v in songs" :key="v.id" class="item" @tap="add(v.id)">{{ v.name }}</view>
  </view>
  <playBar :bottom="bottom"/>
</template>

<script lang="ts" setup>
import { ref } from "vue" 
import { onLoad } from '@dcloudio/uni-app'
import {getseadeta} from '@/servers/servers'
import type{songsitem} from '@/servers/type'
import playBar from "@/components/playBar.vue"
import {useCounterStore} from "@/store/store"

const songs = ref<songsitem[]>([])
const tip = ref('')
const bottom = ref(0)
const store = useCounterStore()

onLoad((Option) => {
  const {keywords} = Option!
  tip.value = keywords
  getseadeta({keywords}).then(res => songs.value = res.data.result.songs)
})

const add = (id: number) => store.detailId = id


</script>

<style lang="scss" scoped>
.box{
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
}
.tip{
  width: 100%;
  height: 100rpx;
  font-size: 40rpx;
  font-weight: 900;
  text-align: center;
  line-height: 100rpx;
  background-color: #31b3fe;
}
.item{
  width: 100%;
  height: 60rpx;
  line-height: 60rpx  ;
  box-sizing: border-box;
  padding: 0 40rpx;
  line-height: 60rpx;
  border-bottom: 1px solid #eee;
}
</style>
