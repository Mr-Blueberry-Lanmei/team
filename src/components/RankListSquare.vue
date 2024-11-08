<script setup>
import {defineProps} from "vue"
const props=defineProps(["data","tit"])

// 跳转歌单详情
function goDetalisPage(id){
    uni.navigateTo({
	url: `/pages/DetalisSongList/DetalisSongList?id=${id}`
    });
}
</script>

<template>
    <view class="RankListSquare">
        <text>{{ tit }}</text>
        <view class="body">
            <view v-for="(obj,idx) in data" :key="idx" @click="goDetalisPage(obj.id)">
                <image :src="obj.coverImgUrl" mode="widthFix"></image>
            </view>
        </view>
    </view>
</template>

<style scoped lang="scss">
.RankListSquare{
    margin-bottom: 50rpx;
    width: 100%;
    >.body{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        >view{
            width: calc(100%/3 - 17rpx);
            border-radius: 20rpx;
            overflow: hidden;
            margin-bottom: 17rpx;
            height: 200rpx;
            >image{
                width: 100%;
            }
        }
    }
    >text{
        color: #1a202b;
        font-weight: 700;
        font-size: 35rpx;
        margin-bottom: 25rpx;
        display: block;
    }
}
</style>