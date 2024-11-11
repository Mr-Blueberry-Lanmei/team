import { defineStore } from "pinia"
import { ref } from "vue"
import { loginStatusApi, userDetailApi, getAccountApi} from "@/servers/servers"

export const useUserStore = defineStore('user', () => {
  const profile = ref<any>(null)
  const account = ref<any>({})
  const cookie = uni.getStorageSync('curCookie')

  

  const getUserDetail = async () => {
    const res = await userDetailApi({id: account.value.id})
    profile.value = {
      ...res.data.profile,
      level: res.data.level,
      listenSongs: res.data.listenSongs,
      createDays: res.data.createDays,
    }
    
  }


  const getAccount = async () => {
    const res = await getAccountApi({cookie: cookie})
    account.value = res.data.account
    profile.value = res.data.profile
    console.log(res.data)
    if (res.data.account) {
      // getUserDetail()
    }
  }


  return {
    profile,
    account,
    getAccount,
    getUserDetail
  }
})