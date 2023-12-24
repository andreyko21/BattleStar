import"./modulepreload-polyfill-3cfb730f.js";import{$ as t}from"./jquery-ab814638.js";import{S as u}from"./sprite-3002caef.js";class k{content;createHeaderData;constructor(a,e){this.content=a,this.createHeaderData=e,this.renderCreateTeams()}renderCreateTeams(){const a=`
          <div class="details__header">
              <div class="details__header-flag">
                  <img src="${this.createHeaderData[0].flag}" alt="flag">
              </div>
              <p class="details__header-name">${this.createHeaderData[0].name}</p>
          </div>
      `,e=document.querySelector(this.content);e&&(e.innerHTML=a)}}class w{content;createInfoData;constructor(a,e){this.content=a,this.createInfoData=e,this.renderCreateInfo()}renderCreateInfo(){const a=`
      <div class="details__info-map">
      <p class="details__info-title">Карта</p>
      <p class="details__info-name">${this.createInfoData[0].map}</p>
   </div>
   <div class="details__info-bid">
      <p class="details__info-title">Ставка</p>
      <p class="details__info-name"> ${this.createInfoData[0].rate} $</p>
   </div>
   <div class="details__info-mode">
      <p class="details__info-title">Режим</p>
      <p class="details__info-name">${this.createInfoData[0].regime}</p>
   </div>
   <div class="details__info-player">
      <p class="details__info-title">Учасников</p>
      <p class="details__info-name">${this.createInfoData[0].participants}/10</p>
   </div>
   <div class="details__info-id">
      <p class="details__info-title">ID</p>
      <p class="details__info-name">${this.createInfoData[0].id}
         <svg>
            <use xlink:href="${u}#copy"></use>
         </svg>
      </p>
   </div>
      `,e=document.querySelector(this.content);e&&(e.innerHTML=a);const i=t(".details__info-name svg");i.length&&i.click(function(){const s=t(".details__info-name");s.length&&(s.on("select",function(){}),document.execCommand("copy"),alert("Copied the id"))})}}class ${content;createTeamsData;countDownDate;constructor(a,e,i){this.content=a,this.createTeamsData=e,this.countDownDate=i,this.renderCreateTeams()}renderCreateTeams(){const a=`
      <div class="details__teams-item">
      <div class="details__teams-side-a">
         <p class="details__teams-name">Команда А</p>
         <p class="details__teams-rank">(${this.createTeamsData[0].rang.map(s=>s.sideA)})</p>

      </div>
      <div class="details__teams-side-b">
         <p class="details__teams-name">Команда Б</p>
         <p class="details__teams-rank">(${this.createTeamsData[0].rang.map(s=>s.sideB)})</p>
      </div>

   </div>
   <div class="details__teams-timer">
      <div class="details__teams-timer-img">
         <img src="../src/images/timer.png" alt="img">
      </div>
      <div class="details__teams-time"></div>
      <p class="details__teams-text">до начала</p>
   </div>
      `,e=document.querySelector(this.content);e&&(e.innerHTML=a);const i=setInterval(()=>{let s=new Date().getTime(),n=this.countDownDate-s,l=Math.floor(n%(1e3*60*60)/(1e3*60)),c=Math.floor(n%(1e3*60)/1e3);const r=t(".details__teams-time");r.length&&r.html(`${l.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`),n<0&&(clearInterval(i),r.length&&r.html("- : -"))},0)}}class T{content;players;dropdownPlayers;constructor(a,e){this.content=a,this.players=e,this.dropdownPlayers=e.slice(),this.renderCreatePlayers()}addPlayerToDropdown(a){this.players.push(a),this.renderCreatePlayers()}renderCreatePlayers(){const a=document.querySelector(this.content);if(!a)return;const e=this;if(this.players.length<5){const i=this.players.map(s=>`
        <div class="details__players-teams">
          <div class="details__players-info">
            <div class="details__players-avatar">
              <img class="details__players-avatar-img" src="${s.avatar}" alt="avatar">
            </div>
            <div class="details__players-flag">
              <img class="details__players-flag-img" src="${s.flag}" alt="flag">
            </div>
            <p class="details__players-name">${s.name}</p>
          </div>
          <div class="details__players-skils">
            <p class="details__players-skils-kill">${s.kill}</p>
            <p class="details__players-skils-death">${s.death}</p>
            <p class="details__players-skils-assist">${s.assist}</p>
          </div>
        </div>`).join("");a.innerHTML=i;for(let s=0;s<5-this.players.length;s++){const n=`   
        <div class="details__players-add">
        <div class="details__players-add-new"></div>
        <div class="details__players-add-dropdown dropdown">
           <ul class="dropdown__list">
           ${this.dropdownPlayers.map(l=>`
           <li class="dropdown__item">
             <div class="details__players-info">
               <div class="details__players-avatar">
                  <img class="details__players-avatar-img"
                     src="${l.avatar}" alt="avatar">
               </div>
               <div class="details__players-flag">
                  <img class="details__players-flag-img" src="${l.flag}"
                     alt="flag">
               </div>
               <p class="details__players-name">${l.name}</p>
             </div>
             <div class="details__players-skils">
               <p class="details__players-skils-kill">${l.kill}</p>
               <p class="details__players-skils-death">${l.death}</p>
               <p class="details__players-skils-assist">${l.assist}</p>
             </div>
           </li>
         `).join("")}
              
           </ul>
        </div>
     </div>  
         `;a.insertAdjacentHTML("beforeend",n)}t(".details__players-add-new").each(function(){t(this).on("click",function(){t(this).next().css("display","block")}),t(this).next().find(".dropdown__item").each(function(){t(this).on("click",function(){const n=t(this).find(".details__players-avatar-img").attr("src"),l=t(this).find(".details__players-flag-img").attr("src"),c=t(this).find(".details__players-name").text(),r=Number(t(this).find(".details__players-skils-kill").text()),f=Number(t(this).find(".details__players-skils-death").text()),h=Number(t(this).find(".details__players-skils-assist").text()),y={avatar:n,flag:l,name:c,kill:r,death:f,assist:h};let o=0;e.addPlayerToDropdown(y),o++;const p=document.getElementById("addedPlayersCount");p&&(p.textContent=o.toString()),console.log(o)})})})}else{const i=this.players.map(s=>`
        <div class="details__players-teams">
          <div class="details__players-info">
            <div class="details__players-avatar">
              <img class="details__players-avatar-img" src="${s.avatar}" alt="avatar">
            </div>
            <div class="details__players-flag">
              <img class="details__players-flag-img" src="${s.flag}" alt="flag">
            </div>
            <p class="details__players-name">${s.name}</p>
          </div>
          <div class="details__players-skils">
            <p class="details__players-skils-kill">${s.kill}</p>
            <p class="details__players-skils-death">${s.death}</p>
            <p class="details__players-skils-assist">${s.assist}</p>
          </div>
        </div>`).join("");a.innerHTML=i}}}class D{content;players;constructor(a,e){this.content=a,this.players=e,this.renderCreatePlayers()}renderCreatePlayers(){const a=this.players.map(i=>` 
       <div class="details__players-teams">
          <div class="details__players-info">
             <div class="details__players-avatar">
                <img src="${i.avatar}" alt="avatar">
             </div>
             <div class="details__players-flag">
                <img src="${i.flag}" alt="flag">
             </div>
             <p class="details__players-name">${i.name}</p>
          </div>
          <div class="details__players-skils">
             <p class="details__players-skils-kill">${i.kill}</p>
             <p class="details__players-skils-death">${i.death}</p>
             <p class="details__players-skils-assist">${i.assist}</p>
          </div>
       </div>`).join(""),e=document.querySelector(this.content);e&&(e.innerHTML=a)}}class b{btn;constructor(){this.btn=document.querySelector(".details__info-btn"),this.handleBtnClick()}renderBtn(){const a=`
      <button class="btn">
        <svg>
          <use xlink:href="./src/images/sprite.svg#tv"></use>
        </svg>Скачать Демо</button>
      <button class="btn">
        <svg>
          <use xlink:href="./src/images/sprite.svg#download"></use>
        </svg>
        Смотреть</button>
    `;this.btn&&(this.btn.innerHTML+=a)}handleBtnClick(){const a=this;t(".details__square-btn").on("click",function(){t(".details__square").css("display","none"),t(".details__teams-time_sub").text("3:1"),a.renderBtn()})}}new b;//! ---- Create Header ----
