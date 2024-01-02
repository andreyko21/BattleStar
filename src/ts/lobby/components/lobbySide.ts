import { request } from "graphql-request";
import { GetLobbyInfoId } from "./../../../../queries.graphql.d";
interface ICreatePlayersData {
  avatar: string;
  flag: string;
  nickname: string;
  kill: number;
  death: number;
  assist: number;
}

export  class LobbySide {
  public content: string;
  public players: ICreatePlayersData[];
  searchParams: URLSearchParams;
  lobbyId: string | null;

  constructor(content: string, players: ICreatePlayersData[]) {
    this.content = content;
    this.players = players;
    this.searchParams = new URLSearchParams(window.location.search);
    this.lobbyId = this.searchParams.get("id");
    // this.dropdownPlayers = players.slice();

    this.renderCreatePlayers();


    
  }



  async renderCreatePlayers() {
    const content = document.querySelector(this.content);
  
    const getLobby = await request(
      "https://battle-star-app.onrender.com/graphql",
      GetLobbyInfoId,
      { id: this.lobbyId }
    );
  
    const lobbyInfoArray = getLobby?.csLobby?.data ?? {};
    const participants = lobbyInfoArray?.attributes?.gameMode?.data?.attributes?.value;
  
    if (participants) {
      const playersToShow = this.players.slice(0, participants); 
  
      const createPlayersHtml = `
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
            ${playersToShow.map((item) => `
              <div class="details__players-teams">
                <div class="details__players-info">
                  <div class="details__players-avatar">
                    <img src="${item.avatar}" alt="avatar">
                  </div>
                  <div class="details__players-flag">
                    <img src="${item.flag}" alt="flag">
                  </div>
                  <p class="details__players-name">${item.nickname}</p>
                </div>
                <div class="details__players-skils">
                  <p class="details__players-skils-kill">${item.kill}</p>
                  <p class="details__players-skils-death">${item.death}</p>
                  <p class="details__players-skils-assist">${item.assist}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
  
      if (content) {
        content.innerHTML += createPlayersHtml;
      }
    }
  }
  
  
}

export class LobbySideB extends LobbySide {
  constructor(content: string, players: ICreatePlayersData[]) {
    super(content, players);
  }

   async renderCreatePlayers() {
    const content = document.querySelector(this.content);
  
    const getLobby = await request(
      "https://battle-star-app.onrender.com/graphql",
      GetLobbyInfoId,
      { id: this.lobbyId }
    );
  
    const lobbyInfoArray = getLobby?.csLobby?.data ?? {};
    const participants = lobbyInfoArray?.attributes?.gameMode?.data?.attributes?.value;
  
    if (participants) {
      const playersToShow = this.players.slice(0, participants); 
  
      const createPlayersHtml = `
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
            ${playersToShow.map((item) => `
              <div class="details__players-teams">
                <div class="details__players-info">
                  <div class="details__players-avatar">
                    <img src="${item.avatar}" alt="avatar">
                  </div>
                  <div class="details__players-flag">
                    <img src="${item.flag}" alt="flag">
                  </div>
                  <p class="details__players-name">${item.nickname}</p>
                </div>
                <div class="details__players-skils">
                  <p class="details__players-skils-kill">${item.kill}</p>
                  <p class="details__players-skils-death">${item.death}</p>
                  <p class="details__players-skils-assist">${item.assist}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
  
      if (content) {
        content.innerHTML += createPlayersHtml;
      }
    }
  }
}





// export class CreatePlayersSideA {
//   private content: string;
//   private players: ICreatePlayersData[];
//   private dropdownPlayers: ICreatePlayersData[];

//   constructor(content: string, players: ICreatePlayersData[]) {
//     this.content = content;
//     this.players = players;
//     this.dropdownPlayers = players.slice();

//     this.renderCreatePlayers();
//   }

//   addPlayerToDropdown(playerData: ICreatePlayersData): void {
//     this.players.push(playerData);
//     this.renderCreatePlayers();
//   }
//   renderCreatePlayers() {
//     const content = document.querySelector(this.content);
//     if (!content) return;
//     const context = this;

