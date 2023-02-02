import{x as _,I as R,J as M,K as p,g as ve,r as S,L as me,j as ye,M as k,G as he,H as Se,N as be,s as _e,T as Ce,O as I,p as $,c as m,b,m as c,S as U,w as pe,P as $e,Q as xe,R as W,U as Ne,V as we,W as ke,X as D,Y as x,Z as Re,_ as H}from"./index-f641b39f.js";function De(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return _({name:n!=null?n:R(M(e.replace(/__/g,"-"))),props:{tag:{type:String,default:s}},setup(t,a){let{slots:i}=a;return()=>{var r;return p(t.tag,{class:e},(r=i.default)==null?void 0:r.call(i))}}})}function q(e){const s=ve("useRender");s.render=e}function qe(e){const s=S(),n=S();if(me){const t=new ResizeObserver(a=>{e==null||e(a,t),a.length&&(n.value=a[0].contentRect)});ye(()=>{t.disconnect()}),k(s,(a,i)=>{i&&(t.unobserve(i),n.value=void 0),a&&t.observe(a)},{flush:"post"})}return{resizeRef:s,contentRect:he(n)}}const Je=Se({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,s){let{slots:n}=s;const{defaults:t,reset:a,root:i,scoped:r}=be(e);return _e(t,{reset:a,root:i,scoped:r}),()=>{var o;return(o=n.default)==null?void 0:o.call(n)}}});function v(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return _({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:s}},setup(t,a){let{slots:i}=a;return()=>{const r=t.group?Ce:I;return p(r,{name:e,mode:t.mode,onBeforeEnter(o){o.style.transformOrigin=t.origin},onLeave(o){if(t.leaveAbsolute){const{offsetTop:d,offsetLeft:u,offsetWidth:g,offsetHeight:y}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${d}px`,o.style.left=`${u}px`,o.style.width=`${g}px`,o.style.height=`${y}px`}t.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(t.leaveAbsolute&&o!=null&&o._transitionInitialStyles){const{position:d,top:u,left:g,width:y,height:C}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=d||"",o.style.top=u||"",o.style.left=g||"",o.style.width=y||"",o.style.height=C||""}}},i.default)}}})}function J(e,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return _({name:e,props:{mode:{type:String,default:n}},setup(t,a){let{slots:i}=a;return()=>p(I,{name:e,...s},i.default)}})}function Y(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=M(`offset-${n}`);return{onBeforeEnter(r){r._parent=r.parentNode,r._initialStyle={transition:r.style.transition,overflow:r.style.overflow,[n]:r.style[n]}},onEnter(r){const o=r._initialStyle;r.style.setProperty("transition","none","important"),r.style.overflow="hidden";const d=`${r[t]}px`;r.style[n]="0",r.offsetHeight,r.style.transition=o.transition,e&&r._parent&&r._parent.classList.add(e),requestAnimationFrame(()=>{r.style[n]=d})},onAfterEnter:i,onEnterCancelled:i,onLeave(r){r._initialStyle={transition:"",overflow:r.style.overflow,[n]:r.style[n]},r.style.overflow="hidden",r.style[n]=`${r[t]}px`,r.offsetHeight,requestAnimationFrame(()=>r.style[n]="0")},onAfterLeave:a,onLeaveCancelled:a};function a(r){e&&r._parent&&r._parent.classList.remove(e),i(r)}function i(r){const o=r._initialStyle[n];r.style.overflow=r._initialStyle.overflow,o!=null&&(r.style[n]=o),delete r._initialStyle}}v("fab-transition","center center","out-in");v("dialog-bottom-transition");v("dialog-top-transition");v("fade-transition");v("scale-transition");v("scroll-x-transition");v("scroll-x-reverse-transition");v("scroll-y-transition");v("scroll-y-reverse-transition");v("slide-x-transition");v("slide-x-reverse-transition");const Ye=v("slide-y-transition");v("slide-y-reverse-transition");const Xe=J("expand-transition",Y()),Ke=J("expand-x-transition",Y("",!0));const Ie=$({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Le(e){return{dimensionStyles:m(()=>({height:b(e.height),maxHeight:b(e.maxHeight),maxWidth:b(e.maxWidth),minHeight:b(e.minHeight),minWidth:b(e.minWidth),width:b(e.width)}))}}function je(e){return{aspectStyles:m(()=>{const s=Number(e.aspectRatio);return s?{paddingBottom:String(1/s*100)+"%"}:void 0})}}const Pe=_({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Ie()},setup(e,s){let{slots:n}=s;const{aspectStyles:t}=je(e),{dimensionStyles:a}=Le(e);return q(()=>{var i;return c("div",{class:"v-responsive",style:a.value},[c("div",{class:"v-responsive__sizer",style:t.value},null),(i=n.additional)==null?void 0:i.call(n),n.default&&c("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function Ee(e,s){if(!U)return;const n=s.modifiers||{},t=s.value,{handler:a,options:i}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var o;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const g=(o=e._observe)==null?void 0:o[s.instance.$.uid];if(!g)return;const y=d.some(C=>C.isIntersecting);a&&(!n.quiet||g.init)&&(!n.once||y||g.init)&&a(y,d,u),y&&n.once?X(e,s):g.init=!0},i);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:r},r.observe(e)}function X(e,s){var n;const t=(n=e._observe)==null?void 0:n[s.instance.$.uid];!t||(t.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const Te={mounted:Ee,unmounted:X},Be=Te,Ve=$({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),w=(e,s)=>{let{slots:n}=s;const{transition:t,...a}=e,{component:i=I,...r}=typeof t=="object"?t:{};return p(i,pe(typeof t=="string"?{name:t}:r,a),n)},Qe=_({name:"VImg",directives:{intersect:Be},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...Ve()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,s){let{emit:n,slots:t}=s;const a=S(""),i=S(),r=S(e.eager?"loading":"idle"),o=S(),d=S(),u=m(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=m(()=>u.value.aspect||o.value/d.value||0);k(()=>e.src,()=>{y(r.value!=="idle")}),k(g,(l,f)=>{!l&&f&&i.value&&N(i.value)}),$e(()=>y());function y(l){if(!(e.eager&&l)&&!(U&&!l&&!e.eager)){if(r.value="loading",u.value.lazySrc){const f=new Image;f.src=u.value.lazySrc,N(f,null)}!u.value.src||xe(()=>{var f,h;if(n("loadstart",((f=i.value)==null?void 0:f.currentSrc)||u.value.src),(h=i.value)!=null&&h.complete){if(i.value.naturalWidth||E(),r.value==="error")return;g.value||N(i.value,null),C()}else g.value||N(i.value),T()})}}function C(){var l;T(),r.value="loaded",n("load",((l=i.value)==null?void 0:l.currentSrc)||u.value.src)}function E(){var l;r.value="error",n("error",((l=i.value)==null?void 0:l.currentSrc)||u.value.src)}function T(){const l=i.value;l&&(a.value=l.currentSrc||l.src)}let B=-1;function N(l){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const h=()=>{clearTimeout(B);const{naturalHeight:O,naturalWidth:A}=l;O||A?(o.value=A,d.value=O):!l.complete&&r.value==="loading"&&f!=null?B=window.setTimeout(h,f):(l.currentSrc.endsWith(".svg")||l.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,d.value=1)};h()}const V=m(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),ue=()=>{var l;if(!u.value.src||r.value==="idle")return null;const f=c("img",{class:["v-img__img",V.value],src:u.value.src,srcset:u.value.srcset,alt:"",sizes:e.sizes,ref:i,onLoad:C,onError:E},null),h=(l=t.sources)==null?void 0:l.call(t);return c(w,{transition:e.transition,appear:!0},{default:()=>[W(h?c("picture",{class:"v-img__picture"},[h,f]):f,[[ke,r.value==="loaded"]])]})},ce=()=>c(w,{transition:e.transition},{default:()=>[u.value.lazySrc&&r.value!=="loaded"&&c("img",{class:["v-img__img","v-img__img--preload",V.value],src:u.value.lazySrc,alt:""},null)]}),de=()=>t.placeholder?c(w,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!t.error)&&c("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,fe=()=>t.error?c(w,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&c("div",{class:"v-img__error"},[t.error()])]}):null,ge=()=>e.gradient?c("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,z=S(!1);{const l=k(g,f=>{f&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{z.value=!0})}),l())})}return q(()=>W(c(Pe,{class:["v-img",{"v-img--booting":!z.value}],style:{width:b(e.width==="auto"?o.value:e.width)},aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>c(we,null,[c(ue,null,null),c(ce,null,null),c(ge,null,null),c(de,null,null),c(fe,null,null)]),default:t.default}),[[Ne("intersect"),{handler:y,options:e.options},null,{once:!0}]])),{currentSrc:a,image:i,state:r,naturalWidth:o,naturalHeight:d}}}),K=$({tag:{type:String,default:"div"}},"tag"),Ze=$({border:[Boolean,Number,String]},"border");function et(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return{borderClasses:m(()=>{const t=x(e)?e.value:e.border,a=[];if(t===!0||t==="")a.push(`${s}--border`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))a.push(`border-${i}`);return a})}}const tt=$({elevation:{type:[Number,String],validator(e){const s=parseInt(e);return!isNaN(s)&&s>=0&&s<=24}}},"elevation");function nt(e){return{elevationClasses:m(()=>{const n=x(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const st=$({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function rt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return{roundedClasses:m(()=>{const t=x(e)?e.value:e.rounded,a=[];if(t===!0||t==="")a.push(`${s}--rounded`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))a.push(`rounded-${i}`);return a})}}function Q(e){return Re(()=>{const s=[],n={};return e.value.background&&(H(e.value.background)?n.backgroundColor=e.value.background:s.push(`bg-${e.value.background}`)),e.value.text&&(H(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):s.push(`text-${e.value.text}`)),{colorClasses:s,colorStyles:n}})}function at(e,s){const n=m(()=>({text:x(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:a}=Q(n);return{textColorClasses:t,textColorStyles:a}}function ot(e,s){const n=m(()=>({background:x(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:a}=Q(n);return{backgroundColorClasses:t,backgroundColorStyles:a}}const L=["sm","md","lg","xl","xxl"],Z=(()=>L.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}))(),ee=(()=>L.reduce((e,s)=>(e["offset"+R(s)]={type:[String,Number],default:null},e),{}))(),te=(()=>L.reduce((e,s)=>(e["order"+R(s)]={type:[String,Number],default:null},e),{}))(),F={col:Object.keys(Z),offset:Object.keys(ee),order:Object.keys(te)};function ze(e,s,n){let t=e;if(!(n==null||n===!1)){if(s){const a=s.replace(e,"");t+=`-${a}`}return e==="col"&&(t="v-"+t),e==="col"&&(n===""||n===!0)||(t+=`-${n}`),t.toLowerCase()}}const Oe=["auto","start","end","center","baseline","stretch"],it=_({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...Z,offset:{type:[String,Number],default:null},...ee,order:{type:[String,Number],default:null},...te,alignSelf:{type:String,default:null,validator:e=>Oe.includes(e)},...K()},setup(e,s){let{slots:n}=s;const t=m(()=>{const a=[];let i;for(i in F)F[i].forEach(o=>{const d=e[o],u=ze(i,o,d);u&&a.push(u)});const r=a.some(o=>o.startsWith("v-col-"));return a.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return p(e.tag,{class:t.value},(a=n.default)==null?void 0:a.call(n))}}}),Ae=["sm","md","lg","xl","xxl"],j=["start","end","center"],ne=["space-between","space-around","space-evenly"];function P(e,s){return Ae.reduce((n,t)=>(n[e+R(t)]=s(),n),{})}const We=[...j,"baseline","stretch"],se=e=>We.includes(e),re=P("align",()=>({type:String,default:null,validator:se})),He=[...j,...ne],ae=e=>He.includes(e),oe=P("justify",()=>({type:String,default:null,validator:ae})),Fe=[...j,...ne,"stretch"],ie=e=>Fe.includes(e),le=P("alignContent",()=>({type:String,default:null,validator:ie})),G={align:Object.keys(re),justify:Object.keys(oe),alignContent:Object.keys(le)},Ge={align:"align",justify:"justify",alignContent:"align-content"};function Me(e,s,n){let t=Ge[e];if(n!=null){if(s){const a=s.replace(e,"");t+=`-${a}`}return t+=`-${n}`,t.toLowerCase()}}const lt=_({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:se},...re,justify:{type:String,default:null,validator:ae},...oe,alignContent:{type:String,default:null,validator:ie},...le,...K()},setup(e,s){let{slots:n}=s;const t=m(()=>{const a=[];let i;for(i in G)G[i].forEach(r=>{const o=e[r],d=Me(i,r,o);d&&a.push(d)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return p(e.tag,{class:["v-row",t.value]},(a=n.default)==null?void 0:a.call(n))}}}),ut=(e,s)=>{const n=e.__vccOpts||e;for(const[t,a]of s)n[t]=a;return n};export{Be as I,w as M,Je as V,ut as _,q as a,Ze as b,tt as c,st as d,ot as e,et as f,nt as g,rt as h,Qe as i,Xe as j,De as k,lt as l,K as m,it as n,Q as o,at as p,Ie as q,Le as r,Ve as s,Ke as t,qe as u,Ye as v};