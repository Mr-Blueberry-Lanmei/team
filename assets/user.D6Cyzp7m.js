import{u as e,r as a}from"./index-Bj_6-jNO.js";import{o as t,p as o}from"./plugin-vueexport-helper.BZUi9ZgV.js";const s=e("user",(()=>{const e=a(null),s=a(null),l=async()=>{const a=await o(s.value.id);e.value={...a.profile,level:a.level,listenSongs:a.listenSongs,createDays:a.createDays}};return{profile:e,account:s,getAccount:async()=>{const e=await t();s.value=e.data.account,console.log(s.value),e.data.account&&l()},getuserDetail:l}}));export{s as u};