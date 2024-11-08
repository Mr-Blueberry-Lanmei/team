<template>
    <view class="recomm">
      <view>
				<scroll-view class="scroll-view_H" scroll-x="true">
					<view class="warp">
            <viwe v-for="v in list" :key="v.id" class="ittem">
              <image :src="v.coverImgUrl" mode="widthFix" class="item" @tap="add(v.id)"></image>
              <view class="des">{{ v.description }}</view>
            </viwe>
          </view>
				</scroll-view>
			</view>
    </view>
</template>

<script lang="ts" setup>
import { ref } from "vue" 
import {gethot} from '@/servers/servers'
import type{playlistsitem} from '@/servers/type'

const list = ref<playlistsitem[]>([])

gethot().then(res => {
  list.value = res.data.playlists!
  console.log(list.value)
})

const add =(id: number) => uni.navigateTo({url: `/pages/DetalisSongList/DetalisSongList?id=${id * 1}`})

</script>

<style lang="scss" scoped>
.recomm{
  width: 100%;
  height: 100rpx;
  padding: 0 40rpx;
  box-sizing: border-box;
  margin-top: 20rpx;
  .tip{
    font-size: 16px;
    font-weight: 800;
  }
}
.warp{
  display: flex;
}
.item{
  width: 250rpx;
  height: 250rpx;
  border-radius: 20rpx;
}
.des{
  width: 100%;
  padding: 0 10rpx;
  box-sizing: border-box;
  font-size: 12px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 限制在一个块元素显示的文本的行数 */
  overflow: hidden; /* 隐藏超出的内容 */
  text-overflow: ellipsis; /* 溢出时显示省略号 */
}
.ittem{
  &:not(:first-child){
    margin-left: 20rpx;
  }
}

</style>
