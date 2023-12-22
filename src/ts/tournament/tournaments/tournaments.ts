import $ from "jquery";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./../../../styles/components/tournaments/slider.scss";
import Sprite from "./../../../images/sprite.svg";
import TournamentCard from "./components/card";
import { PagePagination } from "./components/pagination";
import { Pagination } from "./../../teams/pagination";
import { BaseTabs } from "./../../component/tabs";
import { LavaLamp } from "../../component/lava-lamp";
import "./../../component/header/header";
import request from "graphql-request";
import { getLocateParam } from "../../functions/windowLocation";
import {
  GetAllCs2Tournaments,
  GetAllDota2Tournaments,
} from "../../../../queries.graphql.d";
import { TabsCreate } from "../../component/tabs-create";
import { Header } from "../../component/header/header";

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

$(document).ready(async () => {
  let queryParam, tournament: any, tournamentData: any, currentPage;
  if (getLocateParam("game") == "dota2") {
    queryParam = GetAllDota2Tournaments;
  } else {
    queryParam = GetAllCs2Tournaments;
  }
  if (getLocateParam("page")) {
    currentPage = getLocateParam("page");
  } else {
    currentPage = 1;
  }

  const ENDPOINT = "https://battle-star-app.onrender.com/graphql";
  tournament = await request(
    ENDPOINT,
    queryParam,
    { currentPage, pageSize: 9 },
    {
      Authorization:
        "Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912",
    }
  );

  if (tournament.dota2Tournaments) {
    tournamentData = tournament.dota2Tournaments;
  } else {
    tournamentData = tournament.cs2Tournaments;
  }
  new PagePagination("page-pagination", tournamentData.meta, 1);
  new Pagination(tournamentData.meta, 1);
  new TournamentCard("tournaments-cards-block", [
    ...tournamentData.data.map(
      (item: {
        id: any;
        attributes: {
          Tournament: {
            time: any;
            startDate: any;
            logo: { data: { attributes: { url: any } } };
            name: any;
          };
        };
      }) => {
        return {
          id: item.id,
          imageUrl: item.attributes.Tournament.logo.data.attributes.url,
          date: `${formatDate(
            item.attributes.Tournament.startDate
          )} - Начало в ${item.attributes.Tournament.time
            .split(":")
            .slice(0, 2)
            .join(":")}`,
          name: item.attributes?.Tournament?.name,
          prize: "200000 $",
          minRating: "1200+",
          regionLimit: "Весь мир",
        };
      }
    ),
  ]);

  const tournamentsData: TournamentData[] = [
    ...tournamentData.data.map(
      (item: {
        id: any;
        attributes: {
          teams: any;
          Tournament: {
            endDate: any;
            description: any;
            time: any;
            startDate: any;
            logo: { data: { attributes: { url: any } } };
            name: any;
          };
        };
      }) => {
        return {
          id: item.id,
          title: item.attributes?.Tournament?.name,
          description: item.attributes.Tournament.description,
          imageUrl: item.attributes.Tournament.logo.data.attributes.url,
          date: `${formatDate(
            item.attributes.Tournament.startDate
          )} - ${formatDate(item.attributes.Tournament.endDate)}`,
          teams: item.attributes.teams.data.map(
            (team: {
              attributes: {
                Team: {
                  logo: any;
                  name: any;
                  rating: any;
                };
              };
            }) => ({
              name: team.attributes.Team.name,
              rank: team.attributes.Team.rating,
              avatar: team.attributes.Team.logo.data.attributes.url,
            })
          ),
        };
      }
    ),
  ];

  new TournamentSwiper("tournament-container", tournamentsData);
});

function formatDate(inputDate: string | number | Date) {
  const months = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ];
  const date = new Date(inputDate);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const formattedDate = day + " " + months[monthIndex];
  return formattedDate;
}

new TabsCreate("tournaments-nav__tabs", "match-page__filters", [
  ["amateurTournaments", "ЛЮБИТЕЛЬСКИЕ ТУРНИРЫ"],
  ["profesionalTournaments", "ПРОФЕССИОНАЛЬНЫЕ ТУРНИРЫ"],
]);
$("#tournamentGrid-content").addClass("tabs-block__content-container_active");
new BaseTabs("match-page__filters");

new LavaLamp("match-page__filters");

$(document).ready(() => {
  new Header("#wrapper");
  $('.tournaments-nav__create-button').on('click', () => {
    const locParam = getLocateParam("game");
    if (locParam == undefined || locParam == null) {
      window.location.href = '/createTournament.html?game="cs2"'
    } else {
      window.location.href = `/createTournament.html?game="${locParam}"`
    }
  })
})