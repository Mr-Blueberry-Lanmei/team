<script setup>
import { defineModel,defineProps} from 'vue';
const showBlo=defineModel("showBlo");
const props=defineProps(["tags"])
console.log(showBlo)
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
                <text style="width: 50rpx;color: #5a5a5a;font-size: 30rpx;">&times;</text>
                <text>发现导航</text>
                <text>恢复默认</text>
            </view>
            <view>
                <text>全部频道</text>
                <text>点击进入频道</text>
                <text>编辑</text>
            </view>
            <view>
                <text v-for="(str,idx) in tags" :key="idx">{{ str }}</text>
            </view>
        </view>
    </view>
</template>

<style scoped lang="scss">
    .title{
        display: flex;
        justify-content: space-between;
        color: #5a5a5a;
        line-height: 50px;
        height: 50rpx;
        >text{
            flex: auto;
            text-align: center;
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
        z-index: 0;
        top: 0;
        left: 0;
        transition: all 0.15s linear;
        opacity: 0;
        >view{
            height: 800rpx;
            background-color: aqua;
            width: 100vw;
            top: -800rpx;
            left: 0;
            position: fixed;
            border-radius:0 0 15rpx 15rpx;
            transition: all 0.15s linear;
        }
    }
    .show{
        opacity: 1 !important;
        z-index: 9 !important;
        >view{
            top: 0 !important;
        }
    }
</style>