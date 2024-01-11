import{$ as m}from"./jquery-e7e79cb6.js";import{H as c,g as r,F as l,I as n,r as g}from"./header-f05d9198.js";import{A as p}from"./sidebar-1d496e08.js";class o{id;attributes;constructor(a){this.id=a.id||"",this.attributes=a.attributes||{}}getTemplate(){const a=this.attributes.Team||{};let t="";return(this.attributes.awards?.data||[]).forEach(e=>{t+=`<img class="team-item__award-img" src="${e.attributes.logo.data[0].attributes.url}" alt="award">`}),`<a href="/team.html?id=${this.id}" class="teams-list__team-item team-item">
      <div class="team-item__img-block">
        <img class="team-item__img" src="${a.logo?.data.attributes.url}" alt="${a.logo?.data.attributes.alternativeText||"logo"}">
      </div>
      <p class="team-item__name">${a.name||"Team Name"}</p>
      <p class="team-item__info team-item__rating">${a.rating||0}</p>
      <p class="team-item__info team-item__tournaments">${this.attributes.tournaments?.data.length||0}</p>
      <p class="team-item__info team-item__earned">${a.earned||0}</p>
      <p class="team-item__info team-item__participants">${this.attributes.players?.data.length||0}/15</p>
      <div class="team-item__awards">${t}</div>
    </a>`}getItemTemplate(){const a=this.attributes.Team||{};let t="";return(this.attributes.awards?.data||[]).forEach(e=>{t+=`<img class="team-item__award-img" src="${e.attributes.logo.data[0].attributes.url}" alt="award">`}),`
      <div class="team-page__container">
        <div class="team-page__avatar">
          <img class="team-page__avatar-background" src="${a.logo?.data.attributes.url}" alt="${a.logo?.data.attributes.alternativeText||"logo"}" />
          <img src="${a.logo?.data.attributes.url}" alt="${a.logo?.data.attributes.alternativeText||"logo"}" />
        </div>
        <h1 class="team-page__name">${a.name||"Team Name"}</h1>
        <div class="team-page__awards">${t}</div>
        <p class="team-page__description">
          Значимость этих проблем настолько очевидна, что консультация с
          широким активом способствует подготовки и реализации позиций,
          занимаемых участниками в отношении поставленных задач
        </p>
        <div class="team-page__stats">
                      <div class="team-page__stats-info-item stats-info-item">
              <svg class="stats-info-item__icon">
                <use class="cup" xlink:href="src/images/sprite.svg#cup"></use>
              </svg>
              <h2 class="stats-info-item__title">${a.victories_in_tournaments||0} победы</h2>
              <p class="stats-info-item__description">в турнирах</p>
            </div>

            <div class="team-page__stats-info-item stats-info-item">
              <svg class="stats-info-item__icon">
                <use
                  class="money"
                  xlink:href="src/images/sprite.svg#money"
                ></use>
              </svg>
              <h2 class="stats-info-item__title">${a.earned} BS</h2>
              <p class="stats-info-item__description">Заработано</p>
            </div>
            <div class="team-page__stats-info-item stats-info-item">
              <svg class="stats-info-item__icon">
                <use
                  class="controller"
                  xlink:href="src/images/sprite.svg#controller"
                ></use>
              </svg>
              <h2 class="stats-info-item__title">${a.matches_played|0} матчей</h2>
              <p class="stats-info-item__description">Сыграно</p>
            </div>
            <div class="team-page__stats-info-item stats-info-item">
              <svg class="stats-info-item__icon">
                <use
                  class="people"
                  xlink:href="src/images/sprite.svg#people"
                ></use>
              </svg>
              <h2 class="stats-info-item__title">${this.attributes.players.data.length}/15</h2>
              <p class="stats-info-item__description">учасников</p>
            </div>

        </div>
        <div class="team-page__participants">
                      <div class="team-page__participants-list">
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
              <div class="team-page__participants-user-avatar">
                <img src="./src/images/user.svg" alt="" />
              </div>
            </div>
            <button class="team-page__participants-button">
              <svg class="stats-info-item__icon">
                <use xlink:href="src/images/sprite.svg#arrow-left"></use>
              </svg>
            </button>
            <p class="team-page__participants-rank">Ранг: 1320</p>

        </div>
        <div class="team-page__nav">
                      <button class="team-page__nav-button">
              <svg class="stats-info-item__icon">
                <use xlink:href="src/images/sprite.svg#share"></use></svg
              >Поделиться
            </button>

        </div>
      </div>`}}class _{header;teamData;sidebar;teamId;game;constructor(a,t,s){this.header=new c(a),this.sidebar=new p(t,s),this.teamId=r("id")||"",this.game=r("game")||""}async init(){try{if(!this.teamId)throw new Error("Team ID is not specified in the URL");const a=this.game==="dota2"?l:n;if(this.teamData=await g("https://battle-star-app.onrender.com/graphql",a,{id:this.teamId}),!this.teamData||!this.teamData[`${this.game}Team`]?.data&&!this.teamData.cs2Team.data){window.location.href="/teams.html";return}const t=new o(this.teamData[`${this.game}Team`]?.data||this.teamData.cs2Team.data);m(".team-page").append(t.getItemTemplate())}catch(a){console.error(a)}}}m(document).ready(()=>{new _("#wrapper","wrapper","КОМАНДЫ").init()});
