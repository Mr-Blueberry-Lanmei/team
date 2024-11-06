<template>
    <view class="header">
        <image src="../../../static/icon-list.png"></image>
        <view class="title">
            <text>关注</text>
            <text>推荐</text>
        </view>
        <image src="../../../static/icon-add.png"></image>
    </view>
</template>

<script setup lang='ts'>


</script>

<style lang='scss' scoped>
.header{
    background:#fff;
    position:sticky;
    top:0;
    height:100rpx;
    border-bottom:1px solid #eee;
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
        margin:0 10px;
        font-weight:bold;
        font-size: 18px;
    }
}
</style>