new k(".details__name",[{flag:"../../../src/images/flag.png",name:"Natus Vincere"}]);//! ---- Create Teams ----
const C=new Date().getTime();let H=C+2*60*1e3;new $(".details__teams",[{rang:[{sideA:1320,sideB:1257}]}],H);//! ---- Create Players ----
let _=null;const m=[{avatar:"../../../src/images/avatar7.png",flag:"../../../src/images/flag.png",name:"JohnTrawolta_4",kill:70,death:70,assist:70},{avatar:"../../../src/images/avatar7.png",flag:"../../../src/images/flag.png",name:"John",kill:70,death:70,assist:70},{avatar:"../../../src/images/avatar7.png",flag:"../../../src/images/flag.png",name:"JohnTrawolta_4",kill:70,death:70,assist:70},{avatar:"../../../src/images/avatar7.png",flag:"../../../src/images/flag.png",name:"JohnTrawolta_4",kill:70,death:70,assist:70},{avatar:"../../../src/images/avatar7.png",flag:"../../../src/images/flag.png",name:"JohnTrawolta_4",kill:70,death:70,assist:70}],g=[{avatar:"../../../src/images/avatar7.png",flag:"../../../src/images/flag.png",name:"JohnTrawolta_4",kill:70,death:70,assist:70},{avatar:"../../../src/images/avatar7.png",flag:"../../../src/images/flag.png",name:"JohnTrawolta_4",kill:70,death:70,assist:70},{avatar:"../../../src/images/avatar7.png",flag:"../../../src/images/flag.png",name:"JohnTrawolta_4",kill:70,death:70,assist:70},{avatar:"../../../src/images/avatar7.png",flag:"../../../src/images/flag.png",name:"JohnTrawolta_4",kill:70,death:70,assist:70},{avatar:"../../../src/images/avatar7.png",flag:"../../../src/images/flag.png",name:"JohnTrawolta_4",kill:70,death:70,assist:70}],v=[{map:"Lake",rate:5e3,regime:"5x5",participants:0,id:54692725}];_=m.length+g.length;v[0].participants=_;_===10&&setTimeout(()=>{t(".details__square").css("display","block"),t(".details__teams-time").css("display","none").replaceWith('<p class="details__teams-time_sub">- : -</p>'),t(".details__teams-text").css("display","none")},5e3);//! ---- Create Info ----
new w(".details__info-row",v);new T(".details__players-item",m);new D(".details__players-item_sub",g);
