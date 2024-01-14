import{$ as c}from"./jquery-62de4648.js";import{S as p}from"./swiper-core-75041738.js";import{N as g}from"./navigation-34d3ce35.js";/* empty css                      */import{g as o,S as r,O as l,r as _,H as b,P as v,Q as h}from"./header-4ffbce13.js";import{B as f}from"./tabs-18cd2ba9.js";import{L as w}from"./lava-lamp-05022cec.js";import{T as $}from"./tabs-create-b6236109.js";import{A as T}from"./sidebar-1114d44a.js";const P="/assets/honeycombs-065ef4c7.png";class x{containerId;tournaments;constructor(e,a){this.containerId=e,this.tournaments=a,this.render()}render(){const e=o("game")??"cs2",a=this.tournaments.map(t=>`
          <a class="tournaments-card" href="/tournament.html?id=${t.id}&game=${e}">
            <div class="tournaments-card__img-block">
              <img src="${t.imageUrl}" alt="tournamentCard" />
            </div>
            <div class="tournaments-card__info">
              <div class="tournaments-card__backgound-img-block">
                <img src="${P}" alt="" />
              </div>
              <p class="tournaments-card__date">${t.date}</p>
              <p class="tournaments-card__name">${t.name}</p>
              <div class="tournaments-card__info-footer">
                <div class="tournaments-card__prize">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__prize-icon">
                    <use xlink:href="${r}#tournament-cup"></use>
                  </svg>${t.prize}
                </div>
                <div class="tournaments-card__min-rating">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__min-rating-icon">
                    <use xlink:href="${r}#rank"></use>
                  </svg>${t.minRating}
                </div>
                <div class="tournaments-card__region-limit">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__region-limit-icon">
                    <use xlink:href="${r}#world"></use>
                  </svg>${t.regionLimit}
                </div>
              </div>
            </div>
          </a>`).join(""),n=document.getElementById(this.containerId);n&&(n.innerHTML=a)}}class k{containerId;currentPage;pageCount;constructor(e,a,n){this.containerId=e,this.currentPage=n,this.pageCount=a.pagination.pageCount,this.bindEvents(),this.render()}bindEvents(){const e=c(`#${this.containerId}`);e.on("click",".page-pagination__button",a=>{const n=a.currentTarget.id;l("page",n),this.currentPage=parseInt(n),this.render()}),e.on("click",".page-pagination__button-nav",a=>{a.currentTarget.id==="next"?this.currentPage=Math.min(this.currentPage+1,this.pageCount):a.currentTarget.id==="prev"&&(this.currentPage=Math.max(this.currentPage-1,1)),l("page",this.currentPage.toString()),this.render()})}render(){let e="",a="";for(let t=1;t<=this.pageCount;t++)t===this.currentPage?a+=`<button id="${t}" class="page-pagination__button page-pagination__button_active">${t}</button>`:t===1||t===this.pageCount||t===this.currentPage-1||t===this.currentPage+1?a+=`<button id="${t}" class="page-pagination__button">${t}</button>`:(t===this.currentPage-2||t===this.currentPage+2)&&(a+=t===this.currentPage-2&&t>2?'<p class="page-pagination__elips">...</p>':"");this.pageCount>0&&(e='<div class="teams-list-section__teams-list-pagination page-pagination">',e+=this.currentPage>1?`<button id="prev" class="page-pagination__button-nav page-pagination__button-prev">
          <svg class="page-pagination__button-prev-icon">
            <use xlink:href="${r}#arrow-left"></use>
          </svg>
        </button>`:`<button id="prev" disabled class="page-pagination__button-nav page-pagination__button-prev">
          <svg class="page-pagination__button-prev-icon">
            <use xlink:href="${r}#arrow-left"></use>
          </svg>
        </button>`,e+=a,e+=this.currentPage<this.pageCount?`<button id="next" class="page-pagination__button-nav page-pagination__button-next">
          <svg class="page-pagination__button-next-icon">
            <use xlink:href="${r}#arrow-right"></use>
          </svg>
        </button>`:`<button id="next" disabled class="page-pagination__button-nav page-pagination__button-next">
          <svg class="page-pagination__button-next-icon">
            <use xlink:href="${r}#arrow-right"></use>
          </svg>
        </button>`,e+="</div>");const n=document.getElementById(this.containerId);n&&(n.innerHTML=e)}}class I{containerId;tournaments;swiper=null;constructor(e,a){this.containerId=e,this.tournaments=a,this.render(),this.initializeSwiper()}render(){const e=this.tournaments.map(n=>`<div class="tournaments-swiper__swiper-slide swiper-slide tournaments-slide">
                <div class="tournaments-slide__img">
                    <img src="${n.imageUrl}" alt="${n.title}" />
                </div>
                <div class="tournaments-slide__sidebar">
                    <h2 class="tournaments-slide__title">${n.title}</h2>
                    <p class="tournaments-slide__description">${n.description}</p>
                    <p class="tournaments-slide__date">${n.date}</p>
                    <p class="tournaments-slide__commands-title">${n.teams.length} команд зарегистрированы:</p>
                    <div class="tournaments-slide__commands">
                        <div class="tournaments-slide__commands-list">
                            ${n.teams.map(t=>`<a class="tournaments-slide__commands-item" href="#">
                                    <div class="tournaments-slide__commands-item-avatar">
                                        <img src="${t.avatar}" alt="${t.name}" />
                                    </div>
                                    <p class="tournaments-slide__commands-item-name">${t.name}</p>
                                    <p class="tournaments-slide__commands-item-rank">${t.rank}</p>
                                </a>`).join("")}
                        </div>
                    </div>
                    <button class="tournaments-slide__button">Подать заявку</button>
                </div>
            </div>`).join(""),a=document.getElementById(this.containerId);a&&(a.innerHTML=`
                <div class="tournament-page__tournaments-swiper-container">
                    <div class="tournaments-swiper__button-prev">
                        <svg class="tournaments-swiper__button-next-icon">
              <use xlink:href="${r}#arrow-left"></use>
            </svg>
                    </div>
                    <div class="tournaments-swiper swiper">
                        <div class="tournaments-swiper__swiper-wrapper swiper-wrapper">
                            ${e}
                        </div>
                    </div>
                    <div class="tournaments-swiper__button-next">
                        <svg class="tournaments-swiper__button-next-icon">
              <use xlink:href="${r}#arrow-right"></use>
            </svg>
                    </div>
                </div>
            `)}initializeSwiper(){this.swiper=new p(".swiper",{modules:[g],loop:!0,navigation:{nextEl:".tournaments-swiper__button-next",prevEl:".tournaments-swiper__button-prev"}})}}c(document).ready(async()=>{let i,e,a,n;o("game")=="dota2"?i=v:i=h,n=Number(o("page")||1),e=await _("https://battle-star-app.onrender.com/graphql",i,{page:n,pageSize:9,date:"2024-01-14"},{Authorization:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912"}),e.dota2Tournaments?a=e.dota2Tournaments:a=e.cs2Tournaments,new k("page-pagination",a.meta,Number(o("page"))||1),new x("tournaments-cards-block",[...a.data.map(s=>({id:s.id,imageUrl:s.attributes.Tournament.logo.data.attributes.url,date:`${d(s.attributes.Tournament.startDate)} - Начало в ${s.attributes.Tournament.time.split(":").slice(0,2).join(":")}`,name:s.attributes?.Tournament?.name,prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"}))]);const m=[...a.data.map(s=>({id:s.id,title:s.attributes?.Tournament?.name,description:s.attributes.Tournament.description,imageUrl:s.attributes.Tournament.logo.data.attributes.url,date:`${d(s.attributes.Tournament.startDate)} - ${d(s.attributes.Tournament.endDate)}`,teams:s.attributes.teams.data.map(u=>({name:u.attributes.Team.name,rank:u.attributes.Team.rating,avatar:u.attributes.Team.logo.data.attributes.url}))}))];new I("tournament-container",m)});function d(i){const e=["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],a=new Date(i),n=a.getDate(),t=a.getMonth();return n+" "+e[t]}new $("tournaments-nav__tabs","match-page__filters",[["amateurTournaments","ЛЮБИТЕЛЬСКИЕ ТУРНИРЫ"],["profesionalTournaments","ПРОФЕССИОНАЛЬНЫЕ ТУРНИРЫ"]]);c("#tournamentGrid-content").addClass("tabs-block__content-container_active");new f("match-page__filters");new w("match-page__filters");c(document).ready(()=>{new b("#wrapper"),new T("wrapper","ТУРНИРЫ"),c(".tournaments-nav__create-button").on("click",()=>{const i=o("game");i==null||i==null?window.location.href="/createTournament.html?game=cs2":window.location.href=`/createTournament.html?game=${i}`})});
