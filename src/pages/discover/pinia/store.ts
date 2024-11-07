import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDiscoverStore = defineStore('counter', ()=>{
	const secondLevel=ref(0)
    const firstLevel=ref(0)
    // 改变当前tab切换下标
    function changLevelIdx(s:string,num:number){
        console.log(s,num)
        if(s==="s"){
            secondLevel.value=num;
        }else{
            firstLevel.value=num;
        }
        console.log(secondLevel.value,firstLevel.value)
    }   
    return{
        secondLevel,
        firstLevel,
        changLevelIdx
    }
});