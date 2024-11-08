<template>
<view class="player">
    <view class="title">
        <image class="back" src="../../static/icon-right.png"></image>
        <text>每日推荐</text>
    </view>
    <view class="pic">
        <image :src="song[0].al.picUrl" class="cover"></image>
        <image src="../../static/needle-ab.png" class="needle"></image>
    </view>
    <view class="del">
        <text class="name">{{ song[0].name }}</text>
        <view class="ar">
            <text>{{ song[0].ar.map(item => item.name).join('') }}</text>
            <image src="../../static/icon-right.png"></image>
        </view>
        <view class="progress-box">
				<progress percent="0" stroke-width="3" backgroundColor="#999999" activeColor="#FFFFFF" />
		</view>
        <view class="time">
            <text class="curTime">0:00</text>
            <text>极高</text>
            <text class="totleTime">3:15</text>
        </view>
        <view class="menu">
            <image class="type" src="../../static/loops.png"></image>
            <view class="btns">
                <image class="prev" src="../../static/prev.png"></image>
                <image class="play" src="../../static/play.png"></image>
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
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getSongAPI } from '@/servers/servers'
const id = ref()
const song = ref()
 
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

onLoad((option:any) => {
    id.value = option.ids
    console.log(option)
    getSong()
})
console.log(song.value)

</script>

<style lang='scss' scoped>
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
        .needle{
            position:absolute;
            top:20px;
            left:10px;
            width:140px;
            height:180px;
            z-index: 9;
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
</style>