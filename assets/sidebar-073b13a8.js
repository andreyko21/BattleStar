import{$ as o}from"./jquery-995cfbaf.js";import{S as r}from"./sprite-3002caef.js";import{i as d}from"./dropDownMenu-8d97c7ef.js";import{n as h,o as m,r as u}from"./queries.graphql.d-f9acd4bb.js";const g="data:image/webp;base64,UklGRtwCAABXRUJQVlA4INACAAAQDgCdASoyADMAPpE+nUsloyKhqBQJWLASCWgAvZGN1l5MlJYDcETbw7gDeRt5pfhee2enPYGIEDQsw1zAHE0qvQKJhGwB10gnzJHilbOD6J4XLxI+wU5r0742A6oTzn4T//ZTegj6zWG11gbGd82yrEUu/mUvjFfgAP74Vhk+kU0OLM5L4X8STcVfF0aNH1URvyhIlmrdN1bB5kgtZFj48P5Qecli2b8U2+9P3p84yJl2qp+YccbqObeNnFltR1AlPaMovjOZ2Ow5K30RcNQskANmADLj6iWUrWtzlNsDEcW7uuMUEjtz6y1suLc9vHsaDUGRpf9aPvZxFVHi8PXKQd7uXoWKqxvx8vJJ6XVInQoyB/0icxg/x8AAdsFaNqqHfBGpiApsKil320S4cZRzisPEQZLCqeUmAP/qv1QTUrOtfyRJMLlkKgfXADE80dxwbIog2r5MCMN0PtTham9Nba1RvLkgLuQVLL+GUIMJc/y7LVbifUqf2NMAAGn7q/bfh35nL0PiV6Y+S34fX2edhge3XSoqjqyD/3pFBebSA4HG2t8339Vxb1GpxBj6+hsHqh31Pk9IB1gEY9r/n/ijF/fUcwnUcQqrLqj5mEIYp7jy77t/nc8ElMJLkrT/6TLE6s4kVVvTQqu2ZBQWhR19e3o6hBcZbIj/9lL7bE6yqWya1Dh6aDMQhN2uU/Pkf/L8wkXkxJ5Dox0BqccMtsxDLnipglucAdRbz1Ux8LKhB6AY545vnmG1eBBOamP0TgFyqoqZnkNh3KApvAwbBzLxlAYMVfyANsP/IMdeQguGIco+hp40L/Agvq0z7mg1dw9qIkaLpV/bPMPB6PstFAd3GlNzLEYn3LjKRICqlWOa44940dfCTEMADaM1C+sPxwQ5Apt+ehcKMctWMkOO5H0i0Vg2H3gG1IqXXTNUAviQKwrbs0ib6/qKtQwH4AAAAAA=",p="data:image/webp;base64,UklGRnwCAABXRUJQVlA4WAoAAAAQAAAAJwAAKAAAQUxQSFMBAAABkELbtrFt57OVjPvZ9cvstm3b+m2kPxmV2ZXJtm2fDwc3/X+NCEZu2ziSNOU02PqJPYJrDVD9x/YIDgUGzJILQMmPR+g1vUPRB+/wP+Wz8XcilzOIfd8shgFzDyV3AbFULwcAXFdbpXLZGZYt+4iCe2i5arthRXPHYouqc7Ci+2Y91G0AYss7KUvepdPMPSW08K2h+W6XDrMDrwYCtf25sLUDTzqwzE0htHMnA5z16zqNipPA7fyokIGahUJR90TuwT2NL2lC3tv/CtQynkhXbECw5y0ngJEgdTdAytxl7GCAkTriIOWzjX0kHBC328SikSoACXeFzlU4cjJ0lC2u59QxYpGidp6zmXGQEkIfq9DPMMYJ9b8MUbeX/SlXUPP6csphhyk/UC/AYcXEp/xCZlcuIxwtfHeP+E76clbEf7x/ba7EyldzdXf1azFWegOA0TQAVlA4IAIBAADwBwCdASooACkAPpE+nEqloyKhpzgJILASCWwAtRroPHeq8XPQBdnPPhfsB8Ev7a/rl7QAXZl2cfgFepna8rvF+qhx1jOim8AA/hMf/KV0kpJWY5H2RUB//ewX72C/ewX2dH3eARphOv5569NfquY37o8LDS9Am8dhyGwrGeOhmu8umsqcJ2sygVjcmB2v3NwwVYbECMleu1jasVlUsZpUk8G3jFlB8e/HNwfaK1b+8kgA0n/Q4LzFE7voj2/TZ5+8FtAnp5fHhjMz7YZgmbx9oYBCfxsmm9PNCiYYHIiJZ+mvZiVLSOTp7rfNn6KqkWk2XEcUbHt+Pyd/QrDtSOqHAAA=";class w{container;games;constructor(e){this.container=o(e),this.games=[{name:"CS:GO",image:g,dataGame:"cs2"},{name:"DOTA 2",image:p,dataGame:"dota2"}],this.init()}init(){this.renderDropdown(),this.addEventListeners(),this.setInitialGameSelection()}renderDropdown(){const e=`
      <div class="dropdown__game-select">
        <div class="dropdown__game-current">
          <img class="dropdown__game-img" src="${this.games[0].image}" alt="">
          <p class="dropdown__game-name">${this.games[0].name}</p>
        </div>
        <div class="dropdown__game-arrow">
          <svg>
            <use xlink:href="${r}#arrow-game"></use>
          </svg>
        </div>
        <ul class="dropdown__game-list">
          ${this.games.map(t=>`
            <li class="dropdown__game-item" data-game="${t.dataGame}">
              <img class="dropdown__game-icon" src="${t.image}" alt="">
              ${t.name}
            </li>
          `).join("")}
        </ul>
      </div>
    `;this.container.html(e)}addEventListeners(){const e=this.container.find(".dropdown__game-arrow"),t=this.container.find(".dropdown__game-list"),a=this.container.find(".dropdown__game-item");e.on("click",()=>t.toggleClass("_show")),a.on("click",s=>{this.updateGameSelection(o(s.currentTarget)),window.location.reload()})}updateGameSelection(e){const t=e.text().trim(),a=e.find("img").attr("src"),s=this.container.find(".dropdown__game-img"),i=this.container.find(".dropdown__game-name");s.attr("src",a),i.text(t),this.setLocateParam("game",e.data("game"))}setLocateParam(e,t){const a=new URLSearchParams(window.location.search);a.set(e,t),window.history.replaceState(null,"","?"+a.toString())}setInitialGameSelection(){const e=this.getLocateParam("game");if(e){const t=this.container.find(`.dropdown__game-item[data-game="${e}"]`);t.length&&this.updateGameSelection(t)}}getLocateParam(e){return new URLSearchParams(window.location.search).get(e)}}class c{container;userName;balance;spritePath;constructor(e,t,a,s="src/images/sprite.svg"){this.container=o(e),this.userName=t,this.balance=a,this.spritePath=s,this.container.length?(this.render(),this.attachEventHandlers()):console.error("Container not found")}render(){const e=this.userName?`

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
    `;this.container.html(e)}attachEventHandlers(){this.container.find(".header__user-button-auth").on("click",()=>{window.location.href="/sign.html"})}}class k{container;selectGame;userNav;constructor(e){this.container=o(e),this.render(),this.selectGame=new w(".header__select-game"),this.userNav=new c(".header__user-block"),this.init()}async init(){d();try{const e=await v("token");if(e){const t=await l(h,{},e),a=await l(m,{id:t.me.id},e);t&&t.me?this.userNav=new c(".header__user-block",t.me.username,a.usersPermissionsUser.data.attributes.balance??0):console.error("User info is undefined")}else console.error("Token is null or undefined")}catch(e){console.error("Error in init:",e)}}render(){this.container.append(`
        <header class="header">
  <div class="header__select-game">
  </div>

  <label for="headerSearch" class="header__search-block">
    <svg class="header__search-block-icon">
      <use xlink:href="${r}#search"></use>
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
        `)}}function v(n){const t=`; ${document.cookie}`.split(`; ${n}=`);return t.length===2?t.pop().split(";").shift():null}async function l(n,e={},t,a="https://battle-star-app.onrender.com/graphql"){try{const s=await u(a,n,e,{Authorization:`Bearer ${t}`});if(s)return console.log("Response:",s),s;throw new Error("No response data received")}catch(s){throw console.error("Error in getRequest:",s),s}}class P{containerId;items;activeItemTitle;constructor(e,t){this.containerId=e,this.activeItemTitle=t,this.items=[{title:"ГЛАВНАЯ",icon:`${r}#newspaper`,link:"/index.html"},{title:"МАТЧИ",icon:`${r}#controller`,link:"/match.html"},{title:"ТУРНИРЫ",icon:`${r}#cup`,link:"/tournaments.html"},{title:"КОМАНДЫ",icon:`${r}#people`,link:"/teams.html"},{title:"ДРУЗЬЯ",icon:`${r}#person`,link:"/friends.html"}],this.render()}render(){const e=document.getElementById(this.containerId);if(!e)throw new Error(`Container with id #${this.containerId} not found.`);const t=document.createElement("div");t.className="sidebar";const a=this.createLogoAnchor(),s=this.createNav();t.appendChild(a),t.appendChild(s),e.appendChild(t)}createLogoAnchor(){const e=document.createElement("a");e.className="sidebar__logo",e.href="/index";const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("class","sidebar__logo");const a=document.createElementNS("http://www.w3.org/2000/svg","use");return a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","src/images/sprite.svg#logo"),t.appendChild(a),e.appendChild(t),e}createNav(){const e=document.createElement("nav");return e.className="sidebar__nav",this.items.forEach(t=>{const a=this.createNavItem(t);e.appendChild(a)}),e}createNavItem(e){const t=document.createElement("a");t.href=e.link,t.className=`sidebar__nav-item ${e.title===this.activeItemTitle?"sidebar__nav-item_active":""}`;const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("class","sidebar__nav-item-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e.icon),a.appendChild(s);const i=document.createElement("span");return i.className="sidebar__nav-item-text",i.textContent=e.title,t.appendChild(a),t.appendChild(i),t}}export{P as A,k as H};
