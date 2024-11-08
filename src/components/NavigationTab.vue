<script setup>
import { defineModel,defineProps} from 'vue';
const showBlo=defineModel("showBlo");
const index=defineModel("index");
const props=defineProps(["tags"])


function changeShowBlo(e){
    if(e.target.dataset.type){
        showBlo.value=!showBlo.value
    }
}
</script>

<template>
    <view id="NavigationTab" :class="{show:showBlo}" @click.stop="changeShowBlo($event)" data-type="box">
        <view class="popTab">
            <view class="title">
                <text style="width: 100rpx;color: #5a5a5a;font-size: 60rpx;flex: none;font-weight: 500;text-align: left;">&times;</text>
                <text style="flex: 1;color: #3e475c;font-size: 39rpx;font-weight: 600;">发现导航</text>
                <text style="flex: none; width: 130rpx;font-size: 28rpx;color: darkgray;">恢复默认</text>
            </view>
            <view class="center">
                <text style="flex: 1;color: #3e475c;font-size: 32rpx;font-weight: 600;margin-right: 15rpx;">全部频道</text>
                <text style="flex: none; width: 130rpx;font-size: 28rpx;color: darkgray;">点击进入频道</text>
                <text>编辑</text>
            </view>
            <view class="tags">
                <text v-for="(str,idx) in tags" :key="idx" :class="{tagOn:index===idx}" @click="index=idx">{{ str }}</text>
            </view>
        </view>
    </view>
</template>

<style scoped lang="scss">
    .center{
        height: 60rpx;
        line-height: 60rpx;
        position: relative;
        margin-bottom: 23rpx;
        padding: 0 30rpx;
        >text{
            vertical-align: middle;
        }
        >text:last-child{
            position: absolute;
            right: 30rpx;
            top: 0;
            width: 100rpx;
            height:60rpx;
            background-color:#e9edf3;
            color:#3e475c;
            font-size: 28rpx;
            font-weight: 600;
            text-align: center;
            line-height: 60rpx;
            border-radius: 25rpx;

        }
    }
    .tags{
        flex: auto;
        display: flex;
        flex-wrap: wrap;   
        justify-content: space-between; 
        align-self: flex-end;
        padding: 0 30rpx;
        >text{
           width: calc(100%/3 - 20rpx);
           margin-bottom: 20rpx;
           text-align: center;
           background-color: rgb(255, 255, 255);
           line-height: 74rpx;
           border-radius: 10rpx;
           box-shadow: 0 0 6rpx 1rpx rgb(216, 216, 216);
           font-size: 33rpx;
           font-weight: 700;
           color: #3e475c;
        }
    }
    .title{
        display: flex;
        justify-content: space-between;
        color: #5a5a5a;
        height: 100rpx;
        padding: 0 30rpx;
        >text{
            flex: auto;
            text-align: center;
            line-height: 100rpx;
        }
    }
    .popTab{
        display: flex;
        flex-direction: column;
    }
    #NavigationTab{
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.289);
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
        transition: all 0.15s linear;
        opacity: 0;
        display: flex;
        flex-direction: column;
        >view{
            height: 850rpx;
            background-color:#f8f9fd;
            width: 100vw;
            top: -800rpx;
            left: 0;
            position: fixed;
            border-radius:0 0 15rpx 15rpx;
            transition: all 0.19s linear;
        }
    }
    .show{
        opacity: 1 !important;
        z-index: 9 !important;
        >view{
            top: 0 !important;
        }
    }
    // tag高亮样式
    .tagOn{
        background-color: #f2f3f5 !important;
        color:#000000 !important;
    }
</style>