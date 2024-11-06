import request from "./request"
import type{responseItem,eventItem} from './type'



// 登录
export const getlogin = (data) => request<responseItem>({url: '/login/cellphone', data})

// 轮播图
export const getBanner = () => request<responseItem>({url: '/banner'})

//热门话题动态
export const getDynamicAPI = () => request<eventItem>({url:'/topic/detail/event/hot?actid=111551188'})

export const loginAPI = () => request<responseItem>({url:'/register/anonimous'})
