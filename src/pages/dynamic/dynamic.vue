<template>
    <view class="item">
        <view class="title">
            <image src=""></image>
            <text>用户id</text>
        </view>
        <view class="content">
            <text>雨后天晴</text>
        </view>
        <view class="bar">
            
        </view>
    </view>
</template>

<script lang="ts" setup>
import { ref } from "vue" 

</script>

<style lang="scss" scoped>
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
    }
</style>
