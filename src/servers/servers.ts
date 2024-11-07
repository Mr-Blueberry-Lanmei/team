import request from "./request"
import type{responseItem} from './type'

// 登录
export const getlogin = (data) => request<responseItem>({url: '/login/cellphone', data})

// 轮播图
export const getBanner = () => request<responseItem>({url: '/banner'})

// 歌曲分类
export const getClassify = (data)=>request<responseItem>({url:'/top/playlist',data});

// 推荐歌单
export const getSongList = (data)=>request<responseItem>({url:'/personalized',data});

// 最新歌曲
export const getNewSong = (data)=>request<responseItem>({url:'/top/song',data});

// 所有榜单内容摘要
export const getRankList = ()=>request<responseItem>({url:'/toplist/detail'});

// 所有榜单
export const getAllRankList = ()=>request<responseItem>({url:'/toplist'});
