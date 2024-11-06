import request from "./request"
import type{responseItem} from './type'

// 登录
export const getlogin = (data) => request<responseItem>({url: '/login/cellphone', data})

// 轮播图
export const getBanner = () => request<responseItem>({url: '/banner'})
