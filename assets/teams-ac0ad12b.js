import{$ as o}from"./jquery-e7e79cb6.js";import{H as v,g as c,s as T,v as g,y,z as $,A as w,B as b,D as A,E as D,r as S,S as k}from"./header-fd6cb8f8.js";import{A as C}from"./sidebar-8f810a63.js";import{T as z}from"./tabs-create-b6236109.js";import{B as G}from"./tabs-9af9593e.js";import{L}from"./lava-lamp-63313dfc.js";class q{userId=null;tabInitialized={openTeams:!1,topTeams:!1,myTeams:!1};constructor(){this.fetchAndSetUserId().then(()=>{const t=c("game"),i=c("teams-filters")||"myTeams";this.initializeTabs(t,i)})}async fetchAndSetUserId(){try{const t=await this.getRequest(g);t&&t.me&&t.me.id&&(this.userId=t.me.id)}catch(t){console.error("Error fetching user info:",t)}}initializeTabs(t,i){["openTeams","topTeams","myTeams"].forEach(e=>{this.initializeTabContent(e),this.tabInitialized[e]=!0,o(`#${e}-tab`).on("click",()=>{this.fetchAndDisplayTeams(e,t)}),this.fetchAndDisplayTeams(e,t)})}async fetchAndDisplayTeams(t,i){const a=o(`#${t}-content .sort__select`).val(),e=o(`#${t}-content .input__search-input`).val(),s=await this.fetchTeamsData(a,e,i,t);this.displayTeams(s,t)}initializeTabContent(t){const a=`
    <div class="teams-section">
      <div class="teams-section__header">
        <p class="teams-section__header-title">${{openTeams:"Открытые команды",topTeams:"Топ команд",myTeams:"Мои команды"}[t]}</p>
        <div class="teams-section__header-sort sort">
          <label for="${t}-sort-select" class="sort__title">Сортировать:</label>
          <div class="sort__options" id="${t}-sorting">
            <select class="sort__select" id="${t}-sort-select">
              <option value="Team.name:asc">По названию(Asc)</option>
              <option value="Team.name:desc">По названию(Desc)</option>
              <option value="Team.rating:asc">По рейтингу(Asc)</option>
              <option value="Team.rating:desc">По рейтингу(Desc)</option>
            </select>
          </div>
        </div>
        <div class="teams-section__header-search-block search-block">
          <label for="${t}-search-input" class="input__search">
            <button class="input__search-button">
              <svg class="input__search-icon">
                <use xlink:href="${k}#search"></use>
              </svg>
            </button>
            <input class="input__search-input" type="text" id="${t}-search-input" name="${t}-search-input" placeholder="Поиск по командам"/>
          </label>
        </div>
      </div>
      <div class="teams-section__list"></div>
      <div class="teams-section__footer"></div>
    </div>`;o(`#${t}-content`).append(a),o(`#${t}-content .sort__select`).on("change",e=>{const s=o(e.target).val(),n=c("game");this.fetchTeamsData(s,"",n,t).then(r=>{this.displayTeams(r,t)})}),o(`#${t}-content .input__search-input`).on("input",this.debounce(e=>{const n=e.target.value,r=o(`#${t}-content .sort__select`).val(),m=c("game");this.fetchTeamsData(r,n,m,t).then(l=>{this.displayTeams(l,t)})},300,!1))}async fetchTeamsData(t,i,a,e){try{let s,n={sorting:[t],filtering:i,page:1,pageSize:10,id:this.userId};e==="topTeams"?s=a==="dota2"?y:$:e==="myTeams"?s=a==="dota2"?w:b:s=a==="dota2"?A:D;const r=await this.getRequest(s,n),m=a==="dota2"?r.dota2Teams?.data:r.cs2Teams?.data;return m?m.map(l=>{const p=l.attributes.Team[0],d=p.logo.data.attributes.url,u=l.attributes.players.data.length,h=l.attributes.tournaments.data.length,_=l.attributes.awards.data,f=_.length>0?_[0].attributes.logo.data.attributes.url:null;return{id:l.id,link:"#",avatar:d,name:p.name,rating:String(p.rating),tournaments:String(h),earned:String(p.earned),members:`${String(u)}/15`,award:f}}):[]}catch(s){throw console.error("Error in fetchTeamsData:",s),s}}displayTeams(t,i){const a=`#${i}-content .teams-section__list`;o(a).empty(),t.forEach(e=>{o(a).append(this.createTeamListItem(e))})}createTeamListItem(t){const i=c("game"),a=t.award?`<div class="team-list__team-awards-item"><img src="${t.award}" alt="award" /></div>`:"";return`<a class="team-list__team" href="/team.html?id=${t.id}&game=${i}">
              <div class="team-list__team-avatar">
                <img src="${t.avatar}" alt="award" />
              </div>
              <p class="team-list__team-name">${t.name}</p>
              <div class="team-list__team-info team-list__team-rating">
                <p class="team-list__team-info-title team-list__team-rating-title">Рейтинг</p>
                <p class="team-list__team-info-value team-list__team-rating-value">${t.rating}</p>
              </div>
              <div class="team-list__team-info team-list__team-tournaments">
                <p class="team-list__team-info-title team-list__team-tournaments-title">Турниров</p>
                <p class="team-list__team-info-value team-list__team-tournaments-value">${t.tournaments}</p>
              </div>
              <div class="team-list__team-info team-list__team-earned">
                <p class="team-list__team-info-title team-list__team-earned-title">Выиграно</p>
                <p class="team-list__team-info-value team-list__team-earned-value">${t.earned}</p>
              </div>
              <div class="team-list__team-info team-list__team-earned">
                <p class="team-list__team-info-title team-list__team-earned-title">Участников</p>
                <p class="team-list__team-info-value team-list__team-earned-value">${t.members}</p>
              </div>
              <div class="team-list__team-awards">${a}</div>
            </a>`}debounce(t,i,a){let e;return(...s)=>{const n=this,r=()=>{e=void 0,a||t.apply(n,s)},m=a&&e===void 0;window.clearTimeout(e),e=window.setTimeout(r,i),m&&t.apply(n,s)}}async getRequest(t,i={},a="token",e="https://battle-star-app.onrender.com/graphql"){const n=(r=>{const l=`; ${document.cookie}`.split(`; ${r}=`);return l.length===2?l.pop()?.split(";").shift()??null:null})(a);return n?S(e,t,i,{Authorization:`Bearer ${n}`}):(window.location.href="/sign.html",Promise.reject(new Error("No token found")))}}o(document).ready(()=>{new v("#wrapper"),new C("wrapper","КОМАНДЫ"),c("teams-filters")||T("teams-filters","openTeams"),new z("teams-page__container","teams-filters",[["myTeams","МОИ КОМАНДЫ"],["openTeams","ОТКРЫТЫЕ КОМАНДЫ"],["topTeams","ТОП КОМАНД"]]),new G("teams-filters"),new L("teams-filters"),new q});
