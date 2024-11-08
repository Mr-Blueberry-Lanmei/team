import{d as e,r as a,o as l,c as t,w as s,a as u,k as o,t as n,H as c,J as r,K as d,I as v,y as i,i as p,q as y,L as m,M as k,f as _,N as f,b as g,e as h,F as w,B as x}from"./index-DhLYdZ3-.js";import{j as I,k as q,l as C,_ as B,q as V,m as j,n as M}from"./plugin-vueexport-helper.CyQ9RG2r.js";import{u as b}from"./user.CvVPJuEl.js";const P=B(e({__name:"Phone",setup(e){const m=b(),k=a(""),_=a(""),f=a(!1),g=a(""),h=a(!1),w=a(!0),x={required:!0,errorMessage:"请输入手机号",pattern:/^[1][3-9]\d{9}$/,errorPatternMessage:"请输入有效的手机号"},B=()=>{x.pattern.test(k.value)?_.value="":_.value=x.errorPatternMessage},V=async()=>{if(g.value){200===(await I({phone:k.value,captcha:g.value})).data.code?h.value=!0:h.value=!1}},j=async()=>{if(B(),f.value=!0,w.value=!1,_.value)console.log("手机号验证失败:",_.value);else{console.log("手机号验证通过:",k.value);200===(await q(k.value)).data.code?console.log("验证码发送成功"):(alert("验证码发送失败"),f.value=!1)}},M=async()=>{if(h.value){const e=await C({phone:k.value,captcha:g.value});200===e.data.code?(r("curCookie",e.cookies),m.getAccount(),d({url:"/pages/mine/mine"})):alert("登录失败"),f.value=!1,h.value=!1,w.value=!0,g.value=""}};return(e,a)=>{const r=v,d=i,m=p,h=y;return l(),t(m,null,{default:s((()=>[u(m,{class:"uni-form-item uni-column"},{default:s((()=>[u(r,{class:"uni-input",placeholder:"输入手机号",type:"text",modelValue:k.value,"onUpdate:modelValue":a[0]||(a[0]=e=>k.value=e),onBlur:B},null,8,["modelValue"]),_.value?(l(),t(d,{key:0,class:"error-message"},{default:s((()=>[o(n(_.value),1)])),_:1})):c("",!0)])),_:1}),f.value?(l(),t(r,{key:0,class:"uni-captcha",type:"text",placeholder:"请输入验证码",modelValue:g.value,"onUpdate:modelValue":a[1]||(a[1]=e=>g.value=e),onInput:V},null,8,["modelValue"])):c("",!0),w.value?(l(),t(h,{key:1,onClick:j},{default:s((()=>[o("获取验证码")])),_:1})):(l(),t(h,{key:2,onClick:M},{default:s((()=>[o("登录")])),_:1}))])),_:1})}}}),[["__scopeId","data-v-431cf3e8"]]),A=B(e({__name:"QRcode",setup(e){const u=b(),v=a(""),i=a(""),y=a(""),g=a(null);let h=a(null);const w=async()=>{const e=await V();v.value=e.data.data.unikey;const a=await j(v.value);i.value=a.data.data.qrimg,x()};w();const x=()=>{h&&(clearInterval(h),h=null);h=setInterval((async()=>{try{console.log(v.value);const e=await M({key:v.value});g.value=e.data.code,800===e.data.code?(y.value="二维码已过期，请重新获取",clearInterval(h)):801===e.data.code||(802===e.data.code?y.value="二维码已扫描，请在手机端确认登录":803===e.data.code&&(y.value="二维码已使用，登录成功",r("curCookie",e.data.cookie),u.getAccount(),f({title:"登录成功",icon:"success"}),clearInterval(h),setTimeout((()=>{d({url:"/pages/index/index"})}),1e3)))}catch(e){console.log("检测二维码状态失败",e)}}),2e3)};m(v,((e,a)=>{e!==a&&x()})),k((()=>{h&&(clearInterval(h),h=null)}));const I=()=>{800===g.value&&(g.value=null,w())};return(e,a)=>{const u=_,r=p;return l(),t(r,{class:"qr-wrap"},{default:s((()=>[i.value?(l(),t(u,{key:0,src:i.value,mode:"widthFix"},null,8,["src"])):c("",!0),null!==g.value&&801!==g.value?(l(),t(r,{key:1,class:"qr-code",onClick:I},{default:s((()=>[o(n(y.value),1)])),_:1})):c("",!0)])),_:1})}}}),[["__scopeId","data-v-4b45a87a"]]),F=B(e({__name:"login",setup(e){const c=a("phone"),r=[{text:"手机号登录",type:"phone"},{text:"二维码登录",type:"QR"}],d=a("");return m(c,(e=>{d.value=e}),{immediate:!0}),(e,a)=>{const v=_,i=p;return l(),t(i,{class:"login"},{default:s((()=>[u(v,{class:"wyy",src:"/team/assets/wangyiyun-ByBBvqBW.png"}),"phone"===c.value?(l(),t(P,{key:0})):(l(),t(A,{key:1})),u(i,{class:"change-type"},{default:s((()=>[(l(),g(w,null,h(r,(e=>u(i,{key:e.type,class:x(["link",{show:d.value===e.type}]),onClick:a=>c.value=e.type},{default:s((()=>[o(n(e.text),1)])),_:2},1032,["class","onClick"]))),64))])),_:1})])),_:1})}}}),[["__scopeId","data-v-7dcb99ff"]]);export{F as default};
