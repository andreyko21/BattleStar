import{$ as s}from"./jquery-ab814638.js";import{i as n}from"./dropDownMenu-e31617c8.js";s(document).ready(()=>{new i(".dropdown__game"),n()});class i{container;constructor(e){this.container=document.querySelector(e),this.init()}init(){this.renderDropdown(),this.addEventListeners(),this.setInitialGameSelection()}renderDropdown(){const e=`
      <div class="dropdown__game-select">
        <div class="dropdown__game-current">
          <img class="dropdown__game-img" src="src/images/csGo.webp" alt="">
          <p class="dropdown__game-name">CS:GO</p>
        </div>
        <div class="dropdown__game-arrow">
          <svg>
            <use xlink:href="src/images/sprite.svg#arrow-game"></use>
          </svg>
        </div>
        <ul class="dropdown__game-list">
          <li class="dropdown__game-item" data-game="cs2"><img class="dropdown__game-icon" src="src/images/csGo.webp" alt="">CS:GO</li>
          <li class="dropdown__game-item" data-game="dota2"><img class="dropdown__game-icon" src="src/images/dota.webp" alt="">DOTA 2</li>
        </ul>
      </div>
    `;this.container.innerHTML=e}addEventListeners(){const e=this.container.querySelector(".dropdown__game-arrow"),a=this.container.querySelector(".dropdown__game-list"),t=this.container.querySelectorAll(".dropdown__game-item");e.addEventListener("click",()=>{a.classList.toggle("_show")}),t.forEach(o=>{o.addEventListener("click",()=>{this.updateGameSelection(o)})})}updateGameSelection(e){const a=e.textContent.trim(),t=e.querySelector("img").src,o=this.container.querySelector(".dropdown__game-img"),r=this.container.querySelector(".dropdown__game-name");o.src=t,r.textContent=a,this.setLocateParam("game",e.dataset.game)}getLocateParam(e){return new URLSearchParams(window.location.search).get(e)}setLocateParam(e,a){const t=new URLSearchParams(window.location.search);t.set(e,a),window.history.replaceState(null,"","?"+t.toString())}setInitialGameSelection(){const e=this.getLocateParam("game");if(e){const a=this.container.querySelector(`.dropdown__game-item[data-game="${e}"]`);a&&this.updateGameSelection(a)}}}
