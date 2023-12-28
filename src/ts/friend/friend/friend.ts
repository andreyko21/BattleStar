import $ from "jquery";
import Chart from "chart.js/auto";
import Sprite from "./../../../images/sprite.svg";
import { TabsCreate } from "../../component/tabs-create";
import { BaseTabs } from "../../component/tabs";
import { LavaLamp } from "../../component/lava-lamp";
import UserAvatar from "./../../../images/user-page/avatar.png";
import TeamAvatar from "./../../../images/user-page/team-avatar.png";
import AwardImg from "./../../../images/user-page/award.svg";
import { Header } from "../../component/header/header";
import { AppSidebar } from "../../component/sidebar/sidebar";

interface IStatisticsCSRating {
  rang: number;
  rangImg: string;
  tour: number;
  winrate: number;
  time: number;
}

export class StatisticsCsRating {
  private content: string;
  private statistics: IStatisticsCSRating[];

  constructor(content: string, statistics: IStatisticsCSRating[]) {
    this.content = content;
    this.statistics = statistics;
    this.renderStatisticsCsRating();
  }
  renderStatisticsCsRating() {
    const StatisticsCsTopHtml = `
   <div class="statistics__top-rating">
   <h1 class="statistics__top-rating-title">Ранг: <span>${this.statistics[0].rang}</span></h1>
   <div class="statistics__top-rating-rang">
      <img src="${this.statistics[0].rangImg}" alt="rang">
   </div>
</div>
<div class="statistics__top-info">
   <div class="statistics__top-info-tour">
      <svg>
         <use xlink:href="${Sprite}#tourney"></use>
      </svg>
      <p class="statistics__top-info-text">${this.statistics[0].tour}<span>Турнира</span></p>
   </div>
   <div class="statistics__top-info-winrate">
      <svg>
         <use xlink:href="${Sprite}#winrate"></use>
      </svg>
      <p class="statistics__top-info-text">${this.statistics[0].winrate} %<span>Винрейт</span></p>
   </div>
   <div class="statistics__top-info-time">
      <svg>
         <use xlink:href="${Sprite}#time"></use>
      </svg>
      <p class="statistics__top-info-text">${this.statistics[0].time}<span>Часов в игре</span></p>
   </div>
</div>
   `;

    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML = StatisticsCsTopHtml;
    }
  }
}
const statisticsRating = [
  {
    rang: 1682,
    rangImg: "../../../src/images/rank.png",
    tour: 2,
    winrate: 60,
    time: 200,
  },
];

interface IStatisticsCs {
  matchesPlayed: number;
  mapsPlayed: number;
  win: number;
  defeated: number;
  kill: number;
  death: number;
}

export class StatisticsCs {
  private content: string;
  private statistics: IStatisticsCs[];

  constructor(content: string, statistics: IStatisticsCs[]) {
    this.content = content;
    this.statistics = statistics;
    this.renderStatisticsCs();
  }

  renderStatisticsCs() {
    const StatisticsCsHtml = `
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
    </div>`;

    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML = StatisticsCsHtml;
    }

    let canvas = document.getElementById("cs") as HTMLCanvasElement;
    if (canvas) {
      let ctxs = canvas.getContext("2d") as CanvasRenderingContext2D;

      new Chart(ctxs, {
        type: "bar",
        data: {
          labels: [
            "Точность, %",
            "Попадания в голову, %",
            "Живучесть, %",
            "Живучесть, %",
            "Попадания в голову, %",
            "Точность, %",
          ],
          datasets: [
            {
              label: "Статистика",
              data: [95, 51, 80, 68, 60, 30],
              backgroundColor: "#FAC704",
              borderColor: "#E1C65E",
              borderWidth: 1,
              borderRadius: 6,
              barThickness: 20,
            },
          ],
        },
        options: {
          scales: {
            y: {
              min: 0,
              max: 100,
              beginAtZero: true,
              ticks: {
                autoSkip: true,
                maxRotation: 0,
                color: "#fff",
                stepSize: 25,
              },
              grid: {
                color: "rgba(248, 248, 248, 0.20)",
              },
            },
            x: {
              ticks: {
                autoSkip: true,
                maxRotation: 0,
                color: "#fff",
              },
              grid: {
                color: "rgba(248, 248, 248, 0.20)",
              },
            },
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                font: {
                  size: 15,
                  family: "Roboto",
                  weight: 500,
                },
              },
            },
          },
        },
      });
    }

    console.log(canvas);
  }
}

