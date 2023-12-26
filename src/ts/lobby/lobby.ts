import $ from "jquery";
import { TabsCreate } from '../component/tabs-create.ts';
import { BaseTabs } from '../component/tabs.ts';
import { LavaLamp } from '../component/lava-lamp.ts';
import {
  NameTeams,
  // CreatePlalers,
  CreateInfo,
 staticticNameTeams
  // CreateTeams,
  // CreatePlayersSideA,
  // CreatePlayersSideB,

} from "./createTeams";
import {LobbyStatisticInfo,LobbyStatisticSideA,LobbyStatisticSideB} from "./lobbyStatistic";

new TabsCreate('lobby', 'lobby__tab', [
  ['teams', 'КОМАНДЫ'],
  ['statistic', 'СТАТИСТИКА'],
]);
new BaseTabs('lobby__tab');
new LavaLamp('lobby__tab');

const findContent = document.querySelector('#teams-content') as HTMLDivElement;
findContent.innerHTML =` <div class="details"></div> `;
const createContent = document.querySelector(
  '#statistic-content'
) as HTMLDivElement;
createContent.innerHTML = ` <div class="lobby__statictic"></div>`;


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

new NameTeams('.details', [
  {
    flagTeam: "../../../src/images/flag.png",
    nameTeam: "PlayFair Display$$$",
  },
]);


const infoPlalers:any = [
  {
    rang: 1234,
    avatarMurders: "../../../src/images/avatar7.png",
    avatar: "../../../src/images/avatar7.png",
    name: "JohnTrawolta_4",
    kill: 70,
    death: 70,
    assist: 70,
    siteOrganizer: 70,
    gameModerator:  70,
    hero: 70,
    build: 70,
    total:  70,
    killOneGame: 70,
    killTwoGame:  70,
    killThreeGame:  70,
    killFourGame: 70,
    killFiveGame: 70,
  },
  {
    avatarMurders: "../../../src/images/avatar7.png",
    avatar: "../../../src/images/avatar7.png",
    name: "JohnTrawolta_4",
    kill: 70,
    death: 70,
    assist: 70,
    siteOrganizer: 70,
    gameModerator:  70,
    hero: 70,
    build: 70,
    total:  70,
    killOneGame: 70,
    killTwoGame:  70,
    killThreeGame:  70,
    killFourGame: 70,
    killFiveGame: 70,
  },
  {
    avatarMurders: "../../../src/images/avatar7.png",
    avatar: "../../../src/images/avatar7.png",
    name: "JohnTrawolta_4",
    kill: 70,
    death: 70,
    assist: 70,
    siteOrganizer: 70,
    gameModerator:  70,
    hero: 70,
    build: 70,
    total:  70,
    killOneGame: 70,
    killTwoGame:  70,
    killThreeGame:  70,
    killFourGame: 70,
    killFiveGame: 70,
  },
  {
    avatarMurders: "../../../src/images/avatar7.png",
    avatar: "../../../src/images/avatar7.png",
    name: "JohnTrawolta_4",
    kill: 70,
    death: 70,
    assist: 70,
    siteOrganizer: 70,
    gameModerator:  70,
    hero: 70,
    build: 70,
    total:  70,
    killOneGame: 70,
    killTwoGame:  70,
    killThreeGame:  70,
    killFourGame: 70,
    killFiveGame: 70,
  },
  {
    avatarMurders: "../../../src/images/avatar7.png",
    avatar: "../../../src/images/avatar7.png",
    name: "JohnTrawolta_4",
    kill: 70,
    death: 70,
    assist: 70,
    siteOrganizer: 70,
    gameModerator:  70,
    hero: 70,
    build: 70,
    total:  70,
    killOneGame: 70,
    killTwoGame:  70,
    killThreeGame:  70,
    killFourGame: 70,
    killFiveGame: 70,
  },

];
function hideElement(selector) {
  document.querySelector(selector).style.display = 'none';
}

let isLobby = false;
const lobbyStatistic = '.lobby__statictic';
const lobbyStatisticName = '.details__name-teams';
const lobbyStatisticDescrip = '.statictic__description';

new staticticNameTeams(lobbyStatistic,[  {
  flagTeam: "../../../src/images/flag.png",
  nameTeam: "PlayFair Display$$$",
},]);

