<template>
  <view class="box">
    <view class="tip">{{list.name}}</view>
    <view v-for="v in list.tracks" class="songs" @tap="add(v.id)">
      <view>{{ v.name }}</view>
    </view>
  </view>
  <video
      class="video-player"
      :src="mp3"
      controls
      autoplay
      loop
      muted
      show-center-play-btn
      object-fit="cover"
    ></video>
</template>

<script lang="ts" setup>
import { ref } from "vue" 
import { onLoad } from '@dcloudio/uni-app'
import {getplaylist, playsong} from '../../servers/servers'
import type{playlist} from '../../servers/type'

const list = ref<playlist>({} as playlist)
const innerAudioContext = uni.createInnerAudioContext()
const id = ref(0)
const mp3 = ref('')

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

