<template>
    <view class="tip">{{ tip }}</view>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue" 
import { onHide } from '@dcloudio/uni-app'

const time = ref(new Date())

const update = () => time.value = new Date()
const timer = setInterval(update, 3600000)

const tip = computed(() => {
  const hour = time.value.getHours()
  if(hour > 0 && hour < 9) {
    return '早上好'
  } else if(hour >= 9 && hour < 14) {
    return '中午好'
  } else if(hour >= 14 && hour < 18) {
    return '下午好'
  }else{
    return '晚上好'
  } 
})
onHide(() => {
  clearInterval(timer)
})

</script>

<style lang="scss" scoped>
.tip{
  width: 100%;
  height: 60rpx;
  padding: 0 40rpx;
  font-size: 30rpx;
  font-weight: 900;
  line-height: 60rpx;
}
</style>