new LobbyStatisticInfo(lobbyStatistic);

setTimeout(() => {
  if (!isLobby) {
    new LobbyStatisticSideA(lobbyStatistic, infoPlalers);
    new LobbyStatisticSideB(lobbyStatistic, infoPlalers);
    isLobby = true;

    hideElement(lobbyStatisticName);
    hideElement(lobbyStatisticDescrip);
  }
}, 5000);





















// //! ---- Create Header ----
// new CreateHeader(".details", [
//   {
//     flagTeam: "../../../src/images/flag.png",
//     nameTeam: "Natus Vincere",
//   },
// ]);

// //! ---- Create Teams ----
// const now = new Date().getTime();
// let countDownDate = now + 2 * 60 * 1000;
// new CreateTeams(
//   ".details__teams",
//   [{ rang: [{ sideA: 1320, sideB: 1257 }] }],
//   countDownDate
// );

// //! ---- Create Players ----
// export let lengthCreateSides: number | null = null;
// const createSideA = [
//   {
//     avatar: "../../../src/images/avatar7.png",
//     flag: "../../../src/images/flag.png",
//     name: "JohnTrawolta_4",
//     kill: 70,
//     death: 70,
//     assist: 70,
//   },
//   {
//     avatar: "../../../src/images/avatar7.png",
//     flag: "../../../src/images/flag.png",
//     name: "John",
//     kill: 70,
//     death: 70,
//     assist: 70,
//   },
//   {
//     avatar: "../../../src/images/avatar7.png",
//     flag: "../../../src/images/flag.png",
//     name: "JohnTrawolta_4",
//     kill: 70,
//     death: 70,
//     assist: 70,
//   },
//   {
//     avatar: "../../../src/images/avatar7.png",
//     flag: "../../../src/images/flag.png",
//     name: "JohnTrawolta_4",
//     kill: 70,
//     death: 70,
//     assist: 70,
//   },
//   // {
//   //   avatar: "../../../src/images/avatar7.png",
//   //   flag: "../../../src/images/flag.png",
//   //   name: "JohnTrawolta_4",
//   //   kill: 70,
//   //   death: 70,
//   //   assist: 70,
//   // },
// ];
// const createSideB = [
//   {
//     avatar: "../../../src/images/avatar7.png",
//     flag: "../../../src/images/flag.png",
//     name: "JohnTrawolta_4",
//     kill: 70,
//     death: 70,
//     assist: 70,
//   },
//   {
//     avatar: "../../../src/images/avatar7.png",
//     flag: "../../../src/images/flag.png",
//     name: "JohnTrawolta_4",
//     kill: 70,
//     death: 70,
//     assist: 70,
//   },
//   {
//     avatar: "../../../src/images/avatar7.png",
//     flag: "../../../src/images/flag.png",
//     name: "JohnTrawolta_4",
//     kill: 70,
//     death: 70,
//     assist: 70,
//   },
//   {
//     avatar: "../../../src/images/avatar7.png",
//     flag: "../../../src/images/flag.png",
//     name: "JohnTrawolta_4",
//     kill: 70,
//     death: 70,
//     assist: 70,
//   },
//   {
//     avatar: "../../../src/images/avatar7.png",
//     flag: "../../../src/images/flag.png",
//     name: "JohnTrawolta_4",
//     kill: 70,
//     death: 70,
//     assist: 70,
//   },
// ];
const createInfo = [
  {
    map: "Lake",
    rate: 5000,
    regime: "5x5",
    participants: 0,
    id: 54692725,
  },
];

// lengthCreateSides = createSideA.length + createSideB.length;
// createInfo[0].participants = lengthCreateSides;
// if (lengthCreateSides === 10) {
//   setTimeout(() => {
//     $(".details__square").css("display", "block");
//     $(".details__teams-time")
//       .css("display", "none")
//       .replaceWith('<p class="details__teams-time_sub">- : -</p>');
//     $(".details__teams-text").css("display", "none");
//   }, 5000);
// }
// //! ---- Create Info ----
new CreateInfo(".details", createInfo);
// new CreatePlayersSideA(".details__players-item", createSideA);
// new CreatePlayersSideB(".details__players-item_sub", createSideB);
