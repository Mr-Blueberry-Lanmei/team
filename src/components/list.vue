<template>
    <view>
      <scroll-view class="scroll-view_H" scroll-x="true">
        <view class="scroll-view-item_H uni-bg-red" v-for="v in list">
          <image :src="v.coverImgUrl" mode="widthFix" class="item" @tap="add(v.id)"></image>
        </view>
      </scroll-view>
		</view>
</template>

<script lang="ts" setup>
import { ref } from "vue" 
import {getdefault} from '../servers/servers'
import type{listIten} from '../servers/type'

const list = ref<listIten[]>([])

getdefault().then(res => list.value = res.data.list!.filter(v => v.tracks.length > 0))

function goDetalisPage(id: number){
    uni.navigateTo({
    url: `/pages/DetalisSongList/DetalisSongList?id=${id}`
    });
}

const add = (id: number) => goDetalisPage(id)


</script>

<style lang="scss" scoped>
img{
  display: block;
}
.scroll-view_H {
		white-space: nowrap;
		width: 100%;
    margin-top: 20rpx;
    padding: 0 40rpx;
    box-sizing: border-box;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 250rpx;
		height: 260rpx;
		line-height: 300rpx;
    &:not(:first-child){
      margin-left: 20rpx;
    }
	}
  .item{
    width: 250rpx;
		height: 250rpx;
    border-radius: 20rpx;
    overflow: hidden;
    line-height: 300rpx;
  }

</style>
