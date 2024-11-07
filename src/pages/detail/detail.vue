<template>
    <view class="tip">{{list.name}}</view>
    <view v-for="v in list.tracks" class="songs">
      <view>{{ v.first }}</view>
      <view class="singer">{{ v.second }}</view> 
    </view>
</template>

<script lang="ts" setup>
import { ref } from "vue" 
import { onLoad } from '@dcloudio/uni-app'
import {getdefault} from '../../servers/servers'
import type{listIten} from '../../servers/type'

const list = ref<listIten>({} as listIten)
const id = ref(0)

getdefault().then(res => {
  list.value = res.data.list!.find(v => v.id === id.value)!
  console.log(list.value.tracks)
})

onLoad((Option) => {
 const ids = Option!.id *1
 id.value = ids
})

</script>

<style lang="scss" scoped>
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
</style>
