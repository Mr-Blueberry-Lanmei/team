<script setup>
import { getBloggerList } from "@/servers/servers"

try {
    getBloggerList({ limit: 200 })
        .then((obj) => {
            console.log(obj)
        })
} catch (error) {
    console.log(error)
}
</script>

<template>
    <view>
        <view class="TitBar">
            <view>
                <view style="border: solid 1rpx rgb(209, 48, 48);background-color: #ffffff;">
                    <view>
                        <image src="../../../static/ckm-1.png"></image>
                    </view>
                </view>
                <text>我的博客</text>
            </view>
            <view>
                <view style="background: url(https://th.bing.com/th/id/OIP.FdvLmx6FMGPpfpaKzxVjHgHaE1?rs=1&pid=ImgDetMain);background-size: cover;">
                    <view>
                        <image src="../../../static/ckm-2.png"></image>
                    </view>
                </view>
                <text>全部分类</text>
            </view>
            <view>
                <view style="background: url(https://th.bing.com/th/id/OIP.7Vm6VspyYOmKs8fOui0rrgHaEo?pid=ImgDet&w=474&h=296&rs=1);background-size: cover;">
                    <view>
                        <image src="../../../static/ckm-3.png"></image>
                    </view>
                </view>
                <text>排行榜</text>
            </view>
            <view>
                <view style="background: url(https://th.bing.com/th/id/OIP.-MNxlJ3zlosdWn2-NbrCLAHaHa?rs=1&pid=ImgDetMain);background-size: cover;">
                    <view>
                        <image src="../../../static/ckm-4.png"></image>
                    </view>
                </view>
                <text>助眠解压</text>
            </view>
            <view>
                <view style="background: url(https://img.tukuppt.com/bg_grid/00/16/49/c5g2NX4aBr.jpg!/fh/350);background-size: cover;">
                    <view>
                        <image src="../../../static/ckm-5.png"></image>
                    </view>
                </view>
                <text>有声书</text>
            </view>
            <view>
                <view style="background: url(https://th.bing.com/th/id/OIP.T3n4rfQnaIUS__h6LjObFwHaE7?rs=1&pid=ImgDetMain) no-repeat;background-size: cover;">
                    <view>
                        <image src="../../../static/ckm-6.png"></image>
                    </view>
                </view>
                <text>广播电台</text>
            </view>
        </view>
        <view class="bloggerBox">
            <text>随心听FM</text>
            <swiper class="BloggerSwiper"    previous-margin="60rpx" next-margin="60rpx">
                <swiper-item>
                    <view style="background-color: #ffffff;height: 100%;border-radius: 20rpx;">绿茶三克</view>
                </swiper-item>
                <swiper-item style="margin: 0 50rpx;">
                    <view style="background-color: #ffffff;height: 100%;border-radius: 20rpx;">省赛妇女</view>
                </swiper-item>
                <swiper-item style="margin: 0 50rpx;">
                    <view style="background-color: #ffffff;height: 100%;border-radius: 20rpx;">爱上复赛看过</view>
                </swiper-item>
            </swiper>
        </view> 
    </view>
</template>

<style scoped lang="scss">
.BloggerSwiper{
    width: 100%;
    height: 180rpx;
    >swiper-item{
        width:calc(100vw - 80rpx);
    }
}
.bloggerBox {
    width: 100vw;
    height: 350rpx;
    background-color: #8d8c91;
    display: flex;
    flex-direction: column;
    >text{
        font-size: 25rpx;
        text-align: center;
        margin: 15rpx 0;
    }
}

.TitBar {
    width: 100vw;
    height: 200rpx;
    background-color: #ffffff;
    color: #8d8c91;
    position: sticky;
    top: 0;
    left: 0;
    overflow-x: scroll;
    overflow-y: none;
    font-weight: 600;
    line-height: 100rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    >view:first-child{
        margin-left: 150rpx;
    }
    >view {
        margin-right: 40rpx;
        display: flex;
        flex-direction: column;
        >text{
            flex: none;
            width: 100rpx;
            height: 25rpx;
            font-size: 23rpx;
            font-weight: 530;
            text-align: center;
            line-height: 25rpx;
            margin-top: 10rpx;
        }
        >view {
            flex: none;
            border-radius: 50rpx;
            width: 100rpx;
            height: 100rpx;
            background-color: antiquewhite;
            display: flex;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            >view {
                width: 50rpx;
                height: 50rpx;
                margin-bottom: 20rpx;

                >image {
                    width: 50rpx;
                    height: 50rpx;
                }
            }
        }
    }
}

.TitBar::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
}
</style>