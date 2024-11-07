import request from "./request"
import type{responseItem} from './type'

// 手机号登录
export const getlogin = ({phone, captcha}) => request<responseItem>({url: '/login/cellphone', data: {phone, captcha}})

// 轮播图
export const getBanner = () => request<responseItem>({url: '/banner'})

// 获取验证码
export const captchaSentApi = (phone) => request<responseItem>({url: `/captcha/sent?timestamp=${Date.now()}`, data: {phone}})

// 校验验证码
export const captchaVerifyApi = ({phone, captcha}) => request<responseItem>({url:`/captcha/verify?timestamp=${Date.now()}`, data: {phone, captcha}})

// 登录状态
export const loginStatusApi = () => request<responseItem>({url: '/login/status'})

// 获取二维码的key
export const qrKeyApi = () => request<responseItem>({url: `/login/qr/key?timestamp=${Date.now()}`})

// 生成二维码
export const qrCreateApi = (key) => request<responseItem>({url: `/login/qr/create?timestamp=${Date.now()}`, data: {key, qrimg: 'qrimg'}})

// 二维码检测扫码状态接口
export const qrCheckApi = (key) => request<responseItem>({url: `/login/qr/check?timestamp=${Date.now()}`, data: {key}})

// 用户详情
export const userDetailApi = (uid) => request<responseItem>({url: '/user/detail', data: {uid}})

// 用户歌单
export const userPlaylistApi = (uid) => request<responseItem>({utl: '/user/playlist', data: {uid}})
