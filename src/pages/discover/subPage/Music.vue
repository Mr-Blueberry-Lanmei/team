<script lang="ts" setup>
import { ref } from "vue" 
import { getClassify } from "@/servers/servers"
import Choiceness from "./music/Choiceness.vue"
import RankList from "./music/RankList.vue";
import NavigationTab from "../component/NavigationTab.vue";

//当前页面二级下标
const index=ref(0);
// 公共变量
const tags=ref(["精选","排行榜","VIP","歌单"]);//频道标签
const model=ref([Choiceness,RankList]);
const showBlo=ref(false)//导航栏窗口开关

try{
    getClassify({limit:10,order:"hot"})
    .then((obj)=>{
        obj.data.playlists.forEach((obj) => {
            obj.tags.forEach((str)=>{
                tags.value.push(str);
            })
        });
    })
}catch(error){
    console.log(error)
}
</script>

<template>
    <view class="music">
        <NavigationTab v-model:showBlo="showBlo" :tags="tags"></NavigationTab>
        <view class="titBar">
            <view  @click="showBlo=!showBlo" class="DownArrow">
                <view>&gt;</view>
            </view>
            <text v-for="(str,idx) in tags" :key="str" :class="{titBarOn:index===idx}" @click="index=idx">
                {{ str }}
            </text> 
        </view>
       <component :is="model[index]"></component>
    </view>
</template>

<style scoped lang="scss">
.titBar{
    width: 100vw;
    height: 100rpx;
    background-color:#ffffff;
    color:#8d8c91;
    position: sticky;
    top: 100rpx;
    left: 0;
    overflow-x: scroll;
    overflow-y: none;
    display: flex;
    font-weight: 600;
    line-height: 100rpx;
    z-index: 2;
    >text{
        flex: auto;
        min-width:150rpx;
        text-align: center;
        color: #656f7e;
    }
    >.DownArrow{
        font-size: 55rpx;
        font-weight: 300;
        position: fixed;
        right: 0rpx;
        top: 100rpx;
        background-color: #ffffff;
        height: 100rpx;
        width: 80rpx;
        line-height: 100rpx;
        text-align: center;
        >view{
            transform: rotateZ(90deg);
            
        }
    }
    // 二级栏高亮
    .titBarOn{
        background-color: #e9edf3;
        border-radius: 50rpx;
        height: 50rpx;
        align-self:center;
        line-height: 50rpx;
        justify-items:center;
        margin-left: 5rpx;
    }
}
.titBar::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
}
</style>
