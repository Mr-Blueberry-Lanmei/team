<template>
<view class="bg">
    <image></image>
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
var id = ref<number>()

onLoad((option:any) => {
    id = option.ids
    console.log(option.ids)
})

const getSong = async(id:any) => {
    try {
        const res = await getSongAPI({ids:id})
        console.log(res.data)
    } catch (e){
        console.log(e)
    }
}
getSong(id)

</script>

<style lang='scss' scoped>

</style>