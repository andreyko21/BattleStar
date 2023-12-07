import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./../styles/components/tournaments/slider.scss";
import Sprite from "./../images/sprite.svg";
import TournamentCard from "./tournaments/card";
import { PagePagination } from "./tournaments/pagination";
import { Pagination } from "./teams/pagination";
import { BaseTabs } from "./../ts/component/tabs";
import { LavaLamp } from "./../ts/component/lava-lamp";

interface TournamentData {
  id: string;
  title: string;
  description: string;
  date: string;
  teams: { name: string; rank: number; avatar: string }[];
  imageUrl: string;
}

class TournamentSwiper {
  private containerId: string;
  private tournaments: TournamentData[];
  swiper: Swiper | null = null;

  constructor(containerId: string, tournaments: TournamentData[]) {
    this.containerId = containerId;
    this.tournaments = tournaments;
    this.render();
    this.initializeSwiper();
  }

  private render(): void {
    const slidesHtml = this.tournaments
      .map(
        (tournament) =>
          `<div class="tournaments-swiper__swiper-slide swiper-slide tournaments-slide">
                <div class="tournaments-slide__img">
                    <img src="${tournament.imageUrl}" alt="${
            tournament.title
          }" />
                </div>
                <div class="tournaments-slide__sidebar">
                    <h2 class="tournaments-slide__title">${
                      tournament.title
                    }</h2>
                    <p class="tournaments-slide__description">${
                      tournament.description
                    }</p>
                    <p class="tournaments-slide__date">${tournament.date}</p>
                    <p class="tournaments-slide__commands-title">${
                      tournament.teams.length
                    } команд зарегистрированы:</p>
                    <div class="tournaments-slide__commands">
                        <div class="tournaments-slide__commands-list">
                            ${tournament.teams
                              .map(
                                (team) =>
                                  `<a class="tournaments-slide__commands-item" href="#">
                                    <div class="tournaments-slide__commands-item-avatar">
                                        <img src="${team.avatar}" alt="${team.name}" />
                                    </div>
                                    <p class="tournaments-slide__commands-item-name">${team.name}</p>
                                    <p class="tournaments-slide__commands-item-rank">${team.rank}</p>
                                </a>`
                              )
                              .join("")}
                        </div>
                    </div>
                    <button class="tournaments-slide__button">Подать заявку</button>
                </div>
            </div>`
      )
      .join("");

    const container = document.getElementById(this.containerId);
    if (container) {
      container.innerHTML = `
                <div class="tournament-page__tournaments-swiper-container">
                    <div class="tournaments-swiper__button-prev">
                        <svg class="tournaments-swiper__button-next-icon">
              <use xlink:href="${Sprite}#arrow-left"></use>
            </svg>
                    </div>
                    <div class="tournaments-swiper swiper">
                        <div class="tournaments-swiper__swiper-wrapper swiper-wrapper">
                            ${slidesHtml}
                        </div>
                    </div>
                    <div class="tournaments-swiper__button-next">
                        <svg class="tournaments-swiper__button-next-icon">
              <use xlink:href="${Sprite}#arrow-right"></use>
            </svg>
                    </div>
                </div>
            `;
    }
  }

  private initializeSwiper(): void {
    this.swiper = new Swiper(".swiper", {
      modules: [Navigation],
      loop: true,
      navigation: {
        nextEl: ".tournaments-swiper__button-next",
        prevEl: ".tournaments-swiper__button-prev",
      },
    });
  }
}