const statisticsCs = [
  {
    matchesPlayed: 1023,
    mapsPlayed: 23,
    win: 798,
    defeated: 225,
    kill: 2304,
    death: 1389,
  },
];

interface IStatisticsDota {
  matchesPlayed: number;
  mapsPlayed: number;
  win: number;
  defeated: number;
  kill: number;
  death: number;
}

export class StatisticsDota {
  private content: string;
  private statistics: IStatisticsDota[];

  constructor(content: string, statistics: IStatisticsDota[]) {
    this.content = content;
    this.statistics = statistics;
    this.renderStatisticsDota();
  }

  renderStatisticsDota() {
    const StatisticsCsHtml = `
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
     </div>`;

    const content = document.querySelector(this.content);
    if (content) {
      content.innerHTML = StatisticsCsHtml;
    }

    let canvas = document.getElementById("dota") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["Гибкость", "Файтинг", "Пушинг", "Поддержка", "Фарминг"],
        datasets: [
          {
            data: [10, 10, 10, 10, 10],
            backgroundColor: "rgba(250, 199, 4, 0.30)",
            borderColor: "#E1C65E",
            pointBackgroundColor: "#FAC704",
            pointBorderColor: "#FAC704",
            pointRadius: 5,
          },
        ],
      },
      options: {
        scales: {
          r: {
            angleLines: {
              color: "#BFBFBF",
            },
            ticks: {
              display: false,
              maxTicksLimit: 7,
              font: {
                size: 12,
                family: "Roboto",
                weight: 500,
              },
            },
            pointLabels: {
              font: {
                size: 12,
                family: "Roboto",
                weight: 500,
              },
              padding: 10,
            },
            grid: {
              color: "#23252C",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          arc: {
            backgroundColor: "#fff",
          },
        },
      },
    });

    console.log(canvas);
  }
}

interface User {
  avatar: string;
  name: string;
  isOnline: boolean;
  firstGameDate: string;
  biography: string;
}

interface Friend {
  onlineStatus: string;
  avatar: string;
  name: string;
  status: string;
}

interface Team {
  link: string;
  avatar: string;
  name: string;
  rating: number;
  tournaments: number;
  earned: string;
  members: number;
  award: string;
}

interface FriendsData {
  online: Friend[];
  all: Friend[];
}

class FriendPage {
  private container: JQuery<HTMLElement>;
  private user: User;
  private friendsData: FriendsData;
  private teams: Team[];

  constructor(
    containerId: string,
    user: User,
    friendsData: FriendsData,
    teams: Team[]
  ) {
    this.container = $(containerId);
    this.user = user;
    this.friendsData = friendsData;
    this.teams = teams;

    this.render();
    this.attachMenuEventHandlers();
    this.attachExpandButtonHandler();
  }

  private render(): void {
    this.container.append(this.createSection());
  }

  private createSection(): string {
    return `
      <section class="page__user-section user-section">
        ${this.createUserHeader()}
        ${this.createUserMain()}
        ${this.createUserFooter()}
      </section>`;
  }

  private createUserHeader(): string {
    return `
      <div class="user-section__header">
        <div class="user-section__information-block">
          <div class="user-section__information-block-avatar">
            <img src="${this.user.avatar}" alt="${this.user.name}" />
          </div>
          <p class="user-section__information-block-name">
            ${this.user.name}
            <span class="user-section__information-block-online-status ${
              this.user.isOnline
                ? "user-section__information-block-online-status_online"
                : ""
            }">
              ${this.user.isOnline ? "Онлайн" : "Оффлайн"}
            </span>
          </p>
          <p class="user-section__information-block-first-game">в игре с ${
            this.user.firstGameDate
          }</p>
          <p class="user-section__information-block-biography">${
            this.user.biography
          }</p>
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
      </div>`;
  }

  private createUserMain(): string {
    return `
      <div class="user-section__main">
        <div class="user-section__main-sidebar">
          ${this.createUserFriends("Друзья онлайн", this.friendsData.online)}
          ${this.createUserFriends("Все друзья", this.friendsData.all)}
        </div>
        <div class="user-section__main-statistics" id="main-statistics"></div>
      </div>`;
  }

