var U=Object.defineProperty,q=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var I=(e,t,n)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))W.call(t,n)&&I(e,n,t[n]);if(B)for(var n of B(t))K.call(t,n)&&I(e,n,t[n]);return e},h=(e,t)=>q(e,R(t));import{d as N,a as w,c as G,r as b,o as H,b as g,e as C,f as x,F as A,g as V,u as m,n as J,h as Q,i as L,j as P,m as $,k as X,l as Y,p as Z,q as u,s as O,w as a,t as d,v as p,x as k,y as ee,z as te,A as oe,B as ne,C as ae,D as se,E as de}from"./vendor.b72b98b8.js";const le=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};le();class re extends N.exports.Node{draw(t){const n=document.getElementById(t.id);return n.style.top=`${t.top}px`,n.style.left=`${t.left}px`,n}}class ce extends N.exports.Endpoint{draw(t){return document.getElementById(t.id)}}const j=e=>h(y({},e),{Class:re,endpoints:e.endpoints.map(t=>h(y({},t),{Class:ce}))}),ie=e=>h(y({},e),{Class:N.exports.Edge}),ue=e=>({nodes:e.nodes.map(j),edges:e.edges.map(ie)});var D=(e,t)=>{const n=e.__vccOpts||e;for(const[i,o]of t)n[i]=o;return n};const _e={class:"absolute-container"},pe=w({props:{controller:null,config:null,containerClass:null,containerStyle:null},setup(e){const{controller:t,config:n,containerClass:i,containerStyle:o}=e,s=t._currentData,l=G(()=>s.value.nodes.flatMap(r=>r.endpoints)),_=b(null);return H(()=>{const r=new N.exports.Canvas(y({root:_.value},n));t._canvas.value=r,r.draw(ue(t.initialData)),r.on("events",f=>{console.log(f.type),f.type.startsWith("node")&&(s.value.nodes=[...r.getDataMap().nodes])})}),(r,f)=>(g(),C("div",{ref_key:"canvasRef",ref:_,class:J(e.containerClass),style:Q(e.containerStyle)},[x("div",_e,[(g(!0),C(A,null,V(m(s).nodes,v=>L(r.$slots,"node",P($({key:v.id},v)),void 0,!0)),128)),(g(!0),C(A,null,V(m(l),v=>L(r.$slots,"endpoint",P($({key:v.id},v)),void 0,!0)),128))])],6))}});var ve=D(pe,[["__scopeId","data-v-40fe3780"]]);const z=Error("Canvas not attached, remember to pass controller down to Butterfly component"),fe=e=>{const t=b(e),n=b(null),i=Y(e.nodes.reduce((l,_)=>h(y({},l),{[_.id]:_.nodeData}),{}));return{addNode:l=>{if(!n.value)throw z;t.value.nodes.push(l),i[l.id]=l.nodeData,Z(()=>{var _;return(_=n.value)==null?void 0:_.addNode(j(l))})},removeNode:l=>{if(!n.value)throw z;n.value.removeNode(l),delete i[l]},initialData:e,data:X(t),nodesData:i,_currentData:t,_canvas:n}};const me=p("Delete"),ye=p("Color"),ge=p("Pick color"),he=p("Pick color of the node card"),be=p("Black"),xe=p("White"),Ce=w({props:{id:null,top:null,left:null,nodeData:null},emits:["delete","update:node-data"],setup(e,{emit:t}){const n=b(!1);return(i,o)=>{const s=u("v-card-header-text"),l=u("v-card-header"),_=u("v-card-text"),r=u("v-btn"),f=u("v-card-actions"),v=u("v-card"),E=u("v-dialog");return g(),O(v,{id:e.id,class:"card",color:e.nodeData.color},{default:a(()=>[d(l,null,{default:a(()=>[d(s,null,{default:a(()=>[p("Node "+k(e.id),1)]),_:1})]),_:1}),d(_,null,{default:a(()=>[p(" x: "+k(e.top)+" y: "+k(e.left),1)]),_:1}),d(f,null,{default:a(()=>[d(r,{variant:"text",color:"red",onClick:o[0]||(o[0]=c=>t("delete"))},{default:a(()=>[me]),_:1}),d(E,{modelValue:n.value,"onUpdate:modelValue":o[4]||(o[4]=c=>n.value=c)},{activator:a(({props:c})=>[d(r,$({color:"deep-purple"},c),{default:a(()=>[ye]),_:2},1040)]),default:a(()=>[d(v,null,{default:a(()=>[d(l,null,{default:a(()=>[d(s,null,{default:a(()=>[ge]),_:1})]),_:1}),d(_,null,{default:a(()=>[he]),_:1}),d(f,{onClick:o[3]||(o[3]=c=>n.value=!1)},{default:a(()=>[d(r,{color:"black",onClick:o[1]||(o[1]=c=>t("update:node-data",{color:"black"}))},{default:a(()=>[be]),_:1}),d(r,{color:"white",onClick:o[2]||(o[2]=c=>t("update:node-data",{color:"white"}))},{default:a(()=>[xe]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["id","color"])}}});var ke=D(Ce,[["__scopeId","data-v-c2af83d8"]]);const $e=e=>(ee("data-v-50e6b09c"),e=e(),te(),e),Ne=["id"],we=$e(()=>x("div",{class:"inner-dot"},null,-1)),De=[we],Ee=w({props:{id:null},setup(e){return(t,n)=>{const i=u("v-tooltip");return g(),C("div",{id:e.id,class:"wrapper"},[d(i,{anchor:"top"},{activator:a(({props:o})=>[x("div",$({class:"dot"},o),De,16)]),default:a(()=>[x("span",null,"Endpoint: `"+k(e.id)+"` ",1)]),_:1})],8,Ne)}}});var Se=D(Ee,[["__scopeId","data-v-50e6b09c"]]);const Be=p("Vue 3 + butterfly demo"),Ie=p("Add white node"),Ae=p("Add black node"),Ve={class:"box"},Le=w({setup(e){const t=fe({nodes:[{id:"1",top:100,left:100,endpoints:[{id:"endpoint-1",orientation:[1,0]}],nodeData:{color:"white"}},{id:"2",top:200,left:400,endpoints:[{id:"endpoint-2",orientation:[-1,0]}],nodeData:{color:"white"}}],edges:[]}),n=b(3),i=(o,s)=>t.addNode({id:o,top:20,left:20,endpoints:[{id:`node-${o}-endpoint-1`,orientation:[1,0]},{id:`node-${o}-endpoint-2`,orientation:[-1,0]}],nodeData:{color:s}});return(o,s)=>{const l=u("v-app-bar-title"),_=u("v-app-bar"),r=u("v-btn"),f=u("v-btn-group"),v=u("v-main"),E=u("v-app");return g(),O(E,null,{default:a(()=>[d(_,null,{default:a(()=>[d(l,null,{default:a(()=>[Be]),_:1})]),_:1}),d(v,{style:{padding:"2rem 0"}},{default:a(()=>[d(f,{color:"deep-purple"},{default:a(()=>[d(r,{onClick:s[0]||(s[0]=c=>i((n.value++).toString(),"white"))},{default:a(()=>[Ie]),_:1}),d(r,{onClick:s[1]||(s[1]=c=>i((n.value++).toString(),"black"))},{default:a(()=>[Ae]),_:1})]),_:1}),x("div",Ve,[d(m(ve),{controller:m(t),"container-class":"canvas",config:{moveable:!0,disLinkable:!0,linkable:!0,draggable:!0,zoomable:!1,moveable:!0,theme:{edge:{arrow:!0,shapeType:"AdvancedBezier"}}}},{node:a(({id:c,top:F,left:T})=>[d(ke,{id:c,"node-data":m(t).nodesData[c],"onUpdate:node-data":S=>m(t).nodesData[c]=S,top:F,left:T,onDelete:S=>m(t).removeNode(c)},null,8,["id","node-data","onUpdate:node-data","top","left","onDelete"])]),endpoint:a(({id:c})=>[d(Se,{id:c},null,8,["id"])]),_:1},8,["controller"])])]),_:1})]),_:1})}}});var Pe=D(Le,[["__scopeId","data-v-7034949b"]]);const M=oe(Pe),ze=ne({components:ae,directives:se,icons:{defaultSet:"mdi",sets:{mdi:de}}});M.use(ze);M.mount("#app");