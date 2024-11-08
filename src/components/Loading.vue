<script setup>

</script>

<template>
    <view class="annular">
       <view>
            <view>
                <view style="background-color:#fddaff ;width: 31rpx;height: 31rpx;"></view>
            </view>
            <view>
                <view style="background-color: #dfadfc;width: 29rpx;height: 29rpx;"></view>
            </view>
            <view>
                <view style="background-color:#adcdfc ;width: 28rpx;height: 28rpx;"></view>
            </view>
            <view>
                <view style="background-color: #adfcf4 ;width: 27rpx;height: 27rpx;"></view>
            </view>
            <view>
                <view style="background-color: #caf8d0;width: 26rpx;height: 26rpx;"></view>
            </view>
            <view>
                <view style="background-color:#fddaff ;width: 25rpx;height: 25rpx;"></view>
            </view>
            <view>
                <view style="background-color: #dfadfc;width: 24rpx;height: 24rpx;"></view>
            </view>
            <view>
                <view style="background-color:#adcdfc ;width: 23rpx;height: 23rpx;"></view>
            </view>
            <view>
                <view style="background-color: #adfcf4 ;width: 22rpx;height: 22rpx;"></view>
            </view>
            <view>
                <view style="background-color: #caf8d0;width: 21rpx;height: 21rpx;"></view>
            </view>
            <view>
                <view style="background-color:#fddaff ;width: 18rpx;height: 18rpx;"></view>
            </view>
            <view>
                <view style="background-color: #dfadfc;width:15rpx;height:15rpx;"></view>
            </view>
        </view>
        <text style="color: #fddaff;margin-top: 25rpx">加载中...</text>
    </view>  
</template>

<style>
@keyframes loading {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
.annular{
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.272);
    position: fixed;
    top:0;
    left: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    >view{
        margin-bottom: 10rpx;
        height: 260rpx;
        width: 300rpx;
        position: relative;
        animation: loading 0.85s ease-in-out infinite;
        >view{
            width: 27rpx;
            height: 130rpx;
            position: absolute;
            left: 135rpx;
            top: 0;
            text-align:center;
            font-weight: 700;
            font-size:21px;
            transform-origin: bottom center;
            >view{
                position: absolute;
                right: 0;
                top: 0;
                width: 40rpx;
                height: 40rpx;
                background-color: #dd8f8f;
                border-radius: 50%;
            }
        }
        >view:nth-child(2){
            transform: rotate(30deg);
        }
        >view:nth-child(3){
            transform: rotate(60deg);
        }
        >view:nth-child(4){
            transform: rotate(90deg);
        }
        >view:nth-child(5){
            transform: rotate(120deg);
        }
        >view:nth-child(6){
            transform: rotate(150deg);
        }
        >view:nth-child(7){
            transform: rotate(180deg);
        }
        >view:nth-child(8){
            transform: rotate(210deg);
        }
        >view:nth-child(9){
            transform: rotate(240deg);
        }
        >view:nth-child(10){
            transform: rotate(270deg);
        }
        >view:nth-child(11){
            transform: rotate(300deg);
        }
        >view:nth-child(12){
            transform: rotate(330deg);
        }
        >view:nth-child(13){
            transform: rotate(360deg);
        }
    }
}
</style>