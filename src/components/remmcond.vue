<template>
    <view class="con">
        <view class="item" v-for="item in list" :key="item.id">
            <view class="title">
                <image :src="item.user.avatarUrl"></image>
                <text>{{ item.user.nickname }}</text>
            </view>
            <view class="content">
                <text>{{ JSON.parse(item.json).msg }}</text>
                <view class="pic">
                    <image 
                        v-for="pic in item.pics" 
                        :key="pic.squareUrl" 
                        :src="pic.squareUrl"
                        @click="url = pic.rectangleUrl;flag=true"
                    ></image>
                    <bigImage v-if="flag" :url="url" v-model:flag="flag"/>
                </view>
                <view class="share" v-if="JSON.parse(item.json).song">
                    <image src="../static/play.png" class="icon" @click="add(JSON.parse(item.json).song.id)"></image>
                    <image :src="JSON.parse(item.json).song.album.picUrl" @click="add(JSON.parse(item.json).song.id)"></image>
                    <view>
                        <view>{{ JSON.parse(item.json).song.name }}</view>
                        <view class="art">{{ JSON.parse(item.json).song.artists.map((item:any) => item.name).join('') }}</view>
                    </view>
                </view>
                <view class="tag">
                    <text v-for="tag in item.bottomActivityInfos">#{{ tag.name }}</text>
                </view>
                <view class="bar">
                    <text>🗂️分享</text>
                    <text>💬评论</text>
                    <text>👍点赞</text>
                    <text>更多</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang='ts'>
import { ref } from "vue" 
import { useCounterStore } from "@/store/store"
import { getDynamicAPI } from "@/servers/servers"
import bigImage from "@/components/BigImage.vue"

const list = ref<AnyObject>([])
const store = useCounterStore()
const url = ref()
const flag = ref(false)

const getDynamic = async() => {
    try {
        const res = await getDynamicAPI()
        console.log(res.data.events)
        list.value = res.data.events!
    } catch(e) {
        console.log(e)
    }
}
getDynamic()

const add = (id:number) => {
    store.detailId = id
}

const change = () => {

}

</script>

<style lang='scss' scoped>
.item{
    min-height:80px;
    border-bottom:1px solid #eee;
    padding:10px;
    .title{
        display: flex;
        align-items: center;
        height:50px;
        image{
            width:50px;
            height:50px;
            border:1px solid #eee;
            border-radius:50%;
            margin-right:15px;
        }
    }
    .content{
        padding-left:65px;
        }
    .pic{
        margin-top:10px;
        image{
            width:80px;
            height:80px;
            border:1px solid #ccc;
            margin-right:4px;
        }
    }
    .bar{
        font-size:14px;
        color:#666;
        display: flex;
        justify-content: space-between;
        margin-top:15px;
    }
}
.tag{
    text{
        padding:0 10px;
        font-size:12px;
        background:#eee;
        border-radius:10px;
        color:#666;
    }
}
.share{
    display: flex;
    align-items: center;
    background:#eee;
    padding:5px 10px;
    width:230px;
    border-radius:7px;
    margin:10px 0;
    position: relative;
    view{
        font-size:13px;
    }
    .art{
        color:#999;
    }
    image{
        width:40px;
        height:40px;
        border-radius:5px;
        margin-right:10px;
    }
    .icon{
        position:absolute;
        width:20px;
        height:20px;
        top:15px;
        left:20px;
        z-index:1;
    }
}
</style>