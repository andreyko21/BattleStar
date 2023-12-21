import"./modulepreload-polyfill-3cfb730f.js";import{S as p,N as m}from"./navigation-2e8e35a7.js";/* empty css               */import{S as i}from"./sprite-46903b3d.js";import{s,B as c,L as u}from"./lava-lamp-1df54869.js";import{$ as d}from"./jquery-995cfbaf.js";class l{containerId;tournaments;constructor(a,n){this.containerId=a,this.tournaments=n,this.render()}render(){const a=this.tournaments.map(t=>`
          <a class="tournaments-card" href="#">
            <div class="tournaments-card__img-block">
              <img src="${t.imageUrl}" alt="tournamentCard" />
            </div>
            <div class="tournaments-card__info">
              <div class="tournaments-card__backgound-img-block">
                <img src="./src/images/honeycombs.png" alt="" />
              </div>
              <p class="tournaments-card__date">${t.date}</p>
              <p class="tournaments-card__name">${t.name}</p>
              <div class="tournaments-card__info-footer">
                <div class="tournaments-card__prize">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__prize-icon">
                    <use xlink:href="${i}#tournament-cup"></use>
                  </svg>${t.prize}
                </div>
                <div class="tournaments-card__min-rating">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__min-rating-icon">
                    <use xlink:href="${i}#rank"></use>
                  </svg>${t.minRating}
                </div>
                <div class="tournaments-card__region-limit">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__region-limit-icon">
                    <use xlink:href="${i}#world"></use>
                  </svg>${t.regionLimit}
                </div>
              </div>
            </div>
          </a>`).join(""),n=document.getElementById(this.containerId);n&&(n.innerHTML=a)}}class _{containerId;currentPage;pageCount;constructor(a,n,t){this.containerId=a,this.currentPage=t,this.pageCount=n.pagination.pageCount,this.bindEvents(),this.render()}bindEvents(){const a=d(`#${this.containerId}`);a.on("click",".page-pagination__button",n=>{const t=n.currentTarget.id;s("page",t),this.currentPage=parseInt(t),this.render()}),a.on("click",".page-pagination__button-nav",n=>{n.currentTarget.id==="next"?this.currentPage=Math.min(this.currentPage+1,this.pageCount):n.currentTarget.id==="prev"&&(this.currentPage=Math.max(this.currentPage-1,1)),s("page",this.currentPage.toString()),this.render()})}render(){let a="",n="";for(let e=1;e<=this.pageCount;e++)e===this.currentPage?n+=`<button id="${e}" class="page-pagination__button page-pagination__button_active">${e}</button>`:e===1||e===this.pageCount||e===this.currentPage-1||e===this.currentPage+1?n+=`<button id="${e}" class="page-pagination__button">${e}</button>`:(e===this.currentPage-2||e===this.currentPage+2)&&(n+=e===this.currentPage-2&&e>2?'<p class="page-pagination__elips">...</p>':"");this.pageCount>0&&(a='<div class="teams-list-section__teams-list-pagination page-pagination">',a+=this.currentPage>1?`<button id="prev" class="page-pagination__button-nav page-pagination__button-prev">
          <svg class="page-pagination__button-prev-icon">
            <use xlink:href="${i}#arrow-left"></use>
          </svg>
        </button>`:`<button id="prev" disabled class="page-pagination__button-nav page-pagination__button-prev">
          <svg class="page-pagination__button-prev-icon">
            <use xlink:href="${i}#arrow-left"></use>
          </svg>
        </button>`,a+=n,a+=this.currentPage<this.pageCount?`<button id="next" class="page-pagination__button-nav page-pagination__button-next">
          <svg class="page-pagination__button-next-icon">
            <use xlink:href="${i}#arrow-right"></use>
          </svg>
        </button>`:`<button id="next" disabled class="page-pagination__button-nav page-pagination__button-next">
          <svg class="page-pagination__button-next-icon">
            <use xlink:href="${i}#arrow-right"></use>
          </svg>
        </button>`,a+="</div>");const t=document.getElementById(this.containerId);t&&(t.innerHTML=a)}}class v{currentPage;pageCount;constructor(a,n){this.currentPage=n,this.pageCount=a.pagination.pageCount}bindEvents(a){a.on("click",".page-pagination__button",n=>{s("page",n.currentTarget.id)}),a.on("click",".page-pagination__button-nav",n=>{n.currentTarget.id=="next"?this.currentPage++:n.currentTarget.id=="prev"&&this.currentPage--,this.currentPage>this.pageCount?this.currentPage=this.pageCount:this.currentPage<1&&(this.currentPage=1),s("page",this.currentPage)})}render(){let a="",n="";for(let t=1;t<=this.pageCount;t++)t==this.currentPage?n+=`<button id="${t}" class="page-pagination__button page-pagination__button_active">${t}</button>`:t==1||t==this.pageCount||t==this.currentPage-1||t==this.currentPage+1?n+=`<button id="${t}" class="page-pagination__button">${t}</button>`:(t==this.currentPage-2||t==this.currentPage+2)&&(n+='<p class="page-pagination__elips">...</p>');return this.pageCount>0&&(a+='<div class="teams-list-section__teams-list-pagination page-pagination">',this.currentPage>1?a+=`<button id="prev" class="page-pagination__button-nav page-pagination__button-prev">
    <svg class="page-pagination__button-prev-icon">
      <use xlink:href="${i}#arrow-left"></use>
    </svg>
  </button>`:a+=`<button id="prev" disabled class="page-pagination__button-nav page-pagination__button-prev">
    <svg class="page-pagination__button-prev-icon">
      <use xlink:href="${i}#arrow-left"></use>
    </svg>
  </button>`,a+=n,this.currentPage<this.pageCount?a+=`<button id="next" class="page-pagination__button-nav page-pagination__button-next">
    <svg class="page-pagination__button-next-icon">
      <use xlink:href="${i}#arrow-right"></use>
    </svg>
  </button>`:a+=`<button id="next" disabled class="page-pagination__button-nav page-pagination__button-next">
    <svg class="page-pagination__button-next-icon">
      <use xlink:href="${i}#arrow-right"></use>
    </svg>
  </button>`,a+="</div>"),a}}class h{containerId;tournaments;swiper=null;constructor(a,n){this.containerId=a,this.tournaments=n,this.render(),this.initializeSwiper()}render(){const a=this.tournaments.map(t=>`<div class="tournaments-swiper__swiper-slide swiper-slide tournaments-slide">
                <div class="tournaments-slide__img">
                    <img src="${t.imageUrl}" alt="${t.title}" />
                </div>
                <div class="tournaments-slide__sidebar">
                    <h2 class="tournaments-slide__title">${t.title}</h2>
                    <p class="tournaments-slide__description">${t.description}</p>
                    <p class="tournaments-slide__date">${t.date}</p>
                    <p class="tournaments-slide__commands-title">${t.teams.length} команд зарегистрированы:</p>
                    <div class="tournaments-slide__commands">
                        <div class="tournaments-slide__commands-list">
                            ${t.teams.map(e=>`<a class="tournaments-slide__commands-item" href="#">
                                    <div class="tournaments-slide__commands-item-avatar">
                                        <img src="${e.avatar}" alt="${e.name}" />
                                    </div>
                                    <p class="tournaments-slide__commands-item-name">${e.name}</p>
                                    <p class="tournaments-slide__commands-item-rank">${e.rank}</p>
                                </a>`).join("")}
                        </div>
                    </div>
                    <button class="tournaments-slide__button">Подать заявку</button>
                </div>
            </div>`).join(""),n=document.getElementById(this.containerId);n&&(n.innerHTML=`
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
            `)}initializeSwiper(){this.swiper=new p(".swiper",{modules:[m],loop:!0,navigation:{nextEl:".tournaments-swiper__button-next",prevEl:".tournaments-swiper__button-prev"}})}}const b=[{id:"tournament1",title:"Major Stockholm 2021",description:"Призовой фонд 200000 $",date:"23 Окт - 7 Ноя",teams:[{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"},{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"},{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"},{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"},{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"}],imageUrl:"./src/images/major.png"},{id:"tournament1",title:"Major Stockholm 2021",description:"Призовой фонд 200000 $",date:"23 Окт - 7 Ноя",teams:[{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"},{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"},{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"},{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"},{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"}],imageUrl:"./src/images/major.png"}];new h("tournament-container",b);new l("tournaments-cards-block",[{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"},{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"},{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"},{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"},{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"},{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"},{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"},{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"},{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"}]);const o={pagination:{pageCount:4}},g=1;new _("page-pagination",o,g);new v(o,g);new c("tabs");new u("tabs");
