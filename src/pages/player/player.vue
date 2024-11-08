<template>
<view class="player">
    <view class="title">
        <image class="back" src="../../static/icon-right.png" @click="back"></image>
        <text>每日推荐</text>
    </view>
    <view class="box">
        <image src="../../static/needle-ab.png" class="needle"></image>
        <view :class="['pic', {anim:store.flag}]">
            <image :src="song[0].al.picUrl" class="cover"></image>
        </view>
    </view>
    <view class="del">
        <text class="name">{{ store.song.name }}</text>
        <view class="ar">
            <text>{{ song[0].ar.map((item:any) => item.name).join('') }}</text>
            <image src="../../static/icon-right.png"></image>
        </view>
        <view class="progress-box">
			<progress :percent="store.parsent" stroke-width="3" backgroundColor="#999999" activeColor="#0000FF"/>
		</view>
        <view class="time">
            <text class="curTime">{{ store.curTime }}</text>
            <text>极高</text>
            <text class="totleTime">{{ store.duration }}</text>
        </view>
        <view class="menu">
            <image class="type" src="../../static/loops.png"></image>
            <view class="btns">
                <image class="prev" src="../../static/prev.png"></image>
                <image class="play" v-if="!store.flag" src="../../static/play.png" @click="store.add"></image>
                <image class="play" v-else src="../../static/stop.png" @click="store.add"></image>
                <image class="next" src="../../static/next.png"></image>
            </view>
            <image class="playList" src="../../static/list.png"></image>
        </view>
    </view>
</view>
<view class="bg">
    <image :src="song[0].al.picUrl"></image>
</view>
</template>

<script setup lang='ts'>
import { useCounterStore } from '@/store/store'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getSongAPI } from '@/servers/servers'
const id = ref()
const song = ref()
const store = useCounterStore()
console.log(store.duration)
 
const getSong = async() => {
    try {
        var data = {ids: id.value}
        const res = await getSongAPI(data)
        song.value = res.data.songs
        console.log(song.value)
    } catch (e){
        console.log(e)
    }
}



const back = ()=>{
    uni.navigateBack()
}

onLoad((option:any) => {
    id.value = option.ids
    console.log(option)
    getSong()
})
console.log(song.value)
console.log(store.curTime)

</script>

<style lang='scss' scoped>
@keyframes play {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
.player{
    padding: 10px 0;
    .title{
        height:100rpx;
        line-height:100rpx;
        font-size:16px;
        color:#eee;
        text-align: center;
        .back{
            position: absolute;
            top:15px;
            left:25px;
            width:30px;
            height:30px;
            z-index:9;
            background:rgba(0,0,0,0.3);
            border-radius: 50%;
            transform: rotate(180deg);
        }
    }
    .box{
        position:relative;
        .needle{
            position:absolute;
            top:20px;
            left:70px;
            width:140px;
            height:180px;
            z-index: 9;
        }
    }
   .pic{
        width:250px;
        height:250px;
        border-radius: 50%;
        margin:40px auto;
        background:url('../../static/disc.png');
        background-size: 250px;
        position: relative;
        .cover{
            width:160px;
            height:160px;
            border-radius: 50%;
            position:absolute;
            top:45px;
            left:45px;
            z-index: -1;
        }
   }
   .del{
        padding:0 20px;
        color:#eee;
        .name{
            font-size:17px;
            font-weight:600;
        }
        .ar{
            display: flex;
            align-items: center;
            margin-top: 7px;
            image{
                width:16px;
                height:16px;
                margin-left:5px;
            }
        }
        .progress-box{
            margin-top:20px;
        }
        .time{
            display: flex;
            justify-content: space-between;
            font-size:13px;
            margin-top:10px;
        }
   }
   .menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:30px;
    .btns{
        display: flex;
        align-items: center;
        image{
            margin:0 8px;
        }
        .next,.prev{
            width:35px;
            height:35px;
        }
        .play{
            width:40px;
            height:40px;
        }
    }
    .type,.playList{
        width:30px;
        height:28px;
    }
   }
}
.bg{
    width:100vw;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    z-index:-2;
    filter:blur(7px);
    image{
        width:100%;
        height:100%;
    }
}
.anim{
    animation: play 5s linear infinite;
}
</style>