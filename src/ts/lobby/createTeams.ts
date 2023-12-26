import Sprite from "./../../images/sprite.svg";
import $ from "jquery";

interface ICreateNameTeamsData {
  flagTeam: string;
  nameTeam: string;
}

export class NameTeams {
  private content: string;
  private nameTeams: ICreateNameTeamsData[];

  constructor(content: string, nameTeams: ICreateNameTeamsData[]) {
    this.content = content;
    this.nameTeams = nameTeams;
    this.renderCreateTeams();
  }

  renderCreateTeams(): void {
    const createHeaderHtml = `
    <div class="details__name-teams ">
      <div class="details__name-teams-flag">
        <img src="${this.nameTeams[0].flagTeam}" alt="flag">
      </div>
        <p class="details__name-teams-name">${this.nameTeams[0].nameTeam}</p>
    </div> `;

    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML = createHeaderHtml;
    }
  }
}

export class staticticNameTeams extends NameTeams {
  constructor(content: string, nameTeams: ICreateNameTeamsData[]) {
    super(content, nameTeams);
  }
}

interface ICreateInfoData {
  map: string;
  rate: number;
  regime: string;
  participants: number;
  id: number;
}

export class CreateInfo {
  private content: string;
  private createInfoData: ICreateInfoData[];

  constructor(content: string, createInfoData: ICreateInfoData[]) {
    this.content = content;
    this.createInfoData = createInfoData;
    this.renderCreateInfo();
  }

  renderCreateInfo(): void {
    const createInfoHtml = `
      <div class="details__info">
       <div class="details__info-row">
          <div class="details__info-map">
             <p class="details__info-title">Карта</p>
             <p class="details__info-name">${this.createInfoData[0].map}</p>
          </div>
          <div class="details__info-bid">
             <p class="details__info-title">Ставка</p>
             <p class="details__info-name">${this.createInfoData[0].rate}$</p>
          </div>
          <div class="details__info-mode">
             <p class="details__info-title">Режим</p>
             <p class="details__info-name">${this.createInfoData[0].regime}</p>
          </div>
          <div class="details__info-player">
             <p class="details__info-title">Учасников</p>
             <p class="details__info-name">${this.createInfoData[0].participants}</p>
          </div>
          <div class="details__info-id">
             <p class="details__info-title">ID</p>
             <p class="details__info-name">${this.createInfoData[0].id}
                <svg>
                   <use xlink:href="${Sprite}#copy"></use>
                </svg>
             </p>
          </div>
       </div>`;
    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML += createInfoHtml;
    }
  }
}

class BtnRenderer {
  private btn: HTMLElement;

  constructor() {
    this.btn = document.querySelector(".details__info-btn") as HTMLElement;
    this.handleBtnClick();
    this.renderBtn();
  }

  renderBtn() {
    const btnHtml = `
      <button class="btn">
        <svg>
          <use xlink:href="./src/images/sprite.svg#tv"></use>
        </svg>Скачать Демо</button>
      <button class="btn">
        <svg>
          <use xlink:href="./src/images/sprite.svg#download"></use>
        </svg>
        Смотреть</button>
    `;

    if (this.btn) {
      this.btn.innerHTML += btnHtml;
    }
  }

  handleBtnClick() {
    const context = this;
    $(".details__square-btn").on("click", function () {
      $(".details__square").css("display", "none");
      $(".details__teams-time_sub").text("3:1");
      context.renderBtn();
    });
  }
}

new BtnRenderer();


// interface ICreatePlayersData {
//   flagTeam: string;
//   nameTeam: string;
//   map: string;
//   rate: number;
//   regime: string;
//   participants: number;
//   id: number;
//   rang: { sideA: number; sideB: number }[];
//   avatar: string;
//   flag: string;
//   name: string;
//   kill: number;
//   death: number;
//   assist: number;
// }

// export class CreatePlalers {
//   private content: string;
//   private create: ICreatePlayersData[];

//   constructor(content: string, create: ICreatePlayersData[]) {
//     this.content = content;
//     this.create = create;
//     this.init();
//   }

//   init() {
//     this.renderCreateTeams();
//     this.renderCreateInfo();
//    //  this.renderCreatePlayers();
//   }

//   renderCreateTeams(): void {
//     const createHeaderHtml = `
//     <div class="details__name-teams">
//       <div class="details__name-teams-flag">
//         <img src="${this.create[0].flagTeam}" alt="flag">
//       </div>
//         <p class="details__name-teams-name">${this.create[0].nameTeam}</p>
//     </div> `;

//     const content = document.querySelector(this.content);
//     if (content) {
//       content.innerHTML = createHeaderHtml;
//     }
//   }

