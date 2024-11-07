import { defineStore } from 'pinia';
import {ref} from 'vue'

export const useCounterStore = defineStore('counter',() => {
	const userId = ref(0)
	const detailId = ref(0)
  
  return {
    userId,
    detailId
  }
});