//     if (this.players.length < 5) {
//       const createPlayersHtml = this.players
//         .map(
//           (player) => `
//         <div class="details__players-teams">
//           <div class="details__players-info">
//             <div class="details__players-avatar">
//               <img class="details__players-avatar-img" src="${player.avatar}" alt="avatar">
//             </div>
//             <div class="details__players-flag">
//               <img class="details__players-flag-img" src="${player.flag}" alt="flag">
//             </div>
//             <p class="details__players-name">${player.name}</p>
//           </div>
//           <div class="details__players-skils">
//             <p class="details__players-skils-kill">${player.kill}</p>
//             <p class="details__players-skils-death">${player.death}</p>
//             <p class="details__players-skils-assist">${player.assist}</p>
//           </div>
//         </div>`
//         )
//         .join("");

//       content.innerHTML = createPlayersHtml;

//     //   for (let i = 0; i < 5 - this.players.length; i++) {
//     //     const createAddHtml = `   
//     //     <div class="details__players-add">
//     //     <div class="details__players-add-new"></div>
//     //     <div class="details__players-add-dropdown dropdown">
//     //        <ul class="dropdown__list">
//     //        ${this.dropdownPlayers
//     //          .map(
//     //            (addPlayer) => `
//     //        <li class="dropdown__item">
//     //          <div class="details__players-info">
//     //            <div class="details__players-avatar">
//     //               <img class="details__players-avatar-img"
//     //                  src="${addPlayer.avatar}" alt="avatar">
//     //            </div>
//     //            <div class="details__players-flag">
//     //               <img class="details__players-flag-img" src="${addPlayer.flag}"
//     //                  alt="flag">
//     //            </div>
//     //            <p class="details__players-name">${addPlayer.name}</p>
//     //          </div>
//     //          <div class="details__players-skils">
//     //            <p class="details__players-skils-kill">${addPlayer.kill}</p>
//     //            <p class="details__players-skils-death">${addPlayer.death}</p>
//     //            <p class="details__players-skils-assist">${addPlayer.assist}</p>
//     //          </div>
//     //        </li>
//     //      `
//     //          )
//     //          .join("")}
              
//     //        </ul>
//     //     </div>
//     //  </div>  
//     //      `;
//     //     content.insertAdjacentHTML("beforeend", createAddHtml);
//     //   }

//       $(".details__players-add-new").each(function () {
//         $(this).on("click", function () {
//           $(this).next().css("display", "block");
//         });

//         const dropdownItems = $(this).next().find(".dropdown__item");

//         dropdownItems.each(function () {
//           $(this).on("click", function () {
//             const playerAvatar = $(this)
//               .find(".details__players-avatar-img")
//               .attr("src");
//             const playerFlag = $(this)
//               .find(".details__players-flag-img")
//               .attr("src");
//             const playerName = $(this).find(".details__players-name").text();
//             const playerKill = Number(
//               $(this).find(".details__players-skils-kill").text()
//             );
//             const playerDeath = Number(
//               $(this).find(".details__players-skils-death").text()
//             );
//             const playerAssist = Number(
//               $(this).find(".details__players-skils-assist").text()
//             );

//             const newPlayer: any = {
//               avatar: playerAvatar,
//               flag: playerFlag,
//               name: playerName,
//               kill: playerKill,
//               death: playerDeath,
//               assist: playerAssist,
//             };
//             let addedPlayersCount = 0;
//             context.addPlayerToDropdown(newPlayer);

//             addedPlayersCount++;
//             const addedPlayersCountElement =
//               document.getElementById("addedPlayersCount");
//             if (addedPlayersCountElement) {
//               addedPlayersCountElement.textContent =
//                 addedPlayersCount.toString();
//             }
//             console.log(addedPlayersCount);
//           });
//         });
//       });
//     } else {
//       const createPlayersHtml = this.players
//         .map(
//           (player) => `
//         <div class="details__players-teams">
//           <div class="details__players-info">
//             <div class="details__players-avatar">
//               <img class="details__players-avatar-img" src="${player.avatar}" alt="avatar">
//             </div>
//             <div class="details__players-flag">
//               <img class="details__players-flag-img" src="${player.flag}" alt="flag">
//             </div>
//             <p class="details__players-name">${player.name}</p>
//           </div>
//           <div class="details__players-skils">
//             <p class="details__players-skils-kill">${player.kill}</p>
//             <p class="details__players-skils-death">${player.death}</p>
//             <p class="details__players-skils-assist">${player.assist}</p>
//           </div>
//         </div>`
//         )
//         .join("");

//       content.innerHTML += createPlayersHtml;
//     }
//   }
// }