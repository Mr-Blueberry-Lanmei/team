<script setup lang="ts">
import { qrKeyApi, qrCheckApi, qrCreateApi } from '@/servers/servers'
import { ref, onUnmounted, watch } from 'vue'
import { useUserStore } from '@/store/user'


const user = useUserStore()

const unikey = ref('')
const qrimg = ref('')
const qrStatus = ref('')
const qrCode = ref<null | number>(null)
let timer = ref(null)

const getQR = async () => {
  // 获取key
  const keyRes = await qrKeyApi()
  // console.log(keyRes.data)
  unikey.value = keyRes.data.data.unikey
  // 创建二维码
  const qrRes = await qrCreateApi(unikey.value)
  // console.log(qrRes.data.data.qrimg)
  qrimg.value = qrRes.data.data.qrimg
  // 查询二维码状态
  qrCheck()
}
getQR()

const qrCheck = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
  const checkQRStatus = async () => {
    try {
      const res = await qrCheckApi(unikey.value)
      // console.log(res)
      qrCode.value = res.data.code
      if (res.data.code === 800) {
        // 二维码过期，重新获取二维码
        qrStatus.value = '二维码已过期，请重新获取'
        clearInterval(timer)
      } else if (res.data.code === 801) {
        // 等待扫码
      } else if (res.data.code === 802) {
        // 等待确定
        qrStatus.value = '二维码已扫描，请在手机端确认登录'
      } else if (res.data.code === 803) {
        qrStatus.value = '二维码已使用，登录成功'
        uni.setStorageSync('curCookie', res.data.cookie)
        user.getAccount()
        uni.showToast({
          title: '登录成功',
          icon: 'success'
        })
        clearInterval(timer)
        setTimeout(() => {
          uni.switchTab({
            url: '/pages/index/index'
          })
        }, 1000)
      }
    } catch (error) {
      console.log('检测二维码状态失败', error)
    }
  }
  timer = setInterval(checkQRStatus, 2000)
}

watch(unikey, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    qrCheck()
  }
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
})

const resetQr = () => {
  if (qrCode.value === 800) {
    qrCode.value = null
    getQR()
  }
}

</script>

<template>
  <view class="qr-wrap">
    <image :src="qrimg" mode="widthFix" v-if="qrimg"></image>
    <view class="qr-code" v-if="qrCode !== null && qrCode !== 801" @click="resetQr">{{ qrStatus }}</view>
  </view>
</template>

<style lang="scss" scoped>
.qr-wrap {
  position: relative;
  image {
    max-width: 500rpx;
    margin: 0 auto;
    display: block;
  }
}
.qr-code {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #fff, $alpha: .5);
  text-align: center;
  line-height: 300px;
  font-size: 22px;
}
</style>