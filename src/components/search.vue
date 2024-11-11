<template>
  <view class="header">
      <view class="iconfont icon-fanhui" @tap="add"></view>
      <input type="text" class="inp" :placeholder="tip" v-model="search">
      <view class="tip" @tap="acc">搜索</view>
  </view>
  <view class="his">
    <view>历史记录：</view>
    <view class="deat">
      <view v-for="v in history.history" :key="v" class="item">{{ v }}</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import Search from "@/pages/search/search.vue";
import { ref } from "vue" 
import {getsearch} from '@/servers/servers'
import type{hostitem} from '@/servers/type'
import {useHistoryStory} from '@/store/history'

const add = () => uni.navigateBack({delta: 1})
const history = useHistoryStory()
const tips = ref<hostitem[]>([])
const tip = ref('')
const search = ref('')


const acc = () => uni.navigateTo({url: `/pages/searchsong/searchsong?keywords=${search.value}`})
getsearch().then(res => tips.value = res.data.result.hots)


const tipfunct = () => {
  let i = 0
  const timer = setInterval(() => {
    tip.value = tips.value[i].first
    if(i >= tips.value.length - 1) return i = 0
    i++
  }, 2000)
}
tipfunct()

</script>

<style lang="scss" scoped>
.header{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 80rpx;
  display: flex;
  align-items: center;
  padding: 0 20rpx;
  box-sizing: border-box;
  .iconfont{
    font-size: 50rpx;
  }
  .inp{
    width: 450rpx;
    height: 50rpx;
    border: 1px solid black;
    margin: 0 30rpx;
    border-radius: 20rpx;
    padding-left: 53rpx;
    background: url('../static/sousuo.png') no-repeat left;
    background-size:30rpx 30rpx;
    background-position: left 20rpx top 10rpx; 
    background-color: white;
  }
  .tip{
    font-size: 14px;
    width: 100rpx;
  }
}
.his{
  width: 100%;
  padding: 20rpx 40rpx;
}
.deat{
  margin-top: 20rpx;
  display: flex;
  padding: 0 40rpx;
  .item{
    color: #808080; 
    &:not(:first-child){
      margin-left: 20rpx;
    }
  }
}
</style>
 