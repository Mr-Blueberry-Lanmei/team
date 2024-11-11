<template>
  <view class="box">
      <search/>
      <view class="banner">
         <swiper :display-multiple-items="2" class="wrapp">
            <swiper-item class="item">
               <view class="con">
                  <view class="tit">热搜榜</view>
                  <view v-for="(v, i) in list" :key="v.searchWord" class="cont">{{i + 1}} {{ v.searchWord }}</view>
               </view>
            </swiper-item>
            <swiper-item class="item">123123</swiper-item>
            <swiper-item class="item">123123</swiper-item>
         </swiper>
      </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue" 
import search from "@/components/search.vue";
import {getdetail} from '@/servers/servers'
interface listltem {
   searchWord:string;
   score: number;
}
const list = ref<listltem[]>([])

getdetail().then(res => list.value = res.data.data)

const displayMultipleItems = ref(2)

</script>

<style lang="scss" scoped>
.box{
   margin: 0;
   padding: 0;
   width: 100%;
   height: 100vh;
   background: #eee;
   box-sizing: border-box;
}
.banner{
   width: 100%;
   height: 480px;
   padding: 0 20px;
   box-sizing: border-box;
   .wrapp{
      width: 100%;
      height: 100%;
      .item{
         width: calc(50% - 5px);
         height: 100%;
         padding-left:20px;
         box-sizing: border-box;
         border-radius: 10px;
         background-color: white;
         &:not(:first-child){
            margin-left: 10px;
         }
         .con{
            width: 100%;
            height: 100%;
            overflow: auto;
            .tit{
               width: 100%;
               height: 40px;
               font-weight: 900;
               line-height: 40px;
               border-bottom: 1px solid #eee;
               position: sticky;
               top: 0;
               background-color: white;
            }
            .cont{
               width: 100%;
               height: 30px;
               line-height: 30px;
            }
         }
      }
   }
}
</style>
