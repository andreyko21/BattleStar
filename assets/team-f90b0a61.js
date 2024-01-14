import{$ as n}from"./jquery-62de4648.js";import{H as l,g as m,F as c,I as d,r as _,S as i}from"./header-4ffbce13.js";import{A as p}from"./sidebar-1114d44a.js";import{U as u}from"./default-avatar-dee36e0e.js";class g{header;teamData;sidebar;teamId;game;constructor(t,a,s){this.header=new l(t),this.sidebar=new p(a,s),this.teamId=m("id")||"",this.game=m("game")||""}async init(){try{if(!this.teamId)throw new Error("Team ID is not specified in the URL");const t=this.game==="dota2"?c:d;if(this.teamData=await _("https://battle-star-app.onrender.com/graphql",t,{id:this.teamId}),!this.teamData||!this.teamData[`${this.game}Team`]?.data&&!this.teamData.cs2Team.data){window.location.href="/teams.html";return}const a=new h(this.teamData[`${this.game}Team`]?.data||this.teamData.cs2Team.data);n(".team-page").append(a.getItemTemplate());const s=document.getElementById("shareButton");s&&s.addEventListener("click",()=>{navigator.clipboard.writeText(window.location.href).then(()=>{alert("Ссылка скопирована в буфер обмена")}).catch(e=>console.error("Ошибка при копировании: ",e))})}catch(t){console.error(t)}}}n(document).ready(()=>{new g("#wrapper","wrapper","КОМАНДЫ").init()});class h{id;attributes;constructor(t){this.id=t.id||"",this.attributes=t.attributes||{}}getTemplate(){const t=this.attributes.Team||{};let a="";return(this.attributes.awards?.data||[]).forEach(e=>{a+=`<img class="team-item__award-img" src="${e.attributes.logo.data[0].attributes.url}" alt="award">`}),`<a href="/team.html?id=${this.id}" class="teams-list__team-item team-item">
      <div class="team-item__img-block">
        <img class="team-item__img" src="${t.logo?.data.attributes.url}" alt="${t.logo?.data.attributes.alternativeText||"logo"}">
      </div>
      <p class="team-item__name">${t.name||"Team Name"}</p>
      <p class="team-item__info team-item__rating">${t.rating||0}</p>
      <p class="team-item__info team-item__tournaments">${this.attributes.tournaments?.data.length||0}</p>
      <p class="team-item__info team-item__earned">${t.earned||0}</p>
      <p class="team-item__info team-item__participants">${this.attributes.players?.data.length||0}/15</p>
      <div class="team-item__awards">${a}</div>
    </a>`}getItemTemplate(){const t=this.attributes.Team[0]||{};let a="";return(this.attributes.awards?.data||[]).forEach(e=>{a+=`<img class="team-item__award-img" src="${e.attributes.logo.data[0].attributes.url}" alt="award">`}),`
      <div class="team-page__container">
        <div class="team-page__avatar">
          <img class="team-page__avatar-background" src="${t.logo?.data.attributes.url}" alt="${t.logo?.data.attributes.alternativeText||"logo"}" />
          <img src="${t.logo?.data.attributes.url}" alt="${t.logo?.data.attributes.alternativeText||"logo"}" />
        </div>
        <h1 class="team-page__name">${t.name||"Team Name"}</h1>
        <div class="team-page__awards">${a}</div>
        <p class="team-page__description">
          Значимость этих проблем настолько очевидна, что консультация с
          широким активом способствует подготовки и реализации позиций,
          занимаемых участниками в отношении поставленных задач
        </p>
        <div class="team-page__stats">
                      <div class="team-page__stats-info-item stats-info-item">
              <svg class="stats-info-item__icon">
                <use class="cup" xlink:href="${i}#cup"></use>
              </svg>
              <h2 class="stats-info-item__title">${t.victories_in_tournaments||0} победы</h2>
              <p class="stats-info-item__description">в турнирах</p>
            </div>

            <div class="team-page__stats-info-item stats-info-item">
              <svg class="stats-info-item__icon">
                <use
                  class="money"
                  xlink:href="${i}#money"
                ></use>
              </svg>
              <h2 class="stats-info-item__title">${t.earned} BS</h2>
              <p class="stats-info-item__description">Заработано</p>
            </div>
            <div class="team-page__stats-info-item stats-info-item">
              <svg class="stats-info-item__icon">
                <use
                  class="controller"
                  xlink:href="${i}#controller"
                ></use>
              </svg>
              <h2 class="stats-info-item__title">${t.matches_played|0} матчей</h2>
              <p class="stats-info-item__description">Сыграно</p>
            </div>
            <div class="team-page__stats-info-item stats-info-item">
              <svg class="stats-info-item__icon">
                <use
                  class="people"
                  xlink:href="${i}#people"
                ></use>
              </svg>
              <h2 class="stats-info-item__title">${this.attributes.players.data.length}/15</h2>
              <p class="stats-info-item__description">учасников</p>
            </div>

        </div>
      <div class="team-page__participants">
    <div class="team-page__participants-list">
        ${this.attributes.players.data.map(e=>{const o=e.attributes.user?.data?.attributes.avatar?.data?.attributes.url||u;return`<a href="/user.html?id=${e.attributes.user?.data?.id||"0"}" class="team-page__participants-user-avatar">
                        <img src="${o}" alt="user avatar" />
                    </a>`}).join("")}
    </div>
    <button class="team-page__participants-button">
        <svg class="stats-info-item__icon">
            <use xlink:href="${i}#arrow-left"></use>
        </svg>
    </button>
    <p class="team-page__participants-rank">Ранг: 1320</p>
</div>
        <div class="team-page__nav">
                      <button id="shareButton" class="team-page__nav-button">
              <svg class="stats-info-item__icon share">
                <use xlink:href="${i}#share"></use></svg
              >Поделиться
            </button>

        </div>
      </div>`}}
