<script setup>
import { ref } from "vue" 
import { getBanner,getSongList,getNewSong} from "@/servers/servers"
import Loading from "@/components/Loading.vue";

// 当前轮播图数据
const imgArr=ref([]);
// 甄选歌单数据
const songList=ref([]);
// 新鲜速递
const NewSong=ref([])
// loading动画开关
const flag=ref(true);
try{
    // 当前轮播图数据
    getBanner( )
    .then((obj)=>{
        imgArr.value=obj.data.banners;
    })
    // 甄选歌单数据
    getSongList({limit:20})
    .then((obj)=>{
        songList.value=obj.data.result;
    })
    // 新鲜速递
    getNewSong({type:16})
    .then((obj)=>{
       NewSong.value=obj.data.data.slice(0,15);
       flag.value=false;
    })
}catch(error){
    console.log(error)
} 
function goDetalisPage(id){
    uni.navigateTo({
	url: `/pages/DetalisSongList/DetalisSongList?id=${id}`
    });
}
</script>

<template>
<!-- 音乐下的精选页 -->
    <view class="Choiceness">
        <Loading v-if="flag"></Loading>
        <swiper class="banner" :autoplay="autoplay" :interval="interval" :circular="circular">
            <swiper-item v-for="(obj) in imgArr" :key="obj.encodeId">
                <image :src="obj.imageUrl" mode="aspectFill"></image>
            </swiper-item>
        </swiper>
        <view style="color: #253348; font-weight: 600; font-size: 35rpx;margin:0 0 25rpx 30rpx;">甄选歌单</view>
        <view class="songList">
            <view v-for="(obj,idx) in songList" :key="idx" @click="goDetalisPage(obj.id)">
                <view>
                    <image :src="obj.picUrl"></image>
                </view>
                <text>{{obj.name}}</text>
            </view>
        </view>
        <view style="color: #253348; font-weight: 600; font-size: 35rpx;margin:38rpx 0 25rpx 30rpx;">云村新鲜事</view>
        <view class="NewSongList">
            <view v-for="(obj,idx) in NewSong" :key="idx"  @click="goDetalisPage(obj.id)">
                <view>
                    <image :src="obj.album.blurPicUrl"></image>
                </view>
                <text>{{obj.name}}</text>
            </view>
        </view>
    </view>
</template>

<style scoped lang="scss">
.songList{
    width: 100vw;
    height: 330rpx;
    overflow-x: scroll;
    overflow-y: none;
    display: flex;
    >view{
        width: 230rpx;
        margin-right: 20rpx;
        height: 330rpx;
        display: flex;
        flex-direction: column;
        >text{
            width: 230rpx;
            font-size: 27rpx;
            color: #253348;
            overflow: hidden;
            text-overflow: ellipsis;
            display:-webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        >view{
            width: 230rpx;
            height: 230rpx;
            overflow: hidden;
            border-radius: 20rpx;
            >image{
                width: 230rpx;
                height:230rpx;
            }
        }
    }
    >view:first-child{
        margin-left: 30rpx;
    }
}
.songList::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
}
.NewSongList{
    @extend.songList;
}
.banner{
    padding:50rpx;
    overflow: hidden;
    >swiper-item{
        width: 100%;
        height: 248rpx;
        border-radius:30rpx;
        overflow: hidden !important;
        >image{
            width: 100%;
            height: 248rpx;
        }
    }
}

</style>