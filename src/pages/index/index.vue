<template>
   <Header/>
   <Tip/>
   <Banner/>
   <List/>
   <Recommend/>
</template>

<script lang="ts" setup>
import Banner from '@/components/banner.vue'
import Header from '@/components/header.vue'
import Tip from '@/components/tip.vue'
import List from '@/components/list.vue'
import Recommend from '@/components/recommend.vue'

</script>

<style lang="scss" scoped>
html,body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.img{
  display: block;
}
</style>
