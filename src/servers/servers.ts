import request from "./request"
import type{responseItem} from './type'
import type{dataIt} from './type'


// 登录
export const getlogin = (data: dataIt) => request<responseItem>({url: '/login/cellphone', data})

// 轮播图
export const getBanner = () => request<responseItem>({url: '/banner'})

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

// 歌曲播放
export const playsong = (data: dataIt) => request<responseItem>({url: '/song/url', data})
