<template>
    <view :class="['box',{active: flag}]" v-if="flag" @tap="flag = false"></view>
    <view :class="['con',{active: flag},{leave: !flag}]">
      <view>
        <view>双人空间</view>
      </view>
      <view>
        <view>我的信息</view>
        <view>云贝中心</view>
        <view>微章中心</view>
        <view>装扮中心</view>
        <view>创作者中心</view>
      </view>
    </view>
</template>

<script lang="ts" setup>

const flag = defineModel()
console.log(flag)


</script>

<style lang="scss" scoped>
.box{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.5);
  z-index: 10;
  &.active{
    opacity: 1; 
  }
}
.con{
    width: 85%;
    height: 100%;
    background: white;
    position: fixed;
    top:0;
    left: -100%;
    z-index: 11;
    &.active{
      left: 0;
      transition: all .3s linear;
    }
    &.leave{
      left: -100%;
      transition: all .3s linear;
    }
  }
</style>
