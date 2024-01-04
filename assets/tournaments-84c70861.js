import{$ as u}from"./jquery-e7e79cb6.js";import{S as l}from"./swiper-core-75041738.js";import{N as m}from"./navigation-34d3ce35.js";/* empty css                      */import{g as o,S as r,s as c,r as _,H as b,D as v,E as h}from"./header-ecea2ca1.js";import{B as f}from"./tabs-de2cbcb3.js";import{L as w}from"./lava-lamp-63313dfc.js";import{T as $}from"./tabs-create-b6236109.js";import{A as P}from"./sidebar-dbb7e2e7.js";const T="/assets/honeycombs-065ef4c7.png";class x{containerId;tournaments;constructor(a,t){this.containerId=a,this.tournaments=t,this.render()}render(){const a=o("game")??"cs2",t=this.tournaments.map(n=>`
          <a class="tournaments-card" href="/tournament.html?id=${n.id}&game=${a}">
            <div class="tournaments-card__img-block">
              <img src="${n.imageUrl}" alt="tournamentCard" />
            </div>
            <div class="tournaments-card__info">
              <div class="tournaments-card__backgound-img-block">
                <img src="${T}" alt="" />
              </div>
              <p class="tournaments-card__date">${n.date}</p>
              <p class="tournaments-card__name">${n.name}</p>
              <div class="tournaments-card__info-footer">
                <div class="tournaments-card__prize">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__prize-icon">
                    <use xlink:href="${r}#tournament-cup"></use>
                  </svg>${n.prize}
                </div>
                <div class="tournaments-card__min-rating">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__min-rating-icon">
                    <use xlink:href="${r}#rank"></use>
                  </svg>${n.minRating}
                </div>
                <div class="tournaments-card__region-limit">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__region-limit-icon">
                    <use xlink:href="${r}#world"></use>
                  </svg>${n.regionLimit}
                </div>
              </div>
            </div>
          </a>`).join(""),e=document.getElementById(this.containerId);e&&(e.innerHTML=t)}}class k{containerId;currentPage;pageCount;constructor(a,t,e){this.containerId=a,this.currentPage=e,this.pageCount=t.pagination.pageCount,this.bindEvents(),this.render()}bindEvents(){const a=u(`#${this.containerId}`);a.on("click",".page-pagination__button",t=>{const e=t.currentTarget.id;c("page",e),this.currentPage=parseInt(e),this.render()}),a.on("click",".page-pagination__button-nav",t=>{t.currentTarget.id==="next"?this.currentPage=Math.min(this.currentPage+1,this.pageCount):t.currentTarget.id==="prev"&&(this.currentPage=Math.max(this.currentPage-1,1)),c("page",this.currentPage.toString()),this.render()})}render(){let a="",t="";for(let n=1;n<=this.pageCount;n++)n===this.currentPage?t+=`<button id="${n}" class="page-pagination__button page-pagination__button_active">${n}</button>`:n===1||n===this.pageCount||n===this.currentPage-1||n===this.currentPage+1?t+=`<button id="${n}" class="page-pagination__button">${n}</button>`:(n===this.currentPage-2||n===this.currentPage+2)&&(t+=n===this.currentPage-2&&n>2?'<p class="page-pagination__elips">...</p>':"");this.pageCount>0&&(a='<div class="teams-list-section__teams-list-pagination page-pagination">',a+=this.currentPage>1?`<button id="prev" class="page-pagination__button-nav page-pagination__button-prev">
          <svg class="page-pagination__button-prev-icon">
            <use xlink:href="${r}#arrow-left"></use>
          </svg>
        </button>`:`<button id="prev" disabled class="page-pagination__button-nav page-pagination__button-prev">
          <svg class="page-pagination__button-prev-icon">
            <use xlink:href="${r}#arrow-left"></use>
          </svg>
        </button>`,a+=t,a+=this.currentPage<this.pageCount?`<button id="next" class="page-pagination__button-nav page-pagination__button-next">
          <svg class="page-pagination__button-next-icon">
            <use xlink:href="${r}#arrow-right"></use>
          </svg>
        </button>`:`<button id="next" disabled class="page-pagination__button-nav page-pagination__button-next">
          <svg class="page-pagination__button-next-icon">
            <use xlink:href="${r}#arrow-right"></use>
          </svg>
        </button>`,a+="</div>");const e=document.getElementById(this.containerId);e&&(e.innerHTML=a)}}class C{currentPage;pageCount;constructor(a,t){this.currentPage=t,this.pageCount=a.pagination.pageCount}bindEvents(a){a.on("click",".page-pagination__button",t=>{c("page",t.currentTarget.id)}),a.on("click",".page-pagination__button-nav",t=>{t.currentTarget.id=="next"?this.currentPage++:t.currentTarget.id=="prev"&&this.currentPage--,this.currentPage>this.pageCount?this.currentPage=this.pageCount:this.currentPage<1&&(this.currentPage=1),c("page",this.currentPage)})}render(){let a="",t="";for(let e=1;e<=this.pageCount;e++)e==this.currentPage?t+=`<button id="${e}" class="page-pagination__button page-pagination__button_active">${e}</button>`:e==1||e==this.pageCount||e==this.currentPage-1||e==this.currentPage+1?t+=`<button id="${e}" class="page-pagination__button">${e}</button>`:(e==this.currentPage-2||e==this.currentPage+2)&&(t+='<p class="page-pagination__elips">...</p>');return this.pageCount>0&&(a+='<div class="teams-list-section__teams-list-pagination page-pagination">',this.currentPage>1?a+=`<button id="prev" class="page-pagination__button-nav page-pagination__button-prev">
    <svg class="page-pagination__button-prev-icon">
      <use xlink:href="${r}#arrow-left"></use>
    </svg>
  </button>`:a+=`<button id="prev" disabled class="page-pagination__button-nav page-pagination__button-prev">
    <svg class="page-pagination__button-prev-icon">
      <use xlink:href="${r}#arrow-left"></use>
    </svg>
  </button>`,a+=t,this.currentPage<this.pageCount?a+=`<button id="next" class="page-pagination__button-nav page-pagination__button-next">
    <svg class="page-pagination__button-next-icon">
      <use xlink:href="${r}#arrow-right"></use>
    </svg>
  </button>`:a+=`<button id="next" disabled class="page-pagination__button-nav page-pagination__button-next">
    <svg class="page-pagination__button-next-icon">
      <use xlink:href="${r}#arrow-right"></use>
    </svg>
  </button>`,a+="</div>"),a}}class I{containerId;tournaments;swiper=null;constructor(a,t){this.containerId=a,this.tournaments=t,this.render(),this.initializeSwiper()}render(){const a=this.tournaments.map(e=>`<div class="tournaments-swiper__swiper-slide swiper-slide tournaments-slide">
                <div class="tournaments-slide__img">
                    <img src="${e.imageUrl}" alt="${e.title}" />
                </div>
                <div class="tournaments-slide__sidebar">
                    <h2 class="tournaments-slide__title">${e.title}</h2>
                    <p class="tournaments-slide__description">${e.description}</p>
                    <p class="tournaments-slide__date">${e.date}</p>
                    <p class="tournaments-slide__commands-title">${e.teams.length} команд зарегистрированы:</p>
                    <div class="tournaments-slide__commands">
                        <div class="tournaments-slide__commands-list">
                            ${e.teams.map(n=>`<a class="tournaments-slide__commands-item" href="#">
                                    <div class="tournaments-slide__commands-item-avatar">
                                        <img src="${n.avatar}" alt="${n.name}" />
                                    </div>
                                    <p class="tournaments-slide__commands-item-name">${n.name}</p>
                                    <p class="tournaments-slide__commands-item-rank">${n.rank}</p>
                                </a>`).join("")}
                        </div>
                    </div>
                    <button class="tournaments-slide__button">Подать заявку</button>
                </div>
            </div>`).join(""),t=document.getElementById(this.containerId);t&&(t.innerHTML=`
                <div class="tournament-page__tournaments-swiper-container">
                    <div class="tournaments-swiper__button-prev">
                        <svg class="tournaments-swiper__button-next-icon">
              <use xlink:href="${r}#arrow-left"></use>
            </svg>
                    </div>
                    <div class="tournaments-swiper swiper">
                        <div class="tournaments-swiper__swiper-wrapper swiper-wrapper">
                            ${a}
                        </div>
                    </div>
                    <div class="tournaments-swiper__button-next">
                        <svg class="tournaments-swiper__button-next-icon">
              <use xlink:href="${r}#arrow-right"></use>
            </svg>
                    </div>
                </div>
            `)}initializeSwiper(){this.swiper=new l(".swiper",{modules:[m],loop:!0,navigation:{nextEl:".tournaments-swiper__button-next",prevEl:".tournaments-swiper__button-prev"}})}}u(document).ready(async()=>{let s,a,t,e;o("game")=="dota2"?s=v:s=h,o("page")?e=o("page"):e=1,a=await _("https://battle-star-app.onrender.com/graphql",s,{currentPage:e,pageSize:9},{Authorization:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912"}),a.dota2Tournaments?t=a.dota2Tournaments:t=a.cs2Tournaments,new k("page-pagination",t.meta,1),new C(t.meta,1),new x("tournaments-cards-block",[...t.data.map(i=>({id:i.id,imageUrl:i.attributes.Tournament.logo.data.attributes.url,date:`${p(i.attributes.Tournament.startDate)} - Начало в ${i.attributes.Tournament.time.split(":").slice(0,2).join(":")}`,name:i.attributes?.Tournament?.name,prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"}))]);const d=[...t.data.map(i=>({id:i.id,title:i.attributes?.Tournament?.name,description:i.attributes.Tournament.description,imageUrl:i.attributes.Tournament.logo.data.attributes.url,date:`${p(i.attributes.Tournament.startDate)} - ${p(i.attributes.Tournament.endDate)}`,teams:i.attributes.teams.data.map(g=>({name:g.attributes.Team.name,rank:g.attributes.Team.rating,avatar:g.attributes.Team.logo.data.attributes.url}))}))];new I("tournament-container",d)});function p(s){const a=["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],t=new Date(s),e=t.getDate(),n=t.getMonth();return e+" "+a[n]}new $("tournaments-nav__tabs","match-page__filters",[["amateurTournaments","ЛЮБИТЕЛЬСКИЕ ТУРНИРЫ"],["profesionalTournaments","ПРОФЕССИОНАЛЬНЫЕ ТУРНИРЫ"]]);u("#tournamentGrid-content").addClass("tabs-block__content-container_active");new f("match-page__filters");new w("match-page__filters");u(document).ready(()=>{new b("#wrapper"),new P("wrapper","ТУРНИРЫ"),u(".tournaments-nav__create-button").on("click",()=>{const s=o("game");s==null||s==null?window.location.href="/createTournament.html?game=cs2":window.location.href=`/createTournament.html?game=${s}`})});