  private createUserFriends(title: string, friendsList: Friend[]): string {
    return `
      <div class="user-section__main-sidebar-friends">
        <div class="user-section__main-sidebar-friends-title">
          <p class="user-section__main-sidebar-friends-title-text">${title}</p>
          <hr />
          <p class="user-section__main-sidebar-friends-amount">(${
            friendsList.length
          })</p>
        </div>
        <div class="user-section__main-sidebar-friends-list">
          ${friendsList
            .map((friend) => this.createUserFriendItem(friend))
            .join("")}
        </div>
      </div>`;
  }

  private attachMenuEventHandlers(): void {
    this.container.find(".user").each((_index, element) => {
      const $element = $(element);

      $element.find(".user__setting-button").on("click", function () {
        $element.find(".user-menu").toggle();
      });

      $element.on("mouseleave", function () {
        $element.find(".user-menu").hide();
      });
    });
  }

  private attachExpandButtonHandler(): void {
    this.container.on("click", ".teams-info-block__more-teams-button", () => {
      const moreTeams = this.container.find(".team-list__additional-teams");
      moreTeams.toggle();

      const buttonText = moreTeams.is(":visible") ? "Свернуть" : "Развернуть";
      this.container
        .find(".teams-info-block__more-teams-button")
        .text(buttonText);
    });
  }

  private createUserFriendItem(friend: Friend): string {
    return `
      <div class="user">
        <div class="user__avatar">
          <div class="user__online-status ${friend.onlineStatus}"></div>
          <img src="${friend.avatar}" alt="${friend.name}" />
        </div>
        <p class="user__name">${friend.name}</p>
        <p class="user__status">${friend.status}</p>
        <button class="user__setting-button">
          <svg class="friends-page__sidebar-setting-icon">
            <use xlink:href="${Sprite}#more"></use>
          </svg>
        </button>
        <div class="user-menu" style="display: none">
          <button class="user-menu__button">
            <svg class="user-menu__button-icon">
              <use xlink:href="${Sprite}#account"></use>
            </svg>
            Открыть профиль
          </button>
          <button class="user-menu__button">
            <svg class="user-menu__button-icon user-menu__button-icon_succes">
              <use xlink:href="${Sprite}#addUser"></use>
            </svg>
            Добавить в друзья
          </button>
          <button class="user-menu__button">
            <svg class="user-menu__button-icon">
              <use xlink:href="${Sprite}#share"></use>
            </svg>
            Поделиться профилем
          </button>
          <button class="user-menu__button">
            <svg class="user-menu__button-icon user-menu__button-icon_warn">
              <use xlink:href="${Sprite}#flag"></use>
            </svg>
            Пожаловаться
          </button>
          <button class="user-menu__button">
            <svg class="user-menu__button-icon user-menu__button-icon_warn">
              <use xlink:href="${Sprite}#blacklist"></use>
            </svg>
            Заблокировать
          </button>
        </div>
      </div>`;
  }

  private createUserFooter(): string {
    if (!this.teams || this.teams.length === 0) {
      return "";
    }

    const initialTeams = this.teams.slice(0, 3);
    const teamsHtml = this.createTeamsListHtml(initialTeams);

    const loadMoreButton =
      this.teams.length > 3 ? this.createMoreTeamsButton() : "";

    return `
      <div class="user-section__footer">
        <div class="user-section__teams-info-block teams-info-block">
         
          <div class="teams-info-block__team-list team-list">
            ${teamsHtml}
          </div>
          ${loadMoreButton}
        </div>
      </div>`;
  }

  private createTeamsListHtml(teams: Team[]): string {
    return teams
      .map((team) => {
        return `
        <a class="team-list__team" href="#">
          ${this.createTeamListItem(team)}
        </a>`;
      })
      .join("");
  }

  private createMoreTeamsButton(): string {
    return `
      <button class="teams-info-block__more-teams-button">
        Развернуть
        <svg class="teams-info-block__more-teams-button-icon">
          <use xlink:href="src/images/sprite.svg#arrow-down"></use>
        </svg>
      </button>`;
  }

