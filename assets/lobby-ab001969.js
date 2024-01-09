import{$ as l}from"./jquery-e7e79cb6.js";import{r as d,N as o,S as m,H as f}from"./header-a71cb944.js";import{B as h}from"./tabs-7a808782.js";import{L as g}from"./lava-lamp-63313dfc.js";import{p}from"./playersCs-339c7e36.js";import{A as u}from"./sidebar-2e350bd5.js";class b{content;data;searchParams;lobbyId;constructor(s,a){this.content=s,this.data=a,this.searchParams=new URLSearchParams(window.location.search),this.lobbyId=this.searchParams.get("id"),this.renderStatistic()}async renderStatistic(){const c=((await d("https://battle-star-app.onrender.com/graphql",o,{id:this.lobbyId}))?.csLobby?.data??{})?.attributes?.gameMode?.data?.attributes?.value;if(c){const r=`
        <div class="lobby__statictic statictic">
        <div class="statictic__score">
           <div class="details__teams-timer-shodow">
              <div class="details__teams-timer-outer details__teams-timer-outer_score">
                 <div class="details__teams-timer-inner"></div>
              </div>
              <p class="statictic__score-txt">3 <span>:</span> 1</p>
           </div>
          
          
        </div>
  
        <div class="statictic__side statictic__side_a">
           <div class="statictic__row">
              <h3 class="statictic__row-title">Команда А</h3>
              <p class="statictic__row-rang">(1320)</p>
           </div>
           <div class="statictic__info">
              <div class="statictic__info-row">
                 <p class="statictic__info-name statictic__info-txt">Игрок</p>
                 <div class="statictic__info-res details__players-info">
                    <p class="statictic__info-txt details__players-text">Уб</p>
                    <p class="statictic__info-txt details__players-text">См</p>
                    <p class="statictic__info-txt details__players-text">Ас</p>
                 </div>
                 <div class="statictic__info-experience">
                    <p class="statictic__info-txt statictic__info-txt_color">Опыт</p>
                    <div class="statictic__info-line"></div>
                    <p class="statictic__info-txt">О/М</p>
                    <p class="statictic__info-txt">Г/М</p>
                 </div>
                 <div class="statictic__info-damage">
                    <p class="statictic__info-txt statictic__info-txt_color">Опыт</p>
                    <div class="statictic__info-line"></div>
                    <p class="statictic__info-txt">Герои</p>
                    <p class="statictic__info-txt">Строения</p>
                    <p class="statictic__info-txt">Общий</p>
                 </div>
                 <div class="statictic__info-murders">
                    <p class="statictic__info-txt statictic__info-txt_color">Убийства</p>
                    <div class="statictic__info-line"></div>
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411261/avatar2_b1b8f19738.png" alt="ava">
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar1_9923625c79.png" alt="ava">
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar5_bca2982e00.png" alt="ava">
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411261/avatar4_5ff386de6c.png" alt="ava">
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar3_6195021697.png" alt="ava">
                 </div>
              </div>
              <hr class="statictic__info-subline"></hr>
           </div>
           <table class="statictic__table">      
           ${this.data.slice(0,c).map(t=>`
              <tr>
                 <td class="statictic__table-td">
                    <div class="statictic__table-ava">
                       <img src="${t.avatar}" alt="ava">
                    </div>
                    <div class="statictic__table-flag">
                       <img src="${t.flag}" alt="flag">
                    </div>
                    <p class="statictic__table-name">${t.nickname}</p>
                 </td>
                 <td>
                    <div class="statictic__table-res">
                       <p class="statictic__table-txt">${t.kill}</p>
                       <p class="statictic__table-txt">${t.death}</p>
                       <p class="statictic__table-txt">${t.assist}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_experience">
                       <p class="statictic__table-txt">${t.siteOrganizer}</p>
                       <p class="statictic__table-txt">${t.gameModerator}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_damage">
                       <p class="statictic__table-txt">${t.hero}</p>
                       <p class="statictic__table-txt">${t.build}</p>
                       <p class="statictic__table-txt">${t.total}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_murders">
                       <p class="statictic__table-txt">${t.killOneGame}</p>
                       <p class="statictic__table-txt">${t.killTwoGame}</p>
                       <p class="statictic__table-txt">${t.killThreeGame}</p>
                       <p class="statictic__table-txt">${t.killFourGame}</p>
                       <p class="statictic__table-txt">${t.killFiveGame}</p>
                    </div>
                 </td>
              </tr>`).join("")}
           </table>
        </div>
     </div>
        `,i=document.querySelector("#statictic-content");i&&(i.innerHTML=r)}}}class x extends b{constructor(s,a){super(s,a)}async renderStatistic(){const c=((await d("https://battle-star-app.onrender.com/graphql",o,{id:this.lobbyId}))?.csLobby?.data??{})?.attributes?.gameMode?.data?.attributes?.value;if(c){const r=`
   
  
        <div class="statictic__side statictic__side_b">
           <div class="statictic__row">
              <h3 class="statictic__row-title">Команда Б</h3>
              <p class="statictic__row-rang">(1256)</p>
           </div>
           <div class="statictic__info">
              <div class="statictic__info-row">
                 <p class="statictic__info-name statictic__info-txt">Игрок</p>
                 <div class="statictic__info-res details__players-info">
                    <p class="statictic__info-txt details__players-text">Уб</p>
                    <p class="statictic__info-txt details__players-text">См</p>
                    <p class="statictic__info-txt details__players-text">Ас</p>
                 </div>
                 <div class="statictic__info-experience">
                    <p class="statictic__info-txt statictic__info-txt_color">Опыт</p>
                    <div class="statictic__info-line"></div>
                    <p class="statictic__info-txt">О/М</p>
                    <p class="statictic__info-txt">Г/М</p>
                 </div>
                 <div class="statictic__info-damage">
                    <p class="statictic__info-txt statictic__info-txt_color">Опыт</p>
                    <div class="statictic__info-line"></div>
                    <p class="statictic__info-txt">Герои</p>
                    <p class="statictic__info-txt">Строения</p>
                    <p class="statictic__info-txt">Общий</p>
                 </div>
                 <div class="statictic__info-murders">
                    <p class="statictic__info-txt statictic__info-txt_color">Убийства</p>
                    <div class="statictic__info-line"></div>
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411261/avatar2_b1b8f19738.png" alt="ava">
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar1_9923625c79.png" alt="ava">
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar5_bca2982e00.png" alt="ava">
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411261/avatar4_5ff386de6c.png" alt="ava">
                    <img src="https://res.cloudinary.com/dahl2ad8r/image/upload/v1702411262/avatar3_6195021697.png" alt="ava">
                 </div>
              </div>
              <hr class="statictic__info-subline"></hr>
           </div>
           <table class="statictic__table">      
           ${this.data.slice(0,c).map(t=>`
              <tr>
                 <td class="statictic__table-td">
                    <div class="statictic__table-ava">
                       <img src="${t.avatar}" alt="ava">
                    </div>
                    <div class="statictic__table-flag">
                       <img src="${t.flag}" alt="flag">
                    </div>
                    <p class="statictic__table-name">${t.nickname}</p>
                 </td>
                 <td>
                    <div class="statictic__table-res">
                       <p class="statictic__table-txt">${t.kill}</p>
                       <p class="statictic__table-txt">${t.death}</p>
                       <p class="statictic__table-txt">${t.assist}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_experience">
                       <p class="statictic__table-txt">${t.siteOrganizer}</p>
                       <p class="statictic__table-txt">${t.gameModerator}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_damage">
                       <p class="statictic__table-txt">${t.hero}</p>
                       <p class="statictic__table-txt">${t.build}</p>
                       <p class="statictic__table-txt">${t.total}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_murders">
                       <p class="statictic__table-txt">${t.killOneGame}</p>
                       <p class="statictic__table-txt">${t.killTwoGame}</p>
                       <p class="statictic__table-txt">${t.killThreeGame}</p>
                       <p class="statictic__table-txt">${t.killFourGame}</p>
                       <p class="statictic__table-txt">${t.killFiveGame}</p>
                    </div>
                 </td>
              </tr>`).join("")}
           </table>
        </div>

        `,i=document.querySelector("#statictic-content");i&&(i.innerHTML+=r)}}}class ${content;lobbyInfo;constructor(s,a){this.content=s,this.lobbyInfo=a,this.renderCreateTeams()}renderCreateTeams(){const s=`
     <div class="details__name"> 
       <div class="details__name-teams ">
         <div class="details__name-teams-flag">
            <img src="${this.lobbyInfo[0].flagTeam}" alt="flag">
         </div>
         <p class="details__name-teams-name">${this.lobbyInfo[0].nameTeam}</p>
       </div> 
     </div>
      <div class="details__info">
         <div class="details__info-row">
            <div class="details__info-map">
               <p class="details__info-title">Карта</p>
               <p class="details__info-name">${this.lobbyInfo[0].maps}</p>
            </div>
            <div class="details__info-bid">
               <p class="details__info-title">Ставка</p>
               <p class="details__info-name">${this.lobbyInfo[0].rate}$</p>
            </div>
            <div class="details__info-mode">
           <p class="details__info-title">Режим</p>
         <p class="details__info-name">${this.lobbyInfo[0].regime}</p>
        </div>
        <div class="details__info-player">
           <p class="details__info-title">Учасников</p>
           <p class="details__info-name">${this.lobbyInfo[0].participants}/${this.lobbyInfo[0].participants}</p>
        </div>
        <div class="details__info-id">
           <p class="details__info-title">ID</p>
           <p class="details__info-name">${this.lobbyInfo[0].id}
              <svg>
                 <use xlink:href="${m}#copy"></use>
              </svg>
           </p>
        </div>
     </div>
     
    </div>
  
     `,a=document.querySelector(this.content);a&&(a.innerHTML+=s)}}class w{content;countDownDate;constructor(s,a){this.content=s,this.renderCreatePlayers(),this.countDownDate=a}renderCreatePlayers(){const s=`

    <div class="details__teams-item">
       <div class="details__teams-side-a">
          <p class="details__teams-name">Команда А</p>
          <p class="details__teams-rank">(1320)</p>

       </div>
       <div class="details__teams-side-b">
          <p class="details__teams-name">Команда Б</p>
          <p class="details__teams-rank">(1256)</p>
       </div>

    </div>
    <div class="details__teams-timer">
       <div class="details__teams-timer-shodow">
          <div class="details__teams-timer-outer">
             <div class="details__teams-timer-inner"></div>
          </div>

       </div>
       <div class="details__teams-timer-time"></div>
       <p class="details__teams-timer-text">до начала</p>
    </div>

    `,a=document.querySelector(this.content);a&&(a.innerHTML=s);const c=setInterval(()=>{let r=new Date().getTime(),i=this.countDownDate-r,t=Math.floor(i%(1e3*60*60)/(1e3*60)),y=Math.floor(i%(1e3*60)/1e3);const n=l(".details__teams-timer-time");n.length&&n.html(`${t.toString().padStart(2,"0")}:${y.toString().padStart(2,"0")}`),i<0&&(clearInterval(c),n.length&&(n.html("- : -"),l(".details__teams-timer-text").text(""),l(".details__players-square").css("display","block")))},0),e=l(".details__teams-timer-time");l("#start").on("click",()=>{e.html("3 : 1"),l(".details__info-btn").css("display","flex"),l(".details__players-square").css("display","none")})}}class v{content;players;searchParams;lobbyId;constructor(s,a){this.content=s,this.players=a,this.searchParams=new URLSearchParams(window.location.search),this.lobbyId=this.searchParams.get("id"),this.renderCreatePlayers()}async renderCreatePlayers(){const s=document.querySelector(this.content),e=((await d("https://battle-star-app.onrender.com/graphql",o,{id:this.lobbyId}))?.csLobby?.data??{})?.attributes?.gameMode?.data?.attributes?.value;if(e){const i=`
        <div class="details__players-side details__players-side_a">
          <div class="details__players-top">
            <p class="details__players-text">Игрок</p>
            <div class="details__players-info">
              <p class="details__players-text">Уб</p>
              <p class="details__players-text">См</p>
              <p class="details__players-text">Ас</p>
            </div>
          </div>
          <hr class="details__players-line">
          <div class="details__players-item details__players-item_sub">
            ${this.players.slice(0,e).map(t=>`
              <div class="details__players-teams">
                <div class="details__players-info">
                  <div class="details__players-avatar">
                    <img src="${t.avatar}" alt="avatar">
                  </div>
                  <div class="details__players-flag">
                    <img src="${t.flag}" alt="flag">
                  </div>
                  <p class="details__players-name">${t.nickname}</p>
                </div>
                <div class="details__players-skils">
                  <p class="details__players-skils-kill">${t.kill}</p>
                  <p class="details__players-skils-death">${t.death}</p>
                  <p class="details__players-skils-assist">${t.assist}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;s&&(s.innerHTML+=i)}}}class L extends v{constructor(s,a){super(s,a)}async renderCreatePlayers(){const s=document.querySelector(this.content),e=((await d("https://battle-star-app.onrender.com/graphql",o,{id:this.lobbyId}))?.csLobby?.data??{})?.attributes?.gameMode?.data?.attributes?.value;if(e){const i=`
        <div class="details__players-side details__players-side_b">
          <div class="details__players-top">
            <p class="details__players-text">Игрок</p>
            <div class="details__players-info">
              <p class="details__players-text">Уб</p>
              <p class="details__players-text">См</p>
              <p class="details__players-text">Ас</p>
            </div>
          </div>
          <hr class="details__players-line">
          <div class="details__players-item details__players-item_sub">
            ${this.players.slice(0,e).map(t=>`
              <div class="details__players-teams">
                <div class="details__players-info">
                  <div class="details__players-avatar">
                    <img src="${t.avatar}" alt="avatar">
                  </div>
                  <div class="details__players-flag">
                    <img src="${t.flag}" alt="flag">
                  </div>
                  <p class="details__players-name">${t.nickname}</p>
                </div>
                <div class="details__players-skils">
                  <p class="details__players-skils-kill">${t.kill}</p>
                  <p class="details__players-skils-death">${t.death}</p>
                  <p class="details__players-skils-assist">${t.assist}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;s&&(s.innerHTML+=i)}}}new f("#wrapper");new u("wrapper","");new h("lobby__tab");new g("lobby__tab");class I{searchParams;lobbyId;details;constructor(){this.searchParams=new URLSearchParams(window.location.search),this.lobbyId=this.searchParams.get("id"),this.details=l(".details__teams"),console.log(this.details),this.init()}init(){this.renderLobbyInfo(),this.renderLobbyTeams(),this.renderLobbySide(),this.renderPlayersStatictic()}async renderLobbyInfo(){const a=(await d("https://battle-star-app.onrender.com/graphql",o,{id:this.lobbyId}))?.csLobby?.data??{},e=[{flagTeam:a?.attributes?.creator?.data?.attributes?.Options?.selected_country?.data?.attributes?.flag?.data?.attributes?.url,nameTeam:a?.attributes?.title,maps:a?.attributes?.map?.data?.attributes?.name,rate:a?.attributes?.rate,regime:a?.attributes?.gameMode?.data?.attributes?.title,participants:a?.attributes?.gameMode?.data?.attributes?.value,id:a?.id}];console.log(e),new $(".details__info",e)}renderLobbyTeams(){let a=new Date().getTime()+.3*60*1e3;new w(".details__teams",a)}renderLobbySide(){new v(".details__players-row",p),new L(".details__players-row",p)}renderPlayersStatictic(){new b(".statictic",p),new x(".statictic",p)}}new I;
