import{d as e,r as a,o as s,c as l,w as t,a as r,b as n,e as u,F as c,S as o,i,f as d,g as _,n as p,I as v,h as m,j as f,k as g,t as h,l as w,m as b}from"./index-B6TYV6Wx.js";import{g as I,_ as x,a as y,b as k,c as j}from"./plugin-vueexport-helper.DLOLmnhZ.js";import{p as F}from"./playBar.B6UE-Id-.js";import"./store.CpaP1kbq.js";const C=x(e({__name:"banner",setup(e){const p=a([]),v=a(!0),m=a(3e3),f=a(!0);return I().then((e=>p.value=e.data.banners)),(e,a)=>{const g=d,h=_,w=o,b=i;return s(),l(b,{class:"banner"},{default:t((()=>[r(w,{class:"swiper-wrap",autoplay:v.value,interval:m.value,circular:f.value},{default:t((()=>[(s(!0),n(c,null,u(p.value,(e=>(s(),l(h,{key:e.targetId,class:"swiper-item"},{default:t((()=>[r(g,{src:e.imageUrl,mode:"widthFix",class:"item"},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["autoplay","interval","circular"])])),_:1})}}}),[["__scopeId","data-v-cedbd399"]]),D=x(e({__name:"header",setup(e){const n=()=>p({url:"/pages/search/search"}),u=a([]),c=a("");y().then((e=>u.value=e.data.result.hots));return(()=>{let e=0;setInterval((()=>{if(c.value=u.value[e].first,e>=u.value.length-1)return e=0;e++}),2e3)})(),(e,a)=>{const u=i,o=v;return s(),l(u,{class:"header"},{default:t((()=>[r(u,{class:"iconfont icon-gengduo"}),r(o,{type:"text",class:"inp",onFocus:n,placeholder:c.value},null,8,["placeholder"]),r(u,{class:"iconfont icon-yuyin"})])),_:1})}}}),[["__scopeId","data-v-06c5e8dd"]]),H=x(e({__name:"tip",setup(e){const r=a(new Date),n=setInterval((()=>r.value=new Date),36e5),u=m((()=>{const e=r.value.getHours();return e>0&&e<9?"早上好":e>=9&&e<14?"中午好":e>=14&&e<18?"下午好":"晚上好"}));return f((()=>{clearInterval(n)})),(e,a)=>{const r=i;return s(),l(r,{class:"tip"},{default:t((()=>[g(h(u.value),1)])),_:1})}}}),[["__scopeId","data-v-f3b9c8e2"]]),S=x(e({__name:"list",setup(e){const o=a([]);k().then((e=>o.value=e.data.list.filter((e=>e.tracks.length>0))));const _=e=>function(e){p({url:`/pages/DetalisSongList/DetalisSongList?id=${e}`})}(e);return(e,a)=>{const p=d,v=i,m=w;return s(),l(v,null,{default:t((()=>[r(m,{class:"scroll-view_H","scroll-x":"true"},{default:t((()=>[(s(!0),n(c,null,u(o.value,(e=>(s(),l(v,{class:"scroll-view-item_H uni-bg-red"},{default:t((()=>[r(p,{src:e.coverImgUrl,mode:"widthFix",class:"item",onClick:a=>_(e.id)},null,8,["src","onClick"])])),_:2},1024)))),256))])),_:1})])),_:1})}}}),[["__scopeId","data-v-ae5f4083"]]),U=x(e({__name:"recommend",setup(e){const o=a([]);j().then((e=>{o.value=e.data.playlists,console.log(o.value)}));return(e,a)=>{const _=d,v=i,m=b("viwe"),f=w;return s(),l(v,{class:"recomm"},{default:t((()=>[r(v,null,{default:t((()=>[r(f,{class:"scroll-view_H","scroll-x":"true"},{default:t((()=>[r(v,{class:"warp"},{default:t((()=>[(s(!0),n(c,null,u(o.value,(e=>(s(),l(m,{key:e.id,class:"ittem"},{default:t((()=>[r(_,{src:e.coverImgUrl,mode:"widthFix",class:"item",onClick:a=>{return s=e.id,p({url:"/pages/songdetail/songdetail?id="+1*s});var s}},null,8,["src","onClick"]),r(v,{class:"des"},{default:t((()=>[g(h(e.description),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-0d0ad3bc"]]),L=x(e({__name:"index",setup(e){const l=a("这是父组件的参数"),t=a(50);return(e,a)=>(s(),n(c,null,[r(D,{title:l.value},null,8,["title"]),r(H),r(C),r(S),r(U),r(F,{bottom:t.value},null,8,["bottom"])],64))}}),[["__scopeId","data-v-4d09bbe6"]]);export{L as default};
