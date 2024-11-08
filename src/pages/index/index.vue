<template>
   <Header v-model="flag"/>
   <Tip/>
   <Banner/>
   <List/>
   <Recommend/>
   <playBar :bottom="bottom"/>
   <center v-model="flag"/>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue'
import Banner from '@/components/banner.vue'
import Header from '@/components/header.vue'
import Tip from '@/components/tip.vue'
import List from '@/components/list.vue'
import Recommend from '@/components/recommend.vue'
import playBar from '@/components/playBar.vue'
import center from '@/components/center.vue'


const bottom = ref(50)
const flag = ref(false) 
watch(flag, () => console.log('改变',flag.value))

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
