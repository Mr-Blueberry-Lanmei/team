import { defineStore } from 'pinia';
import {ref, watch} from 'vue'
import { getSongAPI, playsong } from '@/servers/servers'

export const useCounterStore = defineStore('counter',() => {
	const userId = ref(0)
	const detailId = ref(488388942)
  const flag = ref(false)
  const innerAudioContext = uni.createInnerAudioContext()

  const song = ref({
    name: '願い～あの頃のキミへ～',
    al:{
    picUrl:  "https://p1.music.126.net/TBJ9yAhUs8UKWGFWuIJgxw==/109951165946337053.jpg"
    }
  })
  const mp3 = ref('http://m702.music.126.net/20241107230421/baa376d8079b17dca2d8af03ee3699ff/jd-musicrep-ts/af33/9198/549c/7e01c2806bb8f83111218fbd9dbd2f0a.mp3 ')
  
  innerAudioContext.autoplay = true 
  innerAudioContext.src = mp3.value

  watch(detailId,() => {
    console.log(111)
    playsong({id: detailId.value}).then(res => {
      mp3.value = res.data.data[0].url
    })
  })
  watch(mp3, () => innerAudioContext.src = mp3.value )

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
    add,
  }
});