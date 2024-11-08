<script setup>
import { onLoad  } from "@dcloudio/uni-app";
import {ref} from "vue"
import {getDetalisSongList} from "@/servers/servers"
import playBar from "@/components/playBar.vue";
import {useCounterStore} from "../../store/store"
import Loading from "@/components/Loading.vue";
const store=useCounterStore();

const songList=ref([]);//歌曲列表
const ListObj=ref({})//歌曲列表信息
// loading动画开关
const flag=ref(true);

// 获取上个页面传递的参数
onLoad( async(option)=>{
    try {
       const obj= await getDetalisSongList({id:option.id});
       songList.value=obj.data.playlist.tracks
       ListObj.value=obj.data.playlist
       flag.value=false;
       console.log(obj.data.playlist)
       console.log(obj.data.playlist.tracks)
    } catch (error) {
        console.log(error.msg)
    }
})

function backPage(){
    uni.navigateBack()
}

// 修改pinia库当前播放歌曲的id
function changeStoreId(id){
    store.detailId=id;
}
</script>

<template>
    <view class="body">
        <Loading v-if="flag"></Loading>
        <playBar bottom="0"></playBar>
        <view class="titBox">
            <view class="titBar">
                <text style="width: 80rpx;text-align: left;font-size: 60rpx;" @click="backPage">&lt;</text>
                <text>共享歌单</text>
                <icon type="search" color="#fff"></icon>
            </view>
            <view class="songText">
                <view>
                    <image :src="ListObj.coverImgUrl"></image>
                </view>
                <view>
                    <text>{{ ListObj.name }}</text>
                    <text>&lt;</text>
                </view>
            </view>
            <text style="color:#d7d6d6;font-size: 26rpx;margin: 20rpx 0 30rpx 0;z-index: 1;">{{ ListObj.description }}</text>
            <view class="ThreeRounds"> 
                <view></view>
            </view>
            <image :src="ListObj.coverImgUrl" class="backg"></image>
        </view>
        <view class="songList">
            <view >
                <image src="https://ts1.cn.mm.bing.net/th/id/R-C.dc85cc579bb41cdd788ca01b1373eaf5?rik=R2InDsHchNhyNw&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fwater%2f24510%2fgoods_water_24510_698_698_.png&ehk=pTC0BRgOicvoeZqbS9h3Wu2XRRJN8h2wumtdxLXDZ2I%3d&risl=&pid=ImgRaw&r=0"></image>
                <text>播放全部</text>
                <text style="color: darkgrey;font-size: 25rpx;font-weight: normal;vertical-align: middle;">(&nbsp;{{ songList.length }}&nbsp;)</text>
            </view>
            <view v-for="(obj,idx) in songList" :key="idx" class="songItem" @click="changeStoreId(obj.id)">
                <text>{{ idx+1 }}</text>
                <view>
                    <view class="songItemTit">
                        <text>{{ obj.name }}</text>
                        <text style="color: #717070;margin-left: 10rpx;font-size: 28rpx;">({{ obj.tns[0] }})</text>
                    </view>
                    <view>
                        <text style="color: #ddb166;border: solid #ddb166 2rpx;font-size: 19rpx;font-weight: 600;padding: 0 3.5rpx;">超清母带</text>
                        <text style="color:#585858;margin-left: 10rpx;font-size: 23rpx;font-weight: 500;">{{ obj.ar[0].name }}</text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<style scoped lang="scss">

.songItem{
    display: flex;
    padding: 15rpx 0;
    >view{
        display: flex;
        flex-direction: column;
        >.songItemTit{
            width: 100%;
            display: flex;
            >text{
                flex: auto;
                text-overflow: ellipsis;
                overflow: hidden;
                text-wrap: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
    >text{
        flex: none;
        color: #717070;
        font-size: 34rpx;
        margin-right: 30rpx;
        width: 50rpx;
        height: 70rpx;
        line-height: 70rpx;
        text-align: center;
    }
}
.songList{
    background-color: #fff;
    z-index: 1;
    border-radius: 25rpx 25rpx 0 0;
    padding: 20rpx 35rpx 0 35rpx;
    >view:first-child{
        border-radius: 25rpx 25rpx 0 0; 
        display: flex;
        z-index: 2;
        >text{
            vertical-align: middle;
            font-weight: 600;
            line-height: 70rpx;
            margin-left: 15rpx;
            z-index: 2;
        }
        >image{
            flex: none;
            width: 70rpx;
            height: 70rpx;
            border-radius: 100rpx;
        }
    }
}
.titBar{
    z-index: 999;
    color: #fff;
    position: sticky;
    top: 0;
    left: 0;
    icon{
        position: absolute;
        right: 40rpx;
        top: 20rpx;  
              color: #d7d6d6;
    }
}
.backg{
    backdrop-filter: blur(20px); 
    -webkit-backdrop-filter: blur(20px);
    filter:blur(27px) grayscale(0.6);
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;
    height: 100%;
}
.songText{
    display: flex;
    z-index: 1;
    color: #fff;
    >view:last-child{
        display: flex;
        >text:first-child{
            font-weight: 600;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
        >text:last-child{
            flex: none;
            width: 50rpx;
            height: 50rpx;
            background-color: #cccccc6e;
            border-radius: 100%;
            line-height: 50rpx;
            text-align: center;
            transform: rotate(270deg);
            font-size: 32rpx;
            margin-left: 17rpx;
        }
    }
    >view:first-child{
        flex: none;
        width: 200rpx;
        height: 200rpx;
        border-radius: 25rpx;
        overflow: hidden;
        margin-right: 25rpx;
        >image{
            width: 200rpx;
            height: 200rpx;
        }
    }
}
.titBox{
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #af8b8b;
    padding: 0 40rpx;
    z-index: 1;
    >.titBar{
        display: flex;
        height: 100rpx;
        line-height: 100rpx;
        margin-bottom: 45rpx;
    }
}
.body{
    background-color: rgb(175, 175, 175);
}
</style>