const tournamentData: TournamentData[] = [
  {
    id: "tournament1",
    title: "Major Stockholm 2021",
    description: "Призовой фонд 200000 $",
    date: "23 Окт - 7 Ноя",
    teams: [
      { name: "JJJASON_Team", rank: 1769, avatar: "./src/images/teamAva.png" },
      { name: "JJJASON_Team", rank: 1769, avatar: "./src/images/teamAva.png" },
      { name: "JJJASON_Team", rank: 1769, avatar: "./src/images/teamAva.png" },
      { name: "JJJASON_Team", rank: 1769, avatar: "./src/images/teamAva.png" },
      { name: "JJJASON_Team", rank: 1769, avatar: "./src/images/teamAva.png" },
    ],
    imageUrl: "./src/images/major.png",
  },
  {
    id: "tournament1",
    title: "Major Stockholm 2021",
    description: "Призовой фонд 200000 $",
    date: "23 Окт - 7 Ноя",
    teams: [
      { name: "JJJASON_Team", rank: 1769, avatar: "./src/images/teamAva.png" },
      { name: "JJJASON_Team", rank: 1769, avatar: "./src/images/teamAva.png" },
      { name: "JJJASON_Team", rank: 1769, avatar: "./src/images/teamAva.png" },
      { name: "JJJASON_Team", rank: 1769, avatar: "./src/images/teamAva.png" },
      { name: "JJJASON_Team", rank: 1769, avatar: "./src/images/teamAva.png" },
    ],
    imageUrl: "./src/images/major.png",
  },
];

new TournamentSwiper("tournament-container", tournamentData);
new TournamentCard("tournaments-cards-block", [
  {
    id: "tournament1",
    imageUrl: "./src/images/tournamentCard.png",
    date: "23 Окт - Начало в 14:00",
    name: "NAC Sport Championship 2020",
    prize: "200000 $",
    minRating: "1200+",
    regionLimit: "Весь мир",
  },
  {
    id: "tournament1",
    imageUrl: "./src/images/tournamentCard.png",
    date: "23 Окт - Начало в 14:00",
    name: "NAC Sport Championship 2020",
    prize: "200000 $",
    minRating: "1200+",
    regionLimit: "Весь мир",
  },
  {
    id: "tournament1",
    imageUrl: "./src/images/tournamentCard.png",
    date: "23 Окт - Начало в 14:00",
    name: "NAC Sport Championship 2020",
    prize: "200000 $",
    minRating: "1200+",
    regionLimit: "Весь мир",
  },
  {
    id: "tournament1",
    imageUrl: "./src/images/tournamentCard.png",
    date: "23 Окт - Начало в 14:00",
    name: "NAC Sport Championship 2020",
    prize: "200000 $",
    minRating: "1200+",
    regionLimit: "Весь мир",
  },
  {
    id: "tournament1",
    imageUrl: "./src/images/tournamentCard.png",
    date: "23 Окт - Начало в 14:00",
    name: "NAC Sport Championship 2020",
    prize: "200000 $",
    minRating: "1200+",
    regionLimit: "Весь мир",
  },
  {
    id: "tournament1",
    imageUrl: "./src/images/tournamentCard.png",
    date: "23 Окт - Начало в 14:00",
    name: "NAC Sport Championship 2020",
    prize: "200000 $",
    minRating: "1200+",
    regionLimit: "Весь мир",
  },
  {
    id: "tournament1",
    imageUrl: "./src/images/tournamentCard.png",
    date: "23 Окт - Начало в 14:00",
    name: "NAC Sport Championship 2020",
    prize: "200000 $",
    minRating: "1200+",
    regionLimit: "Весь мир",
  },
  {
    id: "tournament1",
    imageUrl: "./src/images/tournamentCard.png",
    date: "23 Окт - Начало в 14:00",
    name: "NAC Sport Championship 2020",
    prize: "200000 $",
    minRating: "1200+",
    regionLimit: "Весь мир",
  },
  {
    id: "tournament1",
    imageUrl: "./src/images/tournamentCard.png",
    date: "23 Окт - Начало в 14:00",
    name: "NAC Sport Championship 2020",
    prize: "200000 $",
    minRating: "1200+",
    regionLimit: "Весь мир",
  },
]);

const meta = {
  pagination: {
    pageCount: 4,
  },
};

const currentPage = 1;

new PagePagination("page-pagination", meta, currentPage);
new Pagination(meta, currentPage);

new BaseTabs("tabs");
new LavaLamp("tabs");