//   renderCreateInfo(): void {
//     const createInfoHtml = `
//     <div class="details__info">
//      <div class="details__info-row">
//         <div class="details__info-map">
//            <p class="details__info-title">Карта</p>
//            <p class="details__info-name">${this.create.map(
//              (item) => item.map
//            )}</p>
//         </div>
//         <div class="details__info-bid">
//            <p class="details__info-title">Ставка</p>
//            <p class="details__info-name">${this.create.map(
//              (item) => item.rate
//            )}$</p>
//         </div>
//         <div class="details__info-mode">
//            <p class="details__info-title">Режим</p>
//            <p class="details__info-name">${this.create.map(
//              (item) => item.regime
//            )}</p>
//         </div>
//         <div class="details__info-player">
//            <p class="details__info-title">Учасников</p>
//            <p class="details__info-name">${this.create.map(
//              (item) => item.participants
//            )}</p>
//         </div>
//         <div class="details__info-id">
//            <p class="details__info-title">ID</p>
//            <p class="details__info-name">${this.create.map((item) => item.id)}
//               <svg>
//                  <use xlink:href="${Sprite}#copy"></use>
//               </svg>
//            </p>
//         </div>
//      </div>
//      <div class="details__info-btn">
//         <button class="btn">
//            <svg>
//               <use xlink:href="./src/images/sprite.svg#download"></use>
//            </svg>Скачать Демо</button>
//         <button class="btn">
//            <svg>
//               <use xlink:href="./src/images/sprite.svg#tv"></use>
//            </svg>
//            Смотреть</button>
//      </div>
//   </div>
//     `;
//     const content = document.querySelector(this.content);
//     if (content) {
//       content.innerHTML += createInfoHtml;
//     }
//   }

//   renderCreatePlayers() {
//     const createPlayersHtml = `
//  <div class="details__teams">
//     <div class="details__teams-item">
//        <div class="details__teams-side-a">
//           <p class="details__teams-name">Команда А</p>
//           <p class="details__teams-rank">
//           (${this.create.map((item) => item.rang.map((item) => item.sideA))})
//           </p>

//        </div>
//        <div class="details__teams-side-b">
//           <p class="details__teams-name">Команда Б</p>
//           <p class="details__teams-rank">
//           (${this.create.map((item) => item.rang.map((item) => item.sideB))})
//           </p>
//        </div>

//     </div>
//     <div class="details__teams-timer">
//        <div class="details__teams-timer-shodow">
//           <div class="details__teams-timer-outer">
//              <div class="details__teams-timer-inner"></div>
//           </div>

//        </div>
//        <div class="details__teams-timer-time"></div>
//        <p class="details__teams-timer-text">до начала</p>
//     </div>
//  </div>
//     `;
//     const content = document.querySelector(this.content);
//     if (content) {
//       content.innerHTML = createPlayersHtml;
//     }
//   }
// }

// <div class="details__players">
//     <div class="details__players-square">
//        <div class="details__players-square-img">
//           <img src="./src/images/square.png" alt="">
//        </div>
//        <div class="details__players-square-btn">
//           <button class="btn">Начать матч</button>
//        </div>

//     </div>
//     <div class="details__players-side details__players-side_a">
//        <div class="details__players-top">
//           <p class="details__players-text">Игрок</p>
//           <div class="details__players-info">
//              <p class="details__players-text">Уб</p>
//              <p class="details__players-text">См</p>
//              <p class="details__players-text">Ас</p>
//           </div>
//        </div>
//        <hr class="details__players-line">
//        <div class="details__players-item">

//           <div class="details__players-teams">
//              <div class="details__players-info">
//                 <div class="details__players-avatar">
//                    <img class="details__players-avatar-img" src="${player.avatar}" alt="avatar">
//                 </div>
//                 <div class="details__players-flag">
//                    <img class="details__players-flag-img" src="${player.flag}" alt="flag">
//                 </div>
//                 <p class="details__players-name">${player.name}</p>
//              </div>
//              <div class="details__players-skils">
//                 <p class="details__players-skils-kill">${player.kill}</p>
//                 <p class="details__players-skils-death">${player.death}</p>
//                 <p class="details__players-skils-assist">${player.assist}</p>
//              </div>
//           </div>

//        </div>

