import $ from "jquery";
import { TabsCreate } from "./../component/tabs-create.ts";
import { BaseTabs } from "./../component/tabs.ts";
import { LavaLamp } from "./../component/lava-lamp.ts";
import { Header } from "../component/header/header";
import { AppSidebar } from "../component/sidebar/sidebar";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { request } from "graphql-request";
import {
  GetPageNewsQuery,
  GetTopPlayer,
  GetTopPlayerDota,
  GetMainNewsQuery,
  GetMapsQuery,
} from "../../../queries.graphql.d";
import { Card } from "./../component/card";
import { cardNews } from "./components/card";
import { playersCs } from "./components/playersCs";
import { playersDota } from "./components/playersDota";
// import { teams } from "./components/teams";
import { TopPlayersCs, TopPlayersDota } from "./topPlayers";
import { MainNews } from "./mainNews";
import { mainNews } from "./components/mainNews";
import { sliderTeams } from "./components/sliderTeam";
import { Slider } from "./../component/slider";
import { Map,  } from "./team";
import{sumHistory} from "./../cabinet/history";
document.cookie = `balance=${sumHistory}`;
new Header("#wrapper");
new AppSidebar("wrapper", "ГЛАВНАЯ");

new TabsCreate("rating", "news__rating-tabs", [
  ["cs", "CS:GO"],
  ["dota", "DOTA 2"],
]);
new BaseTabs("news__rating-tabs");
new LavaLamp("news__rating-tabs");

const findContent = document.querySelector("#cs-content") as HTMLDivElement;
findContent.innerHTML = ` <div class="rating__cs"></div> `;
const createContent = document.querySelector("#dota-content") as HTMLDivElement;
createContent.innerHTML = ` <div class="rating__dota"></div>`;

type MainType = {
  playerNumber: JQuery<HTMLParagraphElement>;
};

class Main implements MainType {
  playerNumber: JQuery<HTMLParagraphElement>;
  infoTeams: JQuery<HTMLDivElement>;

  constructor() {
    this.playerNumber = $(".news__rating-number") ;
    this.infoTeams =  $('.game__info-teams')
    this.init();
  }

  init() {
    this.bannerSwiper();
    this.tourneySwiper();
    this.renderCard();
    this.renderMainNews();
    this.renderMap();
    this.renderTopPlayersCs();
    this.renderTopPlayersDota();
    this.renderSliderTeams();
    // this.renderTeams();
  }

  bannerSwiper() {
    new Swiper(".banner__swiper", {
      loop: true,
      spaceBetween: 10,
      modules: [Navigation],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        slideChange: (swiperInstance: Swiper) => {
          const prevButton = document.querySelector<HTMLElement>(
            ".swiper-button-prev"
          );
          if (swiperInstance.activeIndex === 0 && prevButton) {
            prevButton.style.display = "none";
          } else if (prevButton) {
            prevButton.style.display = "block";
          }
        },
      },
    });
  }

  tourneySwiper() {
    new Swiper(".tourney__swiper", {
      loop: true,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  async renderCard() {
    try {
      const news = await request(
        "https://battle-star-app.onrender.com/graphql",
        GetPageNewsQuery
      );
      const newsArr = news.cardNews?.data[0]?.attributes?.card ?? "Error";

      if (Array.isArray(newsArr)) {
        const cardArr: any = newsArr.map((card) => ({
          img: card?.img?.data[0].attributes?.url,
          title: card?.title,
          text: card?.text,
          author: card?.autor,
          date: card?.data,
          avatar: card?.avatar?.data[0].attributes?.url,
        }));
        new Card(".card", cardArr);
      } else {
        throw new Error("newsArr is not an array");
      }
    } catch (error) {
      console.error(error);
      new Card(".card", cardNews);
    }
  }
  async renderTopPlayersCs() {
    try {
      const getTopPlayers = await request(
        "https://battle-star-app.onrender.com/graphql",
        GetTopPlayer
      );

      const newsTopPlayers =
        getTopPlayers.topPlayers?.data[0]?.attributes?.cs ?? "Error";
      if (Array.isArray(newsTopPlayers)) {
        const cardArr: any = newsTopPlayers.map((card) => ({
          avatar: card?.avatar?.data[0].attributes?.url,
          nickname: card?.nikcname,
          rating: card?.rating,
          flag: card?.flag,
        }));

        cardArr.sort((a: any, b: any) => b.rating - a.rating);

        new TopPlayersCs(".rating__cs", cardArr[1] );
      } else {
        throw new Error("newsTopPlayers is not an array");
      }
    } catch (error) {
      // console.error(error);
      new TopPlayersCs(".rating__cs", playersCs);
    }
  }
  async renderTopPlayersDota() {
    try {
      const getTopPlayers = await request(
        "https://battle-star-app.onrender.com/graphql",
        GetTopPlayerDota
      );

      const newsTopPlayers =
        getTopPlayers.topPlayers?.data[1]?.attributes?.dota ?? "Error";
      if (Array.isArray(newsTopPlayers)) {
        const cardArr: any = newsTopPlayers.map((card) => ({
          avatar: card?.avatar?.data[0].attributes?.url,
          nickname: card?.nikcname,
          rating: card?.reting,
          flag: card?.flag,
        }));

        cardArr.sort((a: any, b: any) => b.rating - a.rating);
        new TopPlayersDota(".rating__dota", cardArr[0] || cardArr[1]);
      } else {
        throw new Error("newsTopPlayers is not an array");
      }
    } catch (error) {
      // console.error(error);
      new TopPlayersDota(".rating__dota", playersDota);
    }
  }
  async renderMainNews() {
    try {
      const GetMainNews = await request(
        "https://battle-star-app.onrender.com/graphql",
        GetMainNewsQuery
      );
      const newsGetMainNews = GetMainNews.mainNews?.data ?? "Error";

      if (Array.isArray(newsGetMainNews)) {
        const cardArr: any = newsGetMainNews.map((elem) => ({
          img: elem?.attributes?.img?.data[0]?.attributes?.url,
          title: elem?.attributes?.title,
          text: elem?.attributes?.text,
          data: elem?.attributes?.data,
        }));

        new MainNews(".news__info", cardArr);
      } else {
        throw new Error("newsGetMainNews is not an array");
      }
    } catch (error) {
      console.error(error);
      new MainNews(".news__info", mainNews);
    }
  }

  renderSliderTeams() {
    new Slider(".tour", sliderTeams );
  }
  async renderMap() {
    const map = await request(
      "https://battle-star-app.onrender.com/graphql",
      GetMapsQuery
    );

    const newMap = map.maps?.data ?? "Error";

    if (Array.isArray(newMap)) {
      const mapArr = newMap.map((card: any) => {
        return {
          logo: card.attributes.logo.data[0].attributes.url,
          rigthName: "Renegades",
          rigthAva: "https://res.cloudinary.com/dahl2ad8r/image/upload/v1704630354/Renegades_logo_1f48bcedfc.png",
          leftName: "Liquid",
          ava: "https://res.cloudinary.com/dahl2ad8r/image/upload/v1704630354/Team_Liquid_logo_f79b0572cf.png",
        };
      });
      new Map(".game__column", mapArr);
    }
  }

}
new Main();
