import"./modulepreload-polyfill-3cfb730f.js";import{S as g,N as p}from"./navigation-2e8e35a7.js";/* empty css               */import{S as i,P as c}from"./pagination-af968392.js";import{s as r,B as d,L as u}from"./lava-lamp-a33f19c8.js";import{$ as l}from"./jquery-995cfbaf.js";class _{containerId;tournaments;constructor(e,t){this.containerId=e,this.tournaments=t,this.render()}render(){const e=this.tournaments.map(a=>`
          <a class="tournaments-card" href="#">
            <div class="tournaments-card__img-block">
              <img src="${a.imageUrl}" alt="tournamentCard" />
            </div>
            <div class="tournaments-card__info">
              <div class="tournaments-card__backgound-img-block">
                <img src="./src/images/honeycombs.png" alt="" />
              </div>
              <p class="tournaments-card__date">${a.date}</p>
              <p class="tournaments-card__name">${a.name}</p>
              <div class="tournaments-card__info-footer">
                <div class="tournaments-card__prize">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__prize-icon">
                    <use xlink:href="${i}#tournament-cup"></use>
                  </svg>${a.prize}
                </div>
                <div class="tournaments-card__min-rating">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__min-rating-icon">
                    <use xlink:href="${i}#rank"></use>
                  </svg>${a.minRating}
                </div>
                <div class="tournaments-card__region-limit">
                  <svg class="tournaments-card__info-footer-icon tournaments-card__region-limit-icon">
                    <use xlink:href="${i}#world"></use>
                  </svg>${a.regionLimit}
                </div>
              </div>
            </div>
          </a>`).join(""),t=document.getElementById(this.containerId);t&&(t.innerHTML=e)}}class v{containerId;currentPage;pageCount;constructor(e,t,a){this.containerId=e,this.currentPage=a,this.pageCount=t.pagination.pageCount,this.bindEvents(),this.render()}bindEvents(){const e=l(`#${this.containerId}`);e.on("click",".page-pagination__button",t=>{const a=t.currentTarget.id;r("page",a),this.currentPage=parseInt(a),this.render()}),e.on("click",".page-pagination__button-nav",t=>{t.currentTarget.id==="next"?this.currentPage=Math.min(this.currentPage+1,this.pageCount):t.currentTarget.id==="prev"&&(this.currentPage=Math.max(this.currentPage-1,1)),r("page",this.currentPage.toString()),this.render()})}render(){let e="",t="";for(let n=1;n<=this.pageCount;n++)n===this.currentPage?t+=`<button id="${n}" class="page-pagination__button page-pagination__button_active">${n}</button>`:n===1||n===this.pageCount||n===this.currentPage-1||n===this.currentPage+1?t+=`<button id="${n}" class="page-pagination__button">${n}</button>`:(n===this.currentPage-2||n===this.currentPage+2)&&(t+=n===this.currentPage-2&&n>2?'<p class="page-pagination__elips">...</p>':"");this.pageCount>0&&(e='<div class="teams-list-section__teams-list-pagination page-pagination">',e+=this.currentPage>1?`<button id="prev" class="page-pagination__button-nav page-pagination__button-prev">
          <svg class="page-pagination__button-prev-icon">
            <use xlink:href="${i}#arrow-left"></use>
          </svg>
        </button>`:`<button id="prev" disabled class="page-pagination__button-nav page-pagination__button-prev">
          <svg class="page-pagination__button-prev-icon">
            <use xlink:href="${i}#arrow-left"></use>
          </svg>
        </button>`,e+=t,e+=this.currentPage<this.pageCount?`<button id="next" class="page-pagination__button-nav page-pagination__button-next">
          <svg class="page-pagination__button-next-icon">
            <use xlink:href="${i}#arrow-right"></use>
          </svg>
        </button>`:`<button id="next" disabled class="page-pagination__button-nav page-pagination__button-next">
          <svg class="page-pagination__button-next-icon">
            <use xlink:href="${i}#arrow-right"></use>
          </svg>
        </button>`,e+="</div>");const a=document.getElementById(this.containerId);a&&(a.innerHTML=e)}}class h{containerId;tournaments;swiper=null;constructor(e,t){this.containerId=e,this.tournaments=t,this.render(),this.initializeSwiper()}render(){const e=this.tournaments.map(a=>`<div class="tournaments-swiper__swiper-slide swiper-slide tournaments-slide">
                <div class="tournaments-slide__img">
                    <img src="${a.imageUrl}" alt="${a.title}" />
                </div>
                <div class="tournaments-slide__sidebar">
                    <h2 class="tournaments-slide__title">${a.title}</h2>
                    <p class="tournaments-slide__description">${a.description}</p>
                    <p class="tournaments-slide__date">${a.date}</p>
                    <p class="tournaments-slide__commands-title">${a.teams.length} команд зарегистрированы:</p>
                    <div class="tournaments-slide__commands">
                        <div class="tournaments-slide__commands-list">
                            ${a.teams.map(n=>`<a class="tournaments-slide__commands-item" href="#">
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
                            ${e}
                        </div>
                    </div>
                    <div class="tournaments-swiper__button-next">
                        <svg class="tournaments-swiper__button-next-icon">
              <use xlink:href="${i}#arrow-right"></use>
            </svg>
                    </div>
                </div>
            `)}initializeSwiper(){this.swiper=new g(".swiper",{modules:[p],loop:!0,navigation:{nextEl:".tournaments-swiper__button-next",prevEl:".tournaments-swiper__button-prev"}})}}const b=[{id:"tournament1",title:"Major Stockholm 2021",description:"Призовой фонд 200000 $",date:"23 Окт - 7 Ноя",teams:[{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"},{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"},{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"},{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"},{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"}],imageUrl:"./src/images/major.png"},{id:"tournament1",title:"Major Stockholm 2021",description:"Призовой фонд 200000 $",date:"23 Окт - 7 Ноя",teams:[{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"},{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"},{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"},{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"},{name:"JJJASON_Team",rank:1769,avatar:"./src/images/teamAva.png"}],imageUrl:"./src/images/major.png"}];new h("tournament-container",b);new _("tournaments-cards-block",[{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"},{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"},{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"},{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"},{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"},{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"},{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"},{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"},{id:"tournament1",imageUrl:"./src/images/tournamentCard.png",date:"23 Окт - Начало в 14:00",name:"NAC Sport Championship 2020",prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"}]);const o={pagination:{pageCount:4}},m=1;new v("page-pagination",o,m);new c(o,m);new d("tabs");new u("tabs");
