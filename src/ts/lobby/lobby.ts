import $ from "jquery";
import {
  CreateHeader,
  CreateInfo,
  CreateTeams,
  CreatePlayersSideA,
  CreatePlayersSideB,

} from "./createTeams";

//! ---- Create Header ----
new CreateHeader(".details__name", [
  {
    flag: "../../../src/images/flag.png",
    name: "Natus Vincere",
  },
]);

//! ---- Create Teams ----
const now = new Date().getTime();
let countDownDate = now + 2 * 60 * 1000;
new CreateTeams(
  ".details__teams",
  [{ rang: [{ sideA: 1320, sideB: 1257 }] }],
  countDownDate
);

//! ---- Create Players ----
export let lengthCreateSides: number | null = null;
const createSideA = [
  {
    avatar: "../../../src/images/avatar7.png",
    flag: "../../../src/images/flag.png",
    name: "JohnTrawolta_4",
    kill: 70,
    death: 70,
    assist: 70,
  },
  {
    avatar: "../../../src/images/avatar7.png",
    flag: "../../../src/images/flag.png",
    name: "John",
    kill: 70,
    death: 70,
    assist: 70,
  },
  {
    avatar: "../../../src/images/avatar7.png",
    flag: "../../../src/images/flag.png",
    name: "JohnTrawolta_4",
    kill: 70,
    death: 70,
    assist: 70,
  },
  {
    avatar: "../../../src/images/avatar7.png",
    flag: "../../../src/images/flag.png",
    name: "JohnTrawolta_4",
    kill: 70,
    death: 70,
    assist: 70,
  },
  {
    avatar: "../../../src/images/avatar7.png",
    flag: "../../../src/images/flag.png",
    name: "JohnTrawolta_4",
    kill: 70,
    death: 70,
    assist: 70,
  },
];
const createSideB = [
  {
    avatar: "../../../src/images/avatar7.png",
    flag: "../../../src/images/flag.png",
    name: "JohnTrawolta_4",
    kill: 70,
    death: 70,
    assist: 70,
  },
  {
    avatar: "../../../src/images/avatar7.png",
    flag: "../../../src/images/flag.png",
    name: "JohnTrawolta_4",
    kill: 70,
    death: 70,
    assist: 70,
  },
  {
    avatar: "../../../src/images/avatar7.png",
    flag: "../../../src/images/flag.png",
    name: "JohnTrawolta_4",
    kill: 70,
    death: 70,
    assist: 70,
  },
  {
    avatar: "../../../src/images/avatar7.png",
    flag: "../../../src/images/flag.png",
    name: "JohnTrawolta_4",
    kill: 70,
    death: 70,
    assist: 70,
  },
  {
    avatar: "../../../src/images/avatar7.png",
    flag: "../../../src/images/flag.png",
    name: "JohnTrawolta_4",
    kill: 70,
    death: 70,
    assist: 70,
  },
];
const createInfo = [
  {
    map: "Lake",
    rate: 5000,
    regime: "5x5",
    participants: 0,
    id: 54692725,
  },
];

lengthCreateSides = createSideA.length + createSideB.length;
createInfo[0].participants = lengthCreateSides;
if (lengthCreateSides === 10) {
  setTimeout(() => {
    $(".details__square").css("display", "block");
    $(".details__teams-time")
      .css("display", "none")
      .replaceWith('<p class="details__teams-time_sub">- : -</p>');
    $(".details__teams-text").css("display", "none");
  }, 5000);
}
//! ---- Create Info ----
new CreateInfo(".details__info-row", createInfo);
new CreatePlayersSideA(".details__players-item", createSideA);
new CreatePlayersSideB(".details__players-item_sub", createSideB);
