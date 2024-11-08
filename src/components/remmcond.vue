<template>
    <view class="con">
        <view class="item" v-for="item in list" :key="item.id">
            <view class="title">
                <image :src="item.user.avatarUrl"></image>
                <text>{{ item.user.nickname }}</text>
            </view>
            <view class="content">
                <text>{{ JSON.parse(item.json).msg }}</text>
                <view class="pic">
                    <image 
                        v-for="pic in item.pics" 
                        :key="pic.squareUrl" 
                        :src="pic.squareUrl"
                    ></image>
                </view>
                <view class="bar">
                    <text>🗂️分享</text>
                    <text>💬评论</text>
                    <text>👍点赞</text>
                    <text>更多</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang='ts'>
import { ref } from "vue" 
import { getDynamicAPI } from "@/servers/servers"
import playBar from "@/components/playBar.vue"
const list = ref<AnyObject>([])

const getDynamic = async() => {
    try {
        const res = await getDynamicAPI()
        console.log(res.data.events)
        list.value = res.data.events
    } catch(e) {
        console.log(e)
    }
}
getDynamic()
</script>

<style lang='scss' scoped>
.item{
    min-height:80px;
    border-bottom:1px solid #eee;
    padding:10px;
    .title{
        display: flex;
        align-items: center;
        height:50px;
        image{
            width:50px;
            height:50px;
            border:1px solid #eee;
            border-radius:50%;
            margin-right:15px;
        }
    }
    .content{
        padding-left:65px;
        }
    .pic{
        margin-top:10px;
        image{
            width:80px;
            height:80px;
            border:1px solid #ccc;
            margin-right:4px;
        }
    }
    .bar{
        font-size:14px;
        color:#666;
        display: flex;
        justify-content: space-between;
    }
}
</style>