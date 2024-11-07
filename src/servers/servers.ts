import request from "./request"
import type{responseItem,eventItem} from './type'



// 登录
export const getlogin = (data:any) => request<responseItem>({url: '/login/cellphone', data})

// 轮播图
export const getBanner = () => request<responseItem>({url: '/banner'})

//热门话题动态
export const getDynamicAPI = () => request<eventItem>({url:'/topic/detail/event/hot?actid=111551188'})

export const loginAPI = () => request<responseItem>({url:'/register/anonimous'})

export const getData = () => request<responseItem>({url:'/playmode/intelligence/list'})

export const getSongAPI = (data:any)=>request<responseItem>({url:'/song/detail', data})

export const getSongUrlAPI = (data:any)=>request<responseItem>({url:'/song/url', data})