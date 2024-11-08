import { defineStore } from "pinia"
import {ref} from 'vue'

export const useHistoryStory = defineStore('histoey', () => {
  const history = ref(['张杰', '薛之谦', '邓紫棋'])

  return {
    history
  }
})