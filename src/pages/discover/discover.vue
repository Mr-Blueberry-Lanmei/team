<script lang="ts" setup>
import { ref } from "vue";
import Music from "./subPage/Music.vue"
import Blogger from "./subPage/Blogger.vue";
import Live from "./subPage/Live.vue";
import Book from "./subPage/Book.vue";

//当前一级页面下标
const index=ref(0);
const model=ref([Music,Blogger,Live,Book])
const titList=ref(["音乐","博客","听书","直播"])
</script> 

<template>
    <view class="box">
        <view class="tit">
            <text v-for="(str,idx) in titList" :key="idx" :class="{titOn:index===idx}" @click="index=idx">{{str}}</text>
            <icon type="search" style="line-height:100rpx;"  color="#4f596e"></icon>
        </view>
        <component :is="model[index]"></component>
    </view>

</template>

<style scoped lang="scss">
.tit{
    width: 100%;
    height: 100rpx;
    background-color:#ffffff;
    color:#8d8c91;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    font-weight: 600;
    line-height: 100rpx;
    z-index: 2;
    >text{
        flex: auto;
        line-height: 100rpx;
        text-align: center;
    }
    >icon{
        flex: auto;
        height: 50rpx;
        margin-top: 25rpx;
        line-height: 100rpx;
        text-align: center;
    }
    // 当前页面高亮
    .titOn{
        border-bottom: solid 5rpx rgb(181, 0, 0);
    }
}
</style>
