<script setup>
import {defineProps,defineModel} from "vue"
const props = defineProps(["url"])
const flag = defineModel('flag')
</script>

<template>
    <view class="imgBox">
        <text @click="flag = false">&times;</text>
        <view class="imgPop">
            <image :src="url" mode="widthFix"></image>
        </view>
    </view>
</template>

<style scoped lang="scss">
    .imgBox{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: black;
        position: fixed;
        top:0;
        left:0;
        z-index: 9999;
        >text{
            position: absolute;
            color: #fff;
            width: 100rpx;
            height: 100rpx;
            font-size: 70rpx;
            line-height: 100rpx;
            text-align: center;
            font-weight: 500;
            top: 20rpx;
            left: 20rpx;
        }
        >view{
            >image{
            flex: none;
            width: 100vw !important;
            }
        }
    }
</style>