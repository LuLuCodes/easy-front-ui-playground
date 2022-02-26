var I=Object.defineProperty;var y=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var w=(s,e,t)=>e in s?I(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,_=(s,e)=>{for(var t in e||(e={}))V.call(e,t)&&w(s,t,e[t]);if(y)for(var t of y(e))z.call(e,t)&&w(s,t,e[t]);return s};import{F as p,r as F,c as k,w as E,E as x,o as l,a,b as S,d as c,e as L,f as u,g as N,u as A,h as R,i as g,j as $,k as b,R as D,l as U,m as B}from"./vendor.0a253345.js";const J=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};J();const H="modulepreload",C={},T="/",q=function(e,t){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=`${T}${i}`,i in C)return;C[i]=!0;const n=i.endsWith(".css"),r=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${r}`))return;const o=document.createElement("link");if(o.rel=n?"stylesheet":H,n||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),n)return new Promise((P,O)=>{o.addEventListener("load",P),o.addEventListener("error",O)})})).then(()=>e())},h=(s,e,t)=>(e=e?`@${e}`:"",`https://unpkg.com/${s}${e}${t}`),K=(s,e,t)=>(e=e?`@${e}`:"",`https://cdn.jsdelivr.net/npm/${s}${e}${t}`),G=s=>{const e=h("@vue/compiler-sfc",s,"/dist/compiler-sfc.esm-browser.js"),t=h("@vue/runtime-dom",s,"/dist/runtime-dom.esm-browser.js");return{compilerSfc:e,runtimeDom:t}},M=({vue:s,elementPlus:e}={},t)=>Object.fromEntries(Object.entries({vue:{pkg:"@vue/runtime-dom",version:s,path:"/dist/runtime-dom.esm-browser.js",source:"jsdelivr"},"@vue/shared":{version:s,path:"/dist/shared.esm-bundler.js",source:"jsdelivr"},"element-plus":{pkg:t?"@element-plus/nightly":"element-plus",version:e,path:"/dist/index.full.mjs",source:"jsdelivr"},"@element-plus/icons-vue":{path:"/dist/index.mjs"}}).map(([n,r])=>{var o;return[n,(r.source==="unpkg"?h:K)((o=r.pkg)!=null?o:n,r.version,r.path)]}));function W(s){return btoa(unescape(encodeURIComponent(s)))}function Y(s){return decodeURIComponent(escape(atob(s)))}const v="PlaygroundMain.vue",d="App.vue",m="element-plus.js",Q=`
<script setup>
import App from './App.vue'
import { setupElementPlus } from './${m}'
setupElementPlus()
<\/script>
<template>
  <App />
</template>`.trim(),X=`
<script setup lang="ts">
import { ref } from 'vue'
import { User } from '@element-plus/icons-vue'
const msg = ref('Hello World!')
<\/script>
<template>
  <!-- Element Plus icons -->
  <el-icon><User /></el-icon>
  <h1>{{ msg }}</h1>
  <el-input v-model="msg" />