//     </div>
//     <div class="details__players-side details__players-side_b">
//        <div class="details__players-top">
//           <p class="details__players-text">Игрок</p>
//           <div class="details__players-info">
//              <p class="details__players-text">Уб</p>
//              <p class="details__players-text">См</p>
//              <p class="details__players-text">Ас</p>
//           </div>
//        </div>
//        <hr class="details__players-line">
//        <div class="details__players-item details__players-item_sub">
//           <div class="details__players-teams">
//              <div class="details__players-info">
//                 <div class="details__players-avatar">
//                    <img src="${players.avatar}" alt="avatar">
//                 </div>
//                 <div class="details__players-flag">
//                    <img src="${players.flag}" alt="flag">
//                 </div>
//                 <p class="details__players-name">${players.name}</p>
//              </div>
//              <div class="details__players-skils">
//                 <p class="details__players-skils-kill">${players.kill}</p>
//                 <p class="details__players-skils-death">${players.death}</p>
//                 <p class="details__players-skils-assist">${players.assist}</p>
//              </div>
//           </div>
//        </div>
//     </div>
//  </div>

// }
// const infoPlalers = [
//   {
//     flagTeam: "../../../src/images/flag.png",
//     nameTeam: "PlayFair Display$$$",
//     map: "Lake",
//     rate: 5000,
//     regime: "5x5",
//     participants: 0,
//     id: 33,
//     rang: [{ sideA: 1320, sideB: 1257 }],
//     avatar: "../../../src/images/avatar7.png",
//     flag: "../../../src/images/flag.png",
//     name: "JohnTrawolta_4",
//     kill: 70,
//     death: 70,
//     assist: 70,
//   },
// ];
// new CreatePlalers(".details", infoPlalers);

// interface ICreateNameTeamsData {
//   flagTeam: string;
//   nameTeam: string;
// }

// export class CreateHeader {
//   private content: string;
//   private nameTeams: ICreateNameTeamsData[];

//   constructor(content: string, createHeaderData: ICreateNameTeamsData[]) {
//     this.content = content;
//     this.nameTeams = createHeaderData;
//     this.renderCreateTeams();
//   }

//   renderCreateTeams(): void {
//     const createHeaderHtml = `
//     <div class="details__name-teams">
//       <div class="details__name-teams-flag">
//         <img src="${this.nameTeams[0].flagTeam}" alt="flag">
//       </div>
//         <p class="details__name-teams-name">${this.nameTeams[0].nameTeam}</p>
//     </div> `;

//     const content = document.querySelector(this.content);
//     if (content) {
//       content.innerHTML = createHeaderHtml;
//     }
//   }
// }

// interface ICreateInfoData {
//   map: string;
//   rate: number;
//   regime: string;
//   participants: number;
//   id: number;
// }

// export class CreateInfo {
//   private content: string;
//   private createInfoData: ICreateInfoData[];

//   constructor(content: string, createInfoData: ICreateInfoData[]) {
//     this.content = content;
//     this.createInfoData = createInfoData;
//     this.renderCreateInfo();
//   }

//   renderCreateInfo(): void {
//     const createInfoHtml = `
//       <div class="details__info-map">
//       <p class="details__info-title">Карта</p>
//       <p class="details__info-name">${this.createInfoData[0].map}</p>
//    </div>
//    <div class="details__info-bid">
//       <p class="details__info-title">Ставка</p>
//       <p class="details__info-name"> ${this.createInfoData[0].rate} $</p>
//    </div>
//    <div class="details__info-mode">
//       <p class="details__info-title">Режим</p>
//       <p class="details__info-name">${this.createInfoData[0].regime}</p>
//    </div>
//    <div class="details__info-player">
//       <p class="details__info-title">Учасников</p>
//       <p class="details__info-name">${this.createInfoData[0].participants}/10</p>
//    </div>
//    <div class="details__info-id">
//       <p class="details__info-title">ID</p>
//       <p class="details__info-name">${this.createInfoData[0].id}
//          <svg>
//             <use xlink:href="${Sprite}#copy"></use>
//          </svg>
//       </p>
//    </div>
//       `;

//     const content = document.querySelector(this.content);
//     if (content) {
//       content.innerHTML = createInfoHtml;
//     }

//     const copy = $('.details__info-name svg');
//     if (copy.length) {
//       copy.click(function() {
//         const copyText = $('.details__info-name');
//         if (copyText.length) {
//           copyText.on('select', function() {});
//           document.execCommand('copy');
//           alert('Copied the id');
//         }
//       });
//     }
//   }
// }

// interface ICreateTeamsData {
//   rang: { sideA: number; sideB: number }[];
// }

//  export class CreateTeams {
//   private content: string;
//   private createTeamsData: ICreateTeamsData[];
//   private countDownDate: number;

//   constructor(
//     content: string,
//     createTeamsData: ICreateTeamsData[],
//     countDownDate: number
//   ) {
//     this.content = content;
//     this.createTeamsData = createTeamsData;
//     this.countDownDate = countDownDate;
//     this.renderCreateTeams();
//   }

