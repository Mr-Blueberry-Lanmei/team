import{D as a,r as e,d as s,o as l,c as t,a as u,b as r,m as d,F as c,e as o,A as n,E as i,n as f,i as _,I as p,f as h,t as m,j as v,S as y}from"./index-dMn1ox7C.js";import{a as g,e as k}from"./servers.cQdUmuDB.js";import{_ as x}from"./plugin-vueexport-helper.BCo6x5W8.js";const b=a("histoey",(()=>({history:e(["张杰","薛之谦","邓紫棋"])}))),j=x(s({__name:"search",setup(a){const s=()=>i({delta:1}),v=b(),y=e([]),k=e(""),x=e(""),j=()=>f({url:`/pages/searchsong/searchsong?keywords=${x.value}`});g().then((a=>y.value=a.data.result.hots));return(()=>{let a=0;setInterval((()=>{if(k.value=y.value[a].first,a>=y.value.length-1)return a=0;a++}),2e3)})(),(a,e)=>{const i=_,f=p;return l(),t(c,null,[u(i,{class:"header"},{default:r((()=>[u(i,{class:"iconfont icon-fanhui",onClick:s}),u(f,{type:"text",class:"inp",placeholder:k.value,modelValue:x.value,"onUpdate:modelValue":e[0]||(e[0]=a=>x.value=a)},null,8,["placeholder","modelValue"]),u(i,{class:"tip",onClick:j},{default:r((()=>[d("搜索")])),_:1})])),_:1}),u(i,{class:"his"},{default:r((()=>[u(i,null,{default:r((()=>[d("历史记录：")])),_:1}),u(i,{class:"deat"},{default:r((()=>[(l(!0),t(c,null,o(n(v).history,(a=>(l(),h(i,{key:a,class:"item"},{default:r((()=>[d(m(a),1)])),_:2},1024)))),128))])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-db05606a"]]),I=x(s({__name:"search",setup(a){const s=e([]);return k().then((a=>s.value=a.data.data)),e(2),(a,e)=>{const n=_,i=v,f=y;return l(),h(n,{class:"box"},{default:r((()=>[u(j),u(n,{class:"banner"},{default:r((()=>[u(f,{"display-multiple-items":2,class:"wrapp"},{default:r((()=>[u(i,{class:"item"},{default:r((()=>[u(n,{class:"con"},{default:r((()=>[u(n,{class:"tit"},{default:r((()=>[d("热搜榜")])),_:1}),(l(!0),t(c,null,o(s.value,((a,e)=>(l(),h(n,{key:a.searchWord,class:"cont"},{default:r((()=>[d(m(e+1)+" "+m(a.searchWord),1)])),_:2},1024)))),128))])),_:1})])),_:1}),u(i,{class:"item"},{default:r((()=>[d("123123")])),_:1}),u(i,{class:"item"},{default:r((()=>[d("123123")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-37c84f81"]]);export{I as default};