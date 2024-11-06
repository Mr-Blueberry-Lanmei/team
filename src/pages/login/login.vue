<template>
  nav
  <button @click="login">登录</button>
</template>

<script lang="ts" setup>
import { ref } from "vue" 
import { loginAPI } from "@/servers/servers"

const login = async() => {
    try {
        const res = await loginAPI()
        console.log(res.data)
    } catch(e) {
        console.log(e)
    }
}



</script>

<style lang="scss" scoped>

</style>
