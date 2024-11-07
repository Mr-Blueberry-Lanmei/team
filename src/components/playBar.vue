<template>
        <view class="playBar"  :style="{bottom: `${bottom}px`}">
            <view class="left">
                <view>
                    <image :src="song.al?.picUrl" @click="go" mode="widthFix"></image>
                </view>
                <text>{{song.name}}</text>
            </view>
            <view class="right">
                <image src="../static/icon-play.png" class="play" @tap="add"></image>
                <image src="../static/playlist.png" class="list"></image>
            </view>
        </view>
</template>

<script setup lang='ts'>
import { ref , watch} from 'vue'
import { getSongAPI, playsong } from '@/servers/servers'
import {useCounterStore} from '@/store/store'
import type{songsitem} from '@/servers/type'


const innerAudioContext = uni.createInnerAudioContext()
const Store = useCounterStore()
const props = defineProps(['bottom'])
const song = ref<songsitem>( {} as songsitem)
const mp3 = ref('')
const flag = ref(false)

watch(() => Store.detailId, () =>{
    if(Store.detailId > 0){
        getSong(Store.detailId)
        playsong({id: Store.detailId}).then(res => {
            mp3.value = res.data.data[0].url
            console.log(mp3.value)
        })
        innerAudioContext.autoplay = true   
        innerAudioContext.src = mp3.value
    }
},{immediate: true})



const getSong = async(id: number) => {
    try{
        const res = await getSongAPI({ids: id})
        song.value = res.data.songs[0]
    } catch(e){
        console.log(e)
    }
}
innerAudioContext.onPlay(() => flag.value = true)
innerAudioContext.onPause(() => flag.value = false)

const add =() => {
    if(flag.value){
        innerAudioContext.pause()
    } else {
        innerAudioContext.play()
    }
}
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