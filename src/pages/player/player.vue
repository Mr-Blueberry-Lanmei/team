<template>
<view class="bg">
    <image ></image>
</view>
<view class="player">
    <view>
        <text>song</text>
        <text>singer</text>
    </view>
    <view></view>
</view>
</template>

<script setup lang='ts'>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getSongAPI } from '@/servers/servers'
const id = ref()
 

const getSong = async() => {
    try {
        console.log(id)
        let data = {ids:id.value}
        const res = await getSongAPI(data)
        console.log(res)
    } catch (e){
        console.log(e)
    }
}
onLoad((option:any) => {
    id.value = option.ids
    console.log(option)
    getSong()
})

</script>

<style lang='scss' scoped>
.bg{
    width:100%;
    height:100%;

}
</style>