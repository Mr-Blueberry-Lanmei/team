import{d as a,r as s,O as t,o as l,b as e,a as o,w as n,k as r,t as u,F as d,e as i,i as c,c as p}from"./index-xKENJgKZ.js";import{t as m,v,_ as f}from"./plugin-vueexport-helper.DWzSugOC.js";import{p as _}from"./playBar.DGwqn_B9.js";import{u as k}from"./store.DkBfJSb9.js";const b=f(a({__name:"songdetail",setup(a){const f=k(),b=s({}),g=s(0);s("");const j=s(0);t((a=>{const s=1*a.id;g.value=s,m({id:g.value}).then((a=>{console.log(a),b.value.name=a.data.playlist.name,b.value.id=a.data.playlist.id,b.value.tracks=a.data.playlist.tracks}))}));return(a,s)=>{const t=c;return l(),e(d,null,[o(t,{class:"box"},{default:n((()=>[o(t,{class:"tip"},{default:n((()=>[r(u(b.value.name),1)])),_:1}),(l(!0),e(d,null,i(b.value.tracks,(a=>(l(),p(t,{class:"songs",onClick:s=>{return t=a.id,void v({id:t}).then((a=>{f.detailId=t}));var t}},{default:n((()=>[o(t,null,{default:n((()=>[r(u(a.name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),256))])),_:1}),o(_,{bottom:j.value},null,8,["bottom"])],64)}}}),[["__scopeId","data-v-c886a622"]]);export{b as default};