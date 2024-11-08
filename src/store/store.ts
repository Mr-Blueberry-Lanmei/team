import { defineStore } from 'pinia';
import {ref, watch} from 'vue'
import { getSongAPI, playsong } from '@/servers/servers'

export const useCounterStore = defineStore('counter',() => {
  // 声明空的音乐id 用户id 建立显示播放暂停图标的开关
	const userId = ref(0)
	const detailId = ref(488388942)
  const flag = ref(false)
  const innerAudioContext = uni.createInnerAudioContext()
  // jianli1
  const song = ref({
    name: '願い～あの頃のキミへ～',
    al:{
    picUrl:  "https://p1.music.126.net/TBJ9yAhUs8UKWGFWuIJgxw==/109951165946337053.jpg"
    }
  })
  const mp3 = ref('')
  
  innerAudioContext.src = mp3.value

  watch(detailId,() => {
    playsong({id: detailId.value}).then(res => {
      mp3.value = res.data.data[0].url
    })
  },{immediate: true})
  watch(mp3, () =>{ 
    innerAudioContext.src = mp3.value , {immediate: true}})

  innerAudioContext.onPlay(() => flag.value = true)
  innerAudioContext.onPause(() => flag.value = false)

  const add =() => {
    if(flag.value){
        innerAudioContext.pause()
    } else {
        innerAudioContext.play()
    }
  }

  return {
    userId,
    detailId,
    flag,
    song,
    mp3,
    add
  }
});