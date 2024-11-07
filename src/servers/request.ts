type response<t = AnyObject> = Omit<UniApp.RequestSuccessCallbackResult, 'data'> & {data: t}
import type{Item} from './type'

const baseurl = 'http://zyxcl.xyz/music/api'

const request = <t>({ url , data= {}, method= "GET" }: Item) =>{
  return new Promise<response<t>>((resolve, reject) => {
    uni.request({
      url: baseurl + url,
      data,
      method,
      success: (res: response<t>) => {
          resolve(res)
      },
      fail: e => reject(e)
  });
  })
}

export default request