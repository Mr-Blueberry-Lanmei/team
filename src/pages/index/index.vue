<template>
    <view>
      <view class="iconfont icon-gengduo"></view>
    </view>
</template>

<script lang="ts" setup>
import { ref } from "vue" 
import {getBanner} from '../../servers/servers'

getBanner().then(res => console.log(res.data))


</script>

<style lang="scss" scoped>

</style>
