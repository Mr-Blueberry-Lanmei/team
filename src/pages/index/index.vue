<template>
   <Header :title="title"/>
   <Tip/>
   <Banner/>
   <List/>
   <Recommend/>
   <playBar :bottom="bottom"/>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import Banner from '@/components/banner.vue'
import Header from '@/components/header.vue'
import Tip from '@/components/tip.vue'
import List from '@/components/list.vue'
import Recommend from '@/components/recommend.vue'
import playBar from '@/components/playBar.vue'

const title = ref('这是父组件的参数')
const bottom = ref(50)

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
