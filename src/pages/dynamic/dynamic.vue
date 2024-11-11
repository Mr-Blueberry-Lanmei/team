<template>
    <view class="header">
        <image src="../../static/icon-list.png"></image>
        <view class="tab" >
            <text v-for="(item,i) in titList" :key="item" @click="index = i" :class="{active:index === i}">{{ item }}</text>
        </view>
        <image src="../../static/icon-add.png" @click="add"></image>
    </view>
    <component :is="model[index]"></component>
    <playBar :bottom="50"/>
    <view class="pop" v-if="flag" @click="add">
        <view class="pub">
            <view @click="go">发文图</view>
            <view>发视频</view>
            <view class="tir"></view>
        </view>
    </view>
</template>

<script lang="ts" setup>
import playBar from '@/components/playBar.vue'
import follow from '@/components/follow.vue'
import remmcond from '@/components/remmcond.vue'
import { ref } from 'vue'

const index = ref(1)
const model = ref([follow, remmcond])
const titList=ref(["关注","推荐"])
const flag = ref(false)

const add = () => {
    flag.value = flag.value? false : true
}
//触底加载新数据函数
// onReachBottom(()=>{

// })

const go = () => {
    console.log("跳转页面")
}


</script>

<style lang="scss" scoped>
.header{
    background:#fff;
    position:sticky;
    top:0;
    height:100rpx;
    border-bottom:2rpx solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:30rpx;
    box-sizing: border-box;
    z-index: 9;
    image{
        height:50rpx;
        width:50rpx;
    }
    text{
        margin:0 20rpx;
        font-weight:bold;
        font-size: 18px;
        color:#999;
    }
}
.active{
    color: #333 !important;
}
.pop{
    width:100vw;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    background:rgba(0,0,0,0.1);
    z-index: 999;
    .pub{
        width:140px;
        height:100px;
        border-radius:10px;
        background:#fff;
        position:absolute;
        top:50px;
        right:5px;
        view{
            height:50px;
            line-height:50px;
            text-align: center;
            border-bottom:1px solid #eee;
        }
        .tir{
            width:0;
            height:0;
            border:6px solid transparent;
            border-bottom-color:#fff;
            position:absolute;
            top:-11px;
            right:17px;
        }
    }
}

</style>
