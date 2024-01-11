import{$ as r}from"./jquery-e7e79cb6.js";import{C as p}from"./auto-f06b4c5b.js";import{H as v,Q as h,r as g,S as i}from"./header-ec130f68.js";import{T as b}from"./tabs-create-b6236109.js";import{B as f}from"./tabs-296293aa.js";import{L as k}from"./lava-lamp-63313dfc.js";import{A as $}from"./sidebar-82114b68.js";const u="/assets/avatar-b55cc117.png",x="/assets/award-d2bab478.svg";class _{content;statistics;constructor(t,s){this.content=t,this.statistics=s,this.renderStatisticsCsRating()}renderStatisticsCsRating(){const t=`
   <div class="statistics__top-rating">
   <h1 class="statistics__top-rating-title">Ранг: <span>${this.statistics[0].rang}</span></h1>
   <div class="statistics__top-rating-rang">
      <img src="${this.statistics[0].rangImg}" alt="rang">
   </div>
</div>
<div class="statistics__top-info">
   <div class="statistics__top-info-tour">
      <svg>
         <use xlink:href="${i}#tourney"></use>
      </svg>
      <p class="statistics__top-info-text">${this.statistics[0].tour}<span>Турнира</span></p>
   </div>
   <div class="statistics__top-info-winrate">
      <svg>
         <use xlink:href="${i}#winrate"></use>
      </svg>
      <p class="statistics__top-info-text">${this.statistics[0].winrate} %<span>Винрейт</span></p>
   </div>
   <div class="statistics__top-info-time">
      <svg>
         <use xlink:href="${i}#time"></use>
      </svg>
      <p class="statistics__top-info-text">${this.statistics[0].time}<span>Часов в игре</span></p>
   </div>
</div>
   `,s=document.querySelector(this.content);s&&(s.innerHTML=t)}}const d=[{rang:1682,rangImg:"../../../src/images/rank.png",tour:2,winrate:60,time:200}];class w{content;statistics;constructor(t,s){this.content=t,this.statistics=s,this.renderStatisticsCs()}renderStatisticsCs(){const t=`
       <div class="statistics__cs-info">
       <h2 class="statistics__cs-title">Статистика</h2>
       <p class="statistics__cs-text">Матчей сыграно: <span>${this.statistics[0].matchesPlayed}</span></p>
       <p class="statistics__cs-text">Карт сыграно: <span>${this.statistics[0].mapsPlayed}</span></p>
       <p class="statistics__cs-text">Побед: <span>${this.statistics[0].win}</span></p>
       <p class="statistics__cs-text">Поражений: <span>${this.statistics[0].defeated}</span></p>
       <p class="statistics__cs-text">Убийств: <span>${this.statistics[0].kill}</span></p>
       <p class="statistics__cs-text">Смертей: <span>${this.statistics[0].death}</span></p>
    </div>
    <div class="statistics__cs-schedule">
       <h2 class="statistics__cs-title">Статистика</h2>
       <canvas class="statistics__cs-chart" id="cs"></canvas>
    </div>`,s=document.querySelector(this.content);s&&(s.innerHTML=t);let a=document.getElementById("cs");if(a){let o=a.getContext("2d");new p(o,{type:"bar",data:{labels:["Точность, %","Попадания в голову, %","Живучесть, %","Живучесть, %","Попадания в голову, %","Точность, %"],datasets:[{label:"Статистика",data:[95,51,80,68,60,30],backgroundColor:"#FAC704",borderColor:"#E1C65E",borderWidth:1,borderRadius:6,barThickness:20}]},options:{scales:{y:{min:0,max:100,beginAtZero:!0,ticks:{autoSkip:!0,maxRotation:0,color:"#fff",stepSize:25},grid:{color:"rgba(248, 248, 248, 0.20)"}},x:{ticks:{autoSkip:!0,maxRotation:0,color:"#fff"},grid:{color:"rgba(248, 248, 248, 0.20)"}}},plugins:{legend:{display:!1,labels:{font:{size:15,family:"Roboto",weight:500}}}}}})}console.log(a)}}const m=[{matchesPlayed:1023,mapsPlayed:23,win:798,defeated:225,kill:2304,death:1389}];class y{content;statistics;constructor(t,s){this.content=t,this.statistics=s,this.renderStatisticsDota()}renderStatisticsDota(){const t=`
        <div class="statistics__cs-info">
        <h2 class="statistics__cs-title">Статистика</h2>
        <p class="statistics__cs-text">Матчей сыграно: <span>${this.statistics[0].matchesPlayed}</span></p>
        <p class="statistics__cs-text">Карт сыграно: <span>${this.statistics[0].mapsPlayed}</span></p>
        <p class="statistics__cs-text">Побед: <span>${this.statistics[0].win}</span></p>
        <p class="statistics__cs-text">Поражений: <span>${this.statistics[0].defeated}</span></p>
        <p class="statistics__cs-text">Убийств: <span>${this.statistics[0].kill}</span></p>
        <p class="statistics__cs-text">Смертей: <span>${this.statistics[0].death}</span></p>
     </div>
     <div class="statistics__cs-schedule">
        <canvas class="statistics__cs-chart" id="dota" width="400" height="400"></canvas>
     </div>`,s=document.querySelector(this.content);s&&(s.innerHTML=t);let a=document.getElementById("dota"),o=a.getContext("2d");new p(o,{type:"radar",data:{labels:["Гибкость","Файтинг","Пушинг","Поддержка","Фарминг"],datasets:[{data:[10,10,10,10,10],backgroundColor:"rgba(250, 199, 4, 0.30)",borderColor:"#E1C65E",pointBackgroundColor:"#FAC704",pointBorderColor:"#FAC704",pointRadius:5}]},options:{scales:{r:{angleLines:{color:"#BFBFBF"},ticks:{display:!1,maxTicksLimit:7,font:{size:12,family:"Roboto",weight:500}},pointLabels:{font:{size:12,family:"Roboto",weight:500},padding:10},grid:{color:"#23252C"}}},plugins:{legend:{display:!1}},elements:{arc:{backgroundColor:"#fff"}}}}),console.log(a)}}class C{container;user;friendsData;teams;constructor(t,s,a,o){this.container=r(t),this.user=s,this.friendsData=a,this.teams=o,this.render(),this.attachMenuEventHandlers(),this.attachExpandButtonHandler()}render(){this.container.append(this.createSection())}createSection(){return`
      <section class="page__user-section user-section">
        ${this.createUserHeader()}
        ${this.createUserMain()}
        ${this.createUserFooter()}
      </section>`}createUserHeader(){return`
      <div class="user-section__header">
        <div class="user-section__information-block">
          <div class="user-section__information-block-avatar">
            <img src="${this.user.avatar}" alt="${this.user.name}" />
          </div>
          <p class="user-section__information-block-name">
            ${this.user.name}
            <span class="user-section__information-block-online-status ${this.user.isOnline?"user-section__information-block-online-status_online":""}">
              ${this.user.isOnline?"Онлайн":"Оффлайн"}
            </span>
          </p>
          <p class="user-section__information-block-first-game">в игре с ${this.user.firstGameDate}</p>
          <p class="user-section__information-block-biography">${this.user.biography}</p>
        </div>
        <div class="user-section__navigation-block">
          <button class="user-section__navigation-block-relationships-button">
            <svg class="user-section__navigation-block-relationships-button-icon">
              <use xlink:href="src/images/sprite.svg#addUser"></use>
            </svg>
            Добавить в друзья
          </button>
          <button class="user-section__navigation-block-message-button">
            <svg class="user-section__navigation-block-message-button-icon">
              <use xlink:href="src/images/sprite.svg#message"></use>
            </svg>
          </button>
          <button class="user-section__navigation-block-more-button">
            <svg class="user-section__navigation-block-more-button-icon">
              <use xlink:href="src/images/sprite.svg#more"></use>
            </svg>
          </button>
        </div>
      </div>`}createUserMain(){return`
      <div class="user-section__main">
        <div class="user-section__main-sidebar">
          ${this.createUserFriends("Друзья онлайн",this.friendsData.online)}
          ${this.createUserFriends("Все друзья",this.friendsData.all)}
        </div>
        <div class="user-section__main-statistics" id="main-statistics"></div>
      </div>`}createUserFriends(t,s){return`
      <div class="user-section__main-sidebar-friends">
        <div class="user-section__main-sidebar-friends-title">
          <p class="user-section__main-sidebar-friends-title-text">${t}</p>
          <hr />
          <p class="user-section__main-sidebar-friends-amount">(${s.length})</p>
        </div>
        <div class="user-section__main-sidebar-friends-list">
          ${s.map(a=>this.createUserFriendItem(a)).join("")}
        </div>
      </div>`}attachMenuEventHandlers(){this.container.find(".user").each((t,s)=>{const a=r(s);a.find(".user__setting-button").on("click",function(){a.find(".user-menu").toggle()}),a.on("mouseleave",function(){a.find(".user-menu").hide()})})}attachExpandButtonHandler(){this.container.on("click",".teams-info-block__more-teams-button",()=>{const t=this.container.find(".team-list__additional-teams");t.toggle();const s=t.is(":visible")?"Свернуть":"Развернуть";this.container.find(".teams-info-block__more-teams-button").text(s)})}createUserFriendItem(t){return`
      <div class="user">
        <div class="user__avatar">
          <div class="user__online-status ${t.onlineStatus}"></div>
          <img src="${t.avatar}" alt="${t.name}" />
        </div>
        <p class="user__name">${t.name}</p>
        <p class="user__status">${t.status}</p>
        <button class="user__setting-button">
          <svg class="friends-page__sidebar-setting-icon">
            <use xlink:href="${i}#more"></use>
          </svg>
        </button>
        <div class="user-menu" style="display: none">
          <button class="user-menu__button">
            <svg class="user-menu__button-icon">
              <use xlink:href="${i}#account"></use>
            </svg>
            Открыть профиль
          </button>
          <button class="user-menu__button">
            <svg class="user-menu__button-icon user-menu__button-icon_succes">
              <use xlink:href="${i}#addUser"></use>
            </svg>
            Добавить в друзья
          </button>
          <button class="user-menu__button">
            <svg class="user-menu__button-icon">
              <use xlink:href="${i}#share"></use>
            </svg>
            Поделиться профилем
          </button>
          <button class="user-menu__button">
            <svg class="user-menu__button-icon user-menu__button-icon_warn">
              <use xlink:href="${i}#flag"></use>
            </svg>
            Пожаловаться
          </button>
          <button class="user-menu__button">
            <svg class="user-menu__button-icon user-menu__button-icon_warn">
              <use xlink:href="${i}#blacklist"></use>
            </svg>
            Заблокировать
          </button>
        </div>
      </div>`}createUserFooter(){if(!this.teams||this.teams.length===0)return"";const t=this.teams.slice(0,3),s=this.createTeamsListHtml(t),a=this.teams.length>3?this.createMoreTeamsButton():"";return`
      <div class="user-section__footer">
        <div class="user-section__teams-info-block teams-info-block">
         
          <div class="teams-info-block__team-list team-list">
            ${s}
          </div>
          ${a}
        </div>
      </div>`}createTeamsListHtml(t){return t.map(s=>`
        <a class="team-list__team" href="#">
          ${this.createTeamListItem(s)}
        </a>`).join("")}createMoreTeamsButton(){return`
      <button class="teams-info-block__more-teams-button">
        Развернуть
        <svg class="teams-info-block__more-teams-button-icon">
          <use xlink:href="src/images/sprite.svg#arrow-down"></use>
        </svg>
      </button>`}createTeamListItem(t){return`
      <a class="team-list__team" href="${t.link}">
        <div class="team-list__team-avatar">
          <img src="${t.avatar}" alt="${t.name}" />
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
        <div class="team-list__team-awards">
          <div class="team-list__team-awards-item">
            <img src="${t.award}" alt="award" />
          </div>
        </div>
      </a>`}}r(document).ready(async()=>{new v("#wrapper"),new $("wrapper","ДРУЗЬЯ");try{const t=(await S(h,{id:43},"token","http://localhost:1337/graphql")).usersPermissionsUser.data.attributes,s={avatar:t.avatar.data?t.avatar.data.attributes.url:u,name:t.username,isOnline:t.online_status,firstGameDate:"January 1, 2020",biography:t.biography??""},a={online:t.my_friends.data.map(e=>({onlineStatus:e.attributes.online_status?"online":"offline",avatar:e.attributes.avatar.data?e.attributes.avatar.data.attributes.url:u,name:e.attributes.username,status:"Status unknown"})),all:[]},o=t.player.data.attributes.dota_2_teams.data.map(e=>{const c=e.attributes.Team[0];return{link:"#",avatar:c.logo.data.attributes.url,name:c.name,rating:c.rating,tournaments:c.victories_in_tournaments||0,earned:c.earned,members:e.attributes.players.data.length,award:x}});new C(".page__container",s,a,o),new b("main-statistics","user-page__filters",[["cs2","CS2"],["dota2","Dota2"]]),r("#cs2-content").addClass("tabs-block__content-container_active"),new f("user-page__filters"),new k("user-page__filters"),r("#dota2-content").append(`<div class="dota2-info-block statistics__top"></div>
  <div class="dota2-content-block statistics__dota"></div>`),r("#cs2-content").append(`<div class="cs2-info-block statistics__top"></div>
  <div class="cs2-content-block statistics__cs"></div>`),new _(".dota2-info-block",d),new _(".cs2-info-block",d),new y(".dota2-content-block",m),new w(".cs2-content-block",m)}catch(n){console.error("Error fetching data:",n)}});async function S(n,t={},s="token",a="https://battle-star-app.onrender.com/graphql"){const e=(c=>{const l=`; ${document.cookie}`.split(`; ${c}=`);return l.length===2?l.pop()?.split(";").shift()??null:null})(s);return e?g(a,n,t,{Authorization:`Bearer ${e}`}):(window.location.href="/sign.html",Promise.reject(new Error("No token found")))}