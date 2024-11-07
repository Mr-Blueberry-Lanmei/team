<template>
    <view class="header">
        <image src="../../static/icon-list.png"></image>
        <view class="tab" v-for="(item,i) in titList" :key="item">
            <text @click="index = i">{{ item }}</text>
        </view>
        <image src="../../static/icon-add.png"></image>
    </view>
    <component :is="model[index]"></component>
    <playBar :bottom="50"/>
</template>

<script lang="ts" setup>
import playBar from '@/components/playBar.vue'
import follow from './component/follow.vue'
import remmcond from './component/remmcond.vue'
import { ref } from 'vue'

const index = ref(0)
const model = ref([follow, remmcond])
const titList=ref(["关注","推荐"])


//触底加载新数据函数
// onReachBottom(()=>{

// })


</script>

<style lang="scss" scoped>
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
