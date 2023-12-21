import"./modulepreload-polyfill-3cfb730f.js";import{$ as p}from"./jquery-ab814638.js";import{S as l}from"./swiper-core-75041738.js";import{N as m}from"./navigation-34d3ce35.js";import"./gameselect-b063eeab.js";import{S as i}from"./sprite-b43800c4.js";import{g as o,s as u}from"./windowLocation-8fc17d29.js";import{B as _,L as b}from"./lava-lamp-23e0d20d.js";import{r as v,i as h,j as f}from"./queries.graphql.d-fd5c7067.js";import{T as $}from"./tabs-create-7a28c516.js";import"./dropDownMenu-e31617c8.js";const w="/assets/honeycombs-065ef4c7.png";class P{containerId;tournaments;constructor(a,t){this.containerId=a,this.tournaments=t,this.render()}render(){const a=o("game")??"cs2",t=this.tournaments.map(n=>`
          <a class="tournaments-card" href="/tournament.html?id=${n.id}&game=${a}">
            <div class="tournaments-card__img-block">
              <img src="${n.imageUrl}" alt="tournamentCard" />
            </div>
            <div class="tournaments-card__info">
              <div class="tournaments-card__backgound-img-block">
                <img src="${w}" alt="" />
              </div>
              <p class="tournaments-card__date">${n.date}</p>
              <p class="tournaments-card__name">${n.name}</p>
              <div class="tournaments-card__info-footer">
                <div class="tournaments-card__prize">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__prize-icon">
                    <use xlink:href="${i}#tournament-cup"></use>
                  </svg>${n.prize}
                </div>
                <div class="tournaments-card__min-rating">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__min-rating-icon">
                    <use xlink:href="${i}#rank"></use>
                  </svg>${n.minRating}
                </div>
                <div class="tournaments-card__region-limit">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__region-limit-icon">
                    <use xlink:href="${i}#world"></use>
                  </svg>${n.regionLimit}
                </div>
              </div>
            </div>
          </a>`).join(""),e=document.getElementById(this.containerId);e&&(e.innerHTML=t)}}class T{containerId;currentPage;pageCount;constructor(a,t,e){this.containerId=a,this.currentPage=e,this.pageCount=t.pagination.pageCount,this.bindEvents(),this.render()}bindEvents(){const a=p(`#${this.containerId}`);a.on("click",".page-pagination__button",t=>{const e=t.currentTarget.id;u("page",e),this.currentPage=parseInt(e),this.render()}),a.on("click",".page-pagination__button-nav",t=>{t.currentTarget.id==="next"?this.currentPage=Math.min(this.currentPage+1,this.pageCount):t.currentTarget.id==="prev"&&(this.currentPage=Math.max(this.currentPage-1,1)),u("page",this.currentPage.toString()),this.render()})}render(){let a="",t="";for(let n=1;n<=this.pageCount;n++)n===this.currentPage?t+=`<button id="${n}" class="page-pagination__button page-pagination__button_active">${n}</button>`:n===1||n===this.pageCount||n===this.currentPage-1||n===this.currentPage+1?t+=`<button id="${n}" class="page-pagination__button">${n}</button>`:(n===this.currentPage-2||n===this.currentPage+2)&&(t+=n===this.currentPage-2&&n>2?'<p class="page-pagination__elips">...</p>':"");this.pageCount>0&&(a='<div class="teams-list-section__teams-list-pagination page-pagination">',a+=this.currentPage>1?`<button id="prev" class="page-pagination__button-nav page-pagination__button-prev">
          <svg class="page-pagination__button-prev-icon">
            <use xlink:href="${i}#arrow-left"></use>
          </svg>
        </button>`:`<button id="prev" disabled class="page-pagination__button-nav page-pagination__button-prev">
          <svg class="page-pagination__button-prev-icon">
            <use xlink:href="${i}#arrow-left"></use>
          </svg>
        </button>`,a+=t,a+=this.currentPage<this.pageCount?`<button id="next" class="page-pagination__button-nav page-pagination__button-next">
          <svg class="page-pagination__button-next-icon">
            <use xlink:href="${i}#arrow-right"></use>
          </svg>
        </button>`:`<button id="next" disabled class="page-pagination__button-nav page-pagination__button-next">
          <svg class="page-pagination__button-next-icon">
            <use xlink:href="${i}#arrow-right"></use>
          </svg>
        </button>`,a+="</div>");const e=document.getElementById(this.containerId);e&&(e.innerHTML=a)}}class x{currentPage;pageCount;constructor(a,t){this.currentPage=t,this.pageCount=a.pagination.pageCount}bindEvents(a){a.on("click",".page-pagination__button",t=>{u("page",t.currentTarget.id)}),a.on("click",".page-pagination__button-nav",t=>{t.currentTarget.id=="next"?this.currentPage++:t.currentTarget.id=="prev"&&this.currentPage--,this.currentPage>this.pageCount?this.currentPage=this.pageCount:this.currentPage<1&&(this.currentPage=1),u("page",this.currentPage)})}render(){let a="",t="";for(let e=1;e<=this.pageCount;e++)e==this.currentPage?t+=`<button id="${e}" class="page-pagination__button page-pagination__button_active">${e}</button>`:e==1||e==this.pageCount||e==this.currentPage-1||e==this.currentPage+1?t+=`<button id="${e}" class="page-pagination__button">${e}</button>`:(e==this.currentPage-2||e==this.currentPage+2)&&(t+='<p class="page-pagination__elips">...</p>');return this.pageCount>0&&(a+='<div class="teams-list-section__teams-list-pagination page-pagination">',this.currentPage>1?a+=`<button id="prev" class="page-pagination__button-nav page-pagination__button-prev">
    <svg class="page-pagination__button-prev-icon">
      <use xlink:href="${i}#arrow-left"></use>
    </svg>
  </button>`:a+=`<button id="prev" disabled class="page-pagination__button-nav page-pagination__button-prev">
    <svg class="page-pagination__button-prev-icon">
      <use xlink:href="${i}#arrow-left"></use>
    </svg>
  </button>`,a+=t,this.currentPage<this.pageCount?a+=`<button id="next" class="page-pagination__button-nav page-pagination__button-next">
    <svg class="page-pagination__button-next-icon">
      <use xlink:href="${i}#arrow-right"></use>
    </svg>
  </button>`:a+=`<button id="next" disabled class="page-pagination__button-nav page-pagination__button-next">
    <svg class="page-pagination__button-next-icon">
      <use xlink:href="${i}#arrow-right"></use>
    </svg>
  </button>`,a+="</div>"),a}}class k{containerId;tournaments;swiper=null;constructor(a,t){this.containerId=a,this.tournaments=t,this.render(),this.initializeSwiper()}render(){const a=this.tournaments.map(e=>`<div class="tournaments-swiper__swiper-slide swiper-slide tournaments-slide">
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
              <use xlink:href="${i}#arrow-left"></use>
            </svg>
                    </div>
                    <div class="tournaments-swiper swiper">
                        <div class="tournaments-swiper__swiper-wrapper swiper-wrapper">
                            ${a}
                        </div>
                    </div>
                    <div class="tournaments-swiper__button-next">
                        <svg class="tournaments-swiper__button-next-icon">
              <use xlink:href="${i}#arrow-right"></use>
            </svg>
                    </div>
                </div>
            `)}initializeSwiper(){this.swiper=new l(".swiper",{modules:[m],loop:!0,navigation:{nextEl:".tournaments-swiper__button-next",prevEl:".tournaments-swiper__button-prev"}})}}p(document).ready(async()=>{let r,a,t,e;o("game")=="dota2"?r=h:r=f,o("page")?e=o("page"):e=1,a=await v("https://battle-star-app.onrender.com/graphql",r,{currentPage:e,pageSize:9},{Authorization:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912"}),a.dota2Tournaments?t=a.dota2Tournaments:t=a.cs2Tournaments,new T("page-pagination",t.meta,1),new x(t.meta,1),new P("tournaments-cards-block",[...t.data.map(s=>({id:s.id,imageUrl:s.attributes.Tournament.logo.data.attributes.url,date:`${g(s.attributes.Tournament.startDate)} - Начало в ${s.attributes.Tournament.time.split(":").slice(0,2).join(":")}`,name:s.attributes?.Tournament?.name,prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"}))]);const d=[...t.data.map(s=>({id:s.id,title:s.attributes?.Tournament?.name,description:s.attributes.Tournament.description,imageUrl:s.attributes.Tournament.logo.data.attributes.url,date:`${g(s.attributes.Tournament.startDate)} - ${g(s.attributes.Tournament.endDate)}`,teams:s.attributes.teams.data.map(c=>({name:c.attributes.Team.name,rank:c.attributes.Team.rating,avatar:c.attributes.Team.logo.data.attributes.url}))}))];new k("tournament-container",d)});function g(r){const a=["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],t=new Date(r),e=t.getDate(),n=t.getMonth();return e+" "+a[n]}new $("tournaments-page__container","match-page__filters",[["tournamentGrid","ТУРНИРНАЯ СЕТКА"],["gamesSchedule","РАСПИСАНИЕ ИГР"],["participants","УЧАСНИКИ"]]);p("#tournamentGrid-content").addClass("tabs-block__content-container_active");new _("match-page__filters");new b("match-page__filters");
