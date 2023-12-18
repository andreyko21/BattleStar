import"./modulepreload-polyfill-3cfb730f.js";import{$ as P}from"./jquery-ab814638.js";import{i as q}from"./dropDownMenu-ba5ec5a6.js";import{e as T,a as E,c as G,b as N,S as H,N as O}from"./navigation-2e8e35a7.js";function w(v){return v===void 0&&(v=""),`.${v.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function _(v){let{swiper:e,extendParams:m,on:u,emit:C}=v;const d="swiper-pagination";m({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${d}-bullet`,bulletActiveClass:`${d}-bullet-active`,modifierClass:`${d}-`,currentClass:`${d}-current`,totalClass:`${d}-total`,hiddenClass:`${d}-hidden`,progressbarFillClass:`${d}-progressbar-fill`,progressbarOppositeClass:`${d}-progressbar-opposite`,clickableClass:`${d}-clickable`,lockClass:`${d}-lock`,horizontalClass:`${d}-horizontal`,verticalClass:`${d}-vertical`,paginationDisabledClass:`${d}-disabled`}}),e.pagination={el:null,bullets:[]};let $,h=0;const g=a=>(Array.isArray(a)?a:[a]).filter(t=>!!t);function A(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function B(a,t){const{bulletActiveClass:i}=e.params.pagination;a&&(a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${i}-${t}`),a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${i}-${t}-${t}`)))}function z(a){const t=a.target.closest(w(e.params.pagination.bulletClass));if(!t)return;a.preventDefault();const i=E(t)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===i)return;e.slideToLoop(i)}else e.slideTo(i)}function y(){const a=e.rtl,t=e.params.pagination;if(A())return;let i=e.pagination.el;i=g(i);let s,p;const b=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,I=e.params.loop?Math.ceil(b/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(p=e.previousRealIndex||0,s=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(s=e.snapIndex,p=e.previousSnapIndex):(p=e.previousIndex||0,s=e.activeIndex||0),t.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const l=e.pagination.bullets;let f,c,L;if(t.dynamicBullets&&($=T(l[0],e.isHorizontal()?"width":"height",!0),i.forEach(n=>{n.style[e.isHorizontal()?"width":"height"]=`${$*(t.dynamicMainBullets+4)}px`}),t.dynamicMainBullets>1&&p!==void 0&&(h+=s-(p||0),h>t.dynamicMainBullets-1?h=t.dynamicMainBullets-1:h<0&&(h=0)),f=Math.max(s-h,0),c=f+(Math.min(l.length,t.dynamicMainBullets)-1),L=(c+f)/2),l.forEach(n=>{const r=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(o=>`${t.bulletActiveClass}${o}`)].map(o=>typeof o=="string"&&o.includes(" ")?o.split(" "):o).flat();n.classList.remove(...r)}),i.length>1)l.forEach(n=>{const r=E(n);r===s?n.classList.add(...t.bulletActiveClass.split(" ")):e.isElement&&n.setAttribute("part","bullet"),t.dynamicBullets&&(r>=f&&r<=c&&n.classList.add(...`${t.bulletActiveClass}-main`.split(" ")),r===f&&B(n,"prev"),r===c&&B(n,"next"))});else{const n=l[s];if(n&&n.classList.add(...t.bulletActiveClass.split(" ")),e.isElement&&l.forEach((r,o)=>{r.setAttribute("part",o===s?"bullet-active":"bullet")}),t.dynamicBullets){const r=l[f],o=l[c];for(let x=f;x<=c;x+=1)l[x]&&l[x].classList.add(...`${t.bulletActiveClass}-main`.split(" "));B(r,"prev"),B(o,"next")}}if(t.dynamicBullets){const n=Math.min(l.length,t.dynamicMainBullets+4),r=($*n-$)/2-L*$,o=a?"right":"left";l.forEach(x=>{x.style[e.isHorizontal()?o:"top"]=`${r}px`})}}i.forEach((l,f)=>{if(t.type==="fraction"&&(l.querySelectorAll(w(t.currentClass)).forEach(c=>{c.textContent=t.formatFractionCurrent(s+1)}),l.querySelectorAll(w(t.totalClass)).forEach(c=>{c.textContent=t.formatFractionTotal(I)})),t.type==="progressbar"){let c;t.progressbarOpposite?c=e.isHorizontal()?"vertical":"horizontal":c=e.isHorizontal()?"horizontal":"vertical";const L=(s+1)/I;let n=1,r=1;c==="horizontal"?n=L:r=L,l.querySelectorAll(w(t.progressbarFillClass)).forEach(o=>{o.style.transform=`translate3d(0,0,0) scaleX(${n}) scaleY(${r})`,o.style.transitionDuration=`${e.params.speed}ms`})}t.type==="custom"&&t.renderCustom?(l.innerHTML=t.renderCustom(e,s+1,I),f===0&&C("paginationRender",l)):(f===0&&C("paginationRender",l),C("paginationUpdate",l)),e.params.watchOverflow&&e.enabled&&l.classList[e.isLocked?"add":"remove"](t.lockClass)})}function k(){const a=e.params.pagination;if(A())return;const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let i=e.pagination.el;i=g(i);let s="";if(a.type==="bullets"){let p=e.params.loop?Math.ceil(t/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&p>t&&(p=t);for(let b=0;b<p;b+=1)a.renderBullet?s+=a.renderBullet.call(e,b,a.bulletClass):s+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?s=a.renderFraction.call(e,a.currentClass,a.totalClass):s=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?s=a.renderProgressbar.call(e,a.progressbarFillClass):s=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach(p=>{a.type!=="custom"&&(p.innerHTML=s||""),a.type==="bullets"&&e.pagination.bullets.push(...p.querySelectorAll(w(a.bulletClass)))}),a.type!=="custom"&&C("paginationRender",i[0])}function M(){e.params.pagination=G(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let t;typeof a.el=="string"&&e.isElement&&(t=e.el.querySelector(a.el)),!t&&typeof a.el=="string"&&(t=[...document.querySelectorAll(a.el)]),t||(t=a.el),!(!t||t.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(t)&&t.length>1&&(t=[...e.el.querySelectorAll(a.el)],t.length>1&&(t=t.filter(i=>N(i,".swiper")[0]===e.el)[0])),Array.isArray(t)&&t.length===1&&(t=t[0]),Object.assign(e.pagination,{el:t}),t=g(t),t.forEach(i=>{a.type==="bullets"&&a.clickable&&i.classList.add(...(a.clickableClass||"").split(" ")),i.classList.add(a.modifierClass+a.type),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(i.classList.add(`${a.modifierClass}${a.type}-dynamic`),h=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&i.classList.add(a.progressbarOppositeClass),a.clickable&&i.addEventListener("click",z),e.enabled||i.classList.add(a.lockClass)}))}function S(){const a=e.params.pagination;if(A())return;let t=e.pagination.el;t&&(t=g(t),t.forEach(i=>{i.classList.remove(a.hiddenClass),i.classList.remove(a.modifierClass+a.type),i.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(i.classList.remove(...(a.clickableClass||"").split(" ")),i.removeEventListener("click",z))})),e.pagination.bullets&&e.pagination.bullets.forEach(i=>i.classList.remove(...a.bulletActiveClass.split(" ")))}u("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:t}=e.pagination;t=g(t),t.forEach(i=>{i.classList.remove(a.horizontalClass,a.verticalClass),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),u("init",()=>{e.params.pagination.enabled===!1?D():(M(),k(),y())}),u("activeIndexChange",()=>{typeof e.snapIndex>"u"&&y()}),u("snapIndexChange",()=>{y()}),u("snapGridLengthChange",()=>{k(),y()}),u("destroy",()=>{S()}),u("enable disable",()=>{let{el:a}=e.pagination;a&&(a=g(a),a.forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),u("lock unlock",()=>{y()}),u("click",(a,t)=>{const i=t.target,s=g(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&s&&s.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const p=s[0].classList.contains(e.params.pagination.hiddenClass);C(p===!0?"paginationShow":"paginationHide"),s.forEach(b=>b.classList.toggle(e.params.pagination.hiddenClass))}});const F=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=g(a),a.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),M(),k(),y()},D=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=g(a),a.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),S()};Object.assign(e.pagination,{enable:F,disable:D,render:k,update:y,init:M,destroy:S})}class R{playerNumber;constructor(){this.playerNumber=P(".news__rating-number"),this.init()}init(){this.numberPlayers(),this.bannerSwiper(),this.tourneySwiper(),q(),this.test()}numberPlayers(){this.playerNumber.each((e,m)=>{P(m).text(`${e+1}`)})}bannerSwiper(){new H(".banner__swiper",{loop:!0,spaceBetween:10,modules:[O],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:e=>{const m=document.querySelector(".swiper-button-prev");e.activeIndex===0&&m?m.style.display="none":m&&(m.style.display="block")}}})}tourneySwiper(){new H(".tourney__swiper",{loop:!0,modules:[O,_],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}})}test(){}}new R;
