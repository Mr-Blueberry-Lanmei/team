<script lang="ts" setup>
import { ref } from "vue";
import {getRankList,getAllRankList} from "@/servers/servers"
import RankListSquare from "../../component/RankListSquare.vue";

// 榜单推荐
const recommend=ref([]);
//榜单信息
const rankList=ref([]);
// 精选榜
const firstList=ref([])
// 曲风榜
const secondList=ref([])
//全球榜
const thirdList=ref([])
// 语种榜
const fourthList=ref([])
// 特色榜
const fifthList=ref([])

try{
    // 所有榜单内容摘要
    getRankList()
    .then((obj)=>{
        rankList.value=obj.data.list.slice(0,6)
    })
    // 所有榜单
    getAllRankList()
    .then((obj)=>{
        console.log(obj.data.list)
        firstList.value=obj.data.list.slice(0,15);
        secondList.value=obj.data.list.slice(16,21);
        thirdList.value=obj.data.list.slice(21,30);
        fourthList.value=obj.data.list.slice(30,43);
        fifthList.value=obj.data.list.slice(43,55);
        recommend.value=obj.data.list.slice(43,46)
    })
}catch(error){
    console.log(error)
}

</script> 

<template>
    <view class="RankList">
        <RankListSquare style="margin-top: 35rpx;" :data="recommend" tit="精选榜"></RankListSquare>
        <view class="logo">
            <view></view>
            <text>官方榜</text>
        </view>
        <view v-for="(obj,idx) in rankList" :key="idx" class="rankItem">
            <view class="header">
                <text>{{ obj.name }}</text>
                <text>{{ obj.updateFrequency }}</text>
            </view>
            <view class="footer">
                <view>
                    <image :src="obj.coverImgUrl"></image>
                </view>
                <view class="songList">
                    <view v-for="(item,idx) in obj.tracks">
                        <text style="color: black;font-weight: 700;font-size: 28rpx;margin-right: 15rpx;">{{ idx }}</text>
                        <text style="color: #323c51;font-weight: 600;font-size: 28rpx;margin-right: 15rpx;">{{item.first }}</text>
                        <text style="color: #323c51;font-size: 26rpx;">-{{ item.second }}</text>
                    </view>
                </view>
            </view>
        </view>
        <RankListSquare style="margin-top: 35rpx;" :data="firstList" tit="精选榜"></RankListSquare>
        <RankListSquare style="margin-top: 35rpx;" :data="secondList" tit="曲风榜"></RankListSquare>
        <RankListSquare style="margin-top: 35rpx;" :data="thirdList" tit="全球榜"></RankListSquare>
        <RankListSquare style="margin-top: 35rpx;" :data="fourthList" tit="语种榜"></RankListSquare>
        <RankListSquare style="margin-top: 35rpx;" :data="fifthList" tit="特色榜"></RankListSquare>
    </view>
</template>


<style scoped lang="scss">
    .header{
        display: flex;
        justify-content: space-between;
        >text:first-child{
            color: #323c51;
            font-weight: 700;
            font-size: 36rpx;
            margin-bottom: 16rpx;
        }
        >text:last-child{
            color: #aeaeae;
            font-size: 21rpx;
        }
    }
    .footer{
        display: flex;
        >.songList{
            flex: auto;
            display: flex;
            flex-direction: column;
            >view{
                flex: auto;
                text-wrap: nowrap;
                text-emphasis: none;
                height: 50rpx;
                display: flex;
                >text:last-child{
                    flex: 1;
                    overflow: hidden;
                    text-wrap: nowrap;
                    text-overflow: ellipsis;
                    height: 50rpx;
                    vertical-align: middle;
                }
            }
        }
        >view:first-child{
            flex: none;
            width: 150rpx;
            height: 150rpx;
            border-radius: 20rpx;
            overflow: hidden;
            margin-right: 40rpx;
            >image{
                width: 150rpx;
                height: 150rpx;
            }
        }
    
    }
    .RankList{
        padding: 0 40rpx;
        display: flex;
        flex-direction: column;
        background-color: #f1f2f6;
    }
    .rankItem{
            background-color: #fff;
            margin-bottom: 30rpx;
            padding: 20rpx;
            border-radius: 20rpx;
    }
    .logo{
            height: 50rpx;
            display: flex;
            background-color: none;
            margin-top: 20rpx;
            margin-bottom: 15rpx;
            >view{
                width: 45rpx;
                height: 45rpx;
                background: url("https://gd-hbimg.huaban.com/6d294b093c60973e1d1daf3f3d5c3c72bbe3db0754a43-jvECe9_fw658") no-repeat;
                background-size:cover;
                border-radius: 50%;
                margin-right: 15rpx;
            }
            >text{
                font-weight: 600;
                font-size: 34rpx;
                color: #2b3b54; 
                letter-spacing: 4rpx;
                line-height:45rpx;
            }
        }
</style>
