<template>
  <view>
    <view class="uni-form-item uni-column">
      <input
        class="uni-input"
        placeholder="输入手机号"
        type="text"
        v-model="phoneNumber"
        @blur="validatePhoneNumber"
      />
      <text class="error-message" v-if="phoneErrorMessage">{{ phoneErrorMessage }}</text>
    </view>
    <input
      class="uni-captcha"
      type="text"
      placeholder="请输入验证码"
      v-model="captchaInput"
      v-if="captchaShow"
      @input="onCaptchaInput"
    >
		<button @click="submit" v-if="buttonShow">获取验证码</button>
    <button @click="login" v-else>登录</button>
  </view>
</template>
 
<script lang="ts" setup>
import { ref } from "vue"
import { captchaSentApi, captchaVerifyApi, getlogin } from "@/servers/servers"
import { useUserStore } from "@/store/user"

const user = useUserStore()

const phoneNumber = ref('')
const phoneErrorMessage = ref('')
const captchaShow = ref(false)
const captchaInput = ref('')
const captchaVerify = ref(false)
const buttonShow = ref(true)

const phoneRules = {
  required: true,
  errorMessage: '请输入手机号',
  pattern: /^[1][3-9]\d{9}$/,
  errorPatternMessage: '请输入有效的手机号'
}

const validatePhoneNumber = () => {
  if (!phoneRules.pattern.test(phoneNumber.value)) {
    phoneErrorMessage.value = phoneRules.errorPatternMessage
  } else {
    phoneErrorMessage.value = ''
  }
}

const onCaptchaInput = async () => {
  if (captchaInput.value) {
    const res = await captchaVerifyApi({phone: phoneNumber.value, captcha: captchaInput.value})
    if (res.data.code === 200) {
      captchaVerify.value = true
    } else {
      // alert('验证码错误')
      captchaVerify.value = false
    }
  }
}

const submit = async () => {
  validatePhoneNumber()
  captchaShow.value = true
  buttonShow.value = false
  if (!phoneErrorMessage.value) {
    console.log('手机号验证通过:', phoneNumber.value)
    const res = await captchaSentApi(phoneNumber.value)
    if (res.data.code === 200) {
      console.log('验证码发送成功')
    } else {
      alert('验证码发送失败')
      captchaShow.value = false
    }
  } else {
    console.log('手机号验证失败:', phoneErrorMessage.value)
  }
}


const login = async () => {
  if (captchaVerify.value) {
    const res = await getlogin({phone:phoneNumber.value, captcha: captchaInput.value})
    if (res.data.code === 200) {
      uni.setStorageSync('curCookie', res.cookies)
      user.getAccount()
      uni.switchTab({url: '/pages/mine/mine'})
    } else {
      alert('登录失败')
    }
    captchaShow.value = false
    captchaVerify.value = false
    buttonShow.value = true
    captchaInput.value = ''
  }
}




</script>

<style lang="scss" scoped>
.uni-input {
  background: #2C272D;
  padding: 40rpx 150rpx;
  width: 35%;
  border-radius: 20rpx;
  margin-left: 100rpx;
  margin-top: 400rpx;
  color: white;
}
.error-message {
  padding-left: 120rpx;
  color: red;
}
.uni-captcha {
  background: #2C272D;
  padding: 40rpx 150rpx;
  width: 35%;
  border-radius: 20rpx;
  margin-left: 100rpx;
  margin-top: 20rpx;
  color: white;
}
button {
  width: 72%;
  border-radius: 40rpx;
  margin-top: 30rpx;
  background: #FB3B3A;
}
</style>
