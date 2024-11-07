import request from "./request"
import type{responseItem} from './type'
import type{dataIt} from './type'

// 登录
export const getlogin = (data: dataIt) => request<responseItem>({url: '/login/cellphone', data})

// 轮播图
export const getBanner = () => request<responseItem>({url: '/banner'})

// 热歌榜
export const getdefault = () => request<responseItem>({url: '/toplist/detail'})

// 每日推荐歌单
export const getresource = () => request<responseItem>({url: '/recommend/resource'})

// 心动模式
export const getlist = (data: dataIt) => request<responseItem>({url: '/playmode/intelligence/list', data})

// 热搜榜
export const getdetail = () => request<responseItem>({url: '/search/hot/detail'})

// 热搜榜2
export const gethot = () => request<responseItem>({url: '/top/playlist?limit=6'})

// 歌单详情
export const getplaylist = (data: dataIt) => request<responseItem>({url: '/playlist/detail', data})

// 歌曲播放
export const playsong = (data: dataIt) => request<responseItem>({url: '/song/url', data})