import { defineStore } from "pinia"
import { ref } from "vue"
import { loginStatusApi, userDetailApi } from "@/servers/servers"

export const useUserStore = defineStore('user', () => {
  const profile = ref(null)
  const account = ref(null)


  const getAccount = async () => {
    const res = await loginStatusApi()
    account.value = res.data.account
    console.log(account.value)
    if (res.data.account) {
      getuserDetail()
    }
  }

  const getuserDetail = async () => {
    const res = await userDetailApi(account.value.id)
    profile.value = {
      ...res.profile,
      level: res.level,
      listenSongs: res.listenSongs,
      createDays: res.createDays
    }
  }


  return {
    profile,
    account,
    getAccount,
    getuserDetail
  }
})