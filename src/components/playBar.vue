<template>
        <view class="playBar" @click="go" :style="{bottom: `${bottom}px`}">
            <view class="left">
                <view>
                    <image></image>
                </view>
                <text>{{ song![0].name }}</text>
            </view>
            <view class="right">
                <image src="../static/icon-play.png" class="play"></image>
                <image src="../static/playlist.png" class="list"></image>
            </view>
        </view>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { getSongAPI,getSongUrlAPI } from '@/servers/servers'

const props = defineProps(['bottom'])
const ids = ref(347231)
const data = { ids:ids.value }
const song = ref<AnyObject>()
const getSong = async() => {
    try{
        const res = await getSongAPI(data)
        const url = await getSongUrlAPI({id:ids.value})
        console.log(res.data,url.data)
        song.value = res.data.songs
    } catch(e){
        console.log(e)
    }
}
getSong()
console.log(ids.value)
const go = () => {
    uni.navigateTo({
        url:'/pages/player/player?ids='+ ids.value,
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
        background: url('../static/disc.png') no-repeat;
        background-size: 40px 40px;
        text{
            margin-left:20rpx;
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
image{
    height:35px;
    width:35px;
}

</style>