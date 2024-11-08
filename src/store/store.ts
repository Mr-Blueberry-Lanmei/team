import { defineStore } from 'pinia';
import {ref, watch} from 'vue'
import { getSongAPI, playsong } from '@/servers/servers'

export const useCounterStore = defineStore('counter',() => {
  // 声明空的音乐id 用户id 建立显示播放暂停图标的开关
	const userId = ref(0)
	const detailId = ref(488388942)
  const flag = ref(false)
  const innerAudioContext = uni.createInnerAudioContext()
  // 建立储存信息的song对象
  const song = ref({
    name: '願い～あの頃のキミへ～',
    al:{
    picUrl:  "https://p1.music.126.net/TBJ9yAhUs8UKWGFWuIJgxw==/109951165946337053.jpg"
    }
  })
  // 播放地址
  const mp3 = ref('')
  // 记录播放时间
  const curTime = ref('00:00')
  const duration = ref('')
  const parsent = ref(0)
  // 监听歌曲的id
  watch(detailId,() => {
    playsong({id: detailId.value}).then(res => mp3.value = res.data.data[0].url)
    getSongAPI({ids: detailId.value}).then(res => song.value = res.data.songs[0])
    innerAudioContext.autoplay = true
  },{immediate: true})

  watch(mp3, () => {
    innerAudioContext.src = mp3.value
    }, {immediate: true})
  
  innerAudioContext.onCanplay(()=>{
    const time = Number(innerAudioContext.duration.toFixed(0))
    const min = Math.floor( time / 60) 
    const second = time % 60
    duration.value = (min >= 10 ? min : '0' + min ) + ':' + (second > 10 ? second : '0' + second )
  })

  innerAudioContext.onTimeUpdate(()=>{
    const time = Number(innerAudioContext.currentTime.toFixed(0))
    const min = Math.floor( time /60)
    const second = time % 60
    curTime.value = (min >= 10 ? min : '0' + min ) + ':' + (second >= 10 ? second : '0' + second)
    parsent.value = Number((time / innerAudioContext.duration).toFixed(2)) * 100
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