<template>
        <view class="playBar"  :style="{bottom: `${bottom}px`}">
            <view class="left">
                <view :style="{background:`url('${Store.song.al.picUrl}') no-repeat center`,backgroundSize:'27px'}">
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
import {ref} from 'vue'
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
    z-index: 999;
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
            overflow: hidden;
            flex-shrink: 0;
            image{
                width:42px;
                height:42px;
                margin:-1px 0 0 -1px;
            }
        }
        text{
            margin-left:30rpx;
            font-size:14px;
            flex:1;
        }
    }
    .right{
        display: flex;
        align-items: center;
        flex-shrink: 0;
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