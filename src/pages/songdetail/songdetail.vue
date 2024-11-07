<template>
  <view class="box">
    <view class="tip">{{list.name}}</view>
    <view v-for="v in list.tracks" class="songs" @tap="add(v.id)">
      <view>{{ v.name }}</view>
    </view>
  </view>
  <playBar :bottom="bottom"/>
</template>

<script lang="ts" setup>
import { ref } from "vue" 
import { onLoad } from '@dcloudio/uni-app'
import {getplaylist, playsong} from '../../servers/servers'
import type{playlist} from '../../servers/type'
import playBar from "@/components/playBar.vue"

const list = ref<playlist>({} as playlist)
const innerAudioContext = uni.createInnerAudioContext()
const id = ref(0)
const mp3 = ref('')
const bottom = ref(0)

onLoad((Option) => {
  const ids = Option!.id *1
  id.value = ids
  getplaylist({id : id.value}).then(res => {
    console.log(res)
    list.value.name = res.data.playlist!.name
    list.value.id = res.data.playlist!.id
    list.value.tracks = res.data.playlist!.tracks
  })
})

const add = (id: number) => {
  playsong({id: id}).then(res => {
    mp3.value = res.data.data![0].url
    console.log(mp3.value)
    innerAudioContext.autoplay = true
    innerAudioContext.src = mp3.value
  })
}





</script>

<style lang="scss" scoped>
.box{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 80rpx;
}
.tip{
width: 100%;
height: 100rpx;
font-size: 40rpx;
font-weight: 900;
text-align: center;
line-height: 100rpx;
background: #d3e3fd;
}
.songs{
width: 100%;
padding: 0 40rpx;
box-sizing: border-box;
display: flex;
justify-content: space-between;
align-items: center;
height: 100rpx;
border-bottom: 1px solid #eee;
.singer{
  font-size: 12px;
}
}
.video-player{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80rpx;
}
</style>