</template>
`.trim(),Z=s=>`
import { getCurrentInstance } from 'vue'
import ElementPlus from 'element-plus'
let installed = false
await loadStyle()
export function setupElementPlus() {
  if(installed) return
  const instance = getCurrentInstance()
  instance.appContext.app.use(ElementPlus)
  installed = true
}
export function loadStyle() {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
  	link.rel = 'stylesheet'
  	link.href = '${h("element-plus",s,"/dist/index.css")}'
    link.onload = resolve
    link.onerror = reject
  	document.body.appendChild(link)
  })
}
`,j=!0;class ee{constructor({serializedState:e="",versions:t={vue:"latest",elementPlus:"latest"}}){this.initialShowOutput=!1,this.initialOutputMode="preview",this.nightly=!1,this.pendingCompiler=null;let i={};if(e){const n=JSON.parse(Y(e));for(const r of Object.keys(n))i[r]=new p(r,n[r])}else i[d]=new p(d,X);i[v]=new p(v,Q,j),this.state=F({mainFile:v,files:i,activeFile:i[d],errors:[],vueRuntimeURL:""}),this.versions=t,this.initImportMap()}async init(){await this.setVueVersion(this.versions.vue),this.state.files[m]=new p(m,Z("latest").trim(),j);for(const e of Object.values(this.state.files))k(this,e);E(()=>k(this,this.state.activeFile))}setActive(e){this.state.files[e].hidden||(this.state.activeFile=this.state.files[e])}addFile(e){const t=typeof e=="string"?new p(e):e;this.state.files[t.filename]=t,this.setActive(t.filename)}deleteFile(e){if(e===m){x.warning("You cannot remove it, because Element Plus requires it.");return}confirm(`Are you sure you want to delete ${e}?`)&&(this.state.activeFile.filename===e&&this.setActive(d),delete this.state.files[e])}simplifyImportMaps(){const e=this.getImportMap(),t=Object.keys(M({},this.nightly));return e.imports=Object.fromEntries(Object.entries(e.imports).filter(([i])=>!t.includes(i))),JSON.stringify(e)}serialize(){const e=JSON.stringify(Object.fromEntries(Object.entries(this.getFiles()).map(([t,i])=>{if(t==="import-map.json")try{const n=this.simplifyImportMaps();return[t,n]}catch{}return[t,i]})));return`#${W(e)}`}getFiles(){const e={};for(const t of Object.values(this.state.files))t.hidden||(e[t.filename]=t.code);return e}initImportMap(){this.state.files["import-map.json"]||(this.state.files["import-map.json"]=new p("import-map.json",JSON.stringify({imports:{}},null,2)))}getImportMap(){try{return JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}setImportMap(e){this.state.files["import-map.json"].code=JSON.stringify(e,null,2)}addDeps(){const e=this.getImportMap();e.imports=_(_({},e.imports),M({vue:this.versions.vue,elementPlus:this.versions.elementPlus},this.nightly)),this.setImportMap(e)}async setVersion(e,t){switch(e){case"elementPlus":await this.setElementPlusVersion(t);break;case"vue":await this.setVueVersion(t);break}}setElementPlusVersion(e){this.versions.elementPlus=e,this.addDeps()}setNightly(e){this.nightly=e,this.addDeps()}async setVueVersion(e){const{compilerSfc:t,runtimeDom:i}=G(e);this.pendingCompiler=q(()=>import(t),[]),this.compiler=await this.pendingCompiler,this.pendingCompiler=null,this.state.vueRuntimeURL=i,this.versions.vue=e,this.addDeps(),console.info(`[@vue/repl] Now using Vue version: ${e}`)}}var te="/assets/logo.6cbe539a.svg",f=(s,e)=>{const t=s.__vccOpts||s;for(const[i,n]of e)t[i]=n;return t};const se={},ie={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},ne=S('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),re=[ne];function oe(s,e){return l(),a("svg",ie,re)}var ce=f(se,[["render",oe]]);const le={},ae={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},pe=c("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),ue=[pe];function de(s,e){return l(),a("svg",ae,ue)}var me=f(le,[["render",de]]);const he={},fe={width:"1.7em",height:"1.7em",viewBox:"0 0 24 24"},_e=c("path",{fill:"#666",d:"M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"},null,-1),ge=[_e];function ve(s,e){return l(),a("svg",fe,ge)}var ye=f(he,[["render",ve]]);const we={},ke={width:"1.4em",height:"1.4em",viewBox:"0 0 24 24"},$e=S('<g fill="none" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98"></path><path d="M15.41 6.51l-6.82 3.98"></path></g>',1),be=[$e];function Ce(s,e){return l(),a("svg",ke,be)}var Me=f(we,[["render",Ce]]);const je=c("h1",null,[c("img",{alt:"logo",src:te}),c("span",null,"Easy Front UI Playground")],-1),Ee={class:"links"},xe={title:"View on GitHub",class:"github"},Se={href:"https://github.com/LuLuCodes/easy-front-vite",target:"_blank"},Le=L({props:["store"],setup(s){async function e(){await navigator.clipboard.writeText(location.href),x.success("Sharable URL has been copied to clipboard.")}function t(){const i=document.documentElement.classList;i.toggle("dark"),localStorage.setItem("easy-front-ui-playground-prefer-dark",String(i.contains("dark")))}return(i,n)=>(l(),a("nav",null,[je,c("div",Ee,[c("button",{title:"Toggle dark mode",class:"toggle-dark",onClick:t},[u(ce,{class:"light"}),u(me,{class:"dark"})]),c("button",{title:"Copy sharable URL",class:"share",onClick:e},[u(Me)]),c("button",xe,[c("a",Se,[u(ye)])])])]))}});const Pe={key:0,class:"antialiased"},Oe={key:1,class:"loading"},Ie=L({setup(s){const e=N(!0),t={script:{reactivityTransform:!0}},i=new ee({serializedState:location.hash.slice(1)});return i.init().then(()=>e.value=!1),A(),E(()=>history.replaceState({},"",i.serialize())),(n,r)=>{const o=R;return e.value?U((l(),a("div",Oe,null,512)),[[o,{text:"Loading..."}]]):(l(),a("div",Pe,[u(Le,{store:g(i)},null,8,["store"]),u(g(D),{ref:"repl",store:g(i),"show-compile-output":"","auto-resize":"","sfc-options":t,"clear-console":!1,onKeydown:[r[0]||(r[0]=$(b(()=>{},["ctrl","prevent"]),["s"])),r[1]||(r[1]=$(b(()=>{},["meta","prevent"]),["s"]))]},null,8,["store"])]))}}});B(Ie).mount("#app");