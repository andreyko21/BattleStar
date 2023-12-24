import"./modulepreload-polyfill-3cfb730f.js";import{$ as o}from"./jquery-ab814638.js";import{S as _}from"./swiper-core-75041738.js";import{i as b,N as v}from"./navigation-e1268361.js";/* empty css                      */import{S as i}from"./sprite-3002caef.js";import{g as c,s as u}from"./windowLocation-a7eb2864.js";import{B as f,L as w}from"./lava-lamp-c8a88e5f.js";import{k as P,l as A,r as h,m as k,n as x}from"./queries.graphql.d-beea0c25.js";import{T as $}from"./tabs-create-b6236109.js";const T="data:image/webp;base64,UklGRtwCAABXRUJQVlA4INACAAAQDgCdASoyADMAPpE+nUsloyKhqBQJWLASCWgAvZGN1l5MlJYDcETbw7gDeRt5pfhee2enPYGIEDQsw1zAHE0qvQKJhGwB10gnzJHilbOD6J4XLxI+wU5r0742A6oTzn4T//ZTegj6zWG11gbGd82yrEUu/mUvjFfgAP74Vhk+kU0OLM5L4X8STcVfF0aNH1URvyhIlmrdN1bB5kgtZFj48P5Qecli2b8U2+9P3p84yJl2qp+YccbqObeNnFltR1AlPaMovjOZ2Ow5K30RcNQskANmADLj6iWUrWtzlNsDEcW7uuMUEjtz6y1suLc9vHsaDUGRpf9aPvZxFVHi8PXKQd7uXoWKqxvx8vJJ6XVInQoyB/0icxg/x8AAdsFaNqqHfBGpiApsKil320S4cZRzisPEQZLCqeUmAP/qv1QTUrOtfyRJMLlkKgfXADE80dxwbIog2r5MCMN0PtTham9Nba1RvLkgLuQVLL+GUIMJc/y7LVbifUqf2NMAAGn7q/bfh35nL0PiV6Y+S34fX2edhge3XSoqjqyD/3pFBebSA4HG2t8339Vxb1GpxBj6+hsHqh31Pk9IB1gEY9r/n/ijF/fUcwnUcQqrLqj5mEIYp7jy77t/nc8ElMJLkrT/6TLE6s4kVVvTQqu2ZBQWhR19e3o6hBcZbIj/9lL7bE6yqWya1Dh6aDMQhN2uU/Pkf/L8wkXkxJ5Dox0BqccMtsxDLnipglucAdRbz1Ux8LKhB6AY545vnmG1eBBOamP0TgFyqoqZnkNh3KApvAwbBzLxlAYMVfyANsP/IMdeQguGIco+hp40L/Agvq0z7mg1dw9qIkaLpV/bPMPB6PstFAd3GlNzLEYn3LjKRICqlWOa44940dfCTEMADaM1C+sPxwQ5Apt+ehcKMctWMkOO5H0i0Vg2H3gG1IqXXTNUAviQKwrbs0ib6/qKtQwH4AAAAAA=",C="data:image/webp;base64,UklGRnwCAABXRUJQVlA4WAoAAAAQAAAAJwAAKAAAQUxQSFMBAAABkELbtrFt57OVjPvZ9cvstm3b+m2kPxmV2ZXJtm2fDwc3/X+NCEZu2ziSNOU02PqJPYJrDVD9x/YIDgUGzJILQMmPR+g1vUPRB+/wP+Wz8XcilzOIfd8shgFzDyV3AbFULwcAXFdbpXLZGZYt+4iCe2i5arthRXPHYouqc7Ci+2Y91G0AYss7KUvepdPMPSW08K2h+W6XDrMDrwYCtf25sLUDTzqwzE0htHMnA5z16zqNipPA7fyokIGahUJR90TuwT2NL2lC3tv/CtQynkhXbECw5y0ngJEgdTdAytxl7GCAkTriIOWzjX0kHBC328SikSoACXeFzlU4cjJ0lC2u59QxYpGidp6zmXGQEkIfq9DPMMYJ9b8MUbeX/SlXUPP6csphhyk/UC/AYcXEp/xCZlcuIxwtfHeP+E76clbEf7x/ba7EyldzdXf1azFWegOA0TQAVlA4IAIBAADwBwCdASooACkAPpE+nEqloyKhpzgJILASCWwAtRroPHeq8XPQBdnPPhfsB8Ev7a/rl7QAXZl2cfgFepna8rvF+qhx1jOim8AA/hMf/KV0kpJWY5H2RUB//ewX72C/ewX2dH3eARphOv5569NfquY37o8LDS9Am8dhyGwrGeOhmu8umsqcJ2sygVjcmB2v3NwwVYbECMleu1jasVlUsZpUk8G3jFlB8e/HNwfaK1b+8kgA0n/Q4LzFE7voj2/TZ5+8FtAnp5fHhjMz7YZgmbx9oYBCfxsmm9PNCiYYHIiJZ+mvZiVLSOTp7rfNn6KqkWk2XEcUbHt+Pyd/QrDtSOqHAAA=";class L{container;games;constructor(t){this.container=o(t),this.games=[{name:"CS:GO",image:T,dataGame:"cs2"},{name:"DOTA 2",image:C,dataGame:"dota2"}],this.init()}init(){this.renderDropdown(),this.addEventListeners(),this.setInitialGameSelection()}renderDropdown(){const t=`
      <div class="dropdown__game-select">
        <div class="dropdown__game-current">
          <img class="dropdown__game-img" src="${this.games[0].image}" alt="">
          <p class="dropdown__game-name">${this.games[0].name}</p>
        </div>
        <div class="dropdown__game-arrow">
          <svg>
            <use xlink:href="${i}#arrow-game"></use>
          </svg>
        </div>
        <ul class="dropdown__game-list">
          ${this.games.map(e=>`
            <li class="dropdown__game-item" data-game="${e.dataGame}">
              <img class="dropdown__game-icon" src="${e.image}" alt="">
              ${e.name}
            </li>
          `).join("")}
        </ul>
      </div>
    `;this.container.html(t)}addEventListeners(){const t=this.container.find(".dropdown__game-arrow"),e=this.container.find(".dropdown__game-list"),a=this.container.find(".dropdown__game-item");t.on("click",()=>e.toggleClass("_show")),a.on("click",n=>{this.updateGameSelection(o(n.currentTarget)),window.location.reload()})}updateGameSelection(t){const e=t.text().trim(),a=t.find("img").attr("src"),n=this.container.find(".dropdown__game-img"),d=this.container.find(".dropdown__game-name");n.attr("src",a),d.text(e),this.setLocateParam("game",t.data("game"))}setLocateParam(t,e){const a=new URLSearchParams(window.location.search);a.set(t,e),window.history.replaceState(null,"","?"+a.toString())}setInitialGameSelection(){const t=this.getLocateParam("game");if(t){const e=this.container.find(`.dropdown__game-item[data-game="${t}"]`);e.length&&this.updateGameSelection(e)}}getLocateParam(t){return new URLSearchParams(window.location.search).get(t)}}const I="/assets/honeycombs-065ef4c7.png";class G{containerId;tournaments;constructor(t,e){this.containerId=t,this.tournaments=e,this.render()}render(){const t=c("game")??"cs2",e=this.tournaments.map(n=>`
          <a class="tournaments-card" href="/tournament.html?id=${n.id}&game=${t}">
            <div class="tournaments-card__img-block">
              <img src="${n.imageUrl}" alt="tournamentCard" />
            </div>
            <div class="tournaments-card__info">
              <div class="tournaments-card__backgound-img-block">
                <img src="${I}" alt="" />
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
          </a>`).join(""),a=document.getElementById(this.containerId);a&&(a.innerHTML=e)}}class U{containerId;currentPage;pageCount;constructor(t,e,a){this.containerId=t,this.currentPage=a,this.pageCount=e.pagination.pageCount,this.bindEvents(),this.render()}bindEvents(){const t=o(`#${this.containerId}`);t.on("click",".page-pagination__button",e=>{const a=e.currentTarget.id;u("page",a),this.currentPage=parseInt(a),this.render()}),t.on("click",".page-pagination__button-nav",e=>{e.currentTarget.id==="next"?this.currentPage=Math.min(this.currentPage+1,this.pageCount):e.currentTarget.id==="prev"&&(this.currentPage=Math.max(this.currentPage-1,1)),u("page",this.currentPage.toString()),this.render()})}render(){let t="",e="";for(let n=1;n<=this.pageCount;n++)n===this.currentPage?e+=`<button id="${n}" class="page-pagination__button page-pagination__button_active">${n}</button>`:n===1||n===this.pageCount||n===this.currentPage-1||n===this.currentPage+1?e+=`<button id="${n}" class="page-pagination__button">${n}</button>`:(n===this.currentPage-2||n===this.currentPage+2)&&(e+=n===this.currentPage-2&&n>2?'<p class="page-pagination__elips">...</p>':"");this.pageCount>0&&(t='<div class="teams-list-section__teams-list-pagination page-pagination">',t+=this.currentPage>1?`<button id="prev" class="page-pagination__button-nav page-pagination__button-prev">
          <svg class="page-pagination__button-prev-icon">
            <use xlink:href="${i}#arrow-left"></use>
          </svg>
        </button>`:`<button id="prev" disabled class="page-pagination__button-nav page-pagination__button-prev">
          <svg class="page-pagination__button-prev-icon">
            <use xlink:href="${i}#arrow-left"></use>
          </svg>
        </button>`,t+=e,t+=this.currentPage<this.pageCount?`<button id="next" class="page-pagination__button-nav page-pagination__button-next">
          <svg class="page-pagination__button-next-icon">
            <use xlink:href="${i}#arrow-right"></use>
          </svg>
        </button>`:`<button id="next" disabled class="page-pagination__button-nav page-pagination__button-next">
          <svg class="page-pagination__button-next-icon">
            <use xlink:href="${i}#arrow-right"></use>
          </svg>
        </button>`,t+="</div>");const a=document.getElementById(this.containerId);a&&(a.innerHTML=t)}}class D{currentPage;pageCount;constructor(t,e){this.currentPage=e,this.pageCount=t.pagination.pageCount}bindEvents(t){t.on("click",".page-pagination__button",e=>{u("page",e.currentTarget.id)}),t.on("click",".page-pagination__button-nav",e=>{e.currentTarget.id=="next"?this.currentPage++:e.currentTarget.id=="prev"&&this.currentPage--,this.currentPage>this.pageCount?this.currentPage=this.pageCount:this.currentPage<1&&(this.currentPage=1),u("page",this.currentPage)})}render(){let t="",e="";for(let a=1;a<=this.pageCount;a++)a==this.currentPage?e+=`<button id="${a}" class="page-pagination__button page-pagination__button_active">${a}</button>`:a==1||a==this.pageCount||a==this.currentPage-1||a==this.currentPage+1?e+=`<button id="${a}" class="page-pagination__button">${a}</button>`:(a==this.currentPage-2||a==this.currentPage+2)&&(e+='<p class="page-pagination__elips">...</p>');return this.pageCount>0&&(t+='<div class="teams-list-section__teams-list-pagination page-pagination">',this.currentPage>1?t+=`<button id="prev" class="page-pagination__button-nav page-pagination__button-prev">
    <svg class="page-pagination__button-prev-icon">
      <use xlink:href="${i}#arrow-left"></use>
    </svg>
  </button>`:t+=`<button id="prev" disabled class="page-pagination__button-nav page-pagination__button-prev">
    <svg class="page-pagination__button-prev-icon">
      <use xlink:href="${i}#arrow-left"></use>
    </svg>
  </button>`,t+=e,this.currentPage<this.pageCount?t+=`<button id="next" class="page-pagination__button-nav page-pagination__button-next">
    <svg class="page-pagination__button-next-icon">
      <use xlink:href="${i}#arrow-right"></use>
    </svg>
  </button>`:t+=`<button id="next" disabled class="page-pagination__button-nav page-pagination__button-next">
    <svg class="page-pagination__button-next-icon">
      <use xlink:href="${i}#arrow-right"></use>
    </svg>
  </button>`,t+="</div>"),t}}class m{container;userName;balance;spritePath;constructor(t,e,a,n="src/images/sprite.svg"){this.container=o(t),this.userName=e,this.balance=a,this.spritePath=n,this.container.length?this.render():console.error("Container not found")}render(){const t=this.userName?`

        <div class="header__balance">
          <h2 class="header__balance-title">Баланс</h2>
          <button class="header__balance-button">
            <svg class="header__balance-button-icon">
              <use xlink:href="${this.spritePath}#plus-box"></use>
            </svg>
          </button>
          <div class="header__balance-value">${this.balance} BS</div>
        </div>
        <div class="header__messages">
          <button class="header__messages-button">
            <svg class="header__messages-button-icon">
              <use xlink:href="${this.spritePath}#message"></use>
            </svg>
          </button>
        </div>
        <div class="header__notification">
          <button class="header__notification-button">
            <svg class="header__notification-button-icon">
              <use xlink:href="${this.spritePath}#bell"></use>
            </svg>
          </button>
        </div>
        <div class="header__user-navigation" id="header__user-navigation">
          <div class="header__user">
            <div class="header__user-info">
              <p class="header__user-info-name">${this.userName}</p>
            </div>
            <button class="header__user-info-button">
              <svg>
                <use xlink:href="${this.spritePath}#arrow-down"></use>
              </svg>
            </button>
          </div>
        </div>
    `:`<div class="header__user">
    <button class="header__user-button-auth">
              Войти в аккаунт
            </button>
    </div>
    `;this.container.html(t)}}class E{container;selectGame;userNav;constructor(t){this.container=o(t),this.render(),this.selectGame=new L(".header__select-game"),this.userNav=new m(".header__user-block"),this.init()}async init(){b();try{const t=await q("token");if(t){const e=await p(P,{},t),a=await p(A,{id:e.me.id},t);e&&e.me?this.userNav=new m(".header__user-block",e.me.username,a.usersPermissionsUser.data.attributes.balance??0):console.error("User info is undefined")}else console.error("Token is null or undefined")}catch(t){console.error("Error in init:",t)}}render(){this.container.append(`
        <header class="header">
  <div class="header__select-game">
  </div>

  <label for="headerSearch" class="header__search-block">
    <svg class="header__search-block-icon">
      <use xlink:href="src/images/sprite.svg#search"></use>
    </svg>
    <input
      class="header__search-block-input"
      id="headerSearch"
      type="text"
      placeholder="Поиск"
    />
  </label>
      <div class="header__user-block">
          
      </div>
  </div>
</header>
        `)}}function q(s){const e=`; ${document.cookie}`.split(`; ${s}=`);return e.length===2?e.pop().split(";").shift():null}async function p(s,t={},e,a="https://battle-star-app.onrender.com/graphql"){try{const n=await h(a,s,t,{Authorization:`Bearer ${e}`});if(n)return console.log("Response:",n),n;throw new Error("No response data received")}catch(n){throw console.error("Error in getRequest:",n),n}}class y{containerId;tournaments;swiper=null;constructor(t,e){this.containerId=t,this.tournaments=e,this.render(),this.initializeSwiper()}render(){const t=this.tournaments.map(a=>`<div class="tournaments-swiper__swiper-slide swiper-slide tournaments-slide">
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
            </div>`).join(""),e=document.getElementById(this.containerId);e&&(e.innerHTML=`
                <div class="tournament-page__tournaments-swiper-container">
                    <div class="tournaments-swiper__button-prev">
                        <svg class="tournaments-swiper__button-next-icon">
              <use xlink:href="${i}#arrow-left"></use>
            </svg>
                    </div>
                    <div class="tournaments-swiper swiper">
                        <div class="tournaments-swiper__swiper-wrapper swiper-wrapper">
                            ${t}
                        </div>
                    </div>
                    <div class="tournaments-swiper__button-next">
                        <svg class="tournaments-swiper__button-next-icon">
              <use xlink:href="${i}#arrow-right"></use>
            </svg>
                    </div>
                </div>
            `)}initializeSwiper(){this.swiper=new _(".swiper",{modules:[v],loop:!0,navigation:{nextEl:".tournaments-swiper__button-next",prevEl:".tournaments-swiper__button-prev"}})}}o(document).ready(async()=>{let s,t,e,a;c("game")=="dota2"?s=k:s=x,c("page")?a=c("page"):a=1,t=await h("https://battle-star-app.onrender.com/graphql",s,{currentPage:a,pageSize:9},{Authorization:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912"}),t.dota2Tournaments?e=t.dota2Tournaments:e=t.cs2Tournaments,new U("page-pagination",e.meta,1),new D(e.meta,1),new G("tournaments-cards-block",[...e.data.map(r=>({id:r.id,imageUrl:r.attributes.Tournament.logo.data.attributes.url,date:`${g(r.attributes.Tournament.startDate)} - Начало в ${r.attributes.Tournament.time.split(":").slice(0,2).join(":")}`,name:r.attributes?.Tournament?.name,prize:"200000 $",minRating:"1200+",regionLimit:"Весь мир"}))]);const d=[...e.data.map(r=>({id:r.id,title:r.attributes?.Tournament?.name,description:r.attributes.Tournament.description,imageUrl:r.attributes.Tournament.logo.data.attributes.url,date:`${g(r.attributes.Tournament.startDate)} - ${g(r.attributes.Tournament.endDate)}`,teams:r.attributes.teams.data.map(l=>({name:l.attributes.Team.name,rank:l.attributes.Team.rating,avatar:l.attributes.Team.logo.data.attributes.url}))}))];new y("tournament-container",d)});function g(s){const t=["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],e=new Date(s),a=e.getDate(),n=e.getMonth();return a+" "+t[n]}new $("tournaments-nav__tabs","match-page__filters",[["amateurTournaments","ЛЮБИТЕЛЬСКИЕ ТУРНИРЫ"],["profesionalTournaments","ПРОФЕССИОНАЛЬНЫЕ ТУРНИРЫ"]]);o("#tournamentGrid-content").addClass("tabs-block__content-container_active");new f("match-page__filters");new w("match-page__filters");o(document).ready(()=>{new E("#wrapper"),o(".tournaments-nav__create-button").on("click",()=>{const s=c("game");s==null||s==null?window.location.href='/createTournament.html?game="cs2"':window.location.href=`/createTournament.html?game="${s}"`})});