//   renderCreateTeams(): void {
//     const createTeamsHtml = `
//       <div class="details__teams-item">
//       <div class="details__teams-side-a">
//          <p class="details__teams-name">Команда А</p>
//          <p class="details__teams-rank">(${this.createTeamsData[0].rang.map(
//            (item) => item.sideA
//          )})</p>

//       </div>
//       <div class="details__teams-side-b">
//          <p class="details__teams-name">Команда Б</p>
//          <p class="details__teams-rank">(${this.createTeamsData[0].rang.map(
//            (item) => item.sideB
//          )})</p>
//       </div>

//    </div>
//    <div class="details__teams-timer">
//       <div class="details__teams-timer-img">
//          <img src="../src/images/timer.png" alt="img">
//       </div>
//       <div class="details__teams-time"></div>
//       <p class="details__teams-text">до начала</p>
//    </div>
//       `;

//     const content = document.querySelector(this.content);
//     if (content) {
//       content.innerHTML = createTeamsHtml;
//     }
//     const x = setInterval(() => {
//       let now = new Date().getTime();
//       let distance = this.countDownDate - now;

//       let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       const lobbyTeamsStartTime = $('.details__teams-time');

//       if (lobbyTeamsStartTime.length) {
//         lobbyTeamsStartTime.html(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
//       }

//       if (distance < 0) {
//         clearInterval(x);
//         if (lobbyTeamsStartTime.length) {
//           lobbyTeamsStartTime.html("- : -");
//         }
//       }
//     }, 0);
//   }
// }

// interface ICreatePlayersData {

// }

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
//         `
//         )
//         .join("");

//       content.innerHTML = createPlayersHtml;

//       for (let i = 0; i < 5 - this.players.length; i++) {
//         const createAddHtml = `
//         <div class="details__players-add">
//         <div class="details__players-add-new"></div>
//         <div class="details__players-add-dropdown dropdown">
//            <ul class="dropdown__list">
//            ${this.dropdownPlayers
//              .map(
//                (addPlayer) => `
//            <li class="dropdown__item">
//              <div class="details__players-info">
//                <div class="details__players-avatar">
//                   <img class="details__players-avatar-img"
//                      src="${addPlayer.avatar}" alt="avatar">
//                </div>
//                <div class="details__players-flag">
//                   <img class="details__players-flag-img" src="${addPlayer.flag}"
//                      alt="flag">
//                </div>
//                <p class="details__players-name">${addPlayer.name}</p>
//              </div>
//              <div class="details__players-skils">
//                <p class="details__players-skils-kill">${addPlayer.kill}</p>
//                <p class="details__players-skils-death">${addPlayer.death}</p>
//                <p class="details__players-skils-assist">${addPlayer.assist}</p>
//              </div>
//            </li>
//          `
//              )
//              .join("")}

//            </ul>
//         </div>
//      </div>
//          `;
//         content.insertAdjacentHTML("beforeend", createAddHtml);
//       }

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

//       content.innerHTML = createPlayersHtml;
//     }
//   }
// }

// export class CreatePlayersSideB {
//   private content: string;
//   private players: ICreatePlayersData[];

//   constructor(content: string, players: ICreatePlayersData[]) {
//     this.content = content;
//     this.players = players;
//     this.renderCreatePlayers();
//   }

//   renderCreatePlayers(): void {
//     const createPlayersHtml = this.players
//       .map(
//         (players) => `
//       `
//       )
//       .join("");

//     const content = document.querySelector(this.content);
//     if (content) {
//       content.innerHTML = createPlayersHtml;
//     }
//   }
// }

// class BtnRenderer {
//   private btn: HTMLElement;

//   constructor() {
//     this.btn = document.querySelector(".details__info-btn") as HTMLElement;
//     this.handleBtnClick()

//   }

//   renderBtn() {
//     const btnHtml = `
//       <button class="btn">
//         <svg>
//           <use xlink:href="./src/images/sprite.svg#tv"></use>
//         </svg>Скачать Демо</button>
//       <button class="btn">
//         <svg>
//           <use xlink:href="./src/images/sprite.svg#download"></use>
//         </svg>
//         Смотреть</button>
//     `;

//     if (this.btn) {
//       this.btn.innerHTML += btnHtml;
//     }
//   }

//   handleBtnClick() {
//     const context = this;
//     $(".details__square-btn").on("click", function () {
//       $(".details__square").css("display", "none");
//       $('.details__teams-time_sub').text('3:1');
//       context.renderBtn();
//     });
//   }
// }
// new BtnRenderer()
