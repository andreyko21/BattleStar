import{$ as l}from"./jquery-62de4648.js";import{r as o,Q as n,S as p,H as f,R as h}from"./header-fb3b444a.js";import{B as u}from"./tabs-1ceb2202.js";import{L as g}from"./lava-lamp-05022cec.js";import{p as x}from"./playersCs-68918191.js";import{A as $}from"./sidebar-6eae4002.js";class b{content;data;searchParams;lobbyId;constructor(s,t){this.content=s,this.data=t,this.searchParams=new URLSearchParams(window.location.search),this.lobbyId=this.searchParams.get("id"),this.renderStatistic()}async renderStatistic(){const e=((await o("https://battle-star-app.onrender.com/graphql",n,{id:this.lobbyId}))?.csLobby?.data??{})?.attributes?.gameMode?.data?.attributes?.value;if(e){const r=`
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
           ${this.data.slice(0,e).map(a=>`
              <tr>
                 <td class="statictic__table-td">
                    <div class="statictic__table-ava">
                       <img src="${a.avatar}" alt="ava">
                    </div>
                    <div class="statictic__table-flag">
                       <img src="${a.flag}" alt="flag">
                    </div>
                    <p class="statictic__table-name">${a.nickname}</p>
                 </td>
                 <td>
                    <div class="statictic__table-res">
                       <p class="statictic__table-txt">${a.kill}</p>
                       <p class="statictic__table-txt">${a.death}</p>
                       <p class="statictic__table-txt">${a.assist}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_experience">
                       <p class="statictic__table-txt">${a.siteOrganizer}</p>
                       <p class="statictic__table-txt">${a.gameModerator}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_damage">
                       <p class="statictic__table-txt">${a.hero}</p>
                       <p class="statictic__table-txt">${a.build}</p>
                       <p class="statictic__table-txt">${a.total}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_murders">
                       <p class="statictic__table-txt">${a.killOneGame}</p>
                       <p class="statictic__table-txt">${a.killTwoGame}</p>
                       <p class="statictic__table-txt">${a.killThreeGame}</p>
                       <p class="statictic__table-txt">${a.killFourGame}</p>
                       <p class="statictic__table-txt">${a.killFiveGame}</p>
                    </div>
                 </td>
              </tr>`).join("")}
           </table>
        </div>
     </div>
        `,i=document.querySelector("#statictic-content");i&&(i.innerHTML=r)}}}class w extends b{constructor(s,t){super(s,t)}async renderStatistic(){const e=((await o("https://battle-star-app.onrender.com/graphql",n,{id:this.lobbyId}))?.csLobby?.data??{})?.attributes?.gameMode?.data?.attributes?.value;if(e){const r=`
   
  
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
           ${this.data.slice(0,e).map(a=>`
              <tr>
                 <td class="statictic__table-td">
                    <div class="statictic__table-ava">
                       <img src="${a.avatar}" alt="ava">
                    </div>
                    <div class="statictic__table-flag">
                       <img src="${a.flag}" alt="flag">
                    </div>
                    <p class="statictic__table-name">${a.nickname}</p>
                 </td>
                 <td>
                    <div class="statictic__table-res">
                       <p class="statictic__table-txt">${a.kill}</p>
                       <p class="statictic__table-txt">${a.death}</p>
                       <p class="statictic__table-txt">${a.assist}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_experience">
                       <p class="statictic__table-txt">${a.siteOrganizer}</p>
                       <p class="statictic__table-txt">${a.gameModerator}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_damage">
                       <p class="statictic__table-txt">${a.hero}</p>
                       <p class="statictic__table-txt">${a.build}</p>
                       <p class="statictic__table-txt">${a.total}</p>
                    </div>
                 </td>
                 <td>
                    <div class="statictic__table-res statictic__table-res_murders">
                       <p class="statictic__table-txt">${a.killOneGame}</p>
                       <p class="statictic__table-txt">${a.killTwoGame}</p>
                       <p class="statictic__table-txt">${a.killThreeGame}</p>
                       <p class="statictic__table-txt">${a.killFourGame}</p>
                       <p class="statictic__table-txt">${a.killFiveGame}</p>
                    </div>
                 </td>
              </tr>`).join("")}
           </table>
        </div>

        `,i=document.querySelector("#statictic-content");i&&(i.innerHTML+=r)}}}class v{content;lobbyInfo;constructor(s,t){this.content=s,this.lobbyInfo=t,this.renderCreateTeams()}renderCreateTeams(){const s=`
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
           <p class="details__info-name">${this.lobbyInfo[0].participants}/${this.lobbyInfo[0].participants*2}</p>
        </div>
        <div class="details__info-id">
           <p class="details__info-title">ID</p>
           <p class="details__info-name">${this.lobbyInfo[0].id}
              <svg>
                 <use xlink:href="${p}#copy"></use>
              </svg>
           </p>
        </div>
     </div>
     
    </div>
  
     `,t=document.querySelector(this.content);t&&(t.innerHTML+=s)}}class I extends v{constructor(s,t){super(s,t)}renderCreateTeams(){const s=`
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
            <p class="details__info-name">${this.lobbyInfo[0].participants}/${this.lobbyInfo[0].participants*2}</p>
         </div>
         <div class="details__info-id">
            <p class="details__info-title">ID</p>
            <p class="details__info-name">${this.lobbyInfo[0].id}
               <svg>
                  <use xlink:href="${p}#copy"></use>
               </svg>
            </p>
         </div>
      </div>
     </div>`,t=document.querySelector(this.content);t&&(t.innerHTML+=s)}}class L{content;countDownDate;constructor(s,t){this.content=s,this.renderCreatePlayers(),this.countDownDate=t}renderCreatePlayers(){const s=`

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

    `,t=document.querySelector(this.content);t&&(t.innerHTML=s);const e=setInterval(()=>{let r=new Date().getTime(),i=this.countDownDate-r,a=Math.floor(i%(1e3*60*60)/(1e3*60)),y=Math.floor(i%(1e3*60)/1e3);const _=l(".details__teams-timer-time");_.length&&_.html(`${a.toString().padStart(2,"0")}:${y.toString().padStart(2,"0")}`),i<0&&(clearInterval(e),_.length&&(_.html("- : -"),l(".details__teams-timer-text").text(""),l(".details__players-square").css("display","block")))},0),c=l(".details__teams-timer-time");l("#start").on("click",()=>{c.html("3 : 1"),l(".details__info-btn").css("display","flex"),l(".details__players-square").css("display","none")})}}class m{content;players;searchParams;lobbyId;constructor(s,t){this.content=s,this.players=t,this.searchParams=new URLSearchParams(window.location.search),this.lobbyId=this.searchParams.get("id"),this.renderPlayersSide()}async renderPlayersSide(){let t=(await o("https://battle-star-app.onrender.com/graphql",n,{id:this.lobbyId})).csLobby?.data?.attributes?.gameMode?.data?.attributes?.value??0;const e=document.querySelector(this.content);if(e&&t){const c=Math.min(t,this.players.length),r=`
        <div class="details__players-side ">
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
            ${this.players.slice(0,c).map(i=>`
              <div class="details__players-teams">
                <div class="details__players-info">
                  <div class="details__players-avatar">
                    <img src="${i.avatar}" alt="avatar">
                  </div>
                  <div class="details__players-flag">
                    <img src="${i.flag}" alt="flag">
                  </div>
                  <p class="details__players-name">${i.nickname}</p>
                </div>
                <div class="details__players-skils">
                  <p class="details__players-skils-kill">${i.kill}</p>
                  <p class="details__players-skils-death">${i.death}</p>
                  <p class="details__players-skils-assist">${i.assist}</p>
                </div>
              </div>`).join("")}
          </div>
        </div>`;e.innerHTML+=r,l(".details__players-side").addClass("details__players-side_a")}}}class S extends m{constructor(s,t){super(s,t)}async renderPlayersSide(){await super.renderPlayersSide(),l(".details__players-side").removeClass("details__players-side_a").addClass("details__players-side_b")}}new f("#wrapper");new $("wrapper","");new u("lobby__tab");new g("lobby__tab");class T{searchParams;lobbyId;details;lobbyGame;constructor(){this.searchParams=new URLSearchParams(window.location.search),this.lobbyId=this.searchParams.get("id"),document.cookie=`lobbyId=${this.lobbyId}`,this.lobbyGame=this.searchParams.get("game"),this.details=l(".details__teams"),this.init()}init(){this.renderLobbyTeams(),this.renderLobbySide(),this.checkGame(),this.playersCs()}async renderLobbyInfoCs(){const t=(await o("https://battle-star-app.onrender.com/graphql",n,{id:this.lobbyId}))?.csLobby?.data??{},c=[{flagTeam:t?.attributes?.creator?.data?.attributes?.Options?.selected_country?.data?.attributes?.flag?.data?.attributes?.url,nameTeam:t?.attributes?.title,maps:t?.attributes?.map?.data?.attributes?.name,rate:t?.attributes?.rate,regime:t?.attributes?.gameMode?.data?.attributes?.title,participants:t?.attributes?.gameMode?.data?.attributes?.value,id:t?.id}];new v(".details__info",c)}async renderLobbyInfoDota(){const t=(await o("https://battle-star-app.onrender.com/graphql",h,{id:this.lobbyId}))?.dota2Lobby?.data??{},c=[{flagTeam:t?.attributes?.creator?.data?.attributes?.Options?.selected_country?.data?.attributes?.flag?.data?.attributes?.url,nameTeam:t?.attributes?.title,rate:t?.attributes?.rate,regime:t?.attributes?.dota_2_game_modes?.data[0]?.attributes?.title,participants:t?.attributes?.typeLobby?.data?.attributes?.value,id:t?.id}];console.log(c),new I(".details__info",c)}async playersCs(){}renderLobbyTeams(){let t=new Date().getTime()+.3*60*1e3;new L(".details__teams",t)}async renderLobbySide(){const s=x.reduce((t,e,c)=>(c%5===0&&t.push([]),t[t.length-1].push(e),t),[]);console.log(s),new m(".details__players-row",s[0]),new S(".details__players-row",s[1]),new b(".statictic",s[0]),new w(".statictic",s[1])}checkGame(){this.lobbyGame==="cs2"?this.renderLobbyInfoCs():this.renderLobbyInfoDota()}}new T;
