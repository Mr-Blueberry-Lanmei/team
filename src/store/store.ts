import { defineStore } from 'pinia';
import {ref, watch,computed} from 'vue'
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
  const mp3 = ref('')
  
  const curTime = ref('00:00')
  const duration = ref<string>()
  const parsent = ref<number>()

  innerAudioContext.autoplay = true 
  innerAudioContext.src = mp3.value

  watch(detailId,() => {
    console.log(111)
    playsong({id: detailId.value}).then(res => {
      mp3.value = res.data.data[0].url
    })
  })
  innerAudioContext.src = mp3.value

  watch(detailId,() => {
    getSongAPI({ids: detailId.value}).then(res => song.value = res.data.songs[0])
    playsong({id: detailId.value}).then(res => mp3.value = res.data.data[0].url)
  },{immediate: true})
  watch(mp3, () => innerAudioContext.src = mp3.value , {immediate: true})
  
  innerAudioContext.onCanplay(()=>{
    var time = innerAudioContext.duration.toFixed(0)
    var min = Math.floor( time / 60)
    var second = time % 60
    duration.value = (min >= 10 ? min : '0' + min ) + ':' + (second > 10 ? second : '0' + second )
  })

  innerAudioContext.onTimeUpdate(()=>{
    const time = innerAudioContext.currentTime.toFixed(0)
    const min = Math.floor( time /60)
    const second = time % 60
    curTime.value = (min >= 10 ? min : '0' + min ) + ':' + (second >= 10 ? second : '0' + second)
    parsent.value = ((time / innerAudioContext.duration).toFixed(2))*100
  })

  innerAudioContext.onPlay(() => {
    flag.value = true
  })
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
    curTime,
    parsent,
    duration
  }
});