  private createTeamListItem(team: Team): string {
    return `
      <a class="team-list__team" href="${team.link}">
        <div class="team-list__team-avatar">
          <img src="${team.avatar}" alt="${team.name}" />
        </div>
        <p class="team-list__team-name">${team.name}</p>
        <div class="team-list__team-info team-list__team-rating">
          <p class="team-list__team-info-title team-list__team-rating-title">Рейтинг</p>
          <p class="team-list__team-info-value team-list__team-rating-value">${team.rating}</p>
        </div>
        <div class="team-list__team-info team-list__team-tournaments">
          <p class="team-list__team-info-title team-list__team-tournaments-title">Турниров</p>
          <p class="team-list__team-info-value team-list__team-tournaments-value">${team.tournaments}</p>
        </div>
        <div class="team-list__team-info team-list__team-earned">
          <p class="team-list__team-info-title team-list__team-earned-title">Выиграно</p>
          <p class="team-list__team-info-value team-list__team-earned-value">${team.earned}</p>
        </div>
        <div class="team-list__team-info team-list__team-earned">
          <p class="team-list__team-info-title team-list__team-earned-title">Участников</p>
          <p class="team-list__team-info-value team-list__team-earned-value">${team.members}</p>
        </div>
        <div class="team-list__team-awards">
          <div class="team-list__team-awards-item">
            <img src="${team.award}" alt="award" />
          </div>
        </div>
      </a>`;
  }
}

export default FriendPage;

$(document).ready(() => {
  const user: User = {
    avatar: UserAvatar,
    name: "John Doe",
    isOnline: true,
    firstGameDate: "January 1, 2020",
    biography: "Gamer biography here",
  };

  const friendsData: FriendsData = {
    online: [
      {
        onlineStatus: "online",
        avatar: UserAvatar,
        name: "Friend One",
        status: "Playing Game A",
      },
      {
        onlineStatus: "offline",
        avatar: UserAvatar,
        name: "Friend Two",
        status: "Last seen 2 hours ago",
      },
    ],
    all: [
      {
        onlineStatus: "online",
        avatar: UserAvatar,
        name: "Friend One",
        status: "Playing Game A",
      },
      {
        onlineStatus: "offline",
        avatar: UserAvatar,
        name: "Friend Two",
        status: "Last seen 2 hours ago",
      },
      {
        onlineStatus: "online",
        avatar: UserAvatar,
        name: "Friend One",
        status: "Playing Game A",
      },
      {
        onlineStatus: "offline",
        avatar: UserAvatar,
        name: "Friend Two",
        status: "Last seen 2 hours ago",
      },
    ],
  };

  const teams: Team[] = [
    {
      link: "#",
      avatar: TeamAvatar,
      name: "Team One",
      rating: 2000,
      tournaments: 5,
      earned: "5000 BS",
      members: 10,
      award: AwardImg,
    },
    {
      link: "#",
      avatar: TeamAvatar,
      name: "Team One",
      rating: 2000,
      tournaments: 5,
      earned: "5000 BS",
      members: 10,
      award: AwardImg,
    },
    {
      link: "#",
      avatar: TeamAvatar,
      name: "Team One",
      rating: 2000,
      tournaments: 5,
      earned: "5000 BS",
      members: 10,
      award: AwardImg,
    },
    {
      link: "#",
      avatar: TeamAvatar,
      name: "Team One",
      rating: 2000,
      tournaments: 5,
      earned: "5000 BS",
      members: 10,
      award: AwardImg,
    },
    {
      link: "#",
      avatar: TeamAvatar,
      name: "Team One",
      rating: 2000,
      tournaments: 5,
      earned: "5000 BS",
      members: 10,
      award: AwardImg,
    },
    {
      link: "#",
      avatar: TeamAvatar,
      name: "Team One",
      rating: 2000,
      tournaments: 5,
      earned: "5000 BS",
      members: 10,
      award: AwardImg,
    },
  ];
  new Header("#wrapper");
  new AppSidebar("wrapper", "ДРУЗЬЯ");
  new FriendPage(".page__container", user, friendsData, teams);
  new TabsCreate("main-statistics", "user-page__filters", [
    ["cs2", "CS2"],
    ["dota2", "Dota2"],
  ]);

  $("#cs2-content").addClass("tabs-block__content-container_active");

  new BaseTabs("user-page__filters");
  new LavaLamp("user-page__filters");
  $("#dota2-content")
    .append(`<div class="dota2-info-block statistics__top"></div>
  <div class="dota2-content-block statistics__dota"></div>`);
  $("#cs2-content").append(`<div class="cs2-info-block statistics__top"></div>
  <div class="cs2-content-block statistics__cs"></div>`);
  new StatisticsCsRating(".dota2-info-block", statisticsRating);
  new StatisticsCsRating(".cs2-info-block", statisticsRating);
  new StatisticsDota(".dota2-content-block", statisticsCs);
  new StatisticsCs(".cs2-content-block", statisticsCs);
});
