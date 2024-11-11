import request from "./request"
import type{responseItem,eventItem} from './type'

import type{dataIt} from './type'

// 登录
export const getlogin = (data: dataIt) => request<responseItem>({url: '/login/cellphone', data})

// 轮播图
export const getBanner = () => request<responseItem>({url: '/banner'})

//热门话题动态
export const getDynamicAPI = () => request<responseItem>({url:'/topic/detail/event/hot?actid=111551188'})

export const getData = () => request<responseItem>({url:'/playmode/intelligence/list'})

//歌曲详情
export const getSongAPI = (data:any)=>request<responseItem>({url:'/song/detail', data})

// 获取验证码
export const captchaSentApi = (data:dataIt) => request<responseItem>({url: `/captcha/sent?timestamp=${Date.now()}`, data})

// 校验验证码
export const captchaVerifyApi = (data:dataIt) => request<responseItem>({url:`/captcha/verify?timestamp=${Date.now()}`, data})

// 登录状态
export const loginStatusApi = () => request<responseItem>({url: '/login/status'})

// 获取二维码的key
export const qrKeyApi = () => request<responseItem>({url: `/login/qr/key?timestamp=${Date.now()}`})

// 生成二维码
export const qrCreateApi = (data:dataIt) => request<responseItem>({url: `/login/qr/create?timestamp=${Date.now()}&qrimg=true`, data})

// 二维码检测扫码状态接口
export const qrCheckApi = (data:dataIt) => request<responseItem>({url: `/login/qr/check?timestamp=${Date.now()}`, data})

// 用户详情
export const userDetailApi = (data:dataIt) => request<responseItem>({url: '/user/detail', data})

// 用户歌单
export const userPlaylistApi = (data:dataIt) => request<responseItem>({url: '/user/playlist', data})

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

// 歌曲播放 && 歌曲详情
export const playsong = (data: dataIt) => request<responseItem>({url: '/song/url', data})

// 歌曲分类
export const getClassify = (data: dataIt)=>request<responseItem>({url:'/top/playlist',data});

// 推荐歌单
export const getSongList = (data: dataIt)=>request<responseItem>({url:'/personalized',data});

// 最新歌曲
export const getNewSong = (data: dataIt)=>request<responseItem>({url:'/top/song',data});

// 所有榜单内容摘要
export const getRankList = ()=>request<responseItem>({url:'/toplist/detail'});

// 所有榜单
export const getAllRankList = ()=>request<responseItem>({url:'/toplist'});

// 请求歌单详情
export const getDetalisSongList = (data:dataIt) =>request<responseItem>({url:'/playlist/detail',data})

// 搜索关键字
export const getsearch = () => request<responseItem>({url: '/search/hot'})

// 搜索
export const getseadeta = (data: dataIt) => request<responseItem>({url: '/search',data})

// 获取账号信息
export const getAccountApi = (data:dataIt) => request<responseItem>({url: '/user/account', method: 'POST', data})

// 获取博客列表
export const getBloggerList=()=>request<responseItem>({url:'/voicelist/search'})
