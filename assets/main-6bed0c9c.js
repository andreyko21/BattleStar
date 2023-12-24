import"./modulepreload-polyfill-3cfb730f.js";import{$ as I}from"./jquery-ab814638.js";import{c as P,i as G,N as z}from"./navigation-e1268361.js";import{e as O,a as q,b as F,S as D}from"./swiper-core-75041738.js";import{r as A,G as j,a as Q,b as R,c as U}from"./queries.graphql.d-beea0c25.js";import"./windowLocation-a7eb2864.js";function x(u){return u===void 0&&(u=""),`.${u.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function V(u){let{swiper:e,extendParams:n,on:t,emit:l}=u;const f="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${f}-bullet`,bulletActiveClass:`${f}-bullet-active`,modifierClass:`${f}-`,currentClass:`${f}-current`,totalClass:`${f}-total`,hiddenClass:`${f}-hidden`,progressbarFillClass:`${f}-progressbar-fill`,progressbarOppositeClass:`${f}-progressbar-opposite`,clickableClass:`${f}-clickable`,lockClass:`${f}-lock`,horizontalClass:`${f}-horizontal`,verticalClass:`${f}-vertical`,paginationDisabledClass:`${f}-disabled`}}),e.pagination={el:null,bullets:[]};let C,h=0;const v=a=>(Array.isArray(a)?a:[a]).filter(s=>!!s);function k(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function L(a,s){const{bulletActiveClass:i}=e.params.pagination;a&&(a=a[`${s==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${i}-${s}`),a=a[`${s==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${i}-${s}-${s}`)))}function H(a){const s=a.target.closest(x(e.params.pagination.bulletClass));if(!s)return;a.preventDefault();const i=q(s)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===i)return;e.slideToLoop(i)}else e.slideTo(i)}function w(){const a=e.rtl,s=e.params.pagination;if(k())return;let i=e.pagination.el;i=v(i);let r,m;const b=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,N=e.params.loop?Math.ceil(b/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(m=e.previousRealIndex||0,r=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(r=e.snapIndex,m=e.previousSnapIndex):(m=e.previousIndex||0,r=e.activeIndex||0),s.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const o=e.pagination.bullets;let _,g,$;if(s.dynamicBullets&&(C=O(o[0],e.isHorizontal()?"width":"height",!0),i.forEach(c=>{c.style[e.isHorizontal()?"width":"height"]=`${C*(s.dynamicMainBullets+4)}px`}),s.dynamicMainBullets>1&&m!==void 0&&(h+=r-(m||0),h>s.dynamicMainBullets-1?h=s.dynamicMainBullets-1:h<0&&(h=0)),_=Math.max(r-h,0),g=_+(Math.min(o.length,s.dynamicMainBullets)-1),$=(g+_)/2),o.forEach(c=>{const p=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(d=>`${s.bulletActiveClass}${d}`)].map(d=>typeof d=="string"&&d.includes(" ")?d.split(" "):d).flat();c.classList.remove(...p)}),i.length>1)o.forEach(c=>{const p=q(c);p===r?c.classList.add(...s.bulletActiveClass.split(" ")):e.isElement&&c.setAttribute("part","bullet"),s.dynamicBullets&&(p>=_&&p<=g&&c.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),p===_&&L(c,"prev"),p===g&&L(c,"next"))});else{const c=o[r];if(c&&c.classList.add(...s.bulletActiveClass.split(" ")),e.isElement&&o.forEach((p,d)=>{p.setAttribute("part",d===r?"bullet-active":"bullet")}),s.dynamicBullets){const p=o[_],d=o[g];for(let y=_;y<=g;y+=1)o[y]&&o[y].classList.add(...`${s.bulletActiveClass}-main`.split(" "));L(p,"prev"),L(d,"next")}}if(s.dynamicBullets){const c=Math.min(o.length,s.dynamicMainBullets+4),p=(C*c-C)/2-$*C,d=a?"right":"left";o.forEach(y=>{y.style[e.isHorizontal()?d:"top"]=`${p}px`})}}i.forEach((o,_)=>{if(s.type==="fraction"&&(o.querySelectorAll(x(s.currentClass)).forEach(g=>{g.textContent=s.formatFractionCurrent(r+1)}),o.querySelectorAll(x(s.totalClass)).forEach(g=>{g.textContent=s.formatFractionTotal(N)})),s.type==="progressbar"){let g;s.progressbarOpposite?g=e.isHorizontal()?"vertical":"horizontal":g=e.isHorizontal()?"horizontal":"vertical";const $=(r+1)/N;let c=1,p=1;g==="horizontal"?c=$:p=$,o.querySelectorAll(x(s.progressbarFillClass)).forEach(d=>{d.style.transform=`translate3d(0,0,0) scaleX(${c}) scaleY(${p})`,d.style.transitionDuration=`${e.params.speed}ms`})}s.type==="custom"&&s.renderCustom?(o.innerHTML=s.renderCustom(e,r+1,N),_===0&&l("paginationRender",o)):(_===0&&l("paginationRender",o),l("paginationUpdate",o)),e.params.watchOverflow&&e.enabled&&o.classList[e.isLocked?"add":"remove"](s.lockClass)})}function M(){const a=e.params.pagination;if(k())return;const s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let i=e.pagination.el;i=v(i);let r="";if(a.type==="bullets"){let m=e.params.loop?Math.ceil(s/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&m>s&&(m=s);for(let b=0;b<m;b+=1)a.renderBullet?r+=a.renderBullet.call(e,b,a.bulletClass):r+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?r=a.renderFraction.call(e,a.currentClass,a.totalClass):r=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?r=a.renderProgressbar.call(e,a.progressbarFillClass):r=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach(m=>{a.type!=="custom"&&(m.innerHTML=r||""),a.type==="bullets"&&e.pagination.bullets.push(...m.querySelectorAll(x(a.bulletClass)))}),a.type!=="custom"&&l("paginationRender",i[0])}function S(){e.params.pagination=P(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let s;typeof a.el=="string"&&e.isElement&&(s=e.el.querySelector(a.el)),!s&&typeof a.el=="string"&&(s=[...document.querySelectorAll(a.el)]),s||(s=a.el),!(!s||s.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(s)&&s.length>1&&(s=[...e.el.querySelectorAll(a.el)],s.length>1&&(s=s.filter(i=>F(i,".swiper")[0]===e.el)[0])),Array.isArray(s)&&s.length===1&&(s=s[0]),Object.assign(e.pagination,{el:s}),s=v(s),s.forEach(i=>{a.type==="bullets"&&a.clickable&&i.classList.add(...(a.clickableClass||"").split(" ")),i.classList.add(a.modifierClass+a.type),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(i.classList.add(`${a.modifierClass}${a.type}-dynamic`),h=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&i.classList.add(a.progressbarOppositeClass),a.clickable&&i.addEventListener("click",H),e.enabled||i.classList.add(a.lockClass)}))}function B(){const a=e.params.pagination;if(k())return;let s=e.pagination.el;s&&(s=v(s),s.forEach(i=>{i.classList.remove(a.hiddenClass),i.classList.remove(a.modifierClass+a.type),i.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(i.classList.remove(...(a.clickableClass||"").split(" ")),i.removeEventListener("click",H))})),e.pagination.bullets&&e.pagination.bullets.forEach(i=>i.classList.remove(...a.bulletActiveClass.split(" ")))}t("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:s}=e.pagination;s=v(s),s.forEach(i=>{i.classList.remove(a.horizontalClass,a.verticalClass),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),t("init",()=>{e.params.pagination.enabled===!1?T():(S(),M(),w())}),t("activeIndexChange",()=>{typeof e.snapIndex>"u"&&w()}),t("snapIndexChange",()=>{w()}),t("snapGridLengthChange",()=>{M(),w()}),t("destroy",()=>{B()}),t("enable disable",()=>{let{el:a}=e.pagination;a&&(a=v(a),a.forEach(s=>s.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),t("lock unlock",()=>{w()}),t("click",(a,s)=>{const i=s.target,r=v(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&r&&r.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const m=r[0].classList.contains(e.params.pagination.hiddenClass);l(m===!0?"paginationShow":"paginationHide"),r.forEach(b=>b.classList.toggle(e.params.pagination.hiddenClass))}});const E=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=v(a),a.forEach(s=>s.classList.remove(e.params.pagination.paginationDisabledClass))),S(),M(),w()},T=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=v(a),a.forEach(s=>s.classList.add(e.params.pagination.paginationDisabledClass))),B()};Object.assign(e.pagination,{enable:E,disable:T,render:M,update:w,init:S,destroy:B})}class X{content;card;constructor(e,n){this.content=e,this.card=n,this.renderCard()}renderCard(){const e=this.card.map(t=>`
          <div class="card__news">
            <div class="card__news-img">
              <img src="${t.img}" alt="${t.title}">
            </div>
            <hr class="card__news-line">
            <h2 class="card__news-title">${t.title}</h2>
            <p class="card__news-text">${t.text}</p>
            <div class="card__news-row">
              <div class="card__news-info">
                <div class="card__news-avatar">
                <img src="${t.avatar}" alt="${t.title}">
                </div>
                <p class="card__news-name">${t.author}</p>
                <p class="card__news-data">${t.date}</p>
              </div>
              <div class="card__news-view">
                <div class="card__news-svg">
                  <svg>
                    <use xlink:href="src/images/sprite.svg#view"></use>      
                  </svg>
                </div>
                <p class="card__news-number">123</p>   
              </div> 
            </div>
          </div>
        `).join(""),n=document.querySelector(this.content);n&&(n.innerHTML=e)}}class Y{content;mainNews;constructor(e,n){this.content=e,this.mainNews=n,this.renderMainNews()}renderMainNews(){const e=this.mainNews.map(t=>`
    <div class="news__info-row">
      <div class="news__info-img">
         <img src="${t.img}" alt="${t.title}">
      </div>
      <div class="news__info-column">
      <h2 class="news__info-title">${t.title}</h2>
      <p class="news__info-text">${t.text}</p>
      <div class="news__info-sub-row">
        <p class="news__info-date">${t.data}</p>
        <div class="news__info-views">
          <div class="news__info-like">
            <svg>
              <use xlink:href="src/images/sprite.svg#like"></use>
            </svg>
            345
          </div>
          <p class="news__info-view">
            <svg>
              <use xlink:href="src/images/sprite.svg#view"></use>
            </svg>
            1380
          </p>
        </div>
      </div>
    </div>
    </div>

    `).join(""),n=document.querySelector(this.content);n&&(n.innerHTML=e)}}class J{content;team;constructor(e,n){this.content=e,this.team=n,this.renderTeam()}renderTeam(){const e=this.team.map(t=>`
        <div class="game__info-item">
          <h4 class="game__info-title-sub">Полуфинал Major 2021 Stockholm</h4>
          <div class="game__info-teams">
            <div class="game__info-row">
              <div>
                <img class="game__info-logo" src="${t.logo}" alt="${t.name}">
              </div>
              <p class="game__info-name game__info-name_win">${t.name}</p>
              <p class="game__info-rank">${t.rating}</p>
            </div>
            <div class="game__info-row game__info-row_center">
              <p class="game__info-time">15:00</p>
              <p class="game__info-score"><span>3</span> : <span>2</span></p>
            </div>
            <div class="game__info-row  game__info-row_sub">
              <div class="game__info-logo">
                <img class="game__info-logo" src="${t.logo}" alt="${t.name}">
              </div>
              <p class="game__info-name game__info-name_win">${t.name}</p>
              <p class="game__info-rank">${t.rating}</p>
            </div>
          </div>
          <hr class="game__info-line">
        </div>
        <div class="game__info-item">
          <h4 class="game__info-title-sub">Полуфинал Major 2021 Stockholm</h4>
          <div class="game__info-teams">
            <div class="game__info-row">
              <div>
                <img class="game__info-logo" src="${t.logo}" alt="${t.name}">
              </div>
              <p class="game__info-name game__info-name_win">${t.name}</p>
              <p class="game__info-rank">${t.rating}</p>
            </div>
            <div class="game__info-row game__info-row_center">
              <p class="game__info-time">15:00</p>
              <p class="game__info-score"><span>3</span> : <span>2</span></p>
            </div>
            <div class="game__info-row  game__info-row_sub">
              <div class="game__info-logo">
                <img class="game__info-logo" src="${t.logo}" alt="${t.name}">
              </div>
              <p class="game__info-name game__info-name_win">${t.name}</p>
              <p class="game__info-rank">${t.rating}</p>
            </div>
          </div>
          <hr class="game__info-line">
        </div>
      `).join(""),n=document.querySelector(this.content);n&&(n.innerHTML=e)}}class K{content;map;constructor(e,n){this.content=e,this.map=n,this.renderMap()}renderMap(){const e=this.map.map(t=>`
      <div class="game__column-item">
      <div>
   <img  class="game__column-img" src="${t.logo}" alt="map">
      </div>
      <hr class="game__column-line">
      <div class="game__column-row">
        <div class="game__column-teams">
          <div class="game__column-logo">
         
          </div>
          <p class="game__column-name">ApacheLeader </p>
          <div class="game__column-vs">VS</div>
          <div class="game__column-logo"></div>
          <p class="game__column-name">DeJaVU</p>
        </div>
        <p class="game__column-round">1/16 финала</p>
      </div>

    </div>
      `).join(""),n=document.querySelector(this.content);n&&(n.innerHTML=e)}}class W{playerNumber;constructor(){this.playerNumber=I(".news__rating-number"),this.init()}init(){this.numberPlayers(),this.bannerSwiper(),this.tourneySwiper(),G(),this.test(),this.renderCard(),this.renderMainNews(),this.renderTeam(),this.renderMap()}numberPlayers(){this.playerNumber.each((e,n)=>{I(n).text(`${e+1}`)})}bannerSwiper(){new D(".banner__swiper",{loop:!0,spaceBetween:10,modules:[z],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:e=>{const n=document.querySelector(".swiper-button-prev");e.activeIndex===0&&n?n.style.display="none":n&&(n.style.display="block")}}})}tourneySwiper(){new D(".tourney__swiper",{loop:!0,modules:[z,V],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}})}test(){}async renderCard(){const n=(await A("https://battle-star-app.onrender.com/graphql",j)).cardNews?.data[0]?.attributes?.card??"Error";let t=[];Array.isArray(n)?(t=n.map(l=>({img:l.img?.data[0].attributes?.url,title:l.title,text:l.text,author:l.autor,date:l.data,avatar:l.avatar?.data[0].attributes?.url})),new X(".card",t)):console.log("error")}async renderMainNews(){const n=(await A("https://battle-star-app.onrender.com/graphql",Q)).mainNews?.data??"Error";let t=[];Array.isArray(n)?(t=n.map(l=>({img:l.attributes.img?.data[0].attributes?.url,title:l.attributes.title,text:l.attributes.text,data:l.attributes.data})),new Y(".news__info",t)):console.log("error")}async renderTeam(){const n=(await A("https://battle-star-app.onrender.com/graphql",R)).teams?.data??"Error";let t=[];Array.isArray(n)&&(t=n.map(l=>({logo:l.attributes.logo.data.attributes.url,name:l.attributes.name,rating:l.attributes.rating})),new J(".game__info",t))}async renderMap(){const n=(await A("https://battle-star-app.onrender.com/graphql",U)).maps?.data??"Error";let t=[];Array.isArray(n)&&(t=n.map(l=>({logo:l.attributes.logo.data[0].attributes.url})),new K(".game__column",t))}}new W;
