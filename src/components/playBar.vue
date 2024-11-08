<template>
        <view class="playBar"  :style="{bottom: `${bottom}px`}">
            <view class="left">
                <view :style="{background:`url('${Store.song.al.picUrl}')`}">
                    <image src="../static/disc.png" @click="go" mode="widthFix"></image>
                </view>
                <text>{{Store.song.name}}</text>
            </view>
            <view class="right">
                <image v-if="!Store.flag" src="../static/icon-play.png" class="play" @tap="Store.add"></image>
                <image v-else src="../static/zanting.png" class="play" @tap="Store.add"></image>
                <image src="../static/playlist.png" class="list"></image>
            </view>
        </view>
</template>

<script setup lang='ts'>
import {useCounterStore} from '@/store/store'

const Store = useCounterStore()
const props = defineProps(['bottom'])

const go = () => {
    uni.navigateTo({
        url:`/pages/player/player?ids=${Store.detailId}`
    })
}

</script>

<style lang='scss' scoped>
.playBar{
    display: flex;
    box-sizing: border-box;
    width:100%;
    height:50px;
    background:#fff;
    border-top:1px solid #ccc;
    position:fixed;
    z-index: 9;
    left:0; 
    justify-content: space-between;
    align-items:center;
    padding:0 30rpx;
    .left{
        display: flex;
        align-items: center;
        view{
            width:40px;
            height:40px;
            border-radius:50%;
            background-size: cover;
            overflow: hidden;
            image{
                width:42px;
                height:42px;
                margin:-1px 0 0 -1px;
            }
        }
        text{
            margin-left:40rpx;
            font-size:14px;
        }
    }
    .right{
        display: flex;
        align-items: center;
        .play{
            width:55rpx;
            height:55rpx;
            margin-right:40rpx;
        }
        .list{
            width:50rpx;
            height:45rpx;
        }
    }
    
}


